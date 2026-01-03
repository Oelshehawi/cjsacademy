'use client';

import { useState, useRef, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import CoachSelectionModal from './CoachSelectionModal';
import PackageGuidanceModal from './PackageGuidanceModal';

const PricingSection = () => {
  const [selected, setSelected] = useState('private');
  const [showCoachModal, setShowCoachModal] = useState(false);
  const [showGuidanceModal, setShowGuidanceModal] = useState(false);
  const [isPricingInView, setIsPricingInView] = useState(false);
  const pricingRef = useRef<HTMLElement>(null);
  const [selectedPackage, setSelectedPackage] = useState<{
    name: string;
    type: string;
  } | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsPricingInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (pricingRef.current) {
      observer.observe(pricingRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handlePackageSelect = (packageName: string, packageType: string) => {
    setSelectedPackage({ name: packageName, type: packageType });
    setShowCoachModal(true);
    setShowGuidanceModal(false);
  };

  return (
    <section
      ref={pricingRef}
      id='pricing'
      className='relative w-full overflow-hidden bg-gradient-to-b from-gray-950 via-emerald-950 to-gray-950 py-32'
    >
      {/* Floating Guidance Indicator - Fixed position, visible when pricing section is in view */}
      <AnimatePresence>
        {isPricingInView && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.5 }}
            className='fixed bottom-8 right-4 md:right-8 z-40 pointer-events-none'
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowGuidanceModal(true)}
              className='pointer-events-auto bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-3 rounded-full shadow-lg shadow-emerald-900/50 flex items-center gap-2 text-sm font-medium cursor-pointer'
            >
              <svg
                width='20'
                height='20'
                viewBox='0 0 20 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18Z'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M10 6V10'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M10 14H10.01'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
              <span className='hidden sm:inline'>Not sure which package?</span>
              <span className='sm:hidden'>Need help choosing?</span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
      <div className='container relative mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='mx-auto max-w-2xl text-center mb-12'
        >
          <h2 className='bg-gradient-to-r from-emerald-400 via-emerald-300 to-emerald-400 bg-clip-text pb-4 text-4xl font-bold text-transparent md:text-5xl'>
            Book Your Lesson
          </h2>
          <p className='text-lg text-emerald-400/80'>
            Start your golf journey with a personalized lesson
          </p>
          <p className='text-sm text-emerald-400/60 mt-2'>
            * Pricing may vary for indoor facility lessons
          </p>
        </motion.div>

        {/* Package Type Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className='flex items-center justify-center gap-6 mb-16'
        >
          <button
            onClick={() => setSelected('private')}
            className={`relative rounded-lg py-3 px-8 font-medium cursor-pointer ${
              selected === 'private'
                ? 'text-white scale-105'
                : 'text-emerald-400/80 hover:text-emerald-300/90 hover:scale-105'
            }`}
          >
            Private Lessons
            {selected === 'private' && (
              <motion.span
                layoutId='package-type'
                className='absolute inset-0 -z-10 bg-emerald-800/50 rounded-lg shadow-lg shadow-emerald-900/20'
              />
            )}
          </button>
          <button
            onClick={() => setSelected('semi')}
            className={`relative rounded-lg py-3 px-8 font-medium cursor-pointer ${
              selected === 'semi'
                ? 'text-white scale-105'
                : 'text-emerald-400/80 hover:text-emerald-300/90 hover:scale-105'
            }`}
          >
            Semi-Private Lessons
            {selected === 'semi' && (
              <motion.span
                layoutId='package-type'
                className='absolute inset-0 -z-10 bg-emerald-800/50 rounded-lg shadow-lg shadow-emerald-900/20'
              />
            )}
          </button>
        </motion.div>

        {/* Package Cards */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto'>
          <AnimatePresence mode='wait'>
            {selected === 'private' ? (
              <>
                <PackageCard
                  title='Game Essentials Lesson'
                  subtitle='Single Lesson – $170'
                  price='$170'
                  description='A focused one-on-one session designed to build confidence, clarity, and immediate improvement. Each lesson is fully tailored to your goals, experience level, and learning style. Instruction takes place on the practice facilities, with optional on-course coaching to apply skills in real-play situations.'
                  features={[
                    'Customized swing analysis and technique refinement',
                    'Full swing and short game skill development',
                    'Immediate feedback with a clear, personalized practice plan',
                    'Suitable for beginners through advanced players',
                  ]}
                  delay={0.2}
                  packageType='Private'
                  onClick={() =>
                    handlePackageSelect('Game Essentials Lesson', 'Private')
                  }
                />
                <PackageCard
                  title='Total Game Tune-Up'
                  subtitle='5-Hour Package – $750'
                  price='$750'
                  description='A flexible multi-lesson package designed to sharpen every part of your game. This package is customized to your individual strengths, weaknesses, and objectives, allowing each session to evolve as your game improves. Lessons are conducted on the practice areas, with optional on-course coaching incorporated as desired.'
                  features={[
                    'Hour 1: Swing Fundamentals – grip, posture, mechanics',
                    'Hour 2: Short Game – chipping, pitching, bunker play',
                    'Hour 3: Putting – stroke mechanics and green reading',
                    'Hour 4: Course Strategy – shot selection and decision-making (on-course optional)',
                    'Hour 5: Long Game – driver, fairway woods, long irons',
                  ]}
                  highlighted={true}
                  delay={0.3}
                  packageType='Private'
                  onClick={() =>
                    handlePackageSelect('Total Game Tune-Up', 'Private')
                  }
                />
                <PackageCard
                  title='Complete Player Development Program'
                  subtitle='10-Hour Package – $1,400'
                  price='$1,400'
                  description='A comprehensive coaching experience for golfers committed to long-term improvement and consistency. This program is entirely built around your personal goals and playing needs, adapting as you progress. The extended format allows for technical refinement, strategic development, and confidence-building both on and off the course, with optional on-course instruction included.'
                  features={[
                    'Hours 1–2: Swing Fundamentals and Mechanics',
                    'Hours 3–4: Short Game and Putting Mastery',
                    'Hours 5–6: Long Game Development',
                    'Hours 7–8: Course Strategy and Game Management (on-course optional)',
                    'Hours 9–10: Performance Review and Personalized Improvement Plan',
                  ]}
                  delay={0.4}
                  packageType='Private'
                  onClick={() =>
                    handlePackageSelect(
                      'Complete Player Development Program',
                      'Private'
                    )
                  }
                />
              </>
            ) : (
              <>
                <PackageCard
                  title='Single Lesson'
                  subtitle='2 Person Max'
                  price='$90'
                  description='Perfect for friends or family to improve their skills together.'
                  features={[
                    'Warm-Up & Goals assessment',
                    'Swing Basics for each person',
                    'Short Game practice sessions',
                    'Course Strategy guidance',
                    'Learn together with personalized tips',
                  ]}
                  priceNote='each'
                  delay={0.2}
                  packageType='Semi-Private'
                  onClick={() =>
                    handlePackageSelect('Single Lesson', 'Semi-Private')
                  }
                />
                <PackageCard
                  title='5 Hour Package'
                  subtitle='2 Person Max'
                  price='$425'
                  description='A focused, personalized setting for two players to develop their skills.'
                  features={[
                    'Initial Assessment & Warm-Up routines',
                    'Full Swing Fundamentals with video analysis',
                    'Short Game Development & drills',
                    'On-Course Play & Strategy training',
                    'Putting & Mental Game techniques',
                  ]}
                  highlighted={true}
                  priceNote='each'
                  delay={0.3}
                  packageType='Semi-Private'
                  onClick={() =>
                    handlePackageSelect('5 Hour Package', 'Semi-Private')
                  }
                />
                <PackageCard
                  title='10 Hour Package'
                  subtitle='2 Person Max'
                  price='$800'
                  description='Comprehensive coaching experience covering all aspects of golf improvement.'
                  features={[
                    'Initial Assessment & Full Swing (2.5 hours)',
                    'Short Game Mastery focus (2.5 hours)',
                    'Putting & Green Reading (1.5 hours)',
                    'On-Course Strategy (2 hours)',
                    'Mental Game & Final Review (1.5 hours)',
                  ]}
                  priceNote='each'
                  delay={0.4}
                  packageType='Semi-Private'
                  onClick={() =>
                    handlePackageSelect('10 Hour Package', 'Semi-Private')
                  }
                />
              </>
            )}
          </AnimatePresence>
        </div>

        {/* Guidance Modal */}
        <PackageGuidanceModal
          isOpen={showGuidanceModal}
          onClose={() => setShowGuidanceModal(false)}
          onSelectPackage={handlePackageSelect}
        />

        {/* Coach Selection Modal */}
        <CoachSelectionModal
          isOpen={showCoachModal}
          onClose={() => setShowCoachModal(false)}
          packageName={selectedPackage?.name || ''}
          packageType={selectedPackage?.type || ''}
        />
      </div>
    </section>
  );
};

interface PackageCardProps {
  title: string;
  subtitle?: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  priceNote?: string;
  delay?: number;
  isPrimary?: boolean;
  packageType?: string;
  onClick?: () => void;
}

const PackageCard = ({
  title,
  subtitle,
  price,
  description,
  features,
  highlighted = false,
  priceNote,
  delay = 0,
  isPrimary = false,
  onClick,
}: PackageCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`rounded-xl backdrop-blur-sm p-8 flex flex-col ${
        isPrimary ? 'h-auto' : 'h-[700px]'
      } ${
        highlighted || isPrimary
          ? 'bg-emerald-800/20 border-2 border-emerald-500/30'
          : 'bg-white/5 border border-white/10'
      }`}
    >
      <div
        className={`flex-grow ${!isPrimary ? 'overflow-y-auto scrollbar-thin scrollbar-track-emerald-900/20 scrollbar-thumb-emerald-600/20 pr-2' : ''}`}
      >
        <AnimatePresence mode='wait'>
          <motion.div
            key={title + description}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <h3
              className={`font-bold text-white mb-1 ${isPrimary ? 'text-3xl text-center' : 'text-2xl'}`}
            >
              {title}
            </h3>
            {subtitle && <p className='text-emerald-400/80 mb-4'>{subtitle}</p>}
            <div
              className={`flex items-baseline gap-1 mb-4 ${isPrimary ? 'justify-center' : ''}`}
            >
              <span
                className={`font-bold text-white ${isPrimary ? 'text-5xl' : 'text-4xl'}`}
              >
                {price}
              </span>
              {priceNote && (
                <span className='text-emerald-400/80'>/{priceNote}</span>
              )}
            </div>
            <p
              className={`text-emerald-300/90 mb-8 ${isPrimary ? 'text-center' : ''}`}
            >
              {description}
            </p>
            <ul className='space-y-4'>
              {features.map((feature, index) => (
                <li
                  key={index}
                  className='flex items-center gap-3 text-emerald-200/90'
                >
                  <svg
                    width='20'
                    height='20'
                    viewBox='0 0 20 20'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    className='shrink-0'
                  >
                    <path
                      d='M6.35588 11.8345L1.61455 7.17002L0 8.7472L6.35588 15L20 1.57718L18.3968 0L6.35588 11.8345Z'
                      fill='currentColor'
                    />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>
      <motion.button
        whileHover={{ scale: 1.015 }}
        whileTap={{ scale: 0.985 }}
        onClick={onClick}
        className={`w-full py-4 mt-8 rounded-lg font-semibold uppercase cursor-pointer ${
          highlighted || isPrimary
            ? 'bg-emerald-500 text-white hover:bg-emerald-600'
            : 'bg-white/10 text-white hover:bg-white/20'
        }`}
      >
        Book Now
      </motion.button>
    </motion.div>
  );
};

export default PricingSection;
