interface StatusBadgeProps {
  status: string;
  type: 'production' | 'pilot' | 'prototype' | 'active' | 'completed' | 'winner';
}

export function StatusBadge({ status, type }: StatusBadgeProps) {
  const styles = {
    production: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20 dot-emerald-500',
    pilot: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20 dot-blue-500',
    prototype: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20 dot-amber-500',
    active: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20 dot-purple-500',
    completed: 'bg-zinc-500/10 text-zinc-600 dark:text-zinc-400 border-zinc-500/20 dot-zinc-500',
    winner: 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20 dot-rose-500'
  };

  const dotColors = {
    production: 'bg-emerald-500',
    pilot: 'bg-blue-500',
    prototype: 'bg-amber-500',
    active: 'bg-purple-500',
    completed: 'bg-zinc-400',
    winner: 'bg-rose-500'
  };

  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border font-mono text-[10px] font-medium tracking-wider uppercase ${styles[type]}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${dotColors[type]}`} />
      {status}
    </span>
  );
}
