import type { SectionTitleProps } from '../types';

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
        <span className="gradient-text">{title}</span>
      </h2>
      <p className="text-text-secondary text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
        {subtitle}
      </p>
      <div className="mt-6 mx-auto w-20 h-1 rounded-full bg-gradient-to-r from-accent-violet to-accent-cyan opacity-60" />
    </div>
  );
}
