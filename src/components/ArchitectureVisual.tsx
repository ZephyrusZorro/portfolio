'use client';

import { motion } from 'framer-motion';

export function ArchitectureVisual() {
  const nodes = [
    { id: 'input', label: 'INPUT STREAM', type: 'Audio / Voice / Webhook', x: 20, y: 15 },
    { id: 'context', label: 'CONTEXT ENGINE', type: 'Vector Store & Prompts', x: 50, y: 30 },
    { id: 'model', label: 'LLM CORE', type: 'Deterministic LLM Cluster', x: 80, y: 15 },
    { id: 'orchestration', label: 'ORCHESTRATION', type: 'State Machine & Retry Rules', x: 35, y: 65 },
    { id: 'automation', label: 'AUTOMATION PIPELINE', type: 'FastAPI / Express / n8n', x: 65, y: 80 },
    { id: 'output', label: 'PRODUCTION OUTPUT', type: 'Calendar / CRM / Database', x: 90, y: 65 },
  ];

  return (
    <div className="w-full relative rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] p-6 shadow-sm overflow-hidden group">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[radial-gradient(var(--border-color)_1px,transparent_1px)] [background-size:16px_16px] opacity-30" />

      {/* Header Bar */}
      <div className="flex items-center justify-between border-b border-[var(--border-color)] pb-4 mb-4 font-mono text-[11px] text-[var(--text-tertiary)]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[var(--accent-blue)]" />
          <span className="font-bold text-[var(--text-primary)]">SYSTEM ARCHITECTURE MATRIX</span>
        </div>
        <div className="flex items-center gap-3">
          <span>LAT 13.967, LON 74.530</span>
          <span className="hidden sm:inline text-emerald-500">● RUNNING</span>
        </div>
      </div>

      {/* SVG Diagram Canvas */}
      <div className="relative w-full h-[280px] sm:h-[320px]">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          {/* Connection Lines */}
          <path
            d="M 20 20 L 50 35 M 50 35 L 80 20 M 50 35 L 35 65 M 80 20 L 90 65 M 35 65 L 65 80 M 65 80 L 90 65"
            stroke="var(--border-color)"
            strokeWidth="0.5"
            fill="none"
            strokeDasharray="2 2"
          />

          {/* Animated Flow Lines */}
          <motion.path
            d="M 20 20 L 50 35 L 80 20 L 90 65"
            stroke="var(--accent-blue)"
            strokeWidth="0.8"
            fill="none"
            initial={{ pathLength: 0, opacity: 0.2 }}
            animate={{ pathLength: [0, 1, 0], opacity: [0.2, 0.8, 0.2] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
          />

          <motion.path
            d="M 50 35 L 35 65 L 65 80 L 90 65"
            stroke="var(--text-primary)"
            strokeWidth="0.8"
            fill="none"
            initial={{ pathLength: 0, opacity: 0.2 }}
            animate={{ pathLength: [0, 1, 0], opacity: [0.2, 0.8, 0.2] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'linear', delay: 1 }}
          />
        </svg>

        {/* Nodes Overlay */}
        {nodes.map((node) => (
          <motion.div
            key={node.id}
            style={{ left: `${node.x}%`, top: `${node.y}%` }}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="absolute -translate-x-1/2 -translate-y-1/2 p-2.5 rounded-lg border border-[var(--border-color)] bg-[var(--bg-primary)] shadow-sm hover:border-[var(--text-primary)] transition-colors duration-200 cursor-pointer min-w-[110px] sm:min-w-[140px]"
          >
            <div className="flex items-center gap-1.5 mb-1 font-mono text-[9px] sm:text-[10px] font-bold text-[var(--text-primary)] uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--text-primary)]" />
              <span>{node.label}</span>
            </div>
            <div className="font-mono text-[8px] sm:text-[9px] text-[var(--text-tertiary)]">
              {node.type}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer Banner */}
      <div className="mt-4 pt-3 border-t border-[var(--border-color)] flex flex-col sm:flex-row items-start sm:items-center justify-between font-mono text-[10px] text-[var(--text-secondary)] gap-2">
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--text-primary)] font-bold">
            ORCHESTRATION PIPELINE
          </span>
          <span>Determinstic output validation active</span>
        </div>
        <div className="text-[var(--text-tertiary)]">
          BUILD // 2026.08
        </div>
      </div>
    </div>
  );
}
