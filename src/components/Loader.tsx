'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Loader() {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const startTime = Date.now();
    const duration = 1200; // 1.2s

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(Math.floor((elapsed / duration) * 100), 100);
      setProgress(pct);

      if (pct >= 100) {
        clearInterval(timer);
        setTimeout(() => setLoading(false), 200);
      }
    }, 30);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="fixed inset-0 z-[10000] bg-[var(--bg-primary)] flex flex-col items-center justify-center p-6"
        >
          <div className="max-w-xs w-full flex flex-col items-center space-y-6">
            <div className="font-mono text-3xl font-extrabold tracking-tighter text-[var(--text-primary)]">
              FARIS.
            </div>

            <div className="w-full space-y-2">
              <div className="flex justify-between items-center font-mono text-[10px] tracking-widest text-[var(--text-tertiary)] uppercase">
                <span>INITIALIZING SYSTEM</span>
                <span>{progress}%</span>
              </div>
              <div className="h-[2px] w-full bg-[var(--border-color)] overflow-hidden rounded-full">
                <motion.div
                  className="h-full bg-[var(--text-primary)]"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: 'linear' }}
                />
              </div>
            </div>

            <div className="font-mono text-[9px] tracking-widest text-[var(--text-tertiary)] uppercase">
              BUILD 2026.08 // BHATKAL, IN
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
