'use client';

import { motion } from 'motion/react';
import { FaVideo } from 'react-icons/fa';
import { technologies } from '../data';

export function TechnologySection() {
  return (
    <section className="py-24 px-4 bg-linear-to-b from-gray-950 via-emerald-950 to-gray-950">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-medium mb-6">
              Cutting-Edge Technology
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Data-Driven Instruction
            </h2>
            <p className="text-gray-300 mb-8 leading-relaxed text-lg">
              We utilize the latest golf technology to provide objective feedback 
              and accelerate your improvement. Our investment in technology means 
              you get precise, actionable data about your game.
            </p>

            <div className="space-y-4">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-2 h-2 rounded-full bg-emerald-400 mt-2 shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold">{tech.name}</h4>
                    <p className="text-gray-400 text-sm">{tech.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-emerald-900/50 to-gray-900/50 border border-white/10 p-8">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl" />
              
              <div className="relative">
                <FaVideo className="w-16 h-16 text-emerald-400 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">
                  See Your Swing Like Never Before
                </h3>
                <p className="text-gray-300 mb-6">
                  Our video analysis system breaks down your swing frame by frame, 
                  comparing it to tour professionals and identifying exactly where 
                  improvements can be made.
                </p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="text-2xl font-bold text-emerald-400">240</div>
                    <div className="text-xs text-gray-400">FPS Capture</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="text-2xl font-bold text-emerald-400">4K</div>
                    <div className="text-xs text-gray-400">Resolution</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="text-2xl font-bold text-emerald-400">Tour</div>
                    <div className="text-xs text-gray-400">Comparisons</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
