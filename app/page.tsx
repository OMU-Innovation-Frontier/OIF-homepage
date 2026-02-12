"use client";

import Link from "next/link";

const news = [
  { date: "2026.01.24", title: "公式サイトを公開しました" },
  { date: "", title: "→ メンバー募集を開始しました" },
];

const features = [
  "大阪公立大学の技術コミュニティ",
  "AI / Web / 起業　研究志向",
  "学生主導で設計・運営",
];

export default function Home() {
  return (
    <>
      {/* Hero Section - Full viewport height */}
      <section className="min-h-[calc(100vh-3.5rem)] md:min-h-[calc(100vh-4rem)] flex items-center bg-gradient-to-br from-white via-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full">
          {/* Desktop Layout */}
          <div className="hidden lg:grid lg:grid-cols-12 lg:gap-12 lg:items-center">
            {/* Left: Main Content */}
            <div className="lg:col-span-7">
              {/* Main Visual - OIF */}
              <h1 className="text-[6rem] xl:text-[7rem] font-black leading-[0.9] tracking-tighter mb-2">
                OIF
              </h1>

              {/* Sub */}
              <p className="text-sm font-medium tracking-wide mb-4 text-black/60">
                OMU Innovation Frontier
              </p>

              {/* Statement */}
              <p className="text-xl xl:text-2xl font-medium mb-8 leading-relaxed">
                大阪公立大学のAI・IT学習コミュニティー
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/join"
                  className="inline-block bg-black text-white px-8 py-4 text-sm font-medium tracking-widest uppercase border border-black hover:bg-white hover:text-black transition-colors duration-200"
                >
                  Join OIF
                </Link>
                <Link
                  href="/about"
                  className="inline-block bg-white text-black px-8 py-4 text-sm font-medium tracking-widest uppercase border border-black hover:bg-black hover:text-white transition-colors duration-200"
                >
                  About OIF
                </Link>
              </div>
            </div>

            {/* Right: Info Box */}
            <div className="lg:col-span-5 bg-gray-100 p-8 xl:p-10">
              <p className="text-xs font-bold tracking-widest uppercase text-black/60 mb-6">
                Founded in 2026
              </p>
              
              <ul className="space-y-3 mb-8">
                {features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-base">
                    <span className="text-black/40 mt-1">●</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <p className="text-sm leading-relaxed text-black/70">
                一緒に、次の当たり前を作りませんか。
              </p>
            </div>
          </div>

          {/* Mobile/Tablet Layout */}
          <div className="lg:hidden py-12">
            {/* Main Visual - OIF */}
            <h1 className="text-[4rem] sm:text-[5rem] md:text-[6rem] font-black leading-[0.9] tracking-tighter mb-2">
              OIF
            </h1>

            {/* Sub */}
            <p className="text-sm font-medium tracking-wide mb-4 text-black/60">
              OMU Innovation Frontier
            </p>

            {/* Statement */}
            <p className="text-lg md:text-xl font-medium mb-8 leading-relaxed">
              大阪公立大学のAI・IT学習コミュニティー
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 mb-10">
              <Link
                href="/join"
                className="inline-block bg-black text-white px-6 py-3 text-sm font-medium tracking-widest uppercase border border-black hover:bg-white hover:text-black transition-colors duration-200"
              >
                Join OIF
              </Link>
              <Link
                href="/about"
                className="inline-block bg-white text-black px-6 py-3 text-sm font-medium tracking-widest uppercase border border-black hover:bg-black hover:text-white transition-colors duration-200"
              >
                About OIF
              </Link>
            </div>

            {/* Info Box - Mobile */}
            <div className="bg-gray-100 p-6">
              <p className="text-xs font-bold tracking-widest uppercase text-black/60 mb-4">
                Founded in 2026
              </p>
              
              <ul className="space-y-2 mb-6">
                {features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span className="text-black/40">●</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <p className="text-sm leading-relaxed text-black/70">
                一緒に、次の当たり前を作りませんか。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Updates Section */}
      <section className="border-t border-black">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-10 md:py-12">
          <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-12">
            {/* Section Label */}
            <p className="text-sm font-bold tracking-wide shrink-0">
              Latest Updates
            </p>

            {/* News List */}
            <div className="flex-1">
              {news.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-6 py-2"
                >
                  {item.date && (
                    <time className="text-sm font-medium tracking-wider w-24 shrink-0 text-black/60">
                      {item.date}
                    </time>
                  )}
                  <span className={`flex-1 text-base ${!item.date ? "ml-24 hidden md:block" : ""}`}>
                    {item.title}
                  </span>
                  {!item.date && (
                    <span className="flex-1 text-base md:hidden">
                      {item.title}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
