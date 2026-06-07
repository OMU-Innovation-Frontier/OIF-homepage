"use client";

import { useEffect, useRef, useState } from "react";

interface TypewriterProps {
  words: string[];
  className?: string;
  typeSpeed?: number;
  deleteSpeed?: number;
  holdMs?: number;
}

/** Types each word, pauses, deletes, and cycles. Static first word under reduced-motion. */
export default function Typewriter({
  words,
  className = "",
  typeSpeed = 65,
  deleteSpeed = 32,
  holdMs = 1500,
}: TypewriterProps) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const reduced = useRef(false);

  useEffect(() => {
    reduced.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced.current) setText(words[0] ?? "");
  }, [words]);

  useEffect(() => {
    if (reduced.current || words.length === 0) return;
    const word = words[index % words.length];

    let timer: ReturnType<typeof setTimeout>;
    if (!deleting && text.length < word.length) {
      timer = setTimeout(() => setText(word.slice(0, text.length + 1)), typeSpeed);
    } else if (!deleting && text.length === word.length) {
      timer = setTimeout(() => setDeleting(true), holdMs);
    } else if (deleting && text.length > 0) {
      timer = setTimeout(() => setText(word.slice(0, text.length - 1)), deleteSpeed);
    } else {
      setDeleting(false);
      setIndex((i) => i + 1);
    }
    return () => clearTimeout(timer);
  }, [text, deleting, index, words, typeSpeed, deleteSpeed, holdMs]);

  return (
    <span className={className}>
      {text}
      <span className="animate-blink text-accent-bright">▋</span>
    </span>
  );
}
