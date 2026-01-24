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
      <section className="min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-80px)] flex items-center">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full py-20">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10 md:gap-8 lg:gap-16">
            {/* Left: Main Content */}
            <div className="max-w-3xl md:max-w-none md:flex-1">
              {/* Main Visual - Massive OIF */}
              <h1 className="text-[6rem] sm:text-[8rem] md:text-[9rem] lg:text-[11rem] xl:text-[13rem] font-black leading-[0.85] tracking-tighter mb-6">
                OIF
              </h1>

              {/* Sub */}
              <p className="text-sm md:text-base font-medium tracking-wide mb-4 text-black/70">
                {subtitle}
              </p>

              {/* Statement */}
              <p className="text-lg md:text-xl lg:text-2xl font-medium mb-12">
                {statement}
              </p>

              {/* CTA Button */}
              <Link
                href="/about"
                className="inline-block bg-black text-white px-10 py-5 text-sm font-medium tracking-widest uppercase border border-black hover:bg-white hover:text-black transition-colors duration-200"
              >
                About
              </Link>
            </div>

            {/* Right: Description (Desktop only) */}
            <div className="hidden md:block md:w-56 lg:w-72 xl:w-80 border-l border-black pl-6 lg:pl-8 xl:pl-10">
              <p className="text-xs font-medium tracking-widest uppercase text-black/50 mb-4">
                2026年設立
              </p>
              <div className="space-y-3 text-sm leading-relaxed text-black/70">
                <p>
                  OIFは2026年に誕生したばかりの新しい技術コミュニティです。
                </p>
                <p>
                  まだ発展途上の団体ですが、だからこそ一緒に形を作っていける仲間を募集しています。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Updates Section */}
      <section className="border-t border-black">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-12 md:py-16">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
            {/* Section Label */}
            <p className="text-xs font-medium tracking-widest uppercase shrink-0">
              Updates
            </p>

            {/* News List */}
            <div className="flex-1 max-w-2xl">
              {news.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-6 py-4 border-b border-black last:border-b-0"
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
