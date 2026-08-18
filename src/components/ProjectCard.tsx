'use client';

import { useState, useRef, MouseEvent } from 'react';
import { Project } from '@/data/projects';
import { StatusBadge } from './StatusBadge';
import { TechBadge } from './TechBadge';
import { ProjectWireframe } from './ProjectWireframe';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export function ProjectCard({ project, onSelect }: ProjectCardProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const bentoSpan = {
    large: 'lg:col-span-8 lg:row-span-2',
    wide: 'lg:col-span-12',
    medium: 'lg:col-span-6',
    small: 'lg:col-span-4',
  }[project.gridSize];

  return (
    <motion.div
      ref={cardRef}
      data-cursor="card"
      onClick={() => onSelect(project)}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={`${bentoSpan} relative rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] p-6 sm:p-8 flex flex-col justify-between overflow-hidden cursor-pointer group hover:border-[var(--border-hover)] transition-all duration-300 shadow-sm hover:shadow-md`}
    >
      {/* Subtle Mouse Follow Glow */}
      {isHovered && (
        <div
          className="pointer-events-none absolute -inset-px opacity-30 transition-opacity duration-300"
          style={{
            background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, var(--border-hover), transparent 80%)`,
          }}
        />
      )}

      {/* Header Metadata */}
      <div className="space-y-4 z-10">
        <div className="flex items-center justify-between font-mono text-xs text-[var(--text-tertiary)]">
          <span className="font-bold tracking-wider">{project.number}</span>
          <span>{project.year}</span>
        </div>

        <div className="flex items-center justify-between">
          <StatusBadge status={project.status} type={project.statusType} />
          <span className="font-mono text-[10px] uppercase text-[var(--text-tertiary)] tracking-widest">
            {project.category}
          </span>
        </div>
      </div>

      {/* Wireframe Graphic Box */}
      <div className="my-6 w-full h-44 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] overflow-hidden transition-transform duration-300 group-hover:scale-[1.01]">
        <ProjectWireframe type={project.visualType} />
      </div>

      {/* Content Body */}
      <div className="space-y-4 z-10 mt-auto">
        <h3 className="font-sans text-2xl font-bold tracking-tight text-[var(--text-primary)] group-hover:text-[var(--accent-blue)] transition-colors duration-200">
          {project.title}
        </h3>

        <p className="text-sm text-[var(--text-secondary)] line-clamp-2 leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 pt-1">
          {project.stack.slice(0, 4).map((tech) => (
            <TechBadge key={tech} name={tech} />
          ))}
          {project.stack.length > 4 && (
            <span className="font-mono text-[10px] text-[var(--text-tertiary)] self-center">
              +{project.stack.length - 4} MORE
            </span>
          )}
        </div>

        {/* CTA Case Study Link */}
        <div className="pt-4 border-t border-[var(--border-color)] flex items-center justify-between font-mono text-xs font-bold text-[var(--text-primary)]">
          <span className="group-hover:text-[var(--accent-blue)] transition-colors">
            VIEW CASE STUDY
          </span>
          <div className="flex items-center gap-1 group-hover:translate-x-1 transition-transform duration-200 text-[var(--accent-blue)]">
            <ArrowRight className="w-4 h-4" />
            <ArrowRight className="w-4 h-4 -ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
