import { motion } from 'framer-motion';
import { ArrowRight, Download, ChevronDown } from 'lucide-react';
import { HERO } from '../data/portfolioData';
import { scrollToSection } from '../utils/scroll';
import { useStickyOnScroll } from '../hooks/useStickyOnScroll';

export default function Hero() {
  const { isSticky, navHeight } = useStickyOnScroll('projects', 100);
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-28 pb-20 overflow-hidden text-center">
      <div className="absolute inset-0 bg-neural-gradient opacity-40 pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75 }}
        className="relative z-10 max-w-3xl mx-auto flex flex-col items-center"
      >
        <div 
          className={`mb-8 relative transition-all duration-300 ${isSticky ? 'fixed left-1/2 -translate-x-1/2 z-40 scale-75 md:scale-100' : ''}`}
          style={isSticky ? { top: `${navHeight + 20}px` } : {}}
        >
          <motion.div 
            className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden group"
            animate={isSticky ? { scale: [1, 1.05, 1] } : {}}
            transition={isSticky ? { repeat: Infinity, duration: 3 } : {}}
          >
            <img
              src={HERO.avatarUrl}
              alt={HERO.avatarAlt}
              fetchPriority="high"
              className="relative z-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>
          <motion.div
            animate={{ scale: [1, 1.12, 1], opacity: [0.65, 1, 0.65] }}
            transition={{ repeat: Infinity, duration: 2.2 }}
            className="absolute bottom-3 right-3 w-9 h-9 bg-emerald-500 border-[3px] border-[var(--color-bg)] rounded-full shadow-lg"
            aria-hidden
          />
        </div>

        <p className="text-primary font-semibold tracking-[0.28em] uppercase text-xs md:text-sm mb-3">
          {HERO.greeting}{' '}
          <span className="text-foreground tracking-normal normal-case font-bold">— {HERO.name}</span>
        </p>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 leading-[0.92] bg-gradient-to-r from-white to-[rgb(91_103_232)] bg-clip-text text-transparent light:text-[rgb(91_103_232)] light:bg-transparent">
          {HERO.headline[0]} <br />
          {HERO.headline[1]}
        </h1>

        <p className="text-fg-muted text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
          {HERO.subtitle}
        </p>

        <div className="flex flex-wrap justify-center gap-4 border-0">
          <button
            type="button"
            onClick={() => scrollToSection('contact')}
            className="px-9 py-4 md:px-10 md:py-5 bg-primary text-[var(--color-accent-contrast)] rounded-full font-bold transition-all transform hover:scale-[1.03] active:scale-95 flex items-center gap-3"
          >
            Iniciar Projeto <ArrowRight size={20} />
          </button>
          <a
            href={HERO.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-9 py-4 md:px-10 md:py-5 rounded-full font-bold bg-transparent hover:bg-[var(--color-bg-elevated)] transition-all flex items-center gap-3 backdrop-blur-md text-foreground"
          >
            <Download size={20} /> Currículo
          </a>
          <button
            type="button"
            onClick={() => scrollToSection('projects')}
            className="px-9 py-4 md:px-10 md:py-5 rounded-full font-bold text-fg-muted hover:text-foreground transition-all hidden sm:flex items-center gap-2"
          >
            Ver projetos
          </button>
        </div>
      </motion.div>

      <motion.button
        type="button"
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-fg-muted hover:text-primary transition-colors z-10"
        aria-label="Ir para Sobre"
        onClick={() => scrollToSection('about')}
      >
        <ChevronDown size={32} />
      </motion.button>
    </section>
  );
}
