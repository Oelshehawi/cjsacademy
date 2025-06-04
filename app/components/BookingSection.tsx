'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

const BookingSection = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    lessonType: '',
    dateTime: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className='py-20 px-4 md:px-8 bg-gray-50'>
      <div className='max-w-3xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='text-center mb-12'
        >
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
            Book Your Lesson
          </h2>
          <p className='text-gray-600 text-lg'>
            Take the first step towards improving your game
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit}
          className='bg-white rounded-xl shadow-lg p-8'
        >
          <div className='space-y-6'>
            <div>
              <label
                htmlFor='name'
                className='block text-gray-700 font-medium mb-2'
              >
                Name
              </label>
              <input
                type='text'
                id='name'
                name='name'
                value={formState.name}
                onChange={handleChange}
                className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent'
                required
              />
            </div>

            <div>
              <label
                htmlFor='email'
                className='block text-gray-700 font-medium mb-2'
              >
                Email
              </label>
              <input
                type='email'
                id='email'
                name='email'
                value={formState.email}
                onChange={handleChange}
                className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent'
                required
              />
            </div>

            <div>
              <label
                htmlFor='lessonType'
                className='block text-gray-700 font-medium mb-2'
              >
                Lesson Type
              </label>
              <select
                id='lessonType'
                name='lessonType'
                value={formState.lessonType}
                onChange={handleChange}
                className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent'
                required
              >
                <option value=''>Select a lesson type</option>
                <option value='individual'>Individual Lesson</option>
                <option value='group'>Group Lesson</option>
                <option value='junior'>Junior Program</option>
                <option value='advanced'>Advanced Training</option>
              </select>
            </div>

            <div>
              <label
                htmlFor='dateTime'
                className='block text-gray-700 font-medium mb-2'
              >
                Preferred Date & Time
              </label>
              <input
                type='datetime-local'
                id='dateTime'
                name='dateTime'
                value={formState.dateTime}
                onChange={handleChange}
                className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent'
                required
              />
            </div>

            <div>
              <label
                htmlFor='message'
                className='block text-gray-700 font-medium mb-2'
              >
                Message
              </label>
              <textarea
                id='message'
                name='message'
                value={formState.message}
                onChange={handleChange}
                rows={4}
                className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent'
              />
            </div>

            <button
              type='submit'
              className='w-full bg-green-600 text-white py-4 px-6 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors duration-300 shadow-md'
            >
              {isSubmitted ? 'Message Sent!' : 'Submit Booking Request'}
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default BookingSection;
