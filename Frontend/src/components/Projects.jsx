import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { useRef } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { useParallaxScroll } from '../hooks/useParallaxScroll';

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
  
  // Mantemos o hook para gerenciar o activeIndex e o containerRef
  const { 
    activeIndex, 
    setSectionRef, 
    setContainerRef 
  } = useParallaxScroll(count);

  const active = PROJECTS[activeIndex] || PROJECTS[0];

  return (
    <section 
      id="projects" 
      ref={projectsSectionRef} 
      className="relative py-24 md:py-32 px-5 sm:px-6 bg-[var(--color-bg)]"
    >
      <div className="max-w-7xl mx-auto" ref={setContainerRef}>
        <header className="mb-14 md:mb-20 max-w-4xl">
          <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-3 block">
            Projetos
          </span>
          <h2 className="text-6xl md:text-[85px] font-bold text-white leading-[0.95] tracking-[-0.02em]" style={{ color: 'var(--light)' }}>
            Código que <br /> conecta
          </h2>
          <h2 className="text-6xl md:text-[85px] font-bold text-[#5865F2] leading-[0.95] tracking-[-0.02em]">
            ponta a ponta<span className="text-white">.</span>
          </h2>
        </header>

        <div className="grid lg:grid-cols-2 lg:gap-16 xl:gap-20 items-start relative">
          
          {/* COLUNA ESQUERDA: QUADRO DE IMAGEM - DESKTOP */}
          <div className="hidden lg:block h-full relative">
            <div 
              className="sticky top-28 will-change-transform transition-all duration-700 ease-in-out" 
              style={{
                alignSelf: 'start',
                width: '100%',
                maxWidth: '540px', 
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
              
              <div className="mt-6 text-center">
                <motion.div
                  key={active.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-xs font-black text-primary uppercase tracking-[0.2em] mb-1">
                    {active.category}
                  </p>
                  <p className="text-sm font-bold text-white/60 uppercase tracking-widest">
                    {active.title}
                  </p>
                </motion.div>
              </div>
            </div>
          </div>

          {/* COLUNA DIREITA: DESCRIÇÕES - DESKTOP */}
          <div className="hidden lg:block space-y-40 md:space-y-64 pb-20">
            {PROJECTS.map((project, i) => (
              <article
                key={project.title}
                ref={setSectionRef(i)}
                className="scroll-mt-32 border-b border-white/10 pb-32 last:border-0 last:pb-0"
              >
                <span className="text-primary text-[10px] font-black uppercase tracking-[0.2em]">
                  {project.category}
                </span>
                <h3 className="text-3xl md:text-5xl font-black text-white mt-3 tracking-tight" style={{ color: 'var(--light)' }}>
                  {project.title}
                </h3>
                <p className="text-white/60 text-lg leading-relaxed mt-5 max-w-xl" style={{ color: 'var(--light)', opacity: 0.8 }}>
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-6">
                  {project.techs.map((tech) => (
                    <span key={tech} className="text-[11px] px-3 py-1.5 bg-white/5 border border-white/10 rounded-full font-bold uppercase tracking-wider text-white" style={{ 
                      backgroundColor: 'var(--light-purple)', 
                      borderColor: 'var(--primary)', 
                      color: 'var(--primary)' 
                    }}>
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

        {/* VERSÃO MOBILE: IMAGEM ACIMA DA DESCRIÇÃO */}
        <div className="lg:hidden space-y-12 pb-20">
          {PROJECTS.map((project, i) => (
            <article key={project.title} className="space-y-6">
              {/* IMAGEM DO PROJETO */}
              <div className="w-full">
                <ProjectPhotoFrame className="w-full">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </ProjectPhotoFrame>
              </div>
              
              {/* DESCRIÇÃO DO PROJETO */}
              <div className="space-y-4">
                <span className="text-primary text-[10px] font-black uppercase tracking-[0.2em]">
                  {project.category}
                </span>
                <h3 className="text-2xl font-black text-white tracking-tight" style={{ color: 'var(--light)' }}>
                  {project.title}
                </h3>
                <p className="text-white/60 text-base leading-relaxed" style={{ color: 'var(--light)', opacity: 0.8 }}>
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.techs.map((tech) => (
                    <span key={tech} className="text-[10px] px-2 py-1 bg-white/5 border border-white/10 rounded-full font-bold uppercase tracking-wider text-white" style={{ 
                      backgroundColor: 'var(--light-purple)', 
                      borderColor: 'var(--primary)', 
                      color: 'var(--primary)' 
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <a href={project.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-xs font-black text-primary uppercase tracking-widest">
                    Ver projeto <Plus size={12} />
                  </a>
                </div>
              </div>
            </article>
          ))}

        </div>
      </div>
    </section>
  );
}