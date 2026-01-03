'use client';

import { motion } from 'motion/react';
import { useState, useEffect, useRef } from 'react';

interface Testimonial {
  id: number;
  name: string;
  age: number;
  location: string;
  beforeAfter: string;
  quote: string;
  achievement: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Emma Johnson',
    age: 16,
    location: 'Vancouver, BC',
    beforeAfter: 'High school beginner → Tournament Championship Winner',
    quote:
      "I was so nervous about joining the golf team because I'd only played mini golf before! Josh was super patient and made everything fun. Two years later, I just won the my third tournament!",
    achievement: 'Competitive Golf Tournament Player',
    image: '👧',
  },
  {
    id: 2,
    name: 'Robert Chen',
    age: 32,
    location: 'Burnaby, BC',
    beforeAfter: '15 handicap → Club Champion',
    quote:
      "I'd been playing for 20 years but stuck at 15 handicap. Christine completely rebuilt my swing and mental approach. Last season I won our club championship and qualified for the provincial amateur!",
    achievement: 'Club Champion & Provincial Qualifier',
    image: '👨‍💼',
  },
  {
    id: 3,
    name: 'Frank Williams',
    age: 72,
    location: 'Richmond, BC',
    beforeAfter: 'Struggling with age → Playing with grandkids',
    quote:
      "My back isn't what it used to be, and I thought my golf days were over. The instructors here adapted my swing to work with my body. Now I can play 18 holes with my grandkids without pain!",
    achievement: 'Pain-free golf rounds',
    image: '👴',
  },
  {
    id: 4,
    name: 'Lisa Martinez',
    age: 38,
    location: 'Surrey, BC',
    beforeAfter: 'Frustrated beginner → Confident player',
    quote:
      "I was that person who whiffed the ball completely on the first tee. After a few months here, I'm actually breaking 100 regularly and my friends want me to teach them! Still can't believe the improvement.",
    achievement: 'Consistently breaks 100',
    image: '👩‍⚕️',
  },
  {
    id: 5,
    name: 'Alex Thompson',
    age: 29,
    location: 'North Vancouver, BC',
    beforeAfter: 'Weekend warrior → Scratch golfer',
    quote:
      'I could hit amazing shots one day and terrible ones the next. The systematic approach here gave me consistency I never thought possible. Last month I finally reached scratch and qualified for the Canadian Mid-Am!',
    achievement: 'Reached scratch handicap',
    image: '👨‍💻',
  },
  {
    id: 6,
    name: 'Maria Santos',
    age: 52,
    location: 'West Vancouver, BC',
    beforeAfter: 'Return to golf → Rediscovered passion',
    quote:
      "I hadn't played in 15 years after having kids. Coming back was intimidating, but the welcoming environment here made me fall in love with golf all over again. Now I'm shooting in the 80s and joined our women's league!",
    achievement: "Joined women's league & shoots 80s",
    image: '👩‍🍳',
  },
];

// Counter component for animated numbers
const AnimatedCounter = ({
  target,
  duration = 2000,
  suffix = '',
}: {
  target: number;
  duration?: number;
  suffix?: string;
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const startCount = 0;

    const updateCount = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(startCount + (target - startCount) * easeOut));

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      }
    };

    requestAnimationFrame(updateCount);
  }, [isVisible, target, duration]);

  return (
    <div ref={counterRef} className='text-4xl font-bold text-emerald-400 mb-2'>
      {count}
      {suffix}
    </div>
  );
};

const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className='relative w-full bg-gradient-to-b from-gray-950 via-emerald-950 to-gray-950 py-16 sm:py-24 md:py-32'>
      <div className='container relative mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='mx-auto max-w-2xl text-center mb-12'
        >
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className='bg-gradient-to-r from-emerald-400 via-emerald-300 to-emerald-400 bg-clip-text pb-4 text-3xl sm:text-4xl font-bold text-transparent md:text-5xl'
          >
            Real Results from Real Golfers
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='text-base sm:text-lg text-emerald-400/80'
          >
            See how CJS Academy has transformed golfers of all skill levels
          </motion.p>
        </motion.div>

        {/* Featured Testimonial */}
        <div className='max-w-4xl mx-auto mb-12'>
          <motion.div
            key={activeTestimonial}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className='bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10'
          >
            <div className='flex flex-col md:flex-row items-center gap-8'>
              <div className='text-6xl'>
                {testimonials[activeTestimonial].image}
              </div>
              <div className='flex-1 text-center md:text-left'>
                <blockquote className='text-lg sm:text-xl text-white mb-6 italic leading-relaxed'>
                  &ldquo;{testimonials[activeTestimonial].quote}&rdquo;
                </blockquote>
                <div className='space-y-2'>
                  <h4 className='text-emerald-400 font-semibold text-lg'>
                    {testimonials[activeTestimonial].name},{' '}
                    {testimonials[activeTestimonial].age}
                  </h4>
                  <p className='text-gray-300'>
                    {testimonials[activeTestimonial].location}
                  </p>
                  <div className='inline-block bg-emerald-500/20 text-emerald-300 px-4 py-2 rounded-full text-sm font-medium'>
                    {testimonials[activeTestimonial].beforeAfter}
                  </div>
                  <p className='text-emerald-400 font-semibold'>
                    🏆 {testimonials[activeTestimonial].achievement}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Testimonial Navigator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className='flex justify-center mb-12'
        >
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4'>
            {testimonials.map((testimonial, index) => (
              <motion.button
                key={testimonial.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.3,
                  delay: 0.3 + index * 0.05,
                }}
                onClick={() => setActiveTestimonial(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`p-4 rounded-xl transition-all duration-300 hover:cursor-pointer ${
                  activeTestimonial === index
                    ? 'bg-emerald-500/20 border-2 border-emerald-500'
                    : 'bg-white/5 border border-white/10 hover:bg-white/10'
                }`}
              >
                <div className='text-2xl mb-2'>{testimonial.image}</div>
                <div className='text-xs text-white font-medium'>
                  {testimonial.name}
                </div>
                <div className='text-xs text-emerald-400'>
                  {testimonial.achievement.slice(0, 20)}...
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-12'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className='text-center'
          >
            <AnimatedCounter target={300} suffix='+' />
            <div className='text-white'>Happy Students</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='text-center'
          >
            <AnimatedCounter target={12} suffix=' strokes' />
            <div className='text-white'>Average Improvement</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className='text-center'
          >
            <AnimatedCounter target={15} suffix='+ years' />
            <div className='text-white'>Combined Experience</div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className='text-center'
        >
          <motion.button
            whileHover={{ scale: 1.015 }}
            whileTap={{ scale: 0.985 }}
            onClick={scrollToPricing}
            className='bg-emerald-500 text-white py-3 px-6 sm:py-4 sm:px-8 rounded-lg text-base sm:text-lg font-semibold hover:bg-emerald-600 transition-colors duration-300 shadow-md inline-flex items-center gap-2 hover:cursor-pointer'
          >
            Start Your Golf Transformation
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
