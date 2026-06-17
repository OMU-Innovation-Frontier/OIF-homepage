import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "onDark";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-medium tracking-widest uppercase border transition-colors duration-200 ease-smooth";

const variants: Record<Variant, string> = {
  // Solid black fill, white text (light-theme primary)
  primary:
    "bg-ink text-paper border-ink hover:bg-ink/85 hover:border-ink/85",
  // Ghost outline on light surfaces
  secondary:
    "bg-transparent text-ink border-ink/25 hover:bg-ink/5 hover:border-ink/50",
  // Solid black button for emphasis
  onDark:
    "bg-ink text-paper border-ink hover:bg-ink/85 hover:border-ink/85",
};

const sizes: Record<Size, string> = {
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-sm",
};

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  onClick?: () => void;
  ariaLabel?: string;
}

export default function Button({
  children,
  href,
  variant = "primary",
  size = "lg",
  className = "",
  onClick,
  ariaLabel,
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`.trim();

  if (href) {
    const isExternal = /^https?:\/\//.test(href);
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
          aria-label={ariaLabel}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes} aria-label={ariaLabel}>
      {children}
    </button>
  );
}
