'use client';
import { motion } from 'framer-motion';

interface CoachProps {
  name: string;
  title: string;
  bio: string;
  imageUrl: string;
}

const Coach: React.FC<CoachProps> = ({ name, title, bio, imageUrl }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className='bg-white p-6 rounded-xl shadow-lg'
  >
    <div className='aspect-square w-48 mx-auto mb-6 overflow-hidden rounded-full'>
      <img src={imageUrl} alt={name} className='w-full h-full object-cover' />
    </div>
    <h3 className='text-2xl font-bold text-gray-900 mb-2'>{name}</h3>
    <p className='text-green-600 font-semibold mb-4'>{title}</p>
    <p className='text-gray-600 leading-relaxed'>{bio}</p>
  </motion.div>
);

const BioSection = () => {
  const coaches = [
    {
      name: 'Christine Wong',
      title: 'Head Coach & PGA Professional',
      bio: 'With over 15 years of teaching experience, Christine specializes in developing junior golfers and helping players of all levels achieve their goals through personalized instruction.',
      imageUrl: '/christine-placeholder.jpg',
    },
    {
      name: 'Josh Kujundzic',
      title: 'Senior Instructor & Performance Specialist',
      bio: 'Josh brings a modern approach to golf instruction, combining traditional techniques with cutting-edge technology to help players optimize their performance and reach their full potential.',
      imageUrl: '/josh-placeholder.jpg',
    },
  ];

  return (
    <section className='py-20 px-4 md:px-8 bg-gray-50'>
      <div className='max-w-6xl mx-auto'>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12'
        >
          Meet Your Coaches
        </motion.h2>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12'>
          {coaches.map((coach) => (
            <Coach key={coach.name} {...coach} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BioSection;
