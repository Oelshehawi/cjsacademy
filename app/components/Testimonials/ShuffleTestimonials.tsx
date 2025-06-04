'use client';

import { motion } from 'motion/react';
import { useRef, useState } from 'react';
import Image from 'next/image';

const ShuffleTestimonials = () => {
  const [order, setOrder] = useState(['front', 'middle', 'back']);

  const handleShuffle = (direction: 'left' | 'right') => {
    const orderCopy = [...order];
    if (direction === 'left') {
      orderCopy.unshift(orderCopy.pop() as string);
    } else {
      orderCopy.push(orderCopy.shift() as string);
    }
    setOrder(orderCopy);
  };

  return (
    <div className='relative grid place-content-center overflow-hidden rounded-3xl  px-4 sm:px-8 py-12 sm:py-24 text-emerald-50'>
      <div className='relative -ml-[50px] sm:-ml-[100px] h-[350px] sm:h-[450px] w-[375px] sm:w-[350px] md:-ml-[175px]'>
        <Card
          imgUrl='/IMG-20250603-WA0002.jpg'
          testimonial='The coaching at CJS Academy transformed my game. My handicap dropped from 18 to 12 in just six months of dedicated training.'
          author='Michael R. - Amateur Golfer'
          handleShuffle={handleShuffle}
          position={order[0]}
        />
        <Card
          imgUrl='/IMG-20250603-WA0002.jpg'
          testimonial="The mental game coaching here is exceptional. I've never felt more confident on the course, especially during tournaments."
          author='Sarah L. - College Golf Player'
          handleShuffle={handleShuffle}
          position={order[1]}
        />
        <Card
          imgUrl='/IMG-20250603-WA0002.jpg'
          testimonial="From swing mechanics to course management, the comprehensive training program here is world-class. It's worth every penny."
          author='James T. - Club Champion'
          handleShuffle={handleShuffle}
          position={order[2]}
        />
      </div>
    </div>
  );
};

interface CardProps {
  handleShuffle: (direction: 'left' | 'right') => void;
  testimonial: string;
  position: string;
  imgUrl: string;
  author: string;
}

const Card = ({
  handleShuffle,
  testimonial,
  position,
  imgUrl,
  author,
}: CardProps) => {
  const mousePosRef = useRef(0);

  const onDragStart = (event: MouseEvent | TouchEvent | PointerEvent) => {
    if ('clientX' in event) {
      mousePosRef.current = event.clientX;
    }
  };

  const onDragEnd = (event: MouseEvent | TouchEvent | PointerEvent) => {
    if ('clientX' in event) {
      const diff = mousePosRef.current - event.clientX;

      // If dragged left more than 150px
      if (diff > 150) {
        handleShuffle('left');
      }
      // If dragged right more than 150px
      else if (diff < -150) {
        handleShuffle('right');
      }

      mousePosRef.current = 0;
    }
  };

  const x = position === 'front' ? '0%' : position === 'middle' ? '33%' : '66%';
  const rotateZ =
    position === 'front' ? '-6deg' : position === 'middle' ? '0deg' : '6deg';
  const zIndex = position === 'front' ? '2' : position === 'middle' ? '1' : '0';

  const draggable = position === 'front';

  return (
    <motion.div
      style={{
        zIndex,
      }}
      animate={{ rotate: rotateZ, x }}
      drag
      dragElastic={0.35}
      dragListener={draggable}
      dragConstraints={{
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      transition={{
        duration: 0.35,
      }}
      className={`absolute left-0 top-0 grid h-[350px] sm:h-[450px] w-[275px] sm:w-[350px] select-none place-content-center space-y-4 sm:space-y-6 rounded-2xl border-2 border-emerald-600/30 bg-gradient-to-br from-emerald-800/30 to-emerald-950/30 p-4 sm:p-6 shadow-xl backdrop-blur-md ${
        draggable ? 'cursor-grab active:cursor-grabbing' : ''
      }`}
    >
      <div className='relative mx-auto h-24 w-24 sm:h-32 sm:w-32 overflow-hidden rounded-full border-2 border-emerald-600/50 shadow-lg'>
        <Image
          src={imgUrl}
          alt={`Image of ${author}`}
          fill
          className='pointer-events-none object-cover'
          sizes='(max-width: 640px) 96px, 128px'
        />
      </div>
      <span className='text-center text-base sm:text-lg italic text-emerald-200'>
        &ldquo;{testimonial}&rdquo;
      </span>
      <span className='text-center text-xs sm:text-sm font-medium text-emerald-400'>
        {author}
      </span>
    </motion.div>
  );
};

export default ShuffleTestimonials;
