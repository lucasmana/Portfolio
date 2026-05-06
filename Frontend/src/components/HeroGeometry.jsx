import { motion } from 'framer-motion';

/** Linhas geométricas estilo “wireframe” sobre o retrato (referência editorial). */
export default function HeroGeometry({ className = '' }) {
  return (
    <motion.svg
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.2 }}
      aria-hidden
    >
      <g stroke="rgba(255,255,255,0.2)" strokeWidth="0.55">
        <path d="M100 12 L188 96 L100 188 L12 96 Z" />
        <path d="M100 12 L100 188" />
        <path d="M12 96 L188 96" />
        <path d="M52 52 L148 148" />
        <path d="M148 52 L52 148" />
      </g>
      <motion.g
        stroke="rgba(91,103,232,0.6)"
        strokeWidth="0.7"
        initial={{ opacity: 0.35 }}
        animate={{ opacity: [0.35, 0.95, 0.35] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <path d="M100 36 L164 100 L100 164 L36 100 Z" />
        <circle cx="100" cy="100" r="58" strokeDasharray="4 8" />
      </motion.g>
    </motion.svg>
  );
}
