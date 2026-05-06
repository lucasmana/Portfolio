import { useState, useEffect, useRef, useCallback } from 'react';

/**
 * Qual seção está “ativa” com base na proximidade do centro da viewport.
 * Útil para trocar imagem fixa enquanto o texto rola em coluna.
 */
export function useScrollSpySection(sectionCount) {
  const refs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const setSectionRef = useCallback((index) => (element) => {
    refs.current[index] = element;
  }, []);

  useEffect(() => {
    const anchorY = () => window.innerHeight * 0.38;

    const update = () => {
      const y = anchorY();
      let best = 0;
      let bestDist = Infinity;

      for (let i = 0; i < sectionCount; i++) {
        const el = refs.current[i];
        if (!el) continue;
        const r = el.getBoundingClientRect();
        if (r.bottom < 80 || r.top > window.innerHeight - 80) continue;
        const mid = (r.top + r.bottom) / 2;
        const d = Math.abs(mid - y);
        if (d < bestDist) {
          bestDist = d;
          best = i;
        }
      }

      if (bestDist === Infinity) {
        const first = refs.current[0];
        const last = refs.current[sectionCount - 1];
        if (first?.getBoundingClientRect().top > y) best = 0;
        else if (last?.getBoundingClientRect().bottom < y) best = sectionCount - 1;
      }

      setActiveIndex((prev) => (prev !== best ? best : prev));
    };

    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    update();
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [sectionCount]);

  return { activeIndex, setSectionRef };
}
