'use client';

import { useState } from 'react';
import { SectionLabel } from './SectionLabel';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { projects, Project } from '@/data/projects';

export function ProjectGrid() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 max-w-[1400px] mx-auto px-6 md:px-10 border-t border-[var(--border-color)]">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="space-y-4 max-w-2xl">
          <SectionLabel number="03" label="SELECTED WORK" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)] leading-tight">
            Built From<br />
            Zero → Production.
          </h2>
          <p className="text-base text-[var(--text-secondary)]">
            A selection of SaaS systems, AI workflows, infrastructure experiments, and engineering projects.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 auto-rows-[minmax(460px,auto)]">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={(proj) => setSelectedProject(proj)}
            />
          ))}
        </div>
      </div>

      {/* Engineering Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
