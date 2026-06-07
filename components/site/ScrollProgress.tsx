"use client";

import { useEffect, useState } from "react";

/** Thin accent bar at the very top showing scroll progress. */
export default function ScrollProgress() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const el = document.documentElement;
        const max = el.scrollHeight - el.clientHeight;
        setPct(max > 0 ? (el.scrollTop / max) * 100 : 0);
      });
    };
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div aria-hidden className="fixed top-0 left-0 right-0 z-[55] h-0.5">
      <div
        className="h-full bg-gradient-to-r from-accent via-accent-bright to-dev-bright transition-[width] duration-100 ease-linear"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}
