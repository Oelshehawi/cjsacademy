'use client';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className='min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-green-50 px-4 md:px-8'>
      <div className='max-w-6xl mx-auto text-center'>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-4xl md:text-6xl font-bold text-gray-900 mb-6'
        >
          Unlock Your Potential with Elite Golf Coaching
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto'
        >
          Transform your game with personalized instruction from PGA
          professionals
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <button className='bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors duration-300 shadow-lg'>
            Book a Lesson
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
