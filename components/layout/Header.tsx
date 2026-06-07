"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about/" },
  { label: "Activities", href: "/activities/" },
  { label: "Join", href: "/join/" },
  { label: "FAQ", href: "/faq/" },
  { label: "News", href: "/news/" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // ルート遷移したらメニューを閉じる
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // メニュー表示中は背景スクロールをロックし、Escapeで閉じる
  useEffect(() => {
    if (!isMenuOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-night/80 backdrop-blur-md border-b border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between h-14 md:h-16">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center"
        >
          <Image
            src="/logo.png"
            alt="OIF Logo"
            width={120}
            height={120}
            className="h-10 w-auto md:h-12 invert"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8" aria-label="メインナビゲーション">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`font-mono text-xs tracking-widest uppercase transition-colors duration-200 ${pathname === item.href
                ? "text-white border-b-2 border-accent-bright pb-0.5"
                : "text-white/50 hover:text-white"
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
          aria-label={isMenuOpen ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
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
        <div id="mobile-menu" className="md:hidden fixed inset-0 top-14 bg-night text-white z-40 border-t border-white/10">
          <nav className="container-wide flex flex-col pt-6" aria-label="モバイルナビゲーション">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`font-mono text-sm tracking-widest uppercase border-b border-white/10 py-5 px-6 transition-colors ${pathname === item.href ? "bg-accent-bright text-night" : "hover:bg-white/5"
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
