import { useState } from 'react';
import BrainBackground from './components/BrainBackground';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Career from './components/Career';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ToastNotification from './components/ToastNotification';
import MobileMenu from './components/MobileMenu';
import NavigationDots from './components/NavigationDots';
import ScrollToTop from './components/ScrollToTop';
import Astronauta from './components/Astronauta';
import { useActiveSection } from './hooks/useActiveSection';
import { useToast } from './hooks/useToast';
import { useTheme } from './context/ThemeContext';
import { NAV_LINKS } from './data/portfolioData';

const App = () => {
  const { theme } = useTheme();
  const activeSection = useActiveSection();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { toast, showToast } = useToast();

  return (
    <div className={`relative min-h-screen font-sans selection-app ${theme}`} style={{ color: 'var(--light)' }}>
      <div className="animated-purple-bg">
        <div className="purple-blob purple-blob-1"></div>
        <div className="purple-blob purple-blob-2"></div>
        <div className="purple-blob purple-blob-3"></div>
        <div className="purple-blob purple-blob-4"></div>
      </div>
      <BrainBackground theme={theme} />
      <Astronauta />

      <Navigation
        navLinks={NAV_LINKS}
        activeSection={activeSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      <Hero />
      <About />
      <Career />
      <Projects />
      <Skills />
      <Contact showToast={showToast} />
      <Footer />

      <ToastNotification toast={toast} />
      <MobileMenu navLinks={NAV_LINKS} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <NavigationDots />
      <ScrollToTop />
    </div>
  );
};

export default App;
