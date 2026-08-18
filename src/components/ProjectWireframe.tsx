'use client';

import { Project } from '@/data/projects';

interface ProjectWireframeProps {
  type: Project['visualType'];
}

export function ProjectWireframe({ type }: ProjectWireframeProps) {
  switch (type) {
    case 'waveform':
      return (
        <div className="w-full h-full flex flex-col justify-between p-4 font-mono text-[10px]">
          <div className="flex items-center justify-between text-[var(--text-tertiary)]">
            <span>AUDIO INGESTION</span>
            <span className="text-emerald-500 font-bold">WHISPER STT</span>
          </div>
          <div className="flex items-end justify-between gap-1 h-12 my-2">
            {[40, 65, 30, 85, 95, 45, 70, 35, 90, 60, 80, 50, 75, 40, 95, 60].map((height, i) => (
              <div
                key={i}
                style={{ height: `${height}%` }}
                className="w-full bg-[var(--text-primary)] opacity-20 rounded-full transition-all duration-300 group-hover:opacity-60"
              />
            ))}
          </div>
          <div className="flex items-center justify-between text-[var(--text-secondary)] border-t border-[var(--border-color)] pt-2 text-[9px]">
            <span>TRANSCRIPT → TASKS</span>
            <span className="font-bold">98.4% ACCURACY</span>
          </div>
        </div>
      );

    case 'callFlow':
      return (
        <div className="w-full h-full flex items-center justify-between p-4 font-mono text-[9px]">
          <div className="p-2 rounded border border-[var(--border-color)] bg-[var(--bg-primary)] text-center">
            <div className="text-[var(--text-tertiary)]">CALL</div>
            <div className="font-bold text-[var(--text-primary)]">INBOUND</div>
          </div>
          <div className="w-8 h-px bg-[var(--border-color)] relative">
            <span className="absolute -top-1 right-0 w-1.5 h-1.5 rounded-full bg-[var(--accent-blue)]" />
          </div>
          <div className="p-2 rounded border border-[var(--accent-blue)] bg-blue-500/10 text-center">
            <div className="text-[var(--accent-blue)] font-bold">AI AGENT</div>
            <div className="text-[var(--text-secondary)]">QUALIFY</div>
          </div>
          <div className="w-8 h-px bg-[var(--border-color)] relative">
            <span className="absolute -top-1 right-0 w-1.5 h-1.5 rounded-full bg-emerald-500" />
          </div>
          <div className="p-2 rounded border border-[var(--border-color)] bg-[var(--bg-primary)] text-center">
            <div className="text-[var(--text-tertiary)]">BOOK</div>
            <div className="font-bold text-emerald-600">CALENDAR</div>
          </div>
        </div>
      );

    case 'threatGraph':
      return (
        <div className="w-full h-full flex flex-col justify-between p-4 font-mono text-[9px]">
          <div className="flex items-center justify-between text-[var(--text-tertiary)]">
            <span>TRAFFIC MONITOR</span>
            <span className="text-amber-500 font-bold">ANOMALY SCORE</span>
          </div>
          <div className="relative h-16 flex items-center justify-center">
            <svg className="w-full h-full" viewBox="0 0 100 40">
              <circle cx="20" cy="20" r="4" fill="var(--text-primary)" opacity="0.3" />
              <circle cx="50" cy="10" r="5" fill="var(--accent-blue)" opacity="0.6" />
              <circle cx="80" cy="25" r="4" fill="var(--text-primary)" opacity="0.3" />
              <circle cx="50" cy="30" r="6" fill="#F59E0B" opacity="0.8" />
              <line x1="20" y1="20" x2="50" y2="10" stroke="var(--border-color)" strokeWidth="0.5" />
              <line x1="50" y1="10" x2="80" y2="25" stroke="var(--border-color)" strokeWidth="0.5" />
              <line x1="50" y1="10" x2="50" y2="30" stroke="#F59E0B" strokeWidth="1" strokeDasharray="1 1" />
            </svg>
          </div>
          <div className="flex items-center justify-between border-t border-[var(--border-color)] pt-1 text-[8px]">
            <span>EXFILTRATION DETECTED</span>
            <span className="text-amber-500 font-bold">94.2% DETECT</span>
          </div>
        </div>
      );

    case 'dashboard':
      return (
        <div className="w-full h-full p-4 font-mono text-[9px] flex flex-col justify-between">
          <div className="flex items-center justify-between text-[var(--text-tertiary)]">
            <span>HEALTHCARE BACKBONE</span>
            <span className="font-bold text-[var(--text-primary)]">POSTGRES DB</span>
          </div>
          <div className="grid grid-cols-3 gap-2 my-2">
            <div className="p-2 border border-[var(--border-color)] rounded bg-[var(--bg-primary)]">
              <div className="text-[var(--text-tertiary)] text-[8px]">PATIENTS</div>
              <div className="font-bold text-[var(--text-primary)]">EHR DATA</div>
            </div>
            <div className="p-2 border border-[var(--border-color)] rounded bg-[var(--bg-primary)]">
              <div className="text-[var(--text-tertiary)] text-[8px]">CLINIC</div>
              <div className="font-bold text-[var(--text-primary)]">SCHEDULE</div>
            </div>
            <div className="p-2 border border-[var(--border-color)] rounded bg-[var(--bg-primary)]">
              <div className="text-[var(--text-tertiary)] text-[8px]">RBAC</div>
              <div className="font-bold text-purple-600">SECURITY</div>
            </div>
          </div>
          <div className="flex justify-between border-t border-[var(--border-color)] pt-1 text-[8px] text-[var(--text-tertiary)]">
            <span>LATENCY: &lt;10MS</span>
            <span>ACID COMPLIANT</span>
          </div>
        </div>
      );

    case 'contentPipeline':
      return (
        <div className="w-full h-full p-4 font-mono text-[8px] flex flex-col justify-between">
          <div className="flex justify-between text-[var(--text-tertiary)]">
            <span>AUTOMATION PIPELINE</span>
            <span className="text-emerald-500 font-bold">100% AUTOMATED</span>
          </div>
          <div className="flex items-center justify-between gap-1 my-2">
            {['SCRIPT', 'VOICE', 'IMAGE', 'RENDER', 'PUBLISH'].map((step, i) => (
              <div key={step} className="flex items-center gap-1">
                <div className="px-1.5 py-1 rounded bg-[var(--bg-primary)] border border-[var(--border-color)] font-bold text-[var(--text-primary)]">
                  {step}
                </div>
                {i < 4 && <span className="text-[var(--text-tertiary)]">→</span>}
              </div>
            ))}
          </div>
          <div className="flex justify-between border-t border-[var(--border-color)] pt-1 text-[8px] text-[var(--text-secondary)]">
            <span>N8N + PYTHON + FFMPEG</span>
            <span>COST: -90%</span>
          </div>
        </div>
      );

    case 'trafficDiagram':
      return (
        <div className="w-full h-full p-4 font-mono text-[9px] flex flex-col justify-between">
          <div className="flex justify-between text-[var(--text-tertiary)]">
            <span>OPENCV CAMERA FEED</span>
            <span className="text-amber-500 font-bold">DYNAMIC TIMING</span>
          </div>
          <div className="relative h-14 flex items-center justify-center my-1">
            <div className="w-16 h-16 border border-[var(--border-color)] rounded flex items-center justify-center relative">
              <span className="w-2 h-2 rounded-full bg-emerald-500 absolute top-1" />
              <span className="w-2 h-2 rounded-full bg-amber-500 absolute bottom-1" />
              <span className="text-[8px] font-bold">OPENCV</span>
            </div>
          </div>
          <div className="flex justify-between border-t border-[var(--border-color)] pt-1 text-[8px] text-[var(--text-secondary)]">
            <span>WAIT TIME REDUCTION</span>
            <span className="font-bold text-emerald-600">-22% DELAY</span>
          </div>
        </div>
      );

    case 'socialChart':
      return (
        <div className="w-full h-full p-4 font-mono text-[9px] flex flex-col justify-between">
          <div className="flex justify-between text-[var(--text-tertiary)]">
            <span>VIRALITY METRICS</span>
            <span className="text-blue-500 font-bold">NLP SENTIMENT</span>
          </div>
          <div className="flex items-end gap-2 h-12 my-1">
            <div className="w-1/4 h-[30%] bg-[var(--text-primary)] opacity-20 rounded" />
            <div className="w-1/4 h-[50%] bg-[var(--text-primary)] opacity-30 rounded" />
            <div className="w-1/4 h-[80%] bg-[var(--accent-blue)] opacity-70 rounded" />
            <div className="w-1/4 h-[100%] bg-emerald-500 opacity-90 rounded" />
          </div>
          <div className="flex justify-between border-t border-[var(--border-color)] pt-1 text-[8px] text-[var(--text-secondary)]">
            <span>ENGAGEMENT VELOCITY</span>
            <span>MATPLOTLIB</span>
          </div>
        </div>
      );

    case 'cloudArch':
      return (
        <div className="w-full h-full p-4 font-mono text-[8px] flex flex-col justify-between">
          <div className="flex justify-between text-[var(--text-tertiary)]">
            <span>AWS S3 INFRASTRUCTURE</span>
            <span className="text-purple-500 font-bold">RBAC + JWT</span>
          </div>
          <div className="flex items-center justify-around my-2 text-center">
            <div className="p-1.5 border border-[var(--border-color)] rounded bg-[var(--bg-primary)]">
              CLIENT
            </div>
            <span className="text-[var(--text-tertiary)]">→</span>
            <div className="p-1.5 border border-[var(--border-color)] rounded bg-[var(--bg-primary)] text-purple-600 font-bold">
              AUTH API
            </div>
            <span className="text-[var(--text-tertiary)]">→</span>
            <div className="p-1.5 border border-[var(--border-color)] rounded bg-[var(--bg-primary)] font-bold text-amber-600">
              AWS S3
            </div>
          </div>
          <div className="flex justify-between border-t border-[var(--border-color)] pt-1 text-[8px] text-[var(--text-secondary)]">
            <span>PRE-SIGNED S3 URLS</span>
            <span>AES-256</span>
          </div>
        </div>
      );

    case 'carbonScore':
      return (
        <div className="w-full h-full p-4 font-mono text-[9px] flex flex-col justify-between">
          <div className="flex justify-between text-[var(--text-tertiary)]">
            <span>ENVIRONMENTAL ENGINE</span>
            <span className="text-rose-500 font-bold">1ST PLACE WINNER</span>
          </div>
          <div className="my-2 p-2 border border-[var(--border-color)] rounded bg-[var(--bg-primary)] flex items-center justify-between">
            <span className="text-[var(--text-secondary)]">FOOTPRINT:</span>
            <span className="font-bold text-emerald-600 text-xs">2.4 tCO2e/yr</span>
          </div>
          <div className="flex justify-between border-t border-[var(--border-color)] pt-1 text-[8px] text-[var(--text-secondary)]">
            <span>HACKSPRINT 1.0</span>
            <span>48H BUILD</span>
          </div>
        </div>
      );

    default:
      return null;
  }
}
