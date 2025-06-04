'use client';
import { motion } from 'framer-motion';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, role }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className='bg-white p-8 rounded-xl shadow-lg'
  >
    <svg
      className='h-8 w-8 text-green-600 mb-4'
      fill='currentColor'
      viewBox='0 0 24 24'
    >
      <path d='M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z' />
    </svg>
    <p className='text-gray-700 text-lg mb-4 italic'>{quote}</p>
    <div>
      <p className='font-semibold text-gray-900'>{author}</p>
      <p className='text-green-600'>{role}</p>
    </div>
  </motion.div>
);

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote:
        "The personalized approach and attention to detail in my lessons has completely transformed my game. I've never felt more confident on the course.",
      author: 'Michael Chen',
      role: 'Amateur Golfer',
    },
    {
      quote:
        'Working with CJS Academy helped me reduce my handicap by 5 strokes in just three months. Their coaching methodology is simply outstanding.',
      author: 'Sarah Thompson',
      role: 'Club Member',
    },
    {
      quote:
        "The coaches here truly care about your development. They've helped me understand the game at a much deeper level.",
      author: 'David Rodriguez',
      role: 'Junior Golfer',
    },
  ];

  return (
    <section className='py-20 px-4 md:px-8 bg-white'>
      <div className='max-w-6xl mx-auto'>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12'
        >
          What Our Students Say
        </motion.h2>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {testimonials.map((testimonial) => (
            <Testimonial key={testimonial.author} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
