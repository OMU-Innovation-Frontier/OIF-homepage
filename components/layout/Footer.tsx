"use client";

import Link from "next/link";
import Image from "next/image";

const socialLinks = [
  { label: "Discord", href: "https://discord.gg/TfdmrXKNgD" },
  { label: "X", href: "https://x.com/OIF_OMU" },
  { label: "Instagram", href: "https://www.instagram.com/omu.innovation.frontier/" },
];

export default function Footer() {
  return (
    <footer className="border-t border-black bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
          {/* Logo & Description */}
          <div>
            <Link
              href="/"
              className="inline-block"
            >
              <Image
                src="/OIF-homepage/logo.png"
                alt="OIF Logo"
                width={160}
                height={160}
                className="h-16 w-auto md:h-20 mb-4"
              />
            </Link>
            <p className="text-sm text-black mt-4 font-medium">
              OIF
              <br />
              大阪公立大学 技術コミュニティ
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
          <p className="text-xs text-black tracking-wide">© 2026 OIF. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
