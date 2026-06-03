import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { scrollToSection } from '../utils/scroll';

export default function Navigation({ navLinks, activeSection, isMenuOpen, setIsMenuOpen }) {
  return (
    <nav className="fixed top-0 left-0 w-full z-[100] px-4 sm:px-6 py-5 flex items-center justify-between gap-4 bg-[color:var(--color-bg)]/80 backdrop-blur-xl">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-xl font-bold tracking-tighter shrink-0 text-foreground"
      >
        LUCAS<span className="text-primary">.DEV</span>
      </motion.div>

      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8">
        {navLinks.map((link) => (
          <button
            key={link.id}
            type="button"
            onClick={() => scrollToSection(link.id)}
            className={`text-sm font-medium transition-all hover:text-primary relative py-1 ${
              activeSection === link.id ? 'text-primary' : 'text-fg-muted'
            }`}
          >
            {link.name}
            {activeSection === link.id && (
              <motion.div layoutId="nav-underline" className="absolute bottom-0 left-0 w-full h-0.5 bg-primary" />
            )}
          </button>
        ))}
      </div>

      <div className="flex items-center justify-end gap-2 shrink-0">
        <button
          type="button"
          className="md:hidden text-fg-muted p-2"
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </nav>
  );
}
