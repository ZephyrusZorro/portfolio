interface SectionLabelProps {
  number: string;
  label: string;
}

export function SectionLabel({ number, label }: SectionLabelProps) {
  return (
    <div className="font-mono text-xs font-semibold tracking-[0.2em] text-[var(--text-tertiary)] uppercase flex items-center gap-2">
      <span className="w-1.5 h-1.5 bg-[var(--text-tertiary)] rounded-full inline-block opacity-60" />
      <span>{number}</span>
      <span>/</span>
      <span>{label}</span>
    </div>
  );
}
