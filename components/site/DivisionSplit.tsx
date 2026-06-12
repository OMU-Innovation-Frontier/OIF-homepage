"use client";

import Link from "next/link";
import { useState } from "react";

type Side = "dev" | "theory";

interface Panel {
  side: Side;
  href: string;
  index: string;
  label: string;
  title: string;
  line: string;
  tags: string[];
  glow: string;
  accentText: string;
  hoverBorder: string;
}

const panels: Panel[] = [
  {
    side: "dev",
    href: "/developers/",
    index: "01",
    label: "DEVELOPMENT",
    title: "開発部門",
    line: "つくって、出す。",
    tags: ["LLM", "WEB", "AI-TOOLS", "SHIP IT"],
    glow: "bg-dev/30",
    accentText: "text-dev-bright",
    hoverBorder: "hover:border-dev-bright/50",
  },
  {
    side: "theory",
    href: "/theory/",
    index: "02",
    label: "THEORY",
    title: "理論部門",
    line: "仕組みから、理解する。",
    tags: ["MATH", "PAPERS", "ML-THEORY", "WHY"],
    glow: "bg-theory/30",
    accentText: "text-theory-bright",
    hoverBorder: "hover:border-theory-bright/50",
  },
];

/** Interactive split: hovering a side expands it. A "choose your path" panel. */
export default function DivisionSplit() {
  const [hovered, setHovered] = useState<Side | null>(null);

  return (
    <div className="flex flex-col md:flex-row gap-px bg-ink/10 border border-ink/10">
      {panels.map((p) => {
        const grow = hovered === p.side ? 1.7 : hovered ? 0.75 : 1;
        return (
          <Link
            key={p.side}
            href={p.href}
            onMouseEnter={() => setHovered(p.side)}
            onMouseLeave={() => setHovered(null)}
            style={{ flexGrow: grow }}
            className={`group relative overflow-hidden bg-night-2 min-h-[22rem] md:min-h-[34rem] p-8 md:p-12 flex flex-col justify-end border-2 border-transparent transition-[flex-grow,background-color,border-color] duration-500 ease-smooth hover:bg-night-3 ${p.hoverBorder} basis-0`}
          >
            <span
              aria-hidden
              className="absolute -top-6 right-6 text-[7rem] md:text-[10rem] font-black leading-none tracking-tighter text-ink/[0.04] group-hover:text-ink/[0.06] transition-colors"
            >
              {p.index}
            </span>

            <div className="relative">
              <p className={`font-mono text-[11px] tracking-[0.35em] mb-5 ${p.accentText}`}>
                {p.label}
              </p>
              <h3 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">{p.title}</h3>
              <p className="text-lg md:text-xl text-ink/70 mb-6">{p.line}</p>

              <div className="flex flex-wrap gap-2 font-mono text-[11px] tracking-widest text-ink/50 mb-7 opacity-100 md:max-h-0 md:opacity-0 md:overflow-hidden md:-translate-y-2 md:group-hover:max-h-24 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-500 ease-smooth">
                {p.tags.map((t) => (
                  <span key={t} className="border border-ink/15 px-2.5 py-1">
                    {t}
                  </span>
                ))}
              </div>

              <span className="inline-flex items-center gap-2 text-sm font-bold tracking-widest uppercase opacity-90 md:opacity-60 group-hover:opacity-100 transition-opacity">
                詳しく見る
                <span className="transition-transform duration-200 group-hover:translate-x-2">→</span>
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
