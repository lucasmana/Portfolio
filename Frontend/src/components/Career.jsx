import { motion } from 'framer-motion';
import { Laptop, CalendarDays, MapPin } from 'lucide-react';
import { CAREER } from '../data/portfolioData';

export default function Career() {
  return (
    <section id="career" className="relative py-24 md:py-32 px-5 sm:px-6 bg-[var(--color-bg)]">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16 md:mb-20 max-w-3xl">
          <span className="text-primary font-bold tracking-[0.25em] uppercase text-xs mb-3 block">
            {CAREER.eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter text-gradient-strong leading-[0.98] mb-6">
            {CAREER.title}
          </h2>
          <p className="text-fg-muted text-lg leading-relaxed max-w-2xl border-l-2 border-primary/35 pl-4">
            {CAREER.subtitle}
          </p>
        </header>

        <div className="space-y-24 md:space-y-32">
          {CAREER.experiences.map((experience, index) => (
            <motion.article
              key={`${experience.company}-${index}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="group relative rounded-2xl p-px bg-gradient-to-br from-primary via-violet-500 to-primary shadow-[0_0_52px_-14px_rgba(91,103,232,0.55)] hover:shadow-[0_0_64px_-12px_rgba(91,103,232,0.65)] transition-all duration-500">
                <div className="rounded-[15px] sm:rounded-[1.25rem] overflow-hidden bg-black p-8 md:p-10 light:bg-[#f3f0ff]">
                
                  {/* Cabeçalho da experiência */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 pb-6 border-b border-[color:var(--color-border)]/60">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary shadow-[0_0_20px_rgba(91,103,232,0.1)]">
                        <Laptop size={24} />
                      </div>
                      <div>
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground tracking-tight mb-2">
                          {experience.title}
                        </h3>
                        <div className="flex items-center gap-3 text-sm text-fg-muted">
                          <span className="font-bold uppercase tracking-wider text-primary">{experience.company}</span>
                          <span className="text-fg-muted">•</span>
                          <span className="flex items-center gap-1">
                            <MapPin size={14} className="text-primary" />
                            {experience.location}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-2 text-sm text-fg-muted mb-1">
                        <CalendarDays size={14} className="text-primary" />
                      </div>
                      <span className="inline-block px-4 py-2 bg-primary/[0.08] border border-primary/30 rounded-full text-sm font-black uppercase tracking-wider text-primary light:bg-[#f3f0ff] light:border-primary/50">
                        {experience.period}
                      </span>
                    </div>
                  </div>

                  {/* Descrição */}
                  <p className="text-fg-muted text-base sm:text-lg leading-relaxed mb-8 max-w-4xl">
                    {experience.description}
                  </p>

                  {/* Skills ou Tecnologias */}
                  {experience.skills && (
                    <div>
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <h4 className="text-lg font-black text-foreground">Áreas de estudo:</h4>
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
                        {experience.skills.map((skill, skillIndex) => (
                          <div
                            key={skillIndex}
                            className="rounded-lg border border-primary/40 bg-primary/[0.08] px-2 py-2 flex items-center justify-center shadow-[0_0_28px_-10px_rgba(91,103,232,0.45)] hover:shadow-[0_0_36px_-6px_rgba(91,103,232,0.6)] hover:border-primary/60 transition-all duration-300 light:bg-[#f3f0ff] light:border-primary/50"
                          >
                            <span className="text-[10px] sm:text-xs font-bold text-center text-foreground leading-tight">{skill}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {experience.technologies && (
                    <div>
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <h4 className="text-lg font-black text-foreground">Tecnologias utilizadas:</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="rounded-xl border border-primary/40 bg-primary/[0.08] px-3 py-2 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-foreground shadow-[0_0_28px_-10px_rgba(91,103,232,0.45)] hover:shadow-[0_0_36px_-6px_rgba(91,103,232,0.6)] hover:border-primary/60 transition-all duration-300 light:bg-[#f3f0ff] light:border-primary/50"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
