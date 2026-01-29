'use client';

import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-24 px-4 bg-linear-to-b from-gray-950 via-emerald-950 to-gray-950">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden"
        >
          {/* Background - darker, more subtle gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/80 to-gray-900/90" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.15),transparent)]" />
          
          {/* Subtle border */}
          <div className="absolute inset-0 rounded-2xl border border-white/10" />
          
          <div className="relative p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto text-lg">
              Whether you&apos;re looking for junior programs, group clinics, or 
              one-on-one instruction, we have the perfect program for you.
            </p>
            
            <motion.a
              href="/#pricing"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-xl font-bold transition-colors shadow-lg shadow-emerald-900/50"
            >
              View Pricing & Book
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
