'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';

declare global {
  interface Window {
    Calendly: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

const coachBio = {
  name: 'Christine Wong',
  title: 'Class "A" PGA of Canada Professional',
  image: '/IMG-20250603-WA0012.jpg',
  pills: [
    {
      title: 'Background',
      content:
        'Christine Wong is a highly accomplished Canadian golfer and PGA of Canada Class "A" Professional from Vancouver, British Columbia. She first gained recognition as a standout collegiate player at San Diego State University, where she won 4 NCAA individual titles.',
    },
    {
      title: 'Career',
      content:
        "After turning professional in 2013, Christine briefly competed on the Symetra Tour before taking a hiatus in 2015-2016. She returned to competitive golf with remarkable success, securing multiple titles including the PGA of BC Women's Open.",
    },
    {
      title: 'Teaching',
      content:
        "Beyond competition, Christine is a dedicated coach and mentor. She has been in the golf industry for over 10 years and has worked with juniors, adults and coached the Men's and Women's Golf Team at Langara College.",
    },
    {
      title: 'Legacy',
      content:
        'With a career marked by success and a passion for mentorship, Christine continues to inspire the next generation of golfers, especially young women aspiring to excel in the sport.',
    },
  ],
};

export default function ChristinePage() {
  const [selectedPill, setSelectedPill] = useState(0);

  const openCalendly = () => {
    if (typeof window !== 'undefined' && window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/cjsgolfinc/30min',
      });
    }
  };

  return (
    <div className='min-h-screen bg-gray-950 flex items-center justify-center p-4'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className='bg-white/5 backdrop-blur-xl rounded-2xl overflow-hidden shadow-xl flex flex-col w-full max-w-lg border border-white/10 transition-shadow duration-300'
      >
        <div className='relative h-96'>
          <Image
            src={coachBio.image}
            alt={coachBio.name}
            fill
            className='object-cover object-top'
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            priority
          />
          <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6'>
            <h2 className='text-3xl font-bold text-white'>{coachBio.name}</h2>
            <p className='text-xl text-gray-300'>{coachBio.title}</p>
          </div>
        </div>

        <div className='p-6 flex-grow flex flex-col'>
          <div className='flex flex-wrap gap-1.5 sm:gap-2 mb-4'>
            {coachBio.pills.map((pill, pillIndex) => (
              <button
                key={pill.title}
                onClick={() => setSelectedPill(pillIndex)}
                className={`px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-colors cursor-pointer ${
                  selectedPill === pillIndex
                    ? 'bg-blue-500 text-white shadow-lg scale-105'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:scale-105'
                }`}
              >
                {pill.title}
              </button>
            ))}
          </div>

          <AnimatePresence mode='wait'>
            <motion.div
              key={selectedPill}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className='mt-4 flex-grow overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-blue-500/50 scrollbar-track-white/5'
            >
              <p className='text-lg leading-relaxed text-gray-200'>
                {coachBio.pills[selectedPill].content}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className='mt-6'>
            {/* Primary Booking Button */}
            <motion.button
              whileHover={{ scale: 1.015 }}
              whileTap={{ scale: 0.985 }}
              onClick={openCalendly}
              className='w-full bg-emerald-500 hover:cursor-pointer text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-emerald-600 transition-colors duration-300 shadow-md'
            >
              Book a Lesson with Christine
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
