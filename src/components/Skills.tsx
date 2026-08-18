'use client';

import { SectionLabel } from './SectionLabel';
import { skillCategories } from '@/data/skills';
import { Server, Brain, Cloud, LayoutGrid } from 'lucide-react';
import { motion } from 'framer-motion';

export function Skills() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Server':
        return <Server className="w-5 h-5 text-[var(--accent-blue)]" />;
      case 'Brain':
        return <Brain className="w-5 h-5 text-purple-500" />;
      case 'Cloud':
        return <Cloud className="w-5 h-5 text-emerald-500" />;
      case 'LayoutGrid':
        return <LayoutGrid className="w-5 h-5 text-amber-500" />;
      default:
        return <Server className="w-5 h-5 text-[var(--accent-blue)]" />;
    }
  };

  return (
    <section id="skills" className="py-24 max-w-[1400px] mx-auto px-6 md:px-10 border-t border-[var(--border-color)]">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="space-y-4 max-w-2xl">
          <SectionLabel number="04" label="SYSTEM" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)] leading-tight">
            The Stack Behind<br />
            The Systems.
          </h2>
          <p className="text-base text-[var(--text-secondary)]">
            Production-proven backend frameworks, AI context orchestration suites, and cloud infrastructure tools.
          </p>
        </div>

        {/* 4-Column Desktop Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-6 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] space-y-6 flex flex-col justify-between hover:border-[var(--border-hover)] transition-all duration-300 shadow-sm"
            >
              <div className="space-y-4">
                <div className="p-3 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] w-fit">
                  {getIcon(cat.iconName)}
                </div>

                <div className="space-y-1 font-mono">
                  <h3 className="text-sm font-extrabold tracking-wider text-[var(--text-primary)] uppercase">
                    {cat.title}
                  </h3>
                  <div className="text-[10px] text-[var(--text-tertiary)] tracking-widest uppercase">
                    {cat.subtitle}
                  </div>
                </div>
              </div>

              {/* Skill Pill Tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-[var(--border-color)]">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-xs px-3 py-1.5 rounded-full border border-[var(--border-color)] bg-[var(--bg-primary)] text-[var(--text-secondary)] hover:border-[var(--text-primary)] hover:text-[var(--text-primary)] transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
