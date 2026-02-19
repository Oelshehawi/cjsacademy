'use client';

import { motion } from 'motion/react';
import { IconType } from 'react-icons';

interface ProgramCardProps {
  icon: IconType;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  color: string;
  index: number;
}

export function ProgramCard({
  icon: Icon,
  title,
  subtitle,
  description,
  features,
  color,
  index,
}: ProgramCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="relative h-full bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:border-emerald-500/30 transition-all duration-500">
        {/* Gradient header */}
        <div className={`h-2 bg-gradient-to-r ${color}`} />
        
        <div className="p-8">
          {/* Icon and title */}
          <div className="flex items-start gap-4 mb-6">
            <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg`}>
              <Icon className="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-1">{title}</h3>
              <p className="text-emerald-400 text-sm font-medium">{subtitle}</p>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-300 mb-6 leading-relaxed">{description}</p>

          {/* Features */}
          <ul className="space-y-3">
            {features.map((feature, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-300">
                <svg
                  className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
