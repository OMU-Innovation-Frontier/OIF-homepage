"use client";

import Link from "next/link";
import { useChapter } from "@/contexts/ChapterContext";

const socialLinks = [
  { label: "Discord", href: "#" },
  { label: "X", href: "#" },
  { label: "Instagram", href: "#" },
];

const content = {
  global: {
    name: "Osaka Innovation Frontier",
    description: "大学を超える技術者ネットワーク",
    copyright: "© 2026 OIF. All rights reserved.",
  },
  omu: {
    name: "OIF - OMU Chapter",
    description: "大阪公立大学 技術コミュニティ",
    copyright: "© 2026 OIF - OMU Chapter. All rights reserved.",
  },
};

export default function Footer() {
  const { chapter } = useChapter();
  const { name, description, copyright } = content[chapter];

  return (
    <footer className="border-t border-black bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
          {/* Logo & Description */}
          <div>
            <Link
              href="/"
              className="text-3xl md:text-4xl font-black tracking-tighter"
            >
              OIF
            </Link>
            <p className="text-sm text-black mt-4">
              {name}
              <br />
              {description}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-8">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium tracking-wide relative group"
              >
                {link.label}
                <span className="absolute left-0 bottom-[-2px] w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-black">
          <p className="text-xs text-black tracking-wide">{copyright}</p>
        </div>
      </div>
    </footer>
  );
}
