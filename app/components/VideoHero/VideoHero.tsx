'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { RoundedSlideButton } from './RoundedSlideButton';
import { ScrollingServices } from './ScrollingServices';

export function VideoHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showText, setShowText] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);
  const [shouldAnimateButton, setShouldAnimateButton] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();

      const textTimer = setTimeout(() => {
        setShowText(true);
        setShouldAnimateButton(true);
        setVideoEnded(true);
      }, 9000);

      videoRef.current.onended = () => {
        // Remove this since we're handling it with the text timing
        // setVideoEnded(true);
      };

      return () => {
        clearTimeout(textTimer);
        if (videoRef.current) {
          videoRef.current.onended = null;
        }
      };
    }
  }, []);

  return (
    <div className='relative h-screen w-full overflow-hidden'>
      {/* Video Background */}
      <video
        ref={videoRef}
        className='absolute h-full w-full object-cover'
        src='/golfballontee.mp4'
        muted
        playsInline
      />

      {/* Overlay - darker when video ends */}
      <div
        className={`absolute inset-0 transition-colors duration-1000 ${
          videoEnded ? 'bg-black/50' : 'bg-black/30'
        }`}
      />

      {/* CTA Button */}
      <AnimatePresence>
        <motion.div
          className='absolute left-1/2 right-auto top-6 z-20 -translate-x-1/2 md:left-auto md:right-6 md:translate-x-0'
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 3,
            duration: 1,
            type: 'spring',
            stiffness: 50,
            damping: 15,
          }}
        >
          <RoundedSlideButton shouldAnimate={shouldAnimateButton} />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className='relative z-10 flex h-full flex-col items-center justify-center px-4'>
        <AnimatePresence>
          {showText && (
            <>
              {/* Main Title */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className='mb-6 text-center text-5xl font-bold text-white md:text-7xl'
              >
                Master Your Game
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className='mb-12 text-center text-xl text-white/90 md:text-2xl'
              >
                Professional golf instruction for all skill levels
              </motion.p>

              {/* Animated Line */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className='relative mt-8 w-full max-w-2xl overflow-hidden'
              >
                <motion.div
                  className='h-[2px] w-full bg-gradient-to-r from-transparent via-white to-transparent backdrop-blur-sm'
                  animate={{
                    x: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>

      {/* Scrolling Services */}
      <ScrollingServices show={showText} />
    </div>
  );
}
