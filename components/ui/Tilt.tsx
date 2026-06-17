"use client";

import { useRef, type ReactNode } from "react";

interface TiltProps {
  children: ReactNode;
  className?: string;
  /** max rotation in degrees */
  max?: number;
}

/** 3D pointer-tilt for cards. No-op on touch / reduced-motion. */
export default function Tilt({ children, className = "", max = 6 }: TiltProps) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    if (
      window.matchMedia("(pointer: coarse)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateX(${-py * max}deg) rotateY(${px * max}deg)`;
  };

  const reset = () => {
    if (ref.current) ref.current.style.transform = "";
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      className={`h-full transition-transform duration-300 ease-smooth ${className}`}
      style={{ willChange: "transform" }}
    >
      {children}
    </div>
  );
}
