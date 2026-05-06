import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === 'light';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="flex items-center gap-2 rounded-full border border-[color:var(--color-border)] bg-[var(--glass-bg)] px-3 py-2 text-sm font-semibold text-foreground backdrop-blur-md transition-all hover:border-primary/40 hover:shadow-[0_0_20px_-4px_rgba(91,103,232,0.45)]"
      aria-label={isLight ? 'Ativar modo escuro' : 'Ativar modo claro'}
      title={
        isLight
          ? 'Modo escuro (branco · roxo · preto padrão)'
          : 'Modo claro: branco vira roxo, roxo vira preto, preto vira branco'
      }
    >
      {isLight ? <Moon size={18} /> : <Sun size={18} />}
      <span className="hidden sm:inline">{isLight ? 'Escuro' : 'Claro'}</span>
    </button>
  );
}
