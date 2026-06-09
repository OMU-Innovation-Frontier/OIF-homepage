"use client";

import { useEffect, useRef } from "react";

/**
 * Lightweight animated "neural network" canvas: drifting nodes connected by
 * fading lines. Capped node count, pauses when hidden, static under
 * reduced-motion. Meant to sit behind hero content.
 */
type Accent = "accent" | "dev" | "theory";

// Monochrome (light theme): dark ink lines/nodes on a white background.
const palette: Record<Accent, { line: string; node: string }> = {
  accent: { line: "11,12,14", node: "11,12,14" },
  dev: { line: "11,12,14", node: "11,12,14" },
  theory: { line: "11,12,14", node: "11,12,14" },
};

export default function NeuralBackground({
  className = "",
  accent = "accent",
}: {
  className?: string;
  accent?: Accent;
}) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const parent = canvas?.parentElement;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !parent || !ctx) return;

    const colors = palette[accent];
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0;
    let h = 0;

    const count = window.innerWidth < 768 ? 22 : 42;
    const nodes = Array.from({ length: count }, () => ({
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - 0.5) * 0.0007,
      vy: (Math.random() - 0.5) * 0.0007,
    }));

    const resize = () => {
      w = parent.clientWidth;
      h = parent.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    let raf = 0;
    let running = true;
    const maxDist = 160;

    const frame = () => {
      ctx.clearRect(0, 0, w, h);
      for (const n of nodes) {
        if (!reduced) {
          n.x += n.vx;
          n.y += n.vy;
          if (n.x < 0 || n.x > 1) n.vx *= -1;
          if (n.y < 0 || n.y > 1) n.vy *= -1;
        }
      }
      for (let i = 0; i < count; i++) {
        for (let j = i + 1; j < count; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = (a.x - b.x) * w;
          const dy = (a.y - b.y) * h;
          const d = Math.hypot(dx, dy);
          if (d < maxDist) {
            ctx.strokeStyle = `rgba(${colors.line},${(1 - d / maxDist) * 0.1})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x * w, a.y * h);
            ctx.lineTo(b.x * w, b.y * h);
            ctx.stroke();
          }
        }
      }
      for (const n of nodes) {
        ctx.fillStyle = `rgba(${colors.node},0.28)`;
        ctx.beginPath();
        ctx.arc(n.x * w, n.y * h, 1.5, 0, Math.PI * 2);
        ctx.fill();
      }
      if (running && !reduced) raf = requestAnimationFrame(frame);
    };
    frame();

    const onVis = () => {
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(raf);
      } else if (!reduced) {
        running = true;
        frame();
      }
    };
    document.addEventListener("visibilitychange", onVis);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [accent]);

  return <canvas ref={ref} aria-hidden className={`absolute inset-0 pointer-events-none ${className}`} />;
}
