'use client';

import { SectionLabel } from './SectionLabel';
import { TechBadge } from './TechBadge';
import { experiences } from '@/data/experience';
import { motion } from 'framer-motion';

export function Experience() {
  return (
    <section id="experience" className="py-24 max-w-[1400px] mx-auto px-6 md:px-10 border-t border-[var(--border-color)]">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="space-y-4 max-w-2xl">
          <SectionLabel number="02" label="EXPERIENCE" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)] leading-tight">
            Systems I&apos;ve Built<br />Around Real Problems.
          </h2>
          <p className="text-base text-[var(--text-secondary)]">
            A chronological timeline of roles, architectures engineered, and operational impact delivered.
          </p>
        </div>

        {/* Experience Timeline Table */}
        <div className="divide-y divide-[var(--border-color)] border-t border-b border-[var(--border-color)]">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="py-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start group relative hover:bg-[var(--bg-secondary)]/50 transition-colors duration-300 px-4 md:px-6 rounded-xl"
            >
              {/* Left Accent Bar on Hover */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[var(--text-primary)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-l-xl" />

              {/* Period & Status */}
              <div className="lg:col-span-3 space-y-2 font-mono">
                <div className="text-xs font-bold text-[var(--text-tertiary)] tracking-widest">
                  {exp.period}
                </div>
                <div className="flex items-center gap-2">
                  {exp.isActive ? (
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold tracking-wider">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 status-dot-pulse" />
                      ACTIVE
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-zinc-500/10 text-zinc-500 text-[10px] font-bold tracking-wider">
                      COMPLETED
                    </span>
                  )}
                </div>
              </div>

              {/* Role & Company */}
              <div className="lg:col-span-3 space-y-1">
                <h3 className="font-sans text-xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-blue)] transition-colors duration-200">
                  {exp.company}
                </h3>
                <div className="font-mono text-xs font-semibold text-[var(--text-secondary)] tracking-wider">
                  {exp.role}
                </div>
              </div>

              {/* Description Bullets & Tech Tags */}
              <div className="lg:col-span-6 space-y-6">
                <ul className="space-y-2 text-sm text-[var(--text-secondary)] font-normal leading-relaxed">
                  {exp.description.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="text-[var(--text-tertiary)] mt-1.5 text-xs">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.technologies.map((tech) => (
                    <TechBadge key={tech} name={tech} />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
