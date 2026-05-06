import { useState, useEffect, useRef } from 'react';

export const useStickyOnScroll = (targetSectionId, offset = 100) => {
  const [isSticky, setIsSticky] = useState(false);
  const [hasPassed, setHasPassed] = useState(false);
  const [navHeight, setNavHeight] = useState(0);
  const targetRef = useRef(null);

  useEffect(() => {
    const updateNavHeight = () => {
      const navElement = document.querySelector('nav');
      if (navElement) {
        setNavHeight(navElement.offsetHeight);
      }
    };

    updateNavHeight();
    window.addEventListener('resize', updateNavHeight);
    
    return () => window.removeEventListener('resize', updateNavHeight);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const targetElement = document.getElementById(targetSectionId);
      
      if (!targetElement || navHeight === 0) return;

      const scrollPosition = window.scrollY;
      const targetAbsolutePosition = targetElement.offsetTop;
      const triggerPoint = targetAbsolutePosition - navHeight - offset;
      
      // Check if scroll position has reached the trigger point
      if (scrollPosition >= triggerPoint && !hasPassed) {
        setIsSticky(true);
        setHasPassed(true);
      } else if (scrollPosition < triggerPoint && hasPassed) {
        setIsSticky(false);
        setHasPassed(false);
      }
    };

    // Initial check
    handleScroll();

    // Add scroll event listener with throttling for performance
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    
    // Handle window resize
    window.addEventListener('resize', throttledHandleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
      window.removeEventListener('resize', throttledHandleScroll);
    };
  }, [targetSectionId, offset, hasPassed, navHeight]);

  return { isSticky, targetRef, navHeight };
};
