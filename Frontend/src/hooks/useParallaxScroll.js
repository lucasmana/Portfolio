import { useState, useRef, useEffect } from 'react';

export function useParallaxScroll(sectionCount) {
  const sectionRefs = useRef([]);
  const imageRef = useRef(null);
  const containerRef = useRef(null);
  
  const [activeIndex, setActiveIndex] = useState(0);
  const [isSticky, setIsSticky] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);

  const setSectionRef = (i) => (el) => { sectionRefs.current[i] = el; };
  const setContainerRef = (el) => { containerRef.current = el; };

  useEffect(() => {
    const handleScroll = () => {
      const sections = sectionRefs.current.filter(Boolean);
      if (!sections.length || !imageRef.current) return;

      const firstRect = sections[0].getBoundingClientRect();
      const lastRect = sections[sections.length - 1].getBoundingClientRect();
      const imageHeight = imageRef.current.offsetHeight;
      
      const TOP_OFFSET = 112;

      // Determinamos os estados com uma pequena zona de transição
      const shouldBeSticky = firstRect.top <= TOP_OFFSET && lastRect.bottom >= (TOP_OFFSET + imageHeight);
      const reachedBottom = lastRect.bottom < (TOP_OFFSET + imageHeight);

      setIsSticky(shouldBeSticky);
      setIsAtBottom(reachedBottom);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth positioning system
  useEffect(() => {
    const img = imageRef.current;
    const container = containerRef.current;
    if (!img || !container) return;

    const LERP = 0.1; // Smoothness factor
    const TOP_OFFSET = 112;

    let currentY = 0;
    let targetY = 0;
    let rafId = null;

    const getTargetPosition = () => {
      const sections = sectionRefs.current.filter(Boolean);
      if (!sections.length) return { y: 0, position: 'relative' };

      const imgH = img.offsetHeight;
      const containerRect = container.getBoundingClientRect();
      const firstRect = sections[0].getBoundingClientRect();
      const lastRect = sections[sections.length - 1].getBoundingClientRect();

      // Calculate natural position (where it would be without sticky)
      const naturalY = containerRect.top;

      // Phase 1: Before sticky - follow container
      if (firstRect.top > TOP_OFFSET) {
        return { y: naturalY, position: 'relative' };
      }

      // Phase 3: After sticky - follow last section
      if (lastRect.bottom < TOP_OFFSET + imgH) {
        return { y: lastRect.bottom - imgH, position: 'absolute' };
      }

      // Phase 2: Sticky - fixed at top
      return { y: TOP_OFFSET, position: 'fixed' };
    };

    const tick = () => {
      const target = getTargetPosition();
      targetY = target.y;
      const diff = targetY - currentY;

      // Smooth interpolation
      if (Math.abs(diff) < 0.5) {
        currentY = targetY;
      } else {
        currentY += diff * LERP;
      }

      // Apply styles based on position type
      const containerRect = container.getBoundingClientRect();
      
      if (target.position === 'fixed') {
        img.style.position = 'fixed';
        img.style.top = `${currentY}px`;
        img.style.left = `${containerRect.left}px`;
        img.style.width = `${containerRect.width}px`;
        img.style.bottom = 'auto';
      } else if (target.position === 'absolute') {
        img.style.position = 'absolute';
        img.style.top = 'auto';
        img.style.bottom = '0px';
        img.style.left = '0px';
        img.style.width = '100%';
        img.style.transform = 'none';
      } else {
        img.style.position = 'relative';
        img.style.top = '0px';
        img.style.left = '0px';
        img.style.width = '100%';
        img.style.bottom = 'auto';
        img.style.transform = 'none';
      }

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [sectionCount]);

  // Observer para os índices
  useEffect(() => {
    const sections = sectionRefs.current.filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = sections.indexOf(entry.target);
            if (idx !== -1) setActiveIndex(idx);
          }
        });
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: 0 }
    );
    sections.forEach(s => observer.observe(s));
    return () => observer.disconnect();
  }, [sectionCount]);

  return { activeIndex, setSectionRef, imageRef, setContainerRef, isSticky, isAtBottom };
}