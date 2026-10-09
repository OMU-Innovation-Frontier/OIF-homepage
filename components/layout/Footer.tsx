import Link from "next/link";
import Image from "next/image";
import { SOCIAL } from "@/lib/links";

const socialLinks = [
  { label: "Discord", href: SOCIAL.discord },
  { label: "X", href: SOCIAL.x },
  { label: "Instagram", href: SOCIAL.instagram },
];

const navLinks = [
  { label: "トップ", href: "/" },
  { label: "OIFについて", href: "/about/" },
  { label: "ブログ", href: "/blog/" },
  { label: "お知らせ", href: "/news/" },
  { label: "参加する", href: "/join/" },
];

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-canvas text-ink">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-5">
            <Link href="/" className="inline-block mb-6" aria-label="OIF トップ">
              <Image src="/logo.png" alt="OIF" width={120} height={120} className="h-14 w-auto mix-blend-multiply" />
            </Link>
            <p className="text-lg font-bold mb-2">OMU Innovation Frontier</p>
            <p className="text-sm leading-relaxed text-ink/65 max-w-xs">
              大阪公立大学の学生がつくっている AI のコミュニティです。
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs font-bold text-ink/50 mb-5">サイト</p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-ink/75 hover:text-ink transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="text-xs font-bold text-ink/50 mb-5">SNS</p>
            <ul className="space-y-3">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-ink/75 hover:text-ink transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-14 pt-8 border-t border-ink/10 text-xs text-ink/55">
          © 2026 OMU Innovation Frontier
        </p>
      </div>
    </footer>
  );
}
