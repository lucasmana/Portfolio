import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { useRef } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { useParallaxScroll } from '../hooks/useParallaxScroll';

// Sub-componente da Moldura para manter o código limpo
function ProjectPhotoFrame({ children, className = '' }) {
  return (
    <div className={`rounded-2xl sm:rounded-[1.35rem] p-px bg-gradient-to-br from-primary via-violet-500 to-primary shadow-[0_0_52px_-14px_rgba(91,103,232,0.55)] ${className}`}>
      <div className="rounded-[15px] sm:rounded-[1.25rem] overflow-hidden bg-black/10 aspect-[16/10] sm:aspect-[16/9] sm:min-h-[280px]">
        {children}
      </div>
    </div>
  );
}

export default function Projects() {
  const count = PROJECTS.length;
  const projectsSectionRef = useRef(null);
  const { 
    activeIndex, 
    setSectionRef, 
    imageRef, 
    isSticky,
    isAtBottom 
  } = useParallaxScroll(count);

  const active = PROJECTS[activeIndex] || PROJECTS[0];

  return (
    <section 
      id="projects" 
      ref={projectsSectionRef} 
      className="relative py-24 md:py-32 px-5 sm:px-6 bg-[var(--color-bg)]"
    >
      <div className="max-w-7xl mx-auto">
        <header className="mb-14 md:mb-20 max-w-2xl">
          <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-3 block">Portfólio</span>
          <h2 className="text-4xl md:text-6xl font-black text-foreground tracking-tight">Projetos.</h2>
        </header>

        <div className="grid lg:grid-cols-2 lg:gap-16 xl:gap-20 items-start relative">
          
          {/* COLUNA ESQUERDA: QUADRO DE IMAGEM */}
          <div className="hidden lg:block h-full relative min-h-screen">
            <div 
              ref={imageRef}
              className="will-change-transform" 
              style={{
                /* Troca dinâmica de posicionamento */
                position: isAtBottom ? 'absolute' : (isSticky ? 'fixed' : 'relative'),
                bottom: isAtBottom ? '0px' : 'auto',
                top: isAtBottom ? 'auto' : (isSticky ? '112px' : '0px'),
                
                /* Herda a largura da coluna da grid para evitar o 'pulo' visual */
                width: isSticky && !isAtBottom ? 'inherit' : '100%',
                maxWidth: '540px', 
                
                /* Transição ultra suave com cubic-bezier */
                transition: 'top 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.4s ease',
                zIndex: 40,
              }}
            >
              <ProjectPhotoFrame className="w-full">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={active.image}
                    src={active.image}
                    alt={active.title}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>
              </ProjectPhotoFrame>
              
              <div className="mt-4 text-center">
                <p className="text-xs font-black text-primary uppercase tracking-[0.2em] mb-1">
                  {active.category}
                </p>
                <p className="text-sm font-bold text-fg-muted uppercase tracking-widest">
                  {active.title}
                </p>
              </div>
            </div>
          </div>

          {/* COLUNA DIREITA: DESCRIÇÕES */}
          <div className="space-y-40 md:space-y-64 pb-20">
            {PROJECTS.map((project, i) => (
              <article
                key={project.title}
                ref={setSectionRef(i)}
                className="scroll-mt-32 border-b border-[color:var(--color-border)]/60 pb-32 last:border-0 last:pb-0"
              >
                <span className="text-primary text-[10px] font-black uppercase tracking-[0.2em]">{project.category}</span>
                <h3 className="text-3xl md:text-5xl font-black text-foreground mt-3 tracking-tight">
                  {project.title}
                </h3>
                <p className="text-fg-muted text-lg leading-relaxed mt-5 max-w-xl">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-6">
                  {project.techs.map((tech) => (
                    <span key={tech} className="text-[11px] px-3 py-1.5 bg-[var(--glass-bg)] border border-[color:var(--color-border)] rounded-full font-bold uppercase tracking-wider text-foreground">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 mt-8">
                  <a href={project.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-black text-primary uppercase tracking-widest hover:translate-x-1 transition-transform">
                    Ver projeto <Plus size={14} />
                  </a>
                </div>
              </article>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}