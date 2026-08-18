import { Hero } from '@/components/Hero';
import { Experience } from '@/components/Experience';
import { ProjectGrid } from '@/components/ProjectGrid';
import { Skills } from '@/components/Skills';
import { Philosophy } from '@/components/Philosophy';
import { About } from '@/components/About';
import { Metrics } from '@/components/Metrics';
import { Contact } from '@/components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Experience />
      <ProjectGrid />
      <Skills />
      <Philosophy />
      <About />
      <Metrics />
      <Contact />
    </>
  );
}
