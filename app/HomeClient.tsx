import Link from "next/link";
import Image from "next/image";
import SectionDivider from "@/components/site/SectionDivider";
import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";
import { newsItems } from "@/lib/news";

const partners = [
  {
    name: "takeforest株式会社",
    tagline: "AIを活用した新しい学習体験を",
    body: "OIFとのパートナーシップを通じて、メンバーへの知識共有やAI学習機会の提供を行っています。",
    href: "https://takeforest.com",
  },
];

const departments = [
  {
    href: "/developers",
    eyebrow: "Development",
    title: "開発部門",
    body: "最新のAI技術を実際に試し、LLMやWebアプリなどのプロダクトを形にする部門。「面白そう」で終わらせず、動くものを作ることにこだわります。",
    tags: ["LLM", "Web Dev", "AI Tools", "Prototype"],
    cta: "開発部門について",
    accent: "dev" as const,
  },
  {
    href: "/theory",
    eyebrow: "Theory",
    title: "理論部門",
    body: "AIや機械学習の仕組みを数学・統計から深く理解する部門。論文読解やゼミ形式のディスカッションを通じて、AIの本質を探究します。",
    tags: ["数学", "ML理論", "論文読解", "ゼミ"],
    cta: "理論部門について",
    accent: "theory" as const,
  },
];

const accentClasses = {
  dev: {
    border: "border-l-dev",
    hoverBg: "md:hover:bg-dev-tint/50",
    cta: "bg-dev hover:bg-ink",
  },
  theory: {
    border: "border-l-theory",
    hoverBg: "md:hover:bg-theory-tint/50",
    cta: "bg-theory hover:bg-ink",
  },
} as const;

export default function HomeClient() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex items-center bg-paper min-h-[calc(100svh-3.5rem)] md:min-h-[calc(100svh-4rem)] overflow-hidden">
        {/* Subtle accent glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 -right-32 h-[34rem] w-[34rem] rounded-full bg-accent/5 blur-3xl"
        />
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-24 w-full">

          {/* Desktop Layout */}
          <div className="hidden lg:grid lg:grid-cols-12 lg:gap-12 xl:gap-20 items-center">
            <div className="lg:col-span-7 animate-fade-up">
              <div className="mb-10 flex items-center gap-4">
                <Image
                  src="/logo.png"
                  alt=""
                  width={160}
                  height={160}
                  className="w-24 h-24 xl:w-28 xl:h-28"
                />
                <Eyebrow tone="accent" className="border-l border-accent/40 pl-4">
                  Est. 2024 · Osaka Metropolitan Univ.
                </Eyebrow>
              </div>
              <h1 className="text-[5.5rem] xl:text-[7rem] font-black leading-[0.9] tracking-tighter mb-6">
                OMU<br />Innovation<br />Frontier
              </h1>
              <p className="text-xl xl:text-2xl font-medium mb-12 leading-relaxed max-w-lg text-ink/80">
                AIとテクノロジーの未来を探究する<span className="text-accent">学生コミュニティ</span>
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="/join" variant="primary">Join the Community</Button>
                <Button href="/about" variant="secondary">Learn More</Button>
              </div>
            </div>

            {/* Right: Intro Box */}
            <div className="lg:col-span-5 bg-white border border-line shadow-card p-8 xl:p-10 animate-fade-up [animation-delay:120ms]">
              <Eyebrow tone="accent" className="mb-8 border-b border-line pb-4 block">
                Introduction
              </Eyebrow>
              <div className="space-y-6 text-sm md:text-base leading-relaxed text-ink/75">
                <p>
                  OIF は、大阪公立大学の学生による、
                  AI・テクノロジーに関心のある人のためのコミュニティです。
                </p>
                <p>
                  人工知能は急速に社会を変えています。
                  私たちは、その変化を「使う側」としてだけでなく、
                  理解し、創り、未来を形作る側として関わることを目指しています。
                </p>
                <p className="font-bold text-ink">
                  プログラミング経験の有無は問いません。
                  共に学び、試し、アイデアを形にしていく場です。
                </p>
              </div>
            </div>
          </div>

          {/* Mobile/Tablet Layout */}
          <div className="lg:hidden animate-fade-up">
            <div className="mb-6">
              <Image
                src="/logo.png"
                alt=""
                width={160}
                height={160}
                className="w-20 h-20"
              />
            </div>
            <Eyebrow tone="accent" className="mb-4">
              Est. 2024 · Osaka Metropolitan Univ.
            </Eyebrow>
            <h1 className="text-[3.5rem] sm:text-[4.5rem] font-black leading-[0.9] tracking-tighter mb-4">
              OMU<br />Innovation<br />Frontier
            </h1>
            <p className="text-lg md:text-xl font-medium mb-10 leading-relaxed text-ink/80">
              AIとテクノロジーの未来を探究する<span className="text-accent">学生コミュニティ</span>
            </p>
            <div className="flex flex-wrap gap-3 mb-12">
              <Button href="/join" variant="primary" size="md">Join</Button>
              <Button href="/about" variant="secondary" size="md">About</Button>
            </div>
            <div className="bg-white border border-line shadow-card p-6">
              <Eyebrow tone="accent" className="mb-6 pb-2 border-b border-line block">
                Introduction
              </Eyebrow>
              <div className="space-y-4 text-sm leading-relaxed text-ink/75 font-medium">
                <p>OIF は、大阪公立大学の学生によるAI・テクノロジーに関心のある人のためのコミュニティです。</p>
                <p>私たちは、その変化を理解し、創り、未来を形作る側として関わることを目指しています。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="bg-paper">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 section-y">
          <div className="mb-12 md:mb-16">
            <Eyebrow tone="accent" className="mb-3">Departments</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              2つの部門
            </h2>
          </div>

          <div className="grid md:grid-cols-2 border border-ink shadow-card bg-white">
            {departments.map((d, i) => {
              const a = accentClasses[d.accent];
              return (
                <div
                  key={d.title}
                  className={`group flex flex-col p-8 md:p-10 border-l-4 ${a.border} ${a.hoverBg} transition-colors duration-300 ${
                    i === 0 ? "border-b md:border-b-0 md:border-r border-ink" : ""
                  }`}
                >
                  <Eyebrow tone={d.accent} className="mb-6 tracking-[0.25em] text-[11px]">
                    {d.eyebrow}
                  </Eyebrow>
                  <h3 className="text-3xl md:text-4xl font-black tracking-tighter mb-4">
                    {d.title}
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed text-ink/65 mb-8 flex-1">
                    {d.body}
                  </p>
                  <div className="flex flex-wrap gap-2 text-xs font-bold tracking-widest uppercase mb-8">
                    {d.tags.map((t) => (
                      <span key={t} className="border border-ink/15 text-ink/60 px-3 py-1">
                        {t}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={d.href}
                    className={`inline-flex items-center gap-2 ${a.cta} text-white px-6 py-3 text-sm font-medium tracking-widest uppercase transition-colors duration-200 self-start`}
                  >
                    {d.cta}
                    <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Partners Section */}
      <section className="bg-paper">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 section-y-sm">
          <div className="mb-10 md:mb-14">
            <Eyebrow tone="accent" className="mb-3">Partners</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
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
                className="group flex items-center justify-between gap-6 border border-ink bg-white px-8 py-7 shadow-card hover:bg-ink hover:text-white transition-colors duration-300"
              >
                <div>
                  <span className="inline-block text-xs font-medium tracking-widest uppercase bg-accent text-white px-2 py-0.5 mb-4">
                    Official Partner
                  </span>
                  <p className="text-xl md:text-2xl font-bold tracking-tight mb-2">
                    {partner.name}
                  </p>
                  <p className="text-base font-semibold tracking-tight mb-3">
                    {partner.tagline}
                  </p>
                  <p className="text-sm leading-relaxed text-ink/60 group-hover:text-white/70 max-w-xl transition-colors duration-300">
                    {partner.body}
                  </p>
                </div>
                <span className="text-2xl font-light shrink-0 opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 ease-smooth">
                  →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Latest Updates Section */}
      <section className="bg-paper">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 section-y">
          <div className="flex flex-col md:flex-row md:items-start gap-12 md:gap-20">
            <div className="shrink-0">
              <Eyebrow tone="accent" className="tracking-[0.2em]">Latest Updates</Eyebrow>
              <Link
                href="/news/"
                className="mt-4 hidden md:inline-flex items-center gap-1 text-sm font-bold text-ink/60 hover:text-accent transition-colors"
              >
                View all →
              </Link>
            </div>
            <div className="flex-1 divide-y divide-ink/10 border-t border-ink/10">
              {newsItems.map((item, index) => (
                <div key={index} className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-10 py-6 group">
                  {item.date ? (
                    <time className="text-xs font-bold tracking-widest text-ink/55 w-24 shrink-0">
                      {item.date}
                    </time>
                  ) : (
                    <div className="w-24 shrink-0 hidden sm:block" />
                  )}
                  <span className="text-base md:text-lg font-bold tracking-tight group-hover:text-accent transition-colors duration-200">
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
