'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, LandPlot } from 'lucide-react';
import Link from 'next/link';
import { useHeroAnimation } from '../HeroAnimationContext';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Programs & Services', href: '/programs' },
  { name: 'Our Coaches', href: '/#coaches' },
  { name: 'Pricing', href: '/#pricing' },
];

// The Book a Lesson button component with the same styling/effect
const BookLessonButton = ({ 
  shouldAnimate, 
  className = '' 
}: { 
  shouldAnimate: boolean; 
  className?: string;
}) => {
  const handleClick = () => {
    // Always navigate to home page pricing section
    window.location.href = '/#pricing';
  };

  return (
    <button
      className={`
        relative z-0 flex items-center gap-2 overflow-hidden rounded-lg border-[1px] 
        border-white px-4 py-2 font-semibold
        uppercase transition-all duration-500 bg-white text-black
        
        before:absolute before:inset-0
        before:-z-10 before:translate-x-[150%]
        before:translate-y-[150%] before:scale-[2.5]
        before:rounded-[100%] before:bg-emerald-500
        before:transition-transform before:duration-1000
        before:content-[""]

        hover:scale-105 hover:text-white hover:border-emerald-500
        hover:before:translate-x-[0%]
        hover:before:translate-y-[0%]
        active:scale-95
        hover:cursor-pointer

        ${shouldAnimate ? 'animate-buttonSequence' : ''}
        ${className}
      `}
      onClick={handleClick}
    >
      <LandPlot className='h-4 w-4' />
      <span className='text-xs sm:text-base'>Book a Lesson</span>
    </button>
  );
};

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isNavVisible, isHeroAnimationComplete, isHomePage } = useHeroAnimation();

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    
    // Handle hash links
    if (href.includes('#')) {
      const [path, hash] = href.split('#');
      
      // If we're not on the home page and trying to access a hash, navigate home first
      if (path === '/' && window.location.pathname !== '/') {
        window.location.href = href;
        return;
      }
      
      // Scroll to element
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleBookLesson = () => {
    setIsMobileMenuOpen(false);
    // Always navigate to home page pricing
    window.location.href = '/#pricing';
  };

  return (
    <>
      {/* Main Navbar - appears immediately on non-home pages, or on home when hero animation completes/scroll */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ 
          y: isNavVisible ? 0 : -100, 
          opacity: isNavVisible ? 1 : 0 
        }}
        transition={{ 
          duration: isHomePage ? 0.5 : 0.3,
          type: 'spring',
          stiffness: 50,
          damping: 15,
        }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <nav className="mx-4 mt-4 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/10 shadow-lg shadow-black/20">
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-2 group">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center group-hover:bg-emerald-500/30 transition-colors">
                  <LandPlot className="w-5 h-5 text-emerald-400" />
                </div>
                <span className="text-white font-bold text-lg hidden sm:block">
                  CJS Academy
                </span>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      if (link.href.includes('#')) {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }
                    }}
                    className="px-4 py-2 text-sm text-white/80 hover:text-white rounded-lg hover:bg-white/10 transition-all duration-200"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              {/* Desktop CTA - The Book a Lesson button with animation (only on home page) */}
              <div className="hidden md:block">
                <BookLessonButton shouldAnimate={isHeroAnimationComplete && isHomePage} />
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-0 right-0 bottom-0 w-72 z-50 bg-gray-900/95 backdrop-blur-xl border-l border-white/10 md:hidden"
          >
            <div className="p-6">
              {/* Close Button */}
              <div className="flex justify-end mb-8">
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Links */}
              <div className="flex flex-col gap-2">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={(e) => {
                        if (link.href.includes('#')) {
                          e.preventDefault();
                          scrollToSection(link.href);
                        } else {
                          setIsMobileMenuOpen(false);
                        }
                      }}
                      className="block px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-200"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Mobile CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-8 pt-8 border-t border-white/10"
              >
                <button
                  onClick={handleBookLesson}
                  className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 px-4 rounded-xl font-semibold transition-colors duration-200"
                >
                  Book a Lesson
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
