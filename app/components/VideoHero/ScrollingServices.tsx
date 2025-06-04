import { motion } from 'motion/react';
import { GiGolfTee, GiGolfFlag } from 'react-icons/gi';
import { IoGolfOutline, IoFitnessOutline } from 'react-icons/io5';
import {
  FaUsers,
  FaVideo,
  FaBrain,
  FaRuler,
  FaBullseye,
  FaGolfBall,
} from 'react-icons/fa';
import { IconType } from 'react-icons';

const SERVICES = [
  { icon: GiGolfTee, label: 'Swing Analysis' },
  { icon: FaBullseye, label: 'Putting Practice' },
  { icon: FaVideo, label: 'Video Analysis' },
  { icon: FaBrain, label: 'Mental Game' },
  { icon: FaRuler, label: 'Club Fitting' },
  { icon: FaUsers, label: 'Group Lessons' },
  { icon: IoGolfOutline, label: 'Shot Accuracy' },
  { icon: IoFitnessOutline, label: 'Golf Fitness' },
  { icon: FaGolfBall, label: 'Ball Flight Laws' },
  { icon: GiGolfFlag, label: 'Course Strategy' },
];

interface ServiceItemProps {
  Icon: IconType;
  label: string;
}

const ServiceItem = ({ Icon, label }: ServiceItemProps) => {
  return (
    <div className='flex flex-col items-center gap-1.5 w-40 text-white/80 hover:text-white transition-colors'>
      <Icon className='w-6 h-6' />
      <span className='text-xs font-medium text-center'>{label}</span>
    </div>
  );
};

interface TranslateWrapperProps {
  children: React.ReactNode;
  reverse?: boolean;
}

const TranslateWrapper = ({ children, reverse }: TranslateWrapperProps) => {
  return (
    <motion.div
      initial={{ translateX: reverse ? '-100%' : '0%' }}
      animate={{ translateX: reverse ? '0%' : '-100%' }}
      transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
      className='flex gap-12 px-6'
    >
      {children}
    </motion.div>
  );
};

const ServiceItems = () => (
  <>
    {SERVICES.map((service, index) => (
      <ServiceItem key={index} Icon={service.icon} label={service.label} />
    ))}
  </>
);

interface ScrollingServicesProps {
  show: boolean;
}

export const ScrollingServices = ({ show }: ScrollingServicesProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: show ? 1 : 0 }}
      transition={{ duration: 0.8 }}
      className='absolute bottom-0 left-0 right-0 py-6 overflow-hidden bg-gradient-to-t from-black/50 to-transparent backdrop-blur-sm'
    >
      <div className='flex overflow-hidden relative max-w-screen-lg mx-auto'>
        {/* Left fade effect - multiple layers */}
        <div className='absolute left-0 top-0 bottom-0 w-40 z-10 pointer-events-none'>
          <div className='absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-transparent backdrop-blur-md' />
          <div
            className='absolute inset-0 bg-gradient-to-r  to-transparent'
            style={{ mixBlendMode: 'overlay' }}
          />
        </div>

        <div className='flex overflow-hidden'>
          <TranslateWrapper>
            <ServiceItems />
          </TranslateWrapper>
          <TranslateWrapper>
            <ServiceItems />
          </TranslateWrapper>
          <TranslateWrapper>
            <ServiceItems />
          </TranslateWrapper>
        </div>

        {/* Right fade effect - multiple layers */}
        <div className='absolute right-0 top-0 bottom-0 w-40 z-10 pointer-events-none'>
          <div className='absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-transparent backdrop-blur-md' />
          <div
            className='absolute inset-0 bg-gradient-to-l  to-transparent'
            style={{ mixBlendMode: 'overlay' }}
          />
        </div>
      </div>
    </motion.div>
  );
};
