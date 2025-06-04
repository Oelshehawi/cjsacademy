'use client';

import ShuffleTestimonials from './Testimonials/ShuffleTestimonials';

const TestimonialsSection = () => {
  return (
    <section className='relative w-full overflow-hidden bg-gradient-to-b from-gray-950 via-emerald-950 to-gray-950 py-32'>
      {/* Background Pattern */}
      <div className='absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px]' />

      {/* Radial Gradient Overlay */}
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(4,120,87,0.2),rgba(0,0,0,0))]' />
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(4,120,87,0.1),rgba(0,0,0,0))]' />

      <div className='container relative mx-auto px-4'>
        <div className='mx-auto max-w-2xl text-center'>
          <h2 className='bg-gradient-to-r from-emerald-400 via-emerald-300 to-emerald-400 bg-clip-text pb-4 text-4xl font-bold text-transparent md:text-5xl'>
            What Our Students Say
          </h2>
          <p className='text-lg text-emerald-400/80'>
            Hear from the golfers who have transformed their game with us
          </p>
        </div>

        <div className='mt-16'>
          <ShuffleTestimonials />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
