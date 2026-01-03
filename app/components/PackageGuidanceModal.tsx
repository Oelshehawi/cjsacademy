'use client';

import { AnimatePresence, motion } from 'motion/react';

interface PackageGuidanceModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectPackage: (packageName: string, packageType: string) => void;
}

const PackageGuidanceModal = ({
  isOpen,
  onClose,
  onSelectPackage,
}: PackageGuidanceModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className='fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4'
        >
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className='bg-white/10 backdrop-blur-xl rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-white/20'
          >
            <div className='text-center mb-8'>
              <h2 className='text-3xl font-bold text-white mb-2'>
                Which Package Is Right for You?
              </h2>
              <p className='text-emerald-400/80'>
                Select the option that best describes you
              </p>
            </div>

            <div className='space-y-4'>
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  onSelectPackage('Game Essentials Lesson', 'Private');
                  onClose();
                }}
                className='w-full bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-emerald-500/30 cursor-pointer text-left group'
              >
                <h4 className='text-lg font-semibold text-emerald-300 mb-2 group-hover:text-emerald-200'>
                  New to golf or looking for a quick tune-up?
                </h4>
                <p className='text-emerald-200/90 mb-3'>
                  The{' '}
                  <span className='font-semibold text-white'>
                    Game Essentials Lesson
                  </span>{' '}
                  is perfect for gaining clarity, confidence, and immediate
                  improvement.
                </p>
                <div className='flex items-center justify-between'>
                  <span className='text-white font-bold text-xl'>$170</span>
                  <span className='text-emerald-400 text-sm'>Select →</span>
                </div>
              </motion.button>

              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  onSelectPackage('Total Game Tune-Up', 'Private');
                  onClose();
                }}
                className='w-full bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-emerald-500/30 cursor-pointer text-left group'
              >
                <h4 className='text-lg font-semibold text-emerald-300 mb-2 group-hover:text-emerald-200'>
                  Want to improve multiple areas of your game?
                </h4>
                <p className='text-emerald-200/90 mb-3'>
                  The{' '}
                  <span className='font-semibold text-white'>
                    Total Game Tune-Up
                  </span>{' '}
                  offers flexibility and structure, allowing you to build skills
                  across the full swing, short game, and putting.
                </p>
                <div className='flex items-center justify-between'>
                  <span className='text-white font-bold text-xl'>$750</span>
                  <span className='text-emerald-400 text-sm'>Select →</span>
                </div>
              </motion.button>

              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  onSelectPackage(
                    'Complete Player Development Program',
                    'Private'
                  );
                  onClose();
                }}
                className='w-full bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-emerald-500/30 cursor-pointer text-left group'
              >
                <h4 className='text-lg font-semibold text-emerald-300 mb-2 group-hover:text-emerald-200'>
                  Committed to long-term improvement and consistency?
                </h4>
                <p className='text-emerald-200/90 mb-3'>
                  The{' '}
                  <span className='font-semibold text-white'>
                    Complete Player Development Program
                  </span>{' '}
                  is ideal for golfers ready to invest in sustained progress,
                  smarter course management, and lasting results.
                </p>
                <div className='flex items-center justify-between'>
                  <span className='text-white font-bold text-xl'>$1,400</span>
                  <span className='text-emerald-400 text-sm'>Select →</span>
                </div>
              </motion.button>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className='bg-emerald-800/20 backdrop-blur-sm rounded-xl p-6 border border-emerald-500/30 text-center mt-6'
              >
                <p className='text-emerald-200/90'>
                  Not sure where to start? Begin with a single lesson, and
                  we&apos;ll build a plan that fits your goals.
                </p>
              </motion.div>
            </div>

            <div className='text-center mt-8'>
              <button
                onClick={onClose}
                className='text-emerald-400/70 hover:text-emerald-300/80 px-6 py-2 text-sm transition-colors cursor-pointer'
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PackageGuidanceModal;
