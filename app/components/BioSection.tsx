'use client';

import { useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';

interface BioPill {
  title: string;
  content: string;
}

interface CoachBio {
  name: string;
  title: string;
  pills: BioPill[];
  image: string;
}

const coachBios: CoachBio[] = [
  {
    name: 'Josh Kujundzic',
    title: 'Class "A" PGA of Canada Professional',
    image: '/joshPhoto.jpg',
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
  },
  {
    name: 'Christine Wong',
    title: 'Class "A" PGA of Canada Professional',
    image: '/christinePhoto.jpg',
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
  },
];

export default function BioSection() {
  const [selectedPills, setSelectedPills] = useState<{ [key: string]: number }>(
    {
      'Josh Kujundzic': 0,
      'Christine Wong': 0,
    }
  );
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end center'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);

  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

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

    window.location.href = `mailto:josh@cjsacademy.ca?subject=${subject}&body=${body}`;
  };

  const handleBookingClick = (coachName: string) => {
    if (coachName === 'Josh Kujundzic') {
      openJoshEmail();
    } else {
      scrollToPricing();
    }
  };

  return (
    <div
      ref={containerRef}
      className='min-h-screen relative bg-gradient-to-b from-gray-950 via-emerald-950 to-gray-950 py-20'
    >
      <div className='relative z-10 max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8'>
        {coachBios.map((coach, coachIndex) => (
          <motion.div
            key={coach.name}
            style={{
              opacity,
            }}
            whileHover={{
              scale: 1.02,
              boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.4)',
              transition: { duration: 0.2 },
            }}
            className='bg-white/5 backdrop-blur-xl  rounded-2xl overflow-hidden shadow-xl flex flex-col xs:h-[750px] sm:h-[850px] md:h-[850px] border border-white/10 transition-shadow duration-300'
            layoutId={'coach-card-' + coachIndex}
          >
            <div className='relative h-96'>
              <motion.img
                src={coach.image}
                alt={coach.name}
                className={`w-full h-full object-cover ${
                  coach.name === 'Christine Wong'
                    ? 'object-top'
                    : 'object-center'
                }`}
                layoutId={'coach-image-' + coachIndex}
              />
              <motion.div
                className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6'
                layoutId={'coach-header-' + coachIndex}
              >
                <h2 className='text-3xl font-bold text-white'>{coach.name}</h2>
                <p className='text-xl text-gray-300'>{coach.title}</p>
              </motion.div>
            </div>

            <div className='p-6 flex-grow flex flex-col'>
              <div className='flex flex-wrap gap-1.5 sm:gap-2 mb-4'>
                {coach.pills.map((pill, pillIndex) => (
                  <button
                    key={pill.title}
                    onClick={() =>
                      setSelectedPills({
                        ...selectedPills,
                        [coach.name]: pillIndex,
                      })
                    }
                    className={`px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-colors cursor-pointer ${
                      selectedPills[coach.name] === pillIndex
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
                  key={`${coach.name}-${selectedPills[coach.name]}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className='mt-4 flex-grow overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-blue-500/50 scrollbar-track-white/5'
                >
                  <p className='text-lg leading-relaxed text-gray-200'>
                    {coach.pills[selectedPills[coach.name]].content}
                  </p>
                </motion.div>
              </AnimatePresence>

              <motion.button
                whileHover={{ scale: 1.015 }}
                whileTap={{ scale: 0.985 }}
                onClick={() => handleBookingClick(coach.name)}
                className='mt-6 w-full bg-emerald-500 hover:cursor-pointer text-white py-3 px-4 sm:px-6 rounded-lg text-base sm:text-lg font-semibold hover:bg-emerald-600 transition-colors duration-300 shadow-md'
              >
                {coach.name === 'Josh Kujundzic'
                  ? 'Contact Josh to Book'
                  : 'Book Now with'}{' '}
                {coach.name === 'Josh Kujundzic'
                  ? ''
                  : coach.name.split(' ')[0]}
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
