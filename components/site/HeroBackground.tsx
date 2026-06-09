"use client";

import { useEffect, useRef } from "react";
import NeuralBackground from "@/components/site/NeuralBackground";

interface HeroBackgroundProps {
  /** color of the secondary glow: "dev" (blue) | "theory" (red) | "accent" */
  accent?: "dev" | "theory" | "accent";
  /** render the animated neural-net layer (default true) */
  neural?: boolean;
  className?: string;
}

const glow2: Record<string, string> = {
  dev: "bg-dev/10",
  theory: "bg-theory/10",
  accent: "bg-accent/10",
};

/**
 * Animated, mouse-parallax hero backdrop: drifting gradient glows over a
 * panning dot grid. Parallax + animations disabled for touch / reduced-motion.
 */
export default function HeroBackground({ accent = "dev", neural = true, className = "" }: HeroBackgroundProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let raf = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const x = e.clientX / window.innerWidth - 0.5;
        const y = e.clientY / window.innerHeight - 0.5;
        el.style.setProperty("--px", `${x * 36}px`);
        el.style.setProperty("--py", `${y * 36}px`);
      });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div aria-hidden className={`absolute inset-0 overflow-hidden ${className}`}>
      <div
        ref={ref}
        className="absolute inset-0 transition-transform duration-500 ease-out"
        style={{ transform: "translate3d(var(--px,0), var(--py,0), 0)" }}
      >
        <div className="absolute inset-0 dot-grid animate-grid-pan opacity-70" />
        <div className="absolute -top-40 -left-32 h-[40rem] w-[40rem] rounded-full bg-accent/10 blur-[120px] animate-drift-slow" />
        <div className={`absolute top-1/3 -right-40 h-[34rem] w-[34rem] rounded-full ${glow2[accent]} blur-[120px] animate-drift-slower`} />
      </div>
      {neural && <NeuralBackground accent={accent} className="opacity-60" />}
    </div>
  );
}
