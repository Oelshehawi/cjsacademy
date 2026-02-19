'use client';

import { motion } from 'motion/react';
import { ServiceCard } from './ServiceCard';
import { services } from '../data';

export function ServicesSection() {
  return (
    <section className="py-24 px-4 bg-linear-to-b from-gray-950 via-emerald-950 to-gray-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-medium mb-4">
            Specialized Training
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Specialized Services
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Targeted instruction to address specific areas of your game using 
            the latest technology and teaching methods.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
