"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useChapter } from "@/contexts/ChapterContext";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Activities", href: "/activities" },
  { label: "Join", href: "/join" },
  { label: "FAQ", href: "/faq" },
  { label: "News", href: "/news" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const { chapter, setChapter } = useChapter();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-black/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between h-14 md:h-16">
        {/* Left: Logo + Chapter Switch */}
        <div className="flex items-center gap-6">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl md:text-2xl font-black tracking-tighter"
          >
            OIF
          </Link>

          {/* Chapter Switch - Desktop */}
          <div className="hidden md:flex items-center gap-1 text-xs text-black/50">
            <span className="mr-1">Chapters:</span>
            <button
              onClick={() => setChapter("global")}
              className={`px-1 transition-all ${
                chapter === "global"
                  ? "font-bold text-black"
                  : "hover:text-black"
              }`}
            >
              Global
            </button>
            <button
              onClick={() => setChapter("omu")}
              className={`px-1 transition-all ${
                chapter === "omu"
                  ? "font-bold text-black"
                  : "hover:text-black"
              }`}
            >
              OMU
            </button>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`text-sm font-medium tracking-wide transition-colors ${
                pathname === item.href
                  ? "text-black border-b border-black"
                  : "text-black/60 hover:text-black"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 -mr-2"
          aria-label="メニュー"
        >
          {isMenuOpen ? (
            <X size={24} strokeWidth={1.5} />
          ) : (
            <Menu size={24} strokeWidth={1.5} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-14 bg-white z-40 border-t border-black/10">
          {/* Mobile Chapter Switch */}
          <div className="flex items-center justify-center gap-4 py-4 border-b border-black/10">
            <button
              onClick={() => setChapter("global")}
              className={`px-4 py-2 text-sm font-medium tracking-wide transition-all ${
                chapter === "global"
                  ? "bg-black text-white"
                  : "border border-black"
              }`}
            >
              Global
            </button>
            <button
              onClick={() => setChapter("omu")}
              className={`px-4 py-2 text-sm font-medium tracking-wide transition-all ${
                chapter === "omu"
                  ? "bg-black text-white"
                  : "border border-black"
              }`}
            >
              OMU
            </button>
          </div>

          <nav className="flex flex-col">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`text-lg font-medium tracking-wide border-b border-black/10 py-5 px-6 ${
                  pathname === item.href ? "bg-black text-white" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
