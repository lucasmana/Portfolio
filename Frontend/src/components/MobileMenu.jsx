import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { scrollToSection } from '../utils/scroll';

export default function MobileMenu({ navLinks, isMenuOpen, setIsMenuOpen }) {
  return (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-0 z-[60] bg-[var(--color-bg)] flex flex-col items-center justify-center gap-12 text-5xl font-black tracking-tighter text-foreground"
        >
          {navLinks.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => {
                scrollToSection(link.id);
                setIsMenuOpen(false);
              }}
              className="hover:text-primary transition-all hover:scale-110 active:scale-90"
            >
              {link.name}
            </button>
          ))}
          <button
            type="button"
            onClick={() => setIsMenuOpen(false)}
            className="mt-12 w-16 h-16 glass-card rounded-full flex items-center justify-center text-primary"
            aria-label="Fechar"
          >
            <X size={32} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
