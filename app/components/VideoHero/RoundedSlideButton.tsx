'use client';

import { useEffect, useState } from 'react';
import { LandPlot } from 'lucide-react';

interface RoundedSlideButtonProps {
  shouldAnimate: boolean;
}

declare global {
  interface Window {
    Calendly: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

export const RoundedSlideButton = ({
  shouldAnimate,
}: RoundedSlideButtonProps) => {
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
          .getElementById('pricing')
          ?.scrollIntoView({ behavior: 'smooth' });
      }}
    >
      <LandPlot className='h-4 w-4' />
      <span className='text-xs sm:text-base'>Book a Lesson</span>
    </button>
  );
};
