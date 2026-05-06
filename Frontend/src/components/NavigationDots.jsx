import { motion } from 'framer-motion';
import { NAV_LINKS } from '../data/portfolioData';
import { useActiveSection } from '../hooks/useActiveSection';

export default function NavigationDots() {
  const activeSection = useActiveSection();

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
      <div className="flex flex-col gap-3">
        {NAV_LINKS.map((link) => (
          <motion.button
            key={link.id}
            onClick={() => document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' })}
            className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
              activeSection === link.id 
                ? 'bg-primary scale-125' 
                : 'bg-white/30 hover:bg-white/50'
            }`}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>
    </div>
  );
}
