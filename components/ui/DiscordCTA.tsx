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
  className?: string;
}

/** Primary conversion button for the join funnel. Tracks clicks by location. */
export default function DiscordCTA({
  location,
  label = "Discordに参加",
  size = "lg",
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
      className={`group inline-flex items-center gap-3 bg-ink text-paper font-bold tracking-widest uppercase border border-ink hover:bg-ink/85 hover:border-ink/85 transition-colors duration-200 ${sizes[size]} ${className}`}
    >
      {label}
      <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
    </a>
  );
}
