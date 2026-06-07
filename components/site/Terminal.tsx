"use client";

import { useEffect, useRef, useState } from "react";

export interface TermLine {
  /** prompt prefix, e.g. "$" or ">" */
  p?: string;
  t: string;
  /** className for the text */
  c?: string;
}

interface TerminalProps {
  lines: TermLine[];
  title?: string;
  className?: string;
}

/** A faux terminal that types its lines in sequence. Static under reduced-motion. */
export default function Terminal({ lines, title = "oif@frontier: ~", className = "" }: TerminalProps) {
  const [line, setLine] = useState(0);
  const [chars, setChars] = useState(0);
  const reduced = useRef(false);

  useEffect(() => {
    reduced.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced.current) setLine(lines.length);
  }, [lines.length]);

  useEffect(() => {
    if (reduced.current || line >= lines.length) return;
    const text = lines[line].t;
    if (chars < text.length) {
      const id = setTimeout(() => setChars((c) => c + 1), 26);
      return () => clearTimeout(id);
    }
    const id = setTimeout(() => {
      setLine((l) => l + 1);
      setChars(0);
    }, 360);
    return () => clearTimeout(id);
  }, [line, chars, lines]);

  const done = line >= lines.length;

  return (
    <div
      className={`border border-white/12 bg-night-2/80 backdrop-blur-sm shadow-card font-mono text-[13px] leading-relaxed ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <span className="h-2.5 w-2.5 bg-theory-bright/80" />
        <span className="h-2.5 w-2.5 bg-amber-400/80" />
        <span className="h-2.5 w-2.5 bg-emerald-400/80" />
        <span className="ml-3 text-[11px] tracking-widest text-white/40">{title}</span>
      </div>
      <div className="p-5 space-y-1.5 min-h-[12rem]">
        {lines.map((l, idx) => {
          if (idx > line) return null;
          const complete = idx < line;
          const text = complete ? l.t : l.t.slice(0, chars);
          return (
            <div key={idx} className={l.c ?? "text-white/80"}>
              {l.p && <span className="text-accent-bright">{l.p} </span>}
              {text}
              {idx === line && !reduced.current && (
                <span className="animate-blink text-accent-bright">▋</span>
              )}
            </div>
          );
        })}
        {done && (
          <div className="text-white/40">
            <span className="text-accent-bright">$</span>{" "}
            <span className="animate-blink">▋</span>
          </div>
        )}
      </div>
    </div>
  );
}
