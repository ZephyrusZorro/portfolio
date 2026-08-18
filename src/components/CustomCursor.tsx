'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorState, setCursorState] = useState<'default' | 'hover' | 'card'>('default');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show custom cursor on fine pointer devices (desktop)
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cardElement = target.closest('[data-cursor="card"]');
      const interactiveElement = target.closest('a, button, [data-cursor="hover"]');

      if (cardElement) {
        setCursorState('card');
      } else if (interactiveElement) {
        setCursorState('hover');
      } else {
        setCursorState('default');
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  const variants = {
    default: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      height: 16,
      width: 16,
      backgroundColor: 'var(--text-primary)',
      opacity: 0.4,
      mixBlendMode: 'difference' as const
    },
    hover: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      height: 40,
      width: 40,
      backgroundColor: 'var(--text-primary)',
      opacity: 0.15,
      mixBlendMode: 'difference' as const
    },
    card: {
      x: mousePosition.x - 28,
      y: mousePosition.y - 28,
      height: 56,
      width: 56,
      backgroundColor: 'var(--text-primary)',
      opacity: 0.9,
      mixBlendMode: 'normal' as const
    }
  };

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] hidden lg:flex items-center justify-center text-xs font-mono font-bold tracking-widest text-[var(--bg-primary)] shadow-sm"
      variants={variants}
      animate={cursorState}
      transition={{ type: 'spring', damping: 25, stiffness: 250, mass: 0.4 }}
    >
      {cursorState === 'card' && 'VIEW'}
    </motion.div>
  );
}
