'use client';

import Image from 'next/image';
import { SectionLabel } from './SectionLabel';
import { ArchitectureVisual } from './ArchitectureVisual';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 max-w-[1400px] mx-auto px-6 md:px-10 relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column — Editorial Text */}
        <div className="lg:col-span-7 space-y-8">
          <SectionLabel number="01" label="PROFILE" />

          {/* Headline with Staggered Multi-line Reveal */}
          <div className="space-y-1 font-sans text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[var(--text-primary)] leading-[1.05]">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Faris —
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              SaaS Builder,
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Backend Architect
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-[var(--text-secondary)]"
            >
              & AI Specialist.
            </motion.h1>
          </div>

          {/* Sub-headline */}
          <p className="text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl font-normal leading-relaxed">
            I architect scalable backends, engineer custom SaaS platforms, and orchestrate complex AI workflows from scratch.
          </p>

          {/* Specialization Technical Banner */}
          <div className="p-5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] space-y-3 font-mono">
            <div className="text-[10px] tracking-widest text-[var(--text-tertiary)] uppercase font-bold flex items-center justify-between">
              <span>TECHNICAL SPECIALIZATION</span>
              <span className="text-[var(--accent-blue)]">CORE DOMAIN</span>
            </div>
            <div className="text-xs sm:text-sm font-bold text-[var(--text-primary)] tracking-wide">
              ADVANCED PROMPT ENGINEERING &nbsp;×&nbsp; AI CONTEXT ORCHESTRATION &nbsp;×&nbsp; PRODUCTION SYSTEMS
            </div>
            <p className="text-xs text-[var(--text-secondary)] font-normal border-t border-[var(--border-color)] pt-2.5">
              Turning nondeterministic LLMs into reliable, production-grade business engines.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#projects"
              className="px-7 py-3.5 rounded-full bg-[var(--text-primary)] text-[var(--bg-primary)] font-mono text-xs font-bold tracking-wider hover:opacity-90 transition-all duration-200 inline-flex items-center gap-2 shadow-sm hover:scale-[1.02]"
            >
              <span>VIEW PROJECTS</span>
              <ArrowDown className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="px-7 py-3.5 rounded-full border border-[var(--border-color)] bg-transparent text-[var(--text-primary)] font-mono text-xs font-bold tracking-wider hover:border-[var(--text-primary)] transition-all duration-200 inline-flex items-center gap-2"
            >
              <span>GET IN TOUCH</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Footer location tag */}
          <div className="pt-4 border-t border-[var(--border-color)] flex items-center gap-4 font-mono text-[11px] text-[var(--text-tertiary)] uppercase tracking-wider">
            <span>BASED IN BHATKAL, INDIA</span>
            <span>•</span>
            <span className="text-emerald-500 font-semibold">AVAILABLE FOR SELECT PROJECTS</span>
          </div>
        </div>

        {/* Right Column — Architecture Diagram + Founder Photo */}
        <div className="lg:col-span-5 space-y-6">
          {/* Living Architecture Diagram */}
          <ArchitectureVisual />

          {/* Profile Card Overlay */}
          <div className="p-5 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] flex items-center gap-4 shadow-sm">
            <div className="relative w-16 h-16 rounded-xl overflow-hidden border border-[var(--border-color)] flex-shrink-0">
              <Image
                src="/assets/faris-profile.jpg"
                alt="Faris Ruknuddin"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <div className="space-y-1 font-mono">
              <div className="text-xs font-bold text-[var(--text-primary)]">
                Faris Ruknuddin
              </div>
              <div className="text-[11px] text-[var(--text-secondary)]">
                Founder @ Omnimate & AI Specialist
              </div>
              <div className="text-[10px] text-[var(--text-tertiary)] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
                <span>B.E. AI & ML (Expected 2027)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
