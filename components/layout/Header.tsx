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
  { label: "News", href: "/news" },
  { label: "Join", href: "/join" },
  { label: "FAQ", href: "/faq" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const { chapter, setChapter } = useChapter();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-black">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl md:text-3xl font-black tracking-tighter"
        >
          OIF
        </Link>

        {/* Chapter Switch - Desktop */}
        <div className="hidden md:flex items-center gap-2 text-xs font-medium tracking-wide">
          <button
            onClick={() => setChapter("global")}
            className={`px-2 py-1 transition-all ${
              chapter === "global"
                ? "font-bold border-b border-black"
                : "text-black/60 hover:text-black"
            }`}
          >
            Global
          </button>
          <span className="text-black/30">|</span>
          <button
            onClick={() => setChapter("omu")}
            className={`px-2 py-1 transition-all ${
              chapter === "omu"
                ? "font-bold border-b border-black"
                : "text-black/60 hover:text-black"
            }`}
          >
            OMU
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="relative text-sm font-medium tracking-wide group"
            >
              {item.label}
              <span
                className={`absolute left-0 bottom-[-4px] h-[1px] bg-black transition-all duration-300 ${
                  pathname === item.href ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
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
        <div className="md:hidden fixed inset-0 top-16 bg-white z-40 border-t border-black">
          {/* Mobile Chapter Switch */}
          <div className="flex items-center justify-center gap-4 py-4 border-b border-black">
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
                className={`text-xl font-medium tracking-wide border-b border-black py-6 px-8 ${
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
