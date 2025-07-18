'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

const PricingSection = () => {
  const [selected, setSelected] = useState('private');
  const [showAllPackages, setShowAllPackages] = useState(false);

  return (
    <section
      id='pricing'
      className='relative w-full overflow-hidden bg-gradient-to-b from-gray-950 via-emerald-950 to-gray-950 py-32'
    >
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
        </motion.div>

        {/* Single Lesson Card - Always Visible */}
        <div className='max-w-md mx-auto mb-8'>
          <PackageCard
            title='Single Lesson'
            price='$170'
            description='Take your game to the next level with one-on-one coaching tailored to your skill level and goals.'
            features={[
              'Personalized swing analysis & technique adjustments',
              'Short game & full swing drills for rapid improvement',
              'Immediate feedback & practice plan',
              'High-tech tools for enhanced learning',
              'Ideal for beginners to advanced players',
            ]}
            highlighted={true}
            isPrimary={true}
            delay={0}
            packageType='Private'
          />
        </div>

        {/* Show More Options Button */}
        {!showAllPackages && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className='text-center mb-8'
          >
            <button
              onClick={() => setShowAllPackages(true)}
              className='text-emerald-400 hover:text-emerald-300 border border-emerald-400/30 hover:border-emerald-300/50 px-6 py-3 rounded-lg transition-all duration-300 font-medium hover:cursor-pointer'
            >
              View All Packages & Options
            </button>
          </motion.div>
        )}

        {/* All Packages - Hidden by Default */}
        <AnimatePresence>
          {showAllPackages && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
              className='overflow-hidden'
            >
              {/* Package Type Selector */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className='flex items-center justify-center gap-6 mb-16'
              >
                <button
                  onClick={() => setSelected('private')}
                  className={`relative rounded-lg py-3 px-8 font-medium transition-all duration-300 cursor-pointer ${
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
                  className={`relative rounded-lg py-3 px-8 font-medium transition-all duration-300 cursor-pointer ${
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
                        title='Single Lesson'
                        price='$170'
                        description='Take your game to the next level with one-on-one coaching tailored to your skill level and goals.'
                        features={[
                          'Personalized swing analysis & technique adjustments',
                          'Short game & full swing drills for rapid improvement',
                          'Immediate feedback & practice plan',
                          'High-tech tools for enhanced learning',
                          'Ideal for beginners to advanced players',
                        ]}
                        delay={0}
                        packageType='Private'
                      />
                      <PackageCard
                        title='5 Hour Package'
                        price='$750'
                        description='The 5 Individual Hour Golf Lesson Package gives you the flexibility to focus on different areas of your game.'
                        features={[
                          'Hour 1: Swing Basics - mechanics, grip, posture',
                          'Hour 2: Short Game - chipping, pitching, bunker play',
                          'Hour 3: Putting - stroke and green reading',
                          'Hour 4: Course Strategy - shot selection & management',
                          'Hour 5: Long Game - drivers, fairways, long irons',
                        ]}
                        highlighted={true}
                        delay={0.1}
                        packageType='Private'
                      />
                      <PackageCard
                        title='10 Hour Package'
                        price='$1,400'
                        description='A comprehensive package that gives you ample time to improve every aspect of your game with one-on-one coaching.'
                        features={[
                          'Hours 1-2: Swing Basics & mechanics',
                          'Hours 3-4: Short Game & Putting mastery',
                          'Hours 5-6: Long Game development',
                          'Hours 7-8: Course Strategy & management',
                          'Hours 9-10: Review & personalized plan',
                        ]}
                        delay={0.2}
                        packageType='Private'
                      />
                    </>
                  ) : (
                    <>
                      <PackageCard
                        title='Single Lesson'
                        subtitle='2 Person Max'
                        price='$80'
                        description='Perfect for friends or family to improve their skills together.'
                        features={[
                          'Warm-Up & Goals assessment',
                          'Swing Basics for each person',
                          'Short Game practice sessions',
                          'Course Strategy guidance',
                          'Learn together with personalized tips',
                        ]}
                        priceNote='each'
                        delay={0}
                        packageType='Semi-Private'
                      />
                      <PackageCard
                        title='5 Hour Package'
                        subtitle='2 Person Max'
                        price='$350'
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
                        delay={0.1}
                        packageType='Semi-Private'
                      />
                      <PackageCard
                        title='10 Hour Package'
                        subtitle='2 Person Max'
                        price='$600'
                        description='Comprehensive coaching experience covering all aspects of golf improvement.'
                        features={[
                          'Initial Assessment & Full Swing (2.5 hours)',
                          'Short Game Mastery focus (2.5 hours)',
                          'Putting & Green Reading (1.5 hours)',
                          'On-Course Strategy (2 hours)',
                          'Mental Game & Final Review (1.5 hours)',
                        ]}
                        priceNote='each'
                        delay={0.2}
                        packageType='Semi-Private'
                      />
                    </>
                  )}
                </AnimatePresence>
              </div>

              {/* Hide Options Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className='text-center mt-12'
              >
                <button
                  onClick={() => setShowAllPackages(false)}
                  className='text-emerald-400/70 hover:text-emerald-300/80 px-4 py-2 text-sm transition-all duration-300 hover:cursor-pointer'
                >
                  Hide Additional Options
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
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
  packageType = 'Private',
}: PackageCardProps) => {
  const createEmailContent = (packageName: string, packageType: string) => {
    const subject = `Golf Lesson Package Inquiry - ${packageName}`;
    const body = `Hi,

I'm interested in the ${packageName} ${packageType} package.

Please let me know more details about scheduling and availability.

Best regards,
[Your Name]
[Your Phone Number]`;

    return { subject, body };
  };

  const createGmailLink = (packageName: string, packageType: string) => {
    const { subject, body } = createEmailContent(packageName, packageType);
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);
    return `https://mail.google.com/mail/?view=cm&fs=1&to=joshkujundzicgolf@gmail.com&su=${encodedSubject}&body=${encodedBody}`;
  };

  const createMailtoLink = (packageName: string, packageType: string) => {
    const { subject, body } = createEmailContent(packageName, packageType);
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);
    return `mailto:joshkujundzicgolf@gmail.com?subject=${encodedSubject}&body=${encodedBody}`;
  };

  const isMobile = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  };

  const openEmail = () => {
    if (isMobile()) {
      // Mobile: use mailto (works with any email app)
      window.location.href = createMailtoLink(title, packageType);
    } else {
      // Desktop: use Gmail web interface
      window.open(createGmailLink(title, packageType), '_blank');
    }
  };

  const openCalendly = () => {
    if (typeof window !== 'undefined' && window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/cjsgolfinc/30min',
      });
    }
  };

  const isSingleLesson = title === 'Single Lesson';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, delay }}
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
        onClick={isSingleLesson ? openCalendly : openEmail}
        className={`w-full py-4 mt-8 rounded-lg font-semibold uppercase cursor-pointer ${
          highlighted || isPrimary
            ? 'bg-emerald-500 text-white hover:bg-emerald-600'
            : 'bg-white/10 text-white hover:bg-white/20'
        }`}
      >
        {isSingleLesson ? 'Book Now' : 'Contact Us for Details'}
      </motion.button>
    </motion.div>
  );
};

export default PricingSection;
