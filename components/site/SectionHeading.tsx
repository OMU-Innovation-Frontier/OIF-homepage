import type { ReactNode } from "react";

interface SectionHeadingProps {
  label: string;
  title: string;
  children?: ReactNode;
}

export default function SectionHeading({ label, title, children }: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <p className="text-sm font-bold text-ink/50">{label}</p>
      <h2 className="mt-3 text-3xl md:text-4xl font-black leading-snug">{title}</h2>
      {children && <div className="mt-5 text-base md:text-lg leading-loose text-ink/70">{children}</div>}
    </div>
  );
}
