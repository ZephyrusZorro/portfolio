'use client';

export function GridBackground() {
  return (
    <div className="grid-bg-overlay" aria-hidden="true">
      <div className="max-w-[1400px] mx-auto h-full px-6 md:px-10 flex justify-between">
        <div className="w-px h-full bg-[var(--border-color)] opacity-40" />
        <div className="w-px h-full bg-[var(--border-color)] opacity-40 hidden md:block" />
        <div className="w-px h-full bg-[var(--border-color)] opacity-40 hidden lg:block" />
        <div className="w-px h-full bg-[var(--border-color)] opacity-40 hidden xl:block" />
        <div className="w-px h-full bg-[var(--border-color)] opacity-40" />
      </div>
    </div>
  );
}
