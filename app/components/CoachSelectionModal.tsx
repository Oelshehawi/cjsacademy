'use client';

import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';

declare global {
  interface Window {
    Calendly: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

interface CoachSelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  packageName: string;
  packageType: string;
}

const CoachSelectionModal = ({
  isOpen,
  onClose,
  packageName,
  packageType,
}: CoachSelectionModalProps) => {
  const coaches = [
    {
      name: 'Josh Kujundzic',
      title: 'PGA of Canada Class "A" Professional',
      image: '/joshPhoto.jpg',
      location: 'Quilchena Golf & Country Club',
      secondaryLocation: 'Central Golf Club',
      method: 'calendly' as const,
      calendlyUrl: 'https://calendly.com/joshkujundzicgolf/golflessons',
    },
    {
      name: 'Christine Wong',
      title: 'PGA of Canada Class "A" Professional',
      image: '/christinePhoto.jpg',
      location: 'Savage Creek',
      secondaryLocation: 'Central Golf Club',
      method: 'calendly' as const,
      calendlyUrl: 'https://calendly.com/cjsgolfinc/privategolflesson',
    },
  ];

  const handleCoachSelect = (coach: (typeof coaches)[0]) => {
    if (coach.method === 'calendly') {
      if (typeof window !== 'undefined' && window.Calendly) {
        window.Calendly.initPopupWidget({
          url: coach.calendlyUrl,
        });
      }
    }
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className='fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4'
        >
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className='bg-white/10 backdrop-blur-xl rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-white/20'
          >
            <div className='text-center mb-8'>
              <h2 className='text-3xl font-bold text-white mb-2'>
                Choose Your Coach
              </h2>
              <p className='text-emerald-400/80'>
                Select a coach for your {packageName} {packageType} lesson
              </p>
            </div>

            <div className='grid md:grid-cols-2 gap-6'>
              {coaches.map((coach, index) => (
                <motion.div
                  key={coach.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleCoachSelect(coach)}
                  className='bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-emerald-500/30 cursor-pointer group'
                >
                  <div className='text-center'>
                    <div className='relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden'>
                      <Image
                        src={coach.image}
                        alt={coach.name}
                        fill
                        className='object-cover'
                      />
                    </div>
                    <h3 className='text-xl font-bold text-white mb-1'>
                      {coach.name}
                    </h3>
                    <p className='text-emerald-400/80 text-sm mb-4'>
                      {coach.title}
                    </p>

                    <div className='space-y-2'>
                      <div className='flex items-center justify-center gap-2'>
                        <svg
                          className='w-4 h-4 text-emerald-400'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                        >
                          <path
                            fillRule='evenodd'
                            d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z'
                            clipRule='evenodd'
                          />
                        </svg>
                        <span className='text-white font-medium'>
                          {coach.location}
                        </span>
                      </div>
                      <div className='flex items-center justify-center gap-2 pt-1'>
                        <svg
                          className='w-3 h-3 text-emerald-400/70'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                        >
                          <path
                            fillRule='evenodd'
                            d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z'
                            clipRule='evenodd'
                          />
                        </svg>
                        <span className='text-white/70 text-xs'>
                          {coach.secondaryLocation}
                        </span>
                      </div>
                      <p className='text-emerald-400/70 text-xs'>
                        * Pricing may vary for indoor facility lessons
                      </p>
                    </div>

                    <div className='mt-4 pt-4 border-t border-white/10'>
                      <span className='inline-block bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full text-sm font-medium'>
                        {coach.method === 'calendly'
                          ? 'Instant Booking'
                          : 'Email Booking'}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className='text-center mt-8 space-y-3'>
              <p className='text-sm text-gray-300'>
                If there is no suitable availability for Josh, email him at{' '}
                <a
                  href='mailto:joshkujundzicgolf@gmail.com'
                  className='underline text-emerald-300 hover:text-emerald-200'
                >
                  joshkujundzicgolf@gmail.com
                </a>
                .
              </p>
              <button
                onClick={onClose}
                className='text-emerald-400/70 hover:text-emerald-300/80 px-6 py-2 text-sm transition-colors'
              >
                Cancel
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CoachSelectionModal;
