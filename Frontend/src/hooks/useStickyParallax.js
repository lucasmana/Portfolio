import { useState, useRef, useEffect, useCallback } from 'react';

export function useStickyParallax(sectionCount) {
  const sectionRefs = useRef([]);
  const imageRef = useRef(null);
  const containerRef = useRef(null);
  
  const [activeIndex, setActiveIndex] = useState(0);
  const [isSticky, setIsSticky] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [imageHeight, setImageHeight] = useState(0);

  const setSectionRef = useCallback((i) => (el) => {
    sectionRefs.current[i] = el;
  }, []);

  const setContainerRef = useCallback((el) => {
    containerRef.current = el;
  }, []);

  useEffect(() => {
    if (imageRef.current) {
      setImageHeight(imageRef.current.offsetHeight);
    }
  }, []);

  // Observer para sincronizar a imagem com o grupo de skills alinhado
  useEffect(() => {
    const sections = sectionRefs.current.filter(Boolean);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = sections.indexOf(entry.target);
            if (idx !== -1) setActiveIndex(idx);
          }
        });
      },
      // Ajuste fino para skills: troca quando o título do grupo chega perto do topo
      { rootMargin: '-20% 0px -60% 0px', threshold: 0 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sectionCount]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = sectionRefs.current.filter(Boolean);
      if (!sections.length || !imageHeight) return;

      const firstSection = sections[0];
      const lastSection = sections[sections.length - 1];
      
      const firstRect = firstSection.getBoundingClientRect();
      const lastRect = lastSection.getBoundingClientRect();
      
      const TOP_OFFSET = 112; 

      // Lógica de flutuação suave
      const shouldBeSticky = firstRect.top <= TOP_OFFSET && lastRect.bottom >= (TOP_OFFSET + imageHeight);
      const reachedBottom = lastRect.bottom < (TOP_OFFSET + imageHeight);

      setIsSticky(shouldBeSticky);
      setIsAtBottom(reachedBottom);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [imageHeight]);

  return { 
    activeIndex, 
    setSectionRef, 
    imageRef, 
    setContainerRef,
    isSticky,
    isAtBottom
  };
}