'use client';

import { SectionLabel } from './SectionLabel';
import { motion } from 'framer-motion';

export function Philosophy() {
  const principles = [
    {
      number: '01',
      title: 'BUILD FROM FIRST PRINCIPLES',
      description: 'Understand the underlying operational problem thoroughly before selecting frameworks or cloud infrastructure.'
    },
    {
      number: '02',
      title: 'AUTOMATE THE REPETITIVE',
      description: 'If a business workflow or administrative pipeline can be systematized, it should never depend on manual human labor.'
    },
    {
      number: '03',
      title: 'AI NEEDS ENGINEERING',
      description: 'LLMs are powerful, but production AI requires context window orchestration, JSON validation, retry rules, and deterministic system design.'
    }
  ];

  return (
    <section id="philosophy" className="py-24 max-w-[1400px] mx-auto px-6 md:px-10 border-t border-[var(--border-color)]">
      <div className="space-y-16">
        {/* Section Header & Editorial Statement */}
        <div className="space-y-6">
          <SectionLabel number="05" label="PHILOSOPHY" />
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[var(--text-primary)] leading-[1.08] max-w-4xl">
            I don&apos;t just build features.<br />
            I build systems that make<br />
            <span className="text-[var(--text-secondary)]">the feature possible.</span>
          </h2>
        </div>

        {/* 3 Principles Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {principles.map((item, idx) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              className="p-8 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] space-y-4 hover:border-[var(--text-primary)] transition-colors duration-300 shadow-sm flex flex-col justify-between"
            >
              <div className="space-y-3 font-mono">
                <div className="text-xs font-bold text-[var(--text-tertiary)] tracking-widest">
                  {item.number} // PRINCIPLE
                </div>
                <h3 className="text-lg font-extrabold tracking-wide text-[var(--text-primary)] uppercase">
                  {item.title}
                </h3>
              </div>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed font-normal pt-2 border-t border-[var(--border-color)]">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
