"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "トップ", href: "/" },
  { label: "OIFについて", href: "/about/" },
  { label: "Noema・OIF学習", href: "/learn/" },
  { label: "お知らせ", href: "/news/" },
];

const joinItem = { label: "参加について", href: "/join/" };

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
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 border-b border-ink/10 text-ink ${
          isMenuOpen ? "bg-canvas" : "bg-canvas/90 backdrop-blur"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between h-14 md:h-16">
          <Link
            href="/"
            className="group flex items-center gap-3"
            aria-label="OIF トップ"
          >
            <Image
              src="/logo-mark.png"
              alt=""
              width={412}
              height={406}
              className="h-9 w-auto md:h-10 transition-transform duration-[800ms] ease-smooth group-hover:rotate-[360deg]"
              priority
            />
            <span className="hidden sm:block text-sm font-bold leading-tight">
              OMU Innovation Frontier
            </span>
          </Link>

          <nav
            className="hidden lg:flex items-center gap-7"
            aria-label="メインナビゲーション"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
                className={`text-sm font-bold transition-colors duration-200 ${
                  pathname === item.href
                    ? "text-brand"
                    : "text-ink/65 hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={joinItem.href}
              className="rounded-full bg-brand px-5 py-2 text-sm font-bold text-white hover:bg-brand-dark transition-colors duration-200"
            >
              {joinItem.label}
            </Link>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 -mr-2"
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
      </header>

      {/* header の外に置く。backdrop-blur の中に置くと、画面全体に広がらず背景が透けて見える */}
      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden fixed inset-x-0 bottom-0 top-14 md:top-16 z-40 overflow-y-auto bg-canvas text-ink"
        >
          <nav
            className="flex flex-col px-6 pt-4"
            aria-label="モバイルナビゲーション"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                aria-current={pathname === item.href ? "page" : undefined}
                className={`border-b border-ink/10 py-5 text-base font-bold ${
                  pathname === item.href ? "text-brand" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={joinItem.href}
              onClick={() => setIsMenuOpen(false)}
              className="mt-8 rounded-full bg-brand py-4 text-center text-base font-bold text-white"
            >
              {joinItem.label}
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
