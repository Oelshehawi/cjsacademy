'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LandPlot } from 'lucide-react';

const LESSON_FEATURES = [
  {
    title: 'Private Lessons',
    description: 'One-on-one instruction tailored to your needs',
  },
  {
    title: 'Group Clinics',
    description: 'Learn and improve in a social setting',
  },
  {
    title: 'Video Analysis',
    description: 'Advanced swing analysis with cutting-edge technology',
  },
  {
    title: 'Course Strategy',
    description: 'Learn to manage the course like a pro',
  },
  {
    title: 'Mental Game',
    description: 'Develop the mindset of a champion',
  },
  {
    title: 'Equipment Fitting',
    description: 'Get fitted for clubs that match your game',
  },
];

const RoundedSlideButton = ({ shouldAnimate }: { shouldAnimate: boolean }) => {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (shouldAnimate && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [shouldAnimate, hasAnimated]);

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

        ${hasAnimated ? 'animate-buttonSequence' : ''}
      `}
      onClick={() => {
        document
          .getElementById('contact')
          ?.scrollIntoView({ behavior: 'smooth' });
      }}
    >
      <LandPlot className='h-4 w-4' />
      <span>Book a Lesson</span>
    </button>
  );
};

export function VideoHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showText, setShowText] = useState(false);
  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);
  const [videoEnded, setVideoEnded] = useState(false);
  const [shouldAnimateButton, setShouldAnimateButton] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      // Start playing the video
      videoRef.current.play();

      // Show text and trigger button animation exactly at 9 seconds
      const textTimer = setTimeout(() => {
        setShowText(true);
        setShouldAnimateButton(true);
      }, 9000);

      // Handle video end
      videoRef.current.onended = () => {
        setVideoEnded(true);
      };

      return () => {
        clearTimeout(textTimer);
        if (videoRef.current) {
          videoRef.current.onended = null;
        }
      };
    }
  }, []);

  // Rotate through features
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeatureIndex((prev) =>
        prev === LESSON_FEATURES.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
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
      <div className='absolute right-6 top-6 z-20'>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <RoundedSlideButton shouldAnimate={shouldAnimateButton} />
        </motion.div>
      </div>

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

              {/* Features Carousel */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className='relative mt-8 w-full max-w-2xl overflow-hidden px-4'
              >
                <div className='flex items-center justify-center'>
                  <AnimatePresence mode='wait'>
                    <motion.div
                      key={currentFeatureIndex}
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.5 }}
                      className='text-center'
                    >
                      <div className='rounded-xl bg-white/10 backdrop-blur-lg'>
                        <div className='px-8 py-6'>
                          <h3 className='mb-2 text-2xl font-semibold text-white'>
                            {LESSON_FEATURES[currentFeatureIndex].title}
                          </h3>
                          <p className='text-white/80'>
                            {LESSON_FEATURES[currentFeatureIndex].description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Feature Indicators */}
                <div className='mt-6 flex justify-center gap-2'>
                  {LESSON_FEATURES.map((_, index) => (
                    <div
                      key={index}
                      className={`h-1.5 w-8 rounded-full transition-colors ${
                        index === currentFeatureIndex
                          ? 'bg-white'
                          : 'bg-white/30'
                      }`}
                    />
                  ))}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
