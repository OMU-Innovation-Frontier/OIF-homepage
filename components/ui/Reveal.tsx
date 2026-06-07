import type { CSSProperties, ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** optional stagger (ms) */
  delay?: number;
}

/**
 * Scroll-reveal wrapper. Uses CSS scroll-driven animations (`animation-timeline: view()`)
 * via the `.reveal` utility — no JS required, and content stays visible in browsers
 * that don't support it (graceful degradation, SEO-safe).
 */
export default function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  const style: CSSProperties | undefined = delay ? { animationDelay: `${delay}ms` } : undefined;
  return (
    <div className={`reveal ${className}`} style={style}>
      {children}
    </div>
  );
}
