import Link from "next/link";
import Image from "next/image";
import { newsItems } from "@/lib/news";
import HeroBackground from "@/components/site/HeroBackground";
import DivisionSplit from "@/components/site/DivisionSplit";
import Parallax from "@/components/ui/Parallax";
import Reveal from "@/components/ui/Reveal";
import Typewriter from "@/components/ui/Typewriter";
import Magnetic from "@/components/ui/Magnetic";

const ticker = [
  "LLM", "MACHINE LEARNING", "DEEP LEARNING", "WEB DEV", "PAPERS",
  "TRANSFORMER", "PROTOTYPING", "KAGGLE", "GENERATIVE AI", "RESEARCH",
];

export default function HomeClient() {
  return (
    <div className="bg-paper text-ink -mt-14 md:-mt-16 pt-14 md:pt-16">
      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden min-h-[calc(100svh-3.5rem)] md:min-h-[calc(100svh-4rem)] flex items-center">
        {/* animated, parallax background */}
        <HeroBackground accent="dev" neural={false} />

        <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20 w-full">
          <div className="grid lg:grid-cols-12 gap-12 xl:gap-16 items-center">
            {/* left */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 font-mono text-xs tracking-widest text-ink/50 mb-8 animate-fade-up">
                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 bg-ink animate-blink" />
                  RECRUITING
                </span>
                <span className="text-ink/25">/</span>
                <span>2026</span>
                <span className="text-ink/25">/</span>
                <span>OSAKA METROPOLITAN UNIV.</span>
              </div>

              <p className="font-mono text-xs md:text-sm tracking-[0.3em] text-accent-bright mb-6 animate-fade-up [animation-delay:80ms]">
                [ OMU INNOVATION FRONTIER ]
              </p>

              <Parallax speed={0.12}>
                <h1 className="text-[3.4rem] sm:text-[4.5rem] xl:text-[6.5rem] font-black leading-[0.88] tracking-tighter mb-8">
                  <span className="block animate-[reveal-rise_0.7s_cubic-bezier(0.22,1,0.36,1)_both] [animation-delay:60ms]">OMU</span>
                  <span className="block animate-[reveal-rise_0.7s_cubic-bezier(0.22,1,0.36,1)_both] [animation-delay:140ms]">Innovation</span>
                  <span className="block accent-gradient-text animate-[reveal-rise_0.7s_cubic-bezier(0.22,1,0.36,1)_both] [animation-delay:220ms]">Frontier</span>
                </h1>
              </Parallax>

              <p className="text-lg xl:text-xl font-medium mb-12 leading-relaxed max-w-xl text-ink/70 animate-fade-up [animation-delay:420ms]">
                AIとテクノロジーの未来を探究する学生コミュニティ。
                理解し、創り、未来を形作る側へ。
              </p>

              <div className="flex flex-wrap gap-4 animate-fade-up [animation-delay:500ms]">
                <Magnetic>
                  <Link
                    href="/join"
                    className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 text-sm font-bold tracking-widest uppercase border border-accent hover:bg-accent-bright hover:border-accent-bright hover:text-night transition-colors duration-200 shadow-[0_0_50px_-10px_rgba(11,12,14,0.25)]"
                  >
                    Join the Frontier
                    <span aria-hidden>→</span>
                  </Link>
                </Magnetic>
                <Magnetic>
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 px-8 py-4 text-sm font-bold tracking-widest uppercase border border-ink/20 text-ink hover:bg-ink/5 hover:border-ink/40 transition-colors duration-200"
                  >
                    Explore
                  </Link>
                </Magnetic>
              </div>
            </div>

            {/* right: console panel */}
            <div className="lg:col-span-5 animate-fade-up [animation-delay:140ms]">
              <div className="border border-ink/12 bg-night-2/70 backdrop-blur-sm shadow-card">
                <div className="flex items-center gap-2 border-b border-ink/10 px-4 py-3">
                  <span className="h-2.5 w-2.5 bg-ink/40" />
                  <span className="h-2.5 w-2.5 bg-ink/25" />
                  <span className="h-2.5 w-2.5 bg-ink/15" />
                  <span className="ml-3 font-mono text-[11px] tracking-widest text-ink/60">
                    oif — status
                  </span>
                </div>
                <div className="p-6 font-mono text-[13px] leading-relaxed">
                  <p className="text-ink/60 mb-4">
                    <span className="text-accent-bright">~/oif</span> ${" "}
                    <Typewriter
                      className="text-ink/80"
                      words={["./about --summary", "./status", "./projects --list", "./join"]}
                    />
                  </p>
                  {[
                    ["division", "Development / Theory"],
                    ["focus", "LLM · ML · Web · Papers"],
                    ["community", "Discord-native"],
                    ["members", "building & shipping"],
                    ["barrier", "none — 経験不問"],
                  ].map(([k, v]) => (
                    <div key={k} className="flex gap-3 py-1.5 border-b border-ink/5 last:border-0">
                      <span className="w-24 shrink-0 text-ink/60">{k}</span>
                      <span className="text-ink/85">{v}</span>
                    </div>
                  ))}
                  <p className="mt-4 text-ink/60">
                    <span className="text-accent-bright">~/oif</span> $ <span className="text-ink/52">_</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ TICKER (decorative) ============ */}
      <div aria-hidden className="border-y border-ink/10 overflow-hidden py-4 bg-night">
        <div className="flex w-max animate-marquee gap-12 font-mono text-sm tracking-widest text-ink/55">
          {[...ticker, ...ticker].map((t, i) => (
            <span key={i} className="flex items-center gap-12">
              {t}
              <span className="text-accent-bright/60">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* ============ DEPARTMENTS (interactive split) ============ */}
      <section className="bg-night">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 section-y">
          <Reveal className="mb-10 md:mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <p className="font-mono text-xs tracking-[0.3em] text-accent-bright mb-3">
                // CHOOSE YOUR PATH
              </p>
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter">
                進む道を、選ぶ
              </h2>
            </div>
            <p className="font-mono text-xs text-ink/55 md:pb-2">
              hover to explore — 2 divisions, 1 community
            </p>
          </Reveal>

          <Reveal delay={120}>
            <DivisionSplit />
          </Reveal>
        </div>
      </section>

      {/* ============ LATEST UPDATES ============ */}
      <section className="bg-night">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 section-y">
          <div className="flex flex-col md:flex-row md:items-start gap-10 md:gap-20">
            <div className="shrink-0">
              <p className="font-mono text-xs tracking-[0.3em] text-accent-bright mb-3">// LOG</p>
              <h2 className="text-2xl md:text-3xl font-black tracking-tighter">Latest Updates</h2>
              <Link href="/news/" className="mt-5 inline-flex items-center gap-1 font-mono text-xs tracking-widest text-ink/60 hover:text-accent-bright transition-colors">
                view all →
              </Link>
            </div>
            <div className="flex-1 border-t border-ink/10">
              {newsItems.map((item, i) => (
                <div key={i} className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-10 py-6 border-b border-ink/10 group">
                  <time className="font-mono text-xs tracking-widest text-ink/60 w-28 shrink-0">
                    {item.date || "——.——.——"}
                  </time>
                  <span className="text-base md:text-lg font-bold tracking-tight group-hover:text-accent-bright transition-colors">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ PARTNER ============ */}
      <section className="border-t border-ink/10 bg-night">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 section-y-sm">
          <p className="font-mono text-xs tracking-[0.3em] text-accent-bright mb-6">// PARTNER</p>
          <a
            href="https://takeforest.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between gap-6 border border-ink/12 bg-night-2 px-8 py-7 hover:border-ink/30 hover:bg-night-3 transition-colors duration-300"
          >
            <div>
              <span className="font-mono text-[11px] tracking-widest text-accent-bright">OFFICIAL PARTNER</span>
              <p className="mt-3 text-xl md:text-2xl font-bold tracking-tight">takeforest株式会社</p>
              <p className="mt-1 text-sm text-ink/55">AIを活用した新しい学習体験を</p>
            </div>
            <span className="text-2xl text-ink/52 group-hover:text-ink group-hover:translate-x-1 transition-all duration-300">→</span>
          </a>
        </div>
      </section>

      {/* ============ CTA BAND ============ */}
      <section className="relative overflow-hidden border-t border-ink/10 bg-night">
        <div aria-hidden className="absolute inset-0 dot-grid opacity-50" />
        <div aria-hidden className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[30rem] w-[30rem] rounded-full bg-accent/15 blur-[120px]" />
        <Reveal className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-28 md:py-40 text-center">
          <p className="font-mono text-xs tracking-[0.3em] text-accent-bright mb-8">$ ./join</p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[1.05] mb-10">
            未来を<span className="accent-gradient-text">形作る側</span>へ。
          </h2>
          <p className="text-base md:text-lg text-ink/60 max-w-xl mx-auto mb-12">
            プログラミング経験は問いません。まずはDiscordを覗いてみることから。
          </p>
          <Magnetic strength={0.45}>
            <Link
              href="/join"
              className="inline-flex items-center gap-2 bg-accent text-white px-10 py-5 text-sm font-bold tracking-widest uppercase border border-accent hover:bg-accent-bright hover:border-accent-bright hover:text-night transition-colors duration-200 shadow-[0_0_60px_-12px_rgba(11,12,14,0.25)]"
            >
              Join the Community
              <span aria-hidden>→</span>
            </Link>
          </Magnetic>
        </Reveal>
      </section>
    </div>
  );
}
