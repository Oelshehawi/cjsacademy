'use client';

import { motion } from 'motion/react';
import { ProgramCard } from './ProgramCard';
import { programs } from '../data';

export function ProgramsSection() {
  return (
    <section id="programs" className="py-24 px-4 bg-linear-to-b from-gray-950 via-emerald-950 to-gray-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-medium mb-4">
            Structured Learning Paths
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Core Programs
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Structured pathways designed to take you from where you are to where 
            you want to be in your golf journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {programs.map((program, index) => (
            <ProgramCard key={program.title} {...program} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
