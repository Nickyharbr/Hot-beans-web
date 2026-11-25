import type { FC, SVGProps } from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  icon?: FC<SVGProps<SVGSVGElement>>;
}

export default function SectionHeader({ title, subtitle, icon: Icon }: SectionHeaderProps) {
  return (
    <div className="flex flex-col mb-8">
      <div className="flex items-center gap-3 mb-2">
        {Icon && <Icon className="w-5 h-5 text-white/60" />}
        <p className="text-xs font-mono tracking-widest text-white/40 uppercase">{subtitle}</p>
      </div>
      <h2 className="text-4xl font-display font-bold tracking-wider text-white uppercase">{title}</h2>
    </div>
  );
}