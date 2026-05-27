import { motion } from 'framer-motion';

export default function Astronauta() {
  return (
    <motion.div
      className="fixed z-10 pointer-events-none opacity-40"
      initial={{ x: -100, y: window.innerHeight / 2, rotate: -10 }}
      animate={{
        x: [window.innerWidth + 100, -100],
        y: [window.innerHeight * 0.3, window.innerHeight * 0.7, window.innerHeight * 0.3],
        rotate: [-10, 10, -10],
      }}
      transition={{
        x: {
          duration: 120,
          repeat: Infinity,
          ease: "linear",
        },
        y: {
          duration: 40,
          repeat: Infinity,
          ease: "easeInOut",
        },
        rotate: {
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      style={{
        width: '120px',
        height: 'auto',
      }}
    >
      <img
        src="/astronauta1.png"
        alt="Astronauta"
        className="w-full h-full object-contain"
      />
    </motion.div>
  );
}
