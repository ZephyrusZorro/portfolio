'use client';

import { useState, useEffect } from 'react';

export function Footer() {
  const [time, setTime] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      };
      setTime(now.toLocaleTimeString('en-US', options) + ' IST');
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="py-12 border-t border-[var(--border-color)] bg-[var(--bg-primary)]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-6 font-mono text-xs text-[var(--text-tertiary)]">
        {/* Left */}
        <div className="flex items-center gap-4">
          <span className="font-extrabold text-base tracking-tighter text-[var(--text-primary)]">
            FARIS.
          </span>
          <span className="hidden sm:inline">•</span>
          <span className="hidden sm:inline">Bhatkal, Karnataka, India</span>
        </div>

        {/* Center */}
        <div className="tracking-widest uppercase text-[var(--text-secondary)] font-bold">
          AI &nbsp;×&nbsp; BACKEND &nbsp;×&nbsp; SAAS
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          {mounted && time && (
            <span suppressHydrationWarning className="text-emerald-500 font-semibold">
              {time}
            </span>
          )}
          <span>© 2026 FARIS. BUILT WITH PRECISION.</span>
        </div>
      </div>
    </footer>
  );
}
