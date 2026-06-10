import Link from "next/link";
import Image from "next/image";

const socialLinks = [
  { label: "Discord", href: "https://discord.gg/Brg6GxJnBW" },
  { label: "X", href: "https://x.com/OIF_OMU" },
  { label: "Instagram", href: "https://www.instagram.com/oif.ai.omu/" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about/" },
  { label: "Activities", href: "/activities/" },
  { label: "Blog", href: "/blog/" },
  { label: "Join", href: "/join/" },
  { label: "FAQ", href: "/faq/" },
];

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-paper text-ink">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-5">
            <Link href="/" className="group inline-block mb-10" aria-label="OIF ホーム">
              <Image src="/logo.png" alt="OIF Logo" width={120} height={120} className="h-14 w-auto mix-blend-multiply transition-transform duration-[800ms] ease-smooth group-hover:rotate-[360deg]" />
            </Link>
            <p className="text-xl font-bold tracking-tighter leading-tight mb-4">
              OMU Innovation Frontier
            </p>
            <p className="font-mono text-xs leading-relaxed text-ink/60 max-w-xs">
              大阪公立大学の学生による<br />AI・テクノロジー探究コミュニティ
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-accent-bright mb-8">
              navigation
            </p>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm font-bold tracking-tight text-ink/75 hover:text-accent-bright transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="md:col-span-4">
            <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-accent-bright mb-8">
              connect
            </p>
            <div className="flex flex-col gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold tracking-tight flex items-center justify-between group border-b border-ink/10 pb-2 hover:border-accent-bright hover:text-accent-bright transition-colors duration-300"
                >
                  {link.label}
                  <span className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-smooth">→</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-24 pt-10 border-t border-ink/10 flex flex-col md:flex-row justify-between gap-6 items-center">
          <p className="font-mono text-[10px] md:text-xs text-ink/65 tracking-widest uppercase">
            © 2026 OMU Innovation Frontier. All rights reserved.
          </p>
          <p className="font-mono text-[10px] md:text-xs text-ink/60 uppercase tracking-widest">
            Crafting the Future with AI
          </p>
        </div>
      </div>
    </footer>
  );
}
