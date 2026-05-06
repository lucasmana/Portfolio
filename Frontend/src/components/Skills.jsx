import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Code2, Globe, Server, Database, Wrench } from 'lucide-react';
import { SKILL_GROUPS, SKILLS_SECTION, SKILLS_LEFT_IMAGE } from '../data/portfolioData';
import { techIconUrl } from '../utils/techIcons';
import { useStickyParallax } from '../hooks/useStickyParallax'; // Importando com novo nome

const GROUP_ICONS = [Globe, Server, Database, Wrench];

function SkillPhotoFrame({ children, className = '' }) {
  return (
    <div className={`rounded-2xl sm:rounded-[1.35rem] p-px bg-gradient-to-br from-primary via-violet-500 to-primary shadow-[0_0_52px_-14px_rgba(91,103,232,0.55)] ${className}`}>
      <div className="rounded-[15px] sm:rounded-[1.25rem] overflow-hidden bg-black/10 aspect-[4/5] sm:min-h-[300px] max-h-[min(72vh,620px)]">
        {children}
      </div>
    </div>
  );
}

function TechTile({ name }) {
  const [broken, setBroken] = useState(false);
  return (
    <div className="rounded-xl border border-primary/40 bg-primary/[0.08] px-2 py-4 sm:py-5 flex flex-col items-center justify-center gap-2 sm:gap-3 shadow-[0_0_28px_-10px_rgba(91,103,232,0.45)] hover:shadow-[0_0_36px_-6px_rgba(91,103,232,0.6)] hover:border-primary/60 transition-all duration-300 min-h-[100px] sm:min-h-[112px]">
      {!broken ? (
        <div className="relative h-8 w-8 sm:h-10 sm:w-10 flex items-center justify-center">
          <img
            src={techIconUrl(name)}
            alt=""
            className="h-full w-full object-contain absolute"
            style={{ filter: 'brightness(0) saturate(100%) invert(27%) sepia(51%) saturate(2878%) hue-rotate(239deg) brightness(96%) contrast(97%)' }}
            onError={() => setBroken(true)}
          />
        </div>
      ) : (
        <Code2 className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />
      )}
      <span className="text-[10px] sm:text-xs font-bold text-center text-foreground leading-tight px-1">{name}</span>
    </div>
  );
}

export default function Skills() {
  const n = SKILL_GROUPS.length;
  const { 
    activeIndex, 
    setSectionRef, 
    imageRef, 
    setContainerRef, // Conectado à section principal
    isSticky, 
    isAtBottom 
  } = useStickyParallax(n);

  const activeGroup = SKILL_GROUPS[activeIndex] || SKILL_GROUPS[0];
  const coverSrc = activeGroup.coverImage || SKILLS_LEFT_IMAGE;

  return (
    <section 
      id="skills" 
      ref={setContainerRef}
      className="relative py-24 md:py-32 px-5 sm:px-6 bg-[var(--color-bg)]"
    >
      <div className="max-w-7xl mx-auto">
        <header className="mb-14 md:mb-16 max-w-2xl">
          <span className="text-primary font-bold tracking-[0.25em] uppercase text-xs mb-3 block">{SKILLS_SECTION.eyebrow}</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter text-gradient-strong leading-[0.98] mb-4">
            {SKILLS_SECTION.title}
          </h2>
          <p className="text-fg-muted text-sm sm:text-base leading-relaxed max-w-xl border-l-2 border-primary/35 pl-4">
            {SKILLS_SECTION.lead}
          </p>
        </header>

        <div className="grid lg:grid-cols-2 lg:gap-16 xl:gap-20 items-start relative">
          
          {/* COLUNA ESQUERDA (IMAGEM) */}
          <div className="hidden lg:block h-full relative">
            <div 
              ref={imageRef}
              style={{
                position: isAtBottom ? 'absolute' : (isSticky ? 'fixed' : 'relative'),
                bottom: isAtBottom ? '0px' : 'auto',
                top: isAtBottom ? 'auto' : (isSticky ? '112px' : '0px'),
                
                // Transição suave requisitada
                transition: 'all 0.7s cubic-bezier(0.22, 1, 0.36, 1)',
                
                width: isSticky && !isAtBottom ? 'calc((100vw - (100vw - 1280px)) / 2 - 4rem)' : '100%',
                maxWidth: '420px',
                zIndex: 40,
                willChange: 'transform, top, position'
              }}
            >
              <SkillPhotoFrame className="w-full">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={coverSrc}
                    src={coverSrc}
                    alt={activeGroup.title}
                    initial={{ opacity: 0, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, filter: 'blur(10px)' }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full object-cover object-center"
                  />
                </AnimatePresence>
              </SkillPhotoFrame>
            </div>
          </div>

          {/* COLUNA DIREITA (CONTEÚDO) */}
          <div className="space-y-32 pb-20">
            {SKILL_GROUPS.map((group, i) => {
              const Icon = GROUP_ICONS[i] ?? Globe;
              return (
                <article
                  key={group.title}
                  ref={setSectionRef(i)}
                  className="scroll-mt-32 border-b border-[color:var(--color-border)]/60 pb-24 last:border-0 last:pb-0"
                >
                  <div className="flex items-center gap-4 mb-10">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shadow-[0_0_20px_rgba(91,103,232,0.1)]">
                      <Icon size={28} />
                    </div>
                    <h3 className="text-3xl md:text-4xl font-black text-foreground tracking-tight">
                      {group.title}
                    </h3>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {group.items.map((name) => (
                      <TechTile key={`${group.title}-${name}`} name={name} />
                    ))}
                  </div>
                </article>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}