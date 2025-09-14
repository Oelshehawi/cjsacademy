'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';

const coachBio = {
  name: 'Josh Kujundzic',
  title: 'Class "A" PGA of Canada Professional',
  image: '/IMG-20250603-WA0005.jpg',
  pills: [
    {
      title: 'Background',
      content:
        'Josh Kujundzic is a Vancouver-born golf professional and PGA of Canada Class "A" Instructor, known for his resilience and dedication to the sport. He began playing golf at the age of 12, influenced by his uncle, and quickly developed a passion for the game.',
    },
    {
      title: 'Journey',
      content:
        'In 2011, Josh faced a significant setback after a mountain biking accident left him with a spinal injury. The accident temporarily hindered his ability to play golf, but his determination allowed him to recover and return to the sport he loved.',
    },
    {
      title: 'Experience',
      content:
        'Professionally, Josh has worked at several prominent golf institutions. He started as an Apprentice Professional at Fraserview Golf Academy before joining the University Golf Club in 2023. As of 2025, he transitioned to the Quilchena Golf & Country Club as a Class "A" Professional.',
    },
    {
      title: 'Impact',
      content:
        'In addition to his work as a golf instructor, Josh is active on social media, where he shares insights into his journey and professional life. His story of overcoming adversity and his love for golf continue to resonate with many aspiring golfers.',
    },
  ],
};

export default function JoshPage() {
  const [selectedPill, setSelectedPill] = useState(0);

  const openJoshEmail = () => {
    const subject = encodeURIComponent(
      'Golf Lesson Booking Request - Private Lesson'
    );
    const body = encodeURIComponent(`Hi Josh,

I would like to book a Private Lesson with you.

Please let me know your availability and we can discuss the details.

Best regards,
[Your Name]
[Your Phone Number]`);

    window.location.href = `mailto:joshkujundzicgolf@gmail.com?subject=${subject}&body=${body}`;
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
            className='object-cover object-center'
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
            <p className='text-center text-emerald-400 font-bold text-sm mb-4'>
              * Lessons will be held at Quilchena Golf Course NOT Savage Creek
            </p>
            {/* Primary Email Button */}
            <motion.button
              whileHover={{ scale: 1.015 }}
              whileTap={{ scale: 0.985 }}
              onClick={openJoshEmail}
              className='w-full bg-emerald-500 hover:cursor-pointer text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-emerald-600 transition-colors duration-300 shadow-md'
            >
              Email Josh for a Lesson
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
