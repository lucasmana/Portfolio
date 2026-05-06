import { CONTACT, FOOTER_TAGLINE } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="py-20 px-6 border-t border-[color:var(--color-border)] bg-[var(--color-bg)]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-center md:text-left">
            <h4 className="text-2xl font-black tracking-tighter mb-4 text-foreground">
              LUCAS<span className="text-primary">.DEV</span>
            </h4>
            <p className="text-fg-muted max-w-xs leading-relaxed">{FOOTER_TAGLINE}</p>
          </div>

          <div className="flex gap-12 text-sm font-bold uppercase tracking-widest text-fg-muted">
            {CONTACT.socials.map((s) => (
              <a key={s.id} href={s.url} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-20 pt-10 border-t border-[color:var(--color-border)] text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-fg-muted text-[10px] uppercase tracking-[0.3em]">© 2026 Lucas Manassés • Todos os direitos reservados.</p>
          <div className="flex gap-4 items-center">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden />
            <p className="text-fg-muted text-[10px] uppercase tracking-[0.3em]">Sistemas Operantes</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
