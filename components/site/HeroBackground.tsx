interface HeroBackgroundProps {
  /** kept for call-site compatibility; no longer affects rendering */
  accent?: "dev" | "theory" | "accent";
  neural?: boolean;
  className?: string;
}

/**
 * Background visual effects intentionally removed for a clean, flat white
 * background (no glows / dot-grid / neural haze). Kept as a no-op component so
 * existing call sites keep working.
 */
export default function HeroBackground(_props: HeroBackgroundProps) {
  return null;
}
