"use client";

import Link from "next/link";
import Image from "next/image";

const socialLinks = [
  { label: "Discord", href: "https://discord.gg/TfdmrXKNgD" },
  { label: "X", href: "https://x.com/OIF_OMU" },
  { label: "Instagram", href: "https://www.instagram.com/omu.innovation.frontier/" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Activities", href: "/activities" },
  { label: "Join", href: "/join" },
  { label: "FAQ", href: "/faq" },
];

export default function Footer() {
  return (
    <footer className="border-t border-black bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8">
          
          {/* Brand & Description */}
          <div className="md:col-span-5">
            <Link href="/" className="inline-block mb-10">
              <Image
                src="/logo.png"
                alt="OIF Logo"
                width={120}
                height={120}
                className="h-16 w-auto"
              />
            </Link>
            <p className="text-xl font-bold tracking-tighter leading-tight mb-4">
              OMU Innovation Frontier
            </p>
            <p className="text-sm text-black/60 font-medium leading-relaxed max-w-xs">
              大阪公立大学の学生による<br /> AI・テクノロジーを探究するコミュニティ
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <p className="text-xs font-bold tracking-widest uppercase text-black/30 mb-8">
              Navigation
            </p>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm font-bold tracking-tight hover:opacity-50 transition-opacity duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="md:col-span-4">
            <p className="text-xs font-bold tracking-widest uppercase text-black/30 mb-8">
              Connect
            </p>
            <div className="flex flex-col gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold tracking-tight flex items-center justify-between group border-b border-black/5 pb-2 hover:border-black transition-colors duration-300"
                >
                  {link.label}
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-24 pt-10 border-t border-black/10 flex flex-col md:flex-row justify-between gap-6 items-center">
          <p className="text-[10px] md:text-xs text-black/40 font-bold tracking-widest uppercase">
            © 2026 OMU Innovation Frontier. All rights reserved.
          </p>
          <p className="text-[10px] md:text-xs text-black/20 font-bold uppercase tracking-widest">
            Crafting the Future with AI
          </p>
        </div>
      </div>
    </footer>
  );
}
