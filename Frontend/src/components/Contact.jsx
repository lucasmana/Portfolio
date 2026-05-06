import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send } from 'lucide-react';
import { CONTACT } from '../data/portfolioData';
import { BrandGitHub, BrandInstagram, BrandLinkedIn } from './BrandIcon';

const SOCIAL_ICON = {
  linkedin: BrandLinkedIn,
  github: BrandGitHub,
  instagram: BrandInstagram,
};

export default function Contact({ showToast }) {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      showToast('success', 'Mensagem registrada! Lucas entrará em contato em breve.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch {
      showToast('error', 'Ocorreu um erro. Tente novamente mais tarde.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-24">
          <div>
            <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Fale Comigo</span>
            <h2 className="text-6xl md:text-8xl font-black mb-10 tracking-tighter leading-[0.8] text-foreground">
              Vamos Conversar?<br />
            
            </h2>
            <p className="text-fg-muted text-2xl mb-16 max-w-md leading-relaxed">
              Transforme sua visão em uma plataforma robusta. Mande o sinal.
            </p>

            <div className="space-y-10">
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-8 group cursor-pointer"
              >
                <div className="w-16 h-16 glass-card rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-[var(--color-accent-contrast)] transition-all duration-500">
                  <Mail size={28} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-fg-muted mb-1">Email Direto</p>
                  <p className="text-xl font-bold text-foreground">{CONTACT.email}</p>
                </div>
              </a>
              <a href="https://wa.me/5581984950823" target="_blank" rel="noopener noreferrer" className="flex items-center gap-8 group cursor-pointer">
                <div className="w-16 h-16 glass-card rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-[var(--color-accent-contrast)] transition-all duration-500">
                  <Phone size={28} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-fg-muted mb-1">WhatsApp</p>
                  <p className="text-xl font-bold text-foreground">{CONTACT.phone}</p>
                </div>
              </a>
            </div>

            <div className="flex gap-6 mt-20">
              {CONTACT.socials.map((social) => {
                const Icon = SOCIAL_ICON[social.id];
                return (
                  <a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-16 h-16 glass-card rounded-2xl flex items-center justify-center hover:text-primary hover:border-primary/50 transition-all duration-500 hover:-translate-y-2"
                  >
                    {Icon ? <Icon size={24} /> : null}
                  </a>
                );
              })}
            </div>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
            <form onSubmit={handleSubmit} className="glass-card p-12 md:p-16 rounded-[4rem] space-y-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] -z-10" />

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label htmlFor="contact-name" className="text-[10px] font-black uppercase tracking-[0.2em] text-fg-muted ml-4">
                    Quem é você?
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="Nome Completo"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[var(--glass-bg)] border border-[color:var(--color-border)] text-foreground rounded-3xl px-8 py-5 focus:outline-none focus:border-primary transition-all placeholder:text-fg-muted/70"
                  />
                </div>
                <div className="space-y-3">
                  <label htmlFor="contact-email" className="text-[10px] font-black uppercase tracking-[0.2em] text-fg-muted ml-4">
                    Onde te encontro?
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="Email Profissional"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[var(--glass-bg)] border border-[color:var(--color-border)] text-foreground rounded-3xl px-8 py-5 focus:outline-none focus:border-primary transition-all placeholder:text-fg-muted/70"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label htmlFor="contact-subject" className="text-[10px] font-black uppercase tracking-[0.2em] text-fg-muted ml-4">
                  Qual o desafio?
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  required
                  placeholder="Assunto da Mensagem"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-[var(--glass-bg)] border border-[color:var(--color-border)] text-foreground rounded-3xl px-8 py-5 focus:outline-none focus:border-primary transition-all placeholder:text-fg-muted/70"
                />
              </div>

              <div className="space-y-3">
                <label htmlFor="contact-message" className="text-[10px] font-black uppercase tracking-[0.2em] text-fg-muted ml-4">
                  Detalhes da Missão
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  required
                  placeholder="Como posso ajudar a levar seu projeto ao próximo nível?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[var(--glass-bg)] border border-[color:var(--color-border)] text-foreground rounded-3xl px-8 py-5 focus:outline-none focus:border-primary transition-all resize-none placeholder:text-fg-muted/70"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-[var(--color-accent-contrast)] hover:opacity-90 py-6 rounded-3xl font-black uppercase tracking-[0.2em] text-sm transition-all transform hover:scale-[1.02] active:scale-95 flex justify-center items-center gap-4 disabled:opacity-50 shadow-2xl shadow-primary/30"
              >
                {isSubmitting ? 'Enviando...' : (
                  <>
                    <Send size={20} /> Enviar Mensagem
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
