'use client';

import { motion } from 'framer-motion';

export function Metrics() {
  const metrics = [
    { value: '09+', label: 'PROJECTS BUILT', sub: 'From Zero to Production' },
    { value: '04', label: 'PROFESSIONAL ROLES', sub: 'Founder & Internships' },
    { value: '30%', label: 'EFFICIENCY IMPROVEMENT', sub: 'Client Automation' },
    { value: '48H', label: 'HACKATHON BUILD', sub: 'Carbon Calculator' },
  ];

  return (
    <section className="py-20 max-w-[1400px] mx-auto px-6 md:px-10 border-t border-[var(--border-color)]">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {metrics.map((item, idx) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="p-6 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] space-y-2 hover:border-[var(--text-primary)] transition-colors duration-300 shadow-sm"
          >
            <div className="font-mono text-4xl sm:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight">
              {item.value}
            </div>
            <div className="font-mono text-xs font-bold text-[var(--text-primary)] tracking-wider uppercase">
              {item.label}
            </div>
            <div className="font-mono text-[10px] text-[var(--text-tertiary)] uppercase">
              {item.sub}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
