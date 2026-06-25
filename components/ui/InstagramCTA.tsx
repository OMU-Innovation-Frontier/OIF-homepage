"use client";

import { Instagram } from "lucide-react";
import { SOCIAL } from "@/lib/links";
import { trackEvent } from "@/lib/analytics";

type Size = "sm" | "md" | "lg";

const sizes: Record<Size, string> = {
  sm: "px-4 py-2.5 text-xs",
  md: "px-6 py-3 text-sm",
  lg: "px-10 py-5 text-sm",
};

interface InstagramCTAProps {
  /** Funnel position, e.g. "home_hero_instagram". Used for attribution. */
  location: string;
  label?: string;
  size?: Size;
  className?: string;
}

/**
 * 発信フォロー導線。Instagram が広報の主戦場（「やった記録」発信エンジン）。
 * Discord（参加=primary, bg-ink）と差別化するため outline 系のセカンダリ階調。
 * クリックを location 別に計測する（DiscordCTA と同じ流儀）。
 */
export default function InstagramCTA({
  location,
  label = "Instagramをフォロー",
  size = "md",
  className = "",
}: InstagramCTAProps) {
  return (
    <a
      href={SOCIAL.instagram}
      target="_blank"
      rel="noopener noreferrer"
      data-cta="instagram"
      data-cta-location={location}
      onClick={() => trackEvent("instagram_follow_click", { location })}
      className={`group inline-flex items-center gap-2.5 font-bold tracking-widest uppercase border border-ink/20 text-ink hover:bg-ink/5 hover:border-ink/40 transition-colors duration-200 ${sizes[size]} ${className}`}
    >
      <Instagram className="w-4 h-4 text-ink/70 group-hover:text-ink transition-colors" aria-hidden />
      {label}
    </a>
  );
}
