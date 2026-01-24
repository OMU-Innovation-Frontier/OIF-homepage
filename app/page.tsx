"use client";

import Link from "next/link";
import { useChapter } from "@/contexts/ChapterContext";

const news = [
  { date: "2026.01.24", title: "公式サイトを公開しました" },
];

const content = {
  global: {
    subtitle: "Osaka Innovation Frontier",
    statement: "大学の壁を越える、技術者のネットワーク。",
  },
  omu: {
    subtitle: "Osaka Innovation Frontier - OMU Chapter",
    statement: "大阪公立大学のAI・IT学習コミュニティー",
  },
};

export default function Home() {
  const { chapter } = useChapter();
  const { subtitle, statement } = content[chapter];

  return (
    <>
      {/* Hero Section */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          {/* Desktop Layout */}
          <div className="hidden lg:grid lg:grid-cols-12 lg:gap-8 lg:items-end">
            {/* Left: Main Content - takes more space */}
            <div className="lg:col-span-8">
              {/* Main Visual - OIF */}
              <h1 className="text-[7rem] xl:text-[9rem] font-black leading-[0.85] tracking-tighter mb-4">
                OIF
              </h1>

              {/* Sub */}
              <p className="text-base font-medium tracking-wide mb-2 text-black/60">
                {subtitle}
              </p>

              {/* Statement */}
              <p className="text-xl xl:text-2xl font-medium mb-8">
                {statement}
              </p>

              {/* CTA Button */}
              <Link
                href="/about"
                className="inline-block bg-black text-white px-8 py-4 text-sm font-medium tracking-widest uppercase border border-black hover:bg-white hover:text-black transition-colors duration-200"
              >
                About
              </Link>
            </div>

            {/* Right: Description */}
            <div className="lg:col-span-4 border-l border-black pl-8">
              <p className="text-xs font-medium tracking-widest uppercase text-black/50 mb-3">
                2026年設立
              </p>
              <div className="space-y-2 text-sm leading-relaxed text-black/70">
                <p>
                  OIFは2026年に誕生した新しい技術コミュニティです。
                </p>
                <p>
                  一緒に形を作っていける仲間を募集しています。
                </p>
              </div>
            </div>
          </div>

          {/* Mobile/Tablet Layout */}
          <div className="lg:hidden">
            {/* Main Visual - OIF */}
            <h1 className="text-[5rem] sm:text-[6rem] md:text-[7rem] font-black leading-[0.9] tracking-tighter mb-4">
              OIF
            </h1>

            {/* Sub */}
            <p className="text-sm md:text-base font-medium tracking-wide mb-3 text-black/60">
              {subtitle}
            </p>

            {/* Statement */}
            <p className="text-lg md:text-xl font-medium mb-8">
              {statement}
            </p>

            {/* CTA Button */}
            <Link
              href="/about"
              className="inline-block bg-black text-white px-8 py-4 text-sm font-medium tracking-widest uppercase border border-black hover:bg-white hover:text-black transition-colors duration-200"
            >
              About
            </Link>

            {/* Description - shown below on mobile */}
            <div className="mt-12 pt-8 border-t border-black">
              <p className="text-xs font-medium tracking-widest uppercase text-black/50 mb-3">
                2026年設立
              </p>
              <div className="space-y-2 text-sm leading-relaxed text-black/70">
                <p>
                  OIFは2026年に誕生した新しい技術コミュニティです。
                </p>
                <p>
                  一緒に形を作っていける仲間を募集しています。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Updates Section */}
      <section className="border-t border-black">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-10 md:py-12">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            {/* Section Label */}
            <p className="text-xs font-medium tracking-widest uppercase shrink-0">
              Updates
            </p>

            {/* News List */}
            <div className="flex-1 max-w-2xl">
              {news.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-6 py-3 border-b border-black last:border-b-0"
                >
                  <time className="text-sm font-medium tracking-wider w-24 shrink-0">
                    {item.date}
                  </time>
                  <span className="flex-1 text-base font-medium">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
