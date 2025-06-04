'use client';

import { motion } from 'motion/react';
import ShuffleTestimonials from './Testimonials/ShuffleTestimonials';

const TestimonialsSection = () => {
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className='relative w-full bg-gradient-to-b from-gray-950 via-emerald-950 to-gray-950 py-16 sm:py-24 md:py-32'>
      {/* Background Pattern */}

      <div className='container relative mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl text-center'>
          <h2 className='bg-gradient-to-r from-emerald-400 via-emerald-300 to-emerald-400 bg-clip-text pb-4 text-3xl sm:text-4xl font-bold text-transparent md:text-5xl'>
            What Our Students Say
          </h2>
          <p className='text-base sm:text-lg text-emerald-400/80'>
            Hear from the golfers who have transformed their game with us
          </p>
        </div>

        <div className='mt-8 sm:mt-12 md:mt-16 w-full'>
          <ShuffleTestimonials />
        </div>

        <div className='mt-8 sm:mt-12 md:mt-16 text-center'>
          <motion.button
            whileHover={{ scale: 1.015 }}
            whileTap={{ scale: 0.985 }}
            onClick={scrollToPricing}
            className='bg-emerald-500 text-white py-3 px-6 sm:py-4 sm:px-8 rounded-lg text-base sm:text-lg font-semibold hover:bg-emerald-600 transition-colors duration-300 shadow-md inline-flex items-center gap-2'
          >
            Start Your Journey Today
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
