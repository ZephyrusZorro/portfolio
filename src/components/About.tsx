'use client';

import Image from 'next/image';
import { SectionLabel } from './SectionLabel';
import { MapPin, GraduationCap, Award } from 'lucide-react';
import { motion } from 'framer-motion';

export function About() {
  return (
    <section id="about" className="py-24 max-w-[1400px] mx-auto px-6 md:px-10 border-t border-[var(--border-color)]">
      <div className="space-y-12">
        <SectionLabel number="06" label="ABOUT" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column — Founder Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[3/4] max-w-md mx-auto lg:max-w-none rounded-2xl border border-[var(--border-color)] overflow-hidden shadow-lg bg-[var(--bg-card)] p-3">
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                <Image
                  src="/assets/faris-profile.jpg"
                  alt="Faris Ruknuddin"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Column — Founder Overview & Academic Credentials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--text-primary)]">
                Faris Ruknuddin
              </h2>
              <div className="font-mono text-sm text-[var(--text-secondary)] font-semibold flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-500" />
                <span>Bhatkal, Karnataka, India</span>
              </div>
            </div>

            {/* Profile Copy */}
            <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed font-normal">
              I&apos;m an AI & ML engineer focused on building software systems that connect intelligent models with real-world business workflows. My work sits at the intersection of backend architecture, SaaS engineering, cloud infrastructure, and AI automation.
            </p>

            {/* Education & Academic Card */}
            <div className="p-6 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] space-y-4 font-mono text-xs shadow-sm">
              <div className="flex items-center justify-between border-b border-[var(--border-color)] pb-3">
                <div className="flex items-center gap-2 font-bold text-[var(--text-primary)]">
                  <GraduationCap className="w-4 h-4 text-[var(--accent-blue)]" />
                  <span>ACADEMIC BACKGROUND</span>
                </div>
                <span className="text-[var(--text-tertiary)]">EXPECTED 2027</span>
              </div>

              <div className="space-y-1">
                <div className="text-sm font-bold text-[var(--text-primary)]">
                  B.E. in Artificial Intelligence & Machine Learning
                </div>
                <div className="text-[var(--text-secondary)]">
                  Anjuman Institute of Technology and Management
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between border-t border-[var(--border-color)] text-[var(--text-secondary)]">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-amber-500" />
                  <span>ACADEMIC GPA</span>
                </div>
                <span className="font-bold text-base text-[var(--text-primary)]">8.5 / 10</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
