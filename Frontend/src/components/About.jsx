import { motion } from 'framer-motion';
import { Cpu, Activity, ShieldCheck, Layers } from 'lucide-react';
import { ABOUT } from '../data/portfolioData';

const ICON_MAP = {
  Cpu,
  Activity,
  ShieldCheck,
  Layers,
};

export default function About() {
  const scrollContent = [...ABOUT.paragraphs, ...ABOUT.scrollStory];

  return (
    <section id="about" className="py-28 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="space-y-8"
          >
            <div>
              <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4 block">{ABOUT.eyebrow}</span>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-5 tracking-tight leading-tight text-foreground">
                {ABOUT.titleLine1} <br />
                <span className="text-primary">{ABOUT.titleHighlight}</span>.
              </h2>
              <p className="text-fg-muted text-lg md:text-xl leading-relaxed">{ABOUT.intro}</p>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-4">
              {ABOUT.stats.map((s) => (
                <div key={s.label}>
                  <h4 className="text-3xl md:text-4xl font-black text-foreground mb-2">{s.value}</h4>
                  <p className="text-xs uppercase tracking-widest text-fg-muted font-bold">{s.label}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-5">
              {ABOUT.pillars.map((pillar) => {
                const Icon = ICON_MAP[pillar.icon];
                return (
                  <div
                    key={pillar.title}
                    className="glass-card p-8 rounded-[2rem] flex flex-col justify-center items-center text-center group"
                  >
                    <Icon className="text-primary mb-4 group-hover:scale-110 transition-transform" size={36} />
                    <h3 className="font-bold text-foreground">{pillar.title}</h3>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">Leia mais</p>
            <div
              className="about-scroll max-h-[min(540px,60vh)] overflow-y-auto pr-3 space-y-5 text-fg-muted text-base md:text-lg leading-relaxed rounded-2xl border border-transparent"
              tabIndex={0}
              aria-label="Texto completo sobre Lucas — role para ler"
            >
              {scrollContent.map((p, idx) => (
                <p key={idx} className="text-foreground/90">
                  {p}
                </p>
              ))}
            </div>
            <p className="text-[11px] text-fg-muted mt-3 opacity-80">Role dentro desta área para saber mais sobre mim.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
