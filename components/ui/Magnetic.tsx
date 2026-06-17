"use client";

import { useRef, type ReactNode } from "react";

interface MagneticProps {
  children: ReactNode;
  className?: string;
  /** 0–1, how strongly it follows the cursor */
  strength?: number;
}

/** Wrap a CTA so it nudges toward the cursor. No-op on touch / reduced-motion. */
export default function Magnetic({ children, className = "", strength = 0.35 }: MagneticProps) {
  const ref = useRef<HTMLSpanElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    if (
      window.matchMedia("(pointer: coarse)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - (r.left + r.width / 2);
    const y = e.clientY - (r.top + r.height / 2);
    el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  };

  const reset = () => {
    if (ref.current) ref.current.style.transform = "";
  };

  return (
    <span
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      className={`inline-block transition-transform duration-300 ease-smooth will-change-transform ${className}`}
    >
      {children}
    </span>
  );
}
