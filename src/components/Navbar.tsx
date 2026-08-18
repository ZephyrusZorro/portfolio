'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ThemeToggle } from './ThemeToggle';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { label: 'PROJECTS', href: '#projects' },
    { label: 'EXPERIENCE', href: '#experience' },
    { label: 'SKILLS', href: '#skills' },
    { label: 'PHILOSOPHY', href: '#philosophy' },
    { label: 'CONTACT', href: '#contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${
          scrolled
            ? 'py-3 bg-[var(--bg-primary)]/85 backdrop-blur-xl border-b border-[var(--border-color)] shadow-sm'
            : 'py-5 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-8 h-8 flex items-center justify-center">
              <Image
                src="/assets/faris-logo.png"
                alt="Faris Monogram"
                width={32}
                height={32}
                className="object-contain transition-transform duration-300 group-hover:scale-105 dark:invert"
              />
            </div>
            <span className="font-mono font-extrabold text-xl tracking-tight text-[var(--text-primary)]">
              FARIS.
            </span>
          </a>

          {/* Status Badge - Hidden on small mobile */}
          <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--border-color)] font-mono text-xs text-[var(--text-secondary)]">
            <span className="w-2 h-2 rounded-full bg-[var(--green-dot)] status-dot-pulse" />
            <span>Available for AI & Backend Projects</span>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8 font-mono text-xs tracking-wider text-[var(--text-secondary)]">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="hover:text-[var(--text-primary)] transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA & Theme Toggle */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <a
              href="mailto:farisruknuddin@gmail.com"
              className="px-5 py-2 rounded-full bg-[var(--text-primary)] text-[var(--bg-primary)] font-mono text-xs font-semibold tracking-wider hover:opacity-90 transition-opacity duration-200 inline-flex items-center gap-1.5"
            >
              <span>BOOK A CALL</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button & Theme Toggle */}
          <div className="flex md:hidden items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[var(--text-primary)] border border-[var(--border-color)] rounded-lg"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[999] bg-[var(--bg-primary)] pt-24 px-6 flex flex-col justify-between pb-12 md:hidden"
          >
            <div className="flex flex-col space-y-6">
              {navItems.map((item, idx) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-mono text-2xl font-bold tracking-wider text-[var(--text-primary)] flex items-center justify-between border-b border-[var(--border-color)] pb-4"
                >
                  <span>{item.label}</span>
                  <span className="text-xs text-[var(--text-tertiary)]">0{idx + 1}</span>
                </a>
              ))}
            </div>

            <div className="flex flex-col space-y-4">
              <div className="flex items-center gap-2 font-mono text-xs text-[var(--text-secondary)]">
                <span className="w-2 h-2 rounded-full bg-[var(--green-dot)] status-dot-pulse" />
                <span>Available for AI & Backend Projects</span>
              </div>
              <a
                href="mailto:farisruknuddin@gmail.com"
                className="w-full py-4 rounded-full bg-[var(--text-primary)] text-[var(--bg-primary)] font-mono text-center font-bold tracking-wider text-sm flex items-center justify-center gap-2"
              >
                <span>BOOK A CALL</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
