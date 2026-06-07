import type { ReactNode } from "react";

type Tone = "accent" | "dev" | "theory" | "muted" | "onDark";

const tones: Record<Tone, string> = {
  accent: "text-accent",
  dev: "text-dev",
  theory: "text-theory",
  muted: "text-ink/60",
  onDark: "text-white/70",
};

interface EyebrowProps {
  children: ReactNode;
  tone?: Tone;
  className?: string;
  as?: "p" | "span";
}

/** Small uppercase section label ("eyebrow"). */
export default function Eyebrow({
  children,
  tone = "muted",
  className = "",
  as: Tag = "p",
}: EyebrowProps) {
  return <Tag className={`eyebrow ${tones[tone]} ${className}`.trim()}>{children}</Tag>;
}
