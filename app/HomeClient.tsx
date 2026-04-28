"use client";

import Link from "next/link";
import Image from "next/image";
import SectionDivider from "@/components/site/SectionDivider";

const news = [
  { date: "2026.01.24", title: "公式サイトを公開しました" },
  { date: "", title: "新メンバー募集を開始しました" },
];

const partners = [
  {
    name: "takeforest株式会社",
    tagline: "AIを活用した新しい学習体験を",
    body: "OIFとのパートナーシップを通じて、メンバーへの知識共有やAI学習機会の提供を行っています。",
    href: "https://takeforest.com",
  },
];

export default function HomeClient() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-24 w-full">

          {/* Desktop Layout */}
          <div className="hidden lg:grid lg:grid-cols-12 lg:gap-12 xl:gap-20 items-start">
            <div className="lg:col-span-7 xl:col-span-7">
              <div className="mb-10">
                <Image
                  src="/logo.png"
                  alt="OIF Logo"
                  width={160}
                  height={160}
                  className="w-24 h-24 xl:w-28 xl:h-28"
                />
              </div>
              <h1 className="text-[6rem] xl:text-[7rem] font-black leading-[0.9] tracking-tighter mb-4">
                OMU<br />Innovation<br />Frontier
              </h1>
              <p className="text-xl xl:text-2xl font-medium mb-12 leading-relaxed max-w-lg">
                AIとテクノロジーの未来を探究する学生コミュニティ
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/join"
                  className="inline-block bg-black text-white px-8 py-4 text-sm font-medium tracking-widest uppercase border border-black hover:bg-white hover:text-black transition-colors duration-200"
                >
                  Join the Community
                </Link>
                <Link
                  href="/about"
                  className="inline-block bg-white text-black px-8 py-4 text-sm font-medium tracking-widest uppercase border border-black hover:bg-black hover:text-white transition-colors duration-200"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Right: Intro Box */}
            <div className="lg:col-span-5 bg-white border border-black p-8 xl:p-10">
              <p className="text-xs font-bold tracking-widest uppercase text-black/60 mb-8 border-b border-black/10 pb-4">
                Introduction
              </p>
              <div className="space-y-6 text-sm md:text-base leading-relaxed text-black/80">
                <p>
                  OIF は、<br />
                  大阪公立大学の学生による<br />
                  AI・テクノロジーに関心のある人のためのコミュニティです。
                </p>
                <p>
                  人工知能は急速に社会を変えています。
                  私たちは、その変化を「使う側」としてだけでなく、
                  理解し、創り、未来を形作る側として関わることを目指しています。
                </p>
                <p className="font-bold">
                  プログラミング経験の有無は問いません。
                  共に学び、試し、アイデアを形にしていく場です。
                </p>
              </div>
            </div>
          </div>

          {/* Mobile/Tablet Layout */}
          <div className="lg:hidden">
            <div className="mb-6">
              <Image
                src="/logo.png"
                alt="OIF Logo"
                width={160}
                height={160}
                className="w-20 h-20"
              />
            </div>
            <h1 className="text-[3.5rem] sm:text-[4.5rem] font-black leading-[0.9] tracking-tighter mb-4">
              OMU<br />Innovation<br />Frontier
            </h1>
            <p className="text-lg md:text-xl font-medium mb-10 leading-relaxed">
              AIとテクノロジーの未来を探究する学生コミュニティ
            </p>
            <div className="flex flex-wrap gap-3 mb-12">
              <Link
                href="/join"
                className="inline-block bg-black text-white px-6 py-3 text-sm font-medium tracking-widest uppercase border border-black hover:bg-white hover:text-black transition-colors duration-200"
              >
                Join
              </Link>
              <Link
                href="/about"
                className="inline-block bg-white text-black px-6 py-3 text-sm font-medium tracking-widest uppercase border border-black hover:bg-black hover:text-white transition-colors duration-200"
              >
                About
              </Link>
            </div>
            <div className="bg-white border border-black p-6">
              <p className="text-xs font-bold tracking-widest uppercase text-black/60 mb-6 pb-2 border-b border-black/10">
                Introduction
              </p>
              <div className="space-y-4 text-sm leading-relaxed text-black/80 font-medium">
                <p>OIF は、大阪公立大学の学生によるAI・テクノロジーに関心のある人のためのコミュニティです。</p>
                <p>私たちは、その変化を理解し、創り、未来を形作る側として関わることを目指しています。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Partners Section */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-14 md:py-20">
          <div className="mb-10 md:mb-14">
            <p className="text-xs font-bold tracking-widest uppercase text-black/40 mb-3">
              Partners
            </p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              連携パートナー
            </h2>
          </div>
          <div className="grid gap-4">
            {partners.map((partner) => (
              <a
                key={partner.name}
                href={partner.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-6 border border-black bg-white px-8 py-7 hover:bg-black hover:text-white transition-colors duration-200"
              >
                <div>
                  <span className="inline-block text-xs font-medium tracking-widest uppercase bg-black text-white group-hover:bg-white group-hover:text-black px-2 py-0.5 mb-4 transition-colors duration-200">
                    Official Partner
                  </span>
                  <p className="text-xl md:text-2xl font-bold tracking-tight mb-2">
                    {partner.name}
                  </p>
                  <p className="text-base font-semibold tracking-tight mb-3 group-hover:text-white transition-colors duration-200">
                    {partner.tagline}
                  </p>
                  <p className="text-sm leading-relaxed text-black/60 group-hover:text-white/70 max-w-xl transition-colors duration-200">
                    {partner.body}
                  </p>
                </div>
                <span className="text-2xl font-light shrink-0 opacity-30 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200">
                  →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Latest Updates Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20">
          <div className="flex flex-col md:flex-row md:items-start gap-12 md:gap-20">
            <p className="text-xs font-bold tracking-[0.2em] shrink-0 uppercase opacity-30 mt-1">
              Latest Updates
            </p>
            <div className="flex-1 divide-y divide-black/5">
              {news.map((item, index) => (
                <div key={index} className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-10 py-6 first:pt-0 last:pb-0 group">
                  {item.date ? (
                    <time className="text-xs font-bold tracking-widest text-black/40 w-24 shrink-0">
                      {item.date}
                    </time>
                  ) : (
                    <div className="w-24 shrink-0 hidden sm:block" />
                  )}
                  <span className="text-base md:text-lg font-bold tracking-tight group-hover:text-black/60 transition-colors duration-200">
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
