'use client';

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';

interface HeroAnimationContextType {
  isHeroAnimationComplete: boolean;
  setHeroAnimationComplete: (complete: boolean) => void;
  scrollProgress: number;
  isNavVisible: boolean;
  isHomePage: boolean;
}

const HeroAnimationContext = createContext<HeroAnimationContextType | undefined>(
  undefined
);

export function HeroAnimationProvider({ children }: { children: ReactNode }) {
  const [isHeroAnimationComplete, setHeroAnimationComplete] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [isHomePage, setIsHomePage] = useState(true);

  // Detect if we're on the home page
  useEffect(() => {
    const checkHomePage = () => {
      const path = window.location.pathname;
      setIsHomePage(path === '/' || path === '');
    };
    
    checkHomePage();
    
    // Listen for route changes (for client-side navigation)
    window.addEventListener('popstate', checkHomePage);
    
    // Also check on initial load
    const observer = new MutationObserver(checkHomePage);
    observer.observe(document.body, { childList: true, subtree: true });
    
    return () => {
      window.removeEventListener('popstate', checkHomePage);
      observer.disconnect();
    };
  }, []);

  // Track scroll position and determine navbar visibility
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const progress = Math.min(scrollY / windowHeight, 1);
      setScrollProgress(progress);

      // On home page: show when hero animation completes OR on scroll past 60%
      // On other pages: always show immediately (on load)
      if (!isHomePage) {
        setIsNavVisible(true);
        return;
      }

      const scrollThreshold = 0.6;
      const shouldShowFromScroll = progress > scrollThreshold;
      
      setIsNavVisible(isHeroAnimationComplete || shouldShowFromScroll);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHeroAnimationComplete, isHomePage]);

  return (
    <HeroAnimationContext.Provider
      value={{
        isHeroAnimationComplete,
        setHeroAnimationComplete,
        scrollProgress,
        isNavVisible,
        isHomePage,
      }}
    >
      {children}
    </HeroAnimationContext.Provider>
  );
}

export function useHeroAnimation() {
  const context = useContext(HeroAnimationContext);
  if (context === undefined) {
    throw new Error(
      'useHeroAnimation must be used within a HeroAnimationProvider'
    );
  }
  return context;
}
