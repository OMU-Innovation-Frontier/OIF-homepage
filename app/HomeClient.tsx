import Link from "next/link";
import Image from "next/image";
import { newsItems } from "@/lib/news";

const departments = [
  {
    index: "01",
    href: "/developers",
    code: "dev",
    label: "DEVELOPMENT",
    title: "開発部門",
    body: "最新のAI技術を実際に試し、LLMやWebアプリなどのプロダクトを形にする。動くものを作ることにこだわる部門。",
    tags: ["LLM", "WEB", "AI-TOOLS", "PROTOTYPE"],
    glow: "before:bg-dev-bright",
    hover: "hover:border-dev-bright/50",
    accentText: "text-dev-bright",
  },
  {
    index: "02",
    href: "/theory",
    code: "theory",
    label: "THEORY",
    title: "理論部門",
    body: "AIや機械学習の仕組みを数学・統計から深く理解する。論文読解やゼミを通じてAIの本質を探究する部門。",
    tags: ["MATH", "ML-THEORY", "PAPERS", "SEMINAR"],
    glow: "before:bg-theory-bright",
    hover: "hover:border-theory-bright/50",
    accentText: "text-theory-bright",
  },
];

const stats = [
  { k: "EST.", v: "2026" },
  { k: "DIVISIONS", v: "02" },
  { k: "PRODUCTS", v: "NOEMA · samurAI" },
  { k: "CONTEST", v: "O-BUCs Finalist" },
];

const ticker = [
  "LLM", "MACHINE LEARNING", "DEEP LEARNING", "WEB DEV", "PAPERS",
  "TRANSFORMER", "PROTOTYPING", "KAGGLE", "GENERATIVE AI", "RESEARCH",
];

export default function HomeClient() {
  return (
    <div className="on-dark bg-night text-white -mt-14 md:-mt-16 pt-14 md:pt-16">
      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden min-h-[calc(100svh-3.5rem)] md:min-h-[calc(100svh-4rem)] flex items-center">
        {/* background layers */}
        <div aria-hidden className="absolute inset-0 dot-grid animate-grid-pan opacity-70" />
        <div aria-hidden className="absolute -top-40 -left-32 h-[40rem] w-[40rem] rounded-full bg-accent/20 blur-[120px] animate-drift-slow" />
        <div aria-hidden className="absolute top-1/3 -right-40 h-[34rem] w-[34rem] rounded-full bg-dev/20 blur-[120px] animate-drift-slower" />
        <div aria-hidden className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-night to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20 w-full">
          <div className="grid lg:grid-cols-12 gap-12 xl:gap-16 items-center">
            {/* left */}
            <div className="lg:col-span-7 animate-fade-up">
              <div className="flex items-center gap-3 font-mono text-xs tracking-widest text-white/50 mb-8">
                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 bg-emerald-400 animate-blink" />
                  RECRUITING
                </span>
                <span className="text-white/25">/</span>
                <span>2026</span>
                <span className="text-white/25">/</span>
                <span>OSAKA METROPOLITAN UNIV.</span>
              </div>

              <p className="font-mono text-xs md:text-sm tracking-[0.3em] text-accent-bright mb-6">
                [ OMU INNOVATION FRONTIER ]
              </p>

              <h1 className="text-[3.4rem] sm:text-[4.5rem] xl:text-[6.5rem] font-black leading-[0.88] tracking-tighter mb-8">
                OMU<br />Innovation<br />
                <span className="accent-gradient-text">Frontier</span>
              </h1>

              <p className="text-lg xl:text-xl font-medium mb-12 leading-relaxed max-w-xl text-white/70">
                AIとテクノロジーの未来を探究する学生コミュニティ。
                理解し、創り、未来を形作る側へ。
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/join"
                  className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 text-sm font-bold tracking-widest uppercase border border-accent hover:bg-accent-bright hover:border-accent-bright hover:text-night transition-colors duration-200 shadow-[0_0_50px_-10px_rgba(99,102,241,0.8)]"
                >
                  Join the Frontier
                  <span aria-hidden>→</span>
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-8 py-4 text-sm font-bold tracking-widest uppercase border border-white/20 text-white hover:bg-white/5 hover:border-white/40 transition-colors duration-200"
                >
                  Explore
                </Link>
              </div>
            </div>

            {/* right: console panel */}
            <div className="lg:col-span-5 animate-fade-up [animation-delay:140ms]">
              <div className="border border-white/12 bg-night-2/70 backdrop-blur-sm shadow-card">
                <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                  <span className="h-2.5 w-2.5 bg-theory-bright/80" />
                  <span className="h-2.5 w-2.5 bg-amber-400/80" />
                  <span className="h-2.5 w-2.5 bg-emerald-400/80" />
                  <span className="ml-3 font-mono text-[11px] tracking-widest text-white/40">
                    oif — status
                  </span>
                </div>
                <div className="p-6 font-mono text-[13px] leading-relaxed">
                  <p className="text-white/40 mb-4">
                    <span className="text-accent-bright">~/oif</span> $ ./about --summary
                  </p>
                  {[
                    ["division", "Development / Theory"],
                    ["focus", "LLM · ML · Web · Papers"],
                    ["community", "Discord-native"],
                    ["members", "building & shipping"],
                    ["barrier", "none — 経験不問"],
                  ].map(([k, v]) => (
                    <div key={k} className="flex gap-3 py-1.5 border-b border-white/5 last:border-0">
                      <span className="w-24 shrink-0 text-white/40">{k}</span>
                      <span className="text-white/85">{v}</span>
                    </div>
                  ))}
                  <p className="mt-4 text-white/40">
                    <span className="text-accent-bright">~/oif</span> $ <span className="animate-blink">▋</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ TICKER ============ */}
      <div className="border-y border-white/10 overflow-hidden py-4 bg-night">
        <div className="flex w-max animate-marquee gap-12 font-mono text-sm tracking-widest text-white/30">
          {[...ticker, ...ticker].map((t, i) => (
            <span key={i} className="flex items-center gap-12">
              {t}
              <span className="text-accent-bright/60">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* ============ DEPARTMENTS ============ */}
      <section className="bg-night">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 section-y">
          <div className="mb-12 md:mb-16 flex items-end justify-between gap-6">
            <div>
              <p className="font-mono text-xs tracking-[0.3em] text-accent-bright mb-3">
                // DEPARTMENTS
              </p>
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter">
                2つの部門
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-white/10 border border-white/10">
            {departments.map((d) => (
              <Link
                key={d.code}
                href={d.href}
                className={`group relative isolate flex flex-col bg-night-2 p-8 md:p-12 transition-colors duration-300 hover:bg-night-3 before:absolute before:inset-x-0 before:top-0 before:h-px ${d.glow} before:opacity-0 hover:before:opacity-100 before:transition-opacity ${d.hover}`}
              >
                <div className="flex items-center justify-between mb-10">
                  <span className="font-mono text-sm text-white/30">{d.index}</span>
                  <span className={`font-mono text-[11px] tracking-[0.3em] ${d.accentText}`}>
                    {d.label}
                  </span>
                </div>
                <h3 className="text-3xl md:text-4xl font-black tracking-tighter mb-5">
                  {d.title}
                </h3>
                <p className="text-sm md:text-base leading-relaxed text-white/60 mb-8 flex-1">
                  {d.body}
                </p>
                <div className="flex flex-wrap gap-2 font-mono text-[11px] tracking-widest text-white/45 mb-8">
                  {d.tags.map((t) => (
                    <span key={t} className="border border-white/15 px-2.5 py-1">{t}</span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-bold tracking-widest uppercase">
                  詳しく見る
                  <span className="transition-transform duration-200 group-hover:translate-x-1.5">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ STATS ============ */}
      <section className="border-y border-white/10 bg-night-2">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-white/10">
            {stats.map((s) => (
              <div key={s.k} className="px-6 py-10 md:py-14">
                <p className="font-mono text-[11px] tracking-[0.25em] text-white/40 mb-3">{s.k}</p>
                <p className="text-xl md:text-2xl font-bold tracking-tight">{s.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ LATEST UPDATES ============ */}
      <section className="bg-night">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 section-y">
          <div className="flex flex-col md:flex-row md:items-start gap-10 md:gap-20">
            <div className="shrink-0">
              <p className="font-mono text-xs tracking-[0.3em] text-accent-bright mb-3">// LOG</p>
              <h2 className="text-2xl md:text-3xl font-black tracking-tighter">Latest Updates</h2>
              <Link href="/news/" className="mt-5 inline-flex items-center gap-1 font-mono text-xs tracking-widest text-white/45 hover:text-accent-bright transition-colors">
                view all →
              </Link>
            </div>
            <div className="flex-1 border-t border-white/10">
              {newsItems.map((item, i) => (
                <div key={i} className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-10 py-6 border-b border-white/10 group">
                  <time className="font-mono text-xs tracking-widest text-white/40 w-28 shrink-0">
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
      <section className="border-t border-white/10 bg-night">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 section-y-sm">
          <p className="font-mono text-xs tracking-[0.3em] text-accent-bright mb-6">// PARTNER</p>
          <a
            href="https://takeforest.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between gap-6 border border-white/12 bg-night-2 px-8 py-7 hover:border-white/30 hover:bg-night-3 transition-colors duration-300"
          >
            <div>
              <span className="font-mono text-[11px] tracking-widest text-accent-bright">OFFICIAL PARTNER</span>
              <p className="mt-3 text-xl md:text-2xl font-bold tracking-tight">takeforest株式会社</p>
              <p className="mt-1 text-sm text-white/55">AIを活用した新しい学習体験を</p>
            </div>
            <span className="text-2xl text-white/30 group-hover:text-white group-hover:translate-x-1 transition-all duration-300">→</span>
          </a>
        </div>
      </section>

      {/* ============ CTA BAND ============ */}
      <section className="relative overflow-hidden border-t border-white/10 bg-night">
        <div aria-hidden className="absolute inset-0 dot-grid opacity-50" />
        <div aria-hidden className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[30rem] w-[30rem] rounded-full bg-accent/15 blur-[120px]" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-28 md:py-40 text-center">
          <p className="font-mono text-xs tracking-[0.3em] text-accent-bright mb-8">$ ./join</p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[1.05] mb-10">
            未来を<span className="accent-gradient-text">形作る側</span>へ。
          </h2>
          <p className="text-base md:text-lg text-white/60 max-w-xl mx-auto mb-12">
            プログラミング経験は問いません。まずはDiscordを覗いてみることから。
          </p>
          <Link
            href="/join"
            className="inline-flex items-center gap-2 bg-accent text-white px-10 py-5 text-sm font-bold tracking-widest uppercase border border-accent hover:bg-accent-bright hover:border-accent-bright hover:text-night transition-colors duration-200 shadow-[0_0_60px_-12px_rgba(99,102,241,0.85)]"
          >
            Join the Community
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
