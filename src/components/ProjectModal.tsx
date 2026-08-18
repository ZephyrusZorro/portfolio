'use client';

import { useEffect } from 'react';
import { Project } from '@/data/projects';
import { StatusBadge } from './StatusBadge';
import { TechBadge } from './TechBadge';
import { X, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[5000] flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/60 backdrop-blur-md cursor-pointer"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-2xl shadow-2xl z-10 p-6 sm:p-8 md:p-10 space-y-8 no-scrollbar"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between border-b border-[var(--border-color)] pb-6">
            <div className="space-y-1 font-mono">
              <div className="text-xs font-bold text-[var(--text-tertiary)] tracking-widest uppercase">
                {project.number}
              </div>
              <div className="flex items-center gap-3">
                <StatusBadge status={project.status} type={project.statusType} />
                <span className="text-xs text-[var(--text-tertiary)]">{project.year}</span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--text-primary)] transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Title & Overview */}
          <div className="space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--text-primary)]">
              {project.title}
            </h2>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {project.stack.map((tech) => (
                <TechBadge key={tech} name={tech} />
              ))}
            </div>
          </div>

          {/* Detailed Engineering Case Study */}
          <div className="space-y-8 border-t border-[var(--border-color)] pt-8">
            {/* Problem Statement */}
            <div className="space-y-2">
              <h3 className="font-mono text-xs font-bold tracking-widest text-[var(--text-tertiary)] uppercase flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-rose-500 rounded-full inline-block" />
                <span>01 // THE PROBLEM</span>
              </h3>
              <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed bg-[var(--bg-secondary)] p-4 rounded-xl border border-[var(--border-color)]">
                {project.caseStudy.problem}
              </p>
            </div>

            {/* Architectural Approach */}
            <div className="space-y-2">
              <h3 className="font-mono text-xs font-bold tracking-widest text-[var(--text-tertiary)] uppercase flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[var(--accent-blue)] rounded-full inline-block" />
                <span>02 // ARCHITECTURAL APPROACH</span>
              </h3>
              <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                {project.caseStudy.approach}
              </p>
            </div>

            {/* Architecture Pipeline Steps */}
            <div className="space-y-3">
              <h3 className="font-mono text-xs font-bold tracking-widest text-[var(--text-tertiary)] uppercase">
                03 // SYSTEM PIPELINE FLOW
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
                {project.caseStudy.architecture.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg border border-[var(--border-color)] bg-[var(--bg-card)] flex items-start gap-2.5 text-[var(--text-primary)]"
                  >
                    <span className="text-[var(--text-tertiary)] font-bold">{idx + 1}.</span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Implementation Details */}
            <div className="space-y-2">
              <h3 className="font-mono text-xs font-bold tracking-widest text-[var(--text-tertiary)] uppercase flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-purple-500 rounded-full inline-block" />
                <span>04 // TECHNICAL IMPLEMENTATION</span>
              </h3>
              <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                {project.caseStudy.implementation}
              </p>
            </div>

            {/* Result & Impact */}
            <div className="space-y-2">
              <h3 className="font-mono text-xs font-bold tracking-widest text-[var(--text-tertiary)] uppercase flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full inline-block" />
                <span>05 // DELIVERED RESULTS & METRICS</span>
              </h3>
              <div className="p-4 rounded-xl border border-emerald-500/20 bg-emerald-500/5 text-emerald-950 dark:text-emerald-300 font-semibold text-sm sm:text-base flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span>{project.caseStudy.result}</span>
              </div>
            </div>

            {/* Key Engineering Lessons */}
            <div className="space-y-2">
              <h3 className="font-mono text-xs font-bold tracking-widest text-[var(--text-tertiary)] uppercase">
                06 // ARCHITECTURAL TAKEAWAY
              </h3>
              <p className="text-xs sm:text-sm font-mono text-[var(--text-secondary)] italic border-l-2 border-[var(--text-primary)] pl-4 py-1">
                &ldquo;{project.caseStudy.lessons}&rdquo;
              </p>
            </div>
          </div>

          {/* Modal Footer CTA */}
          <div className="pt-6 border-t border-[var(--border-color)] flex items-center justify-between">
            <span className="font-mono text-xs text-[var(--text-tertiary)]">
              FARIS RUKNUDDIN // CASE STUDY
            </span>
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-full bg-[var(--text-primary)] text-[var(--bg-primary)] font-mono text-xs font-bold tracking-wider hover:opacity-90 transition-opacity cursor-pointer flex items-center gap-2"
            >
              <span>CLOSE CASE STUDY</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
