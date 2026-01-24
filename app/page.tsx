"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useChapter } from "@/contexts/ChapterContext";

const globalNews = [
  { date: "2026.04.05", title: "OIF Global LT大会 参加者募集" },
  { date: "2026.03.20", title: "阪大・東科大との合同ハッカソン開催" },
  { date: "2026.03.01", title: "新規チャプター設立のお知らせ" },
];

const omuNews = [
  { date: "2026.04.01", title: "新入生向け説明会のお知らせ" },
  { date: "2026.03.15", title: "ハッカソンの開催報告" },
  { date: "2026.02.28", title: "春季輪読会の参加者募集" },
];

const content = {
  global: {
    subtitle: "Osaka Innovation Frontier",
    statement: "大学の壁を越える、技術者のネットワーク。",
    news: globalNews,
  },
  omu: {
    subtitle: "Osaka Innovation Frontier - OMU Chapter",
    statement: "自律した学生のための、技術実験室。",
    news: omuNews,
  },
};

export default function Home() {
  const { chapter } = useChapter();
  const { subtitle, statement, news } = content[chapter];

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-80px)] flex items-center">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full py-20">
          <div className="max-w-3xl">
            {/* Established Badge */}
            <p className="text-xs font-medium tracking-widest uppercase text-black/50 mb-4">
              Est. 2026
            </p>

            {/* Main Visual - Massive OIF */}
            <h1 className="text-[8rem] sm:text-[10rem] md:text-[12rem] lg:text-[16rem] font-black leading-[0.8] tracking-tighter mb-8">
              OIF
            </h1>

            {/* Sub */}
            <p className="text-base md:text-lg font-medium tracking-wide mb-6">
              {subtitle}
            </p>

            {/* Statement */}
            <p className="text-xl md:text-2xl font-medium mb-16">
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
                <Link
                  key={index}
                  href="/news"
                  className="group flex items-center gap-6 py-4 border-b border-black last:border-b-0 hover:bg-black hover:text-white hover:px-4 transition-all duration-200"
                >
                  <time className="text-sm font-medium tracking-wider w-24 shrink-0">
                    {item.date}
                  </time>
                  <span className="flex-1 text-base font-medium">
                    {item.title}
                  </span>
                  <ArrowUpRight
                    size={14}
                    strokeWidth={1.5}
                    className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
