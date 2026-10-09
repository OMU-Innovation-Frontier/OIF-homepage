"use client";

import { ArrowRight } from "lucide-react";
import { DISCORD_INVITE } from "@/lib/links";
import { trackEvent } from "@/lib/analytics";

type Size = "md" | "lg";

const sizes: Record<Size, string> = {
  md: "px-6 py-3 text-sm",
  lg: "px-10 py-5 text-sm",
};

interface DiscordCTAProps {
  /** Funnel position, e.g. "join_hero", "faq_contact". Used for conversion attribution. */
  location: string;
  label?: string;
  size?: Size;
  /** "dark" = black button for light surfaces (default). "light" = white button for dark photo bands. "brand" / "brandOnDark" = 2026-10 刷新の丸いボタン（明るい面用 / 黒い面用） */
  variant?: "dark" | "light" | "brand" | "brandOnDark";
  className?: string;
}

const variants = {
  dark: "uppercase tracking-widest bg-ink text-paper border-ink hover:bg-ink/85 hover:border-ink/85",
  light: "uppercase tracking-widest bg-white text-ink border-white hover:bg-white/85 hover:border-white/85",
  brand: "rounded-full bg-brand text-white border-brand hover:bg-brand-dark hover:border-brand-dark",
  brandOnDark: "rounded-full bg-white text-ink border-white hover:bg-white/85 hover:border-white/85",
};

/** Primary conversion button for the join funnel. Tracks clicks by location. */
export default function DiscordCTA({
  location,
  label = "Discordに参加",
  size = "lg",
  variant = "dark",
  className = "",
}: DiscordCTAProps) {
  return (
    <a
      href={DISCORD_INVITE}
      target="_blank"
      rel="noopener noreferrer"
      data-cta="discord"
      data-cta-location={location}
      onClick={() => trackEvent("discord_join_click", { location })}
      className={`group inline-flex items-center gap-3 font-bold border transition-colors duration-200 ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {label}
      <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
    </a>
  );
}
