'use client';

import { motion } from 'motion/react';
import { journeySteps } from '../data';

export function JourneySection() {
  return (
    <section className="py-24 px-4 bg-linear-to-b from-gray-950 via-emerald-950 to-gray-950">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-medium mb-4">
            Your Path to Success
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Your Improvement Journey
          </h2>
          <p className="text-gray-300 text-lg">
            Every golfer&apos;s path is unique, but they all start with a single step. 
            Here&apos;s how we guide you from beginner to accomplished player.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500/50 via-emerald-500/30 to-transparent hidden md:block" />

          {/* Timeline steps */}
          {journeySteps.map((step, index) => (
            <motion.div
              key={step.stage}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className={`relative flex items-center gap-8 mb-12 last:mb-0 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                <h3 className="text-xl font-bold text-white mb-2">{step.stage}</h3>
                <p className="text-gray-400 text-sm">{step.description}</p>
              </div>
              
              <div className="relative z-10 w-14 h-14 rounded-full bg-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-500/30 shrink-0">
                <step.icon className="w-6 h-6 text-white" />
              </div>
              
              <div className="flex-1 hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
