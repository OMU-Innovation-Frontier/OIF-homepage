import { Metadata } from "next";
import Link from "next/link";
import { Fragment } from "react";
import HeroBackground from "@/components/site/HeroBackground";
import Terminal, { type TermLine } from "@/components/site/Terminal";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Developers | OIF開発部門",
  description:
    "OIF開発部門は、最新技術を試し、実際に開発し、使える形にして出す部門です。LLM・Web・AIツールを、生成AIも使いながら速く形にします。",
  alternates: { canonical: "https://oif-ai.com/developers/" },
};

const boot: TermLine[] = [
  { p: "$", t: "oif-dev init" },
  { t: "→ scanning latest AI…", c: "text-ink/60" },
  { t: "→ found: LLMs · agents · tools", c: "text-ink/60" },
  { p: "$", t: "build --fast --with-genai" },
  { t: "✓ prototype ready", c: "text-ink" },
  { p: "$", t: "ship it 🚀", c: "text-dev-bright" },
];

const pipeline = [
  { n: "01", en: "PICK", body: "気になる技術やテーマを選ぶ" },
  { n: "02", en: "TEST", body: "まず小さく触って検証する" },
  { n: "03", en: "BUILD", body: "実装して動く形にする" },
  { n: "04", en: "SHIP", body: "使えるところまで出す" },
];

const gitlog = [
  { h: "a1f3c9", m: "feat: 新しいLLM APIを試す", t: "2h ago" },
  { h: "7b2e10", m: "build: ハンズオン用デモを実装", t: "1d ago" },
  { h: "c40d8a", m: "fix: プロンプトを調整して精度を上げる", t: "3d ago" },
  { h: "e91b22", m: "ship: 試作プロダクト v0.1 を公開", t: "1w ago" },
  { h: "2d77f5", m: "chore: 生成AIで開発を高速化", t: "2w ago" },
];

const stack = [
  "LLM", "Ollama", "Next.js", "Python", "Generative AI",
  "Web", "API", "UI / UX", "Prototyping", "Automation",
];

export default function DevelopersPage() {
  return (
    <div className="bg-paper text-ink -mt-14 md:-mt-16 pt-14 md:pt-16">
      {/* HERO */}
      <section className="relative overflow-hidden min-h-[calc(100svh-3.5rem)] flex items-center">
        <HeroBackground accent="dev" />
        <div aria-hidden className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-night to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20 w-full">
          <div className="grid lg:grid-cols-12 gap-12 xl:gap-16 items-center">
            <div className="lg:col-span-6 animate-fade-up">
              <p className="font-mono text-xs md:text-sm tracking-[0.3em] text-dev-bright mb-6">
                // OIF DEVELOPMENT DIVISION
              </p>
              <h1 className="text-6xl md:text-7xl xl:text-8xl font-black tracking-tighter leading-[0.9] mb-8">
                つくって、
                <br />
                <span className="text-dev-bright">出す。</span>
              </h1>
              <p className="text-lg xl:text-xl text-ink/70 max-w-lg leading-relaxed mb-10">
                理論を学ぶだけで終わらせない。最新技術を実際に触り、試し、
                生成AIも使いながら——使えるプロダクトまで持っていく部門。
              </p>
              <Link
                href="/join/"
                className="inline-flex items-center gap-2 bg-dev text-white px-8 py-4 text-sm font-bold tracking-widest uppercase border border-dev hover:bg-dev-bright hover:text-night hover:border-dev-bright transition-colors duration-200 shadow-[0_0_50px_-12px_rgba(11,12,14,0.25)]"
              >
                作る側になる
                <span aria-hidden>→</span>
              </Link>
            </div>
            <div className="lg:col-span-6 animate-fade-up [animation-delay:140ms]">
              <Terminal title="oif-dev — zsh" lines={boot} />
            </div>
          </div>
        </div>
      </section>

      {/* STATEMENT */}
      <section className="border-t border-ink/10 bg-night">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 section-y-lg">
          <Reveal className="max-w-4xl">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-tight mb-12">
              <span className="text-dev-bright">「面白そう」</span>で、
              <br className="hidden md:block" />
              終わらせない。
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-ink/75 leading-relaxed font-medium">
              新しい技術が出たら、まず触る。話題として追うだけでなく、
              自分たちの手で動かして、価値のある形へ落とし込む。
              プログラミング能力だけでなく、設計・デザイン・生成AIを組み合わせて速く出す。
            </p>
          </Reveal>
        </div>
      </section>

      {/* PIPELINE */}
      <section className="border-t border-ink/10 bg-night-2">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 section-y-lg">
          <Reveal className="mb-14">
            <p className="font-mono text-xs tracking-[0.3em] text-dev-bright mb-4">// THE PIPELINE</p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter">アイデアが、出荷されるまで</h2>
          </Reveal>
          <Reveal delay={120} className="flex flex-col md:flex-row md:items-stretch">
            {pipeline.map((s, i) => (
              <Fragment key={s.n}>
                <div className="group flex-1 border border-ink/10 bg-night p-6 md:p-7 transition-colors hover:border-dev-bright/50 hover:bg-night-3">
                  <p className="font-mono text-4xl font-black tracking-tighter text-dev-bright/30 group-hover:text-dev-bright/60 transition-colors mb-5">
                    {s.n}
                  </p>
                  <p className="font-mono text-[11px] tracking-[0.3em] text-dev-bright mb-2">{s.en}</p>
                  <p className="text-sm text-ink/65 leading-relaxed">{s.body}</p>
                </div>
                {i < pipeline.length - 1 && (
                  <div className="hidden md:flex items-center px-1" aria-hidden>
                    <div className="h-px w-8 bg-gradient-to-r from-dev-bright/10 via-dev-bright to-dev-bright/10 bg-[length:200%_100%] animate-[gradient-pan_2.5s_linear_infinite]" />
                  </div>
                )}
              </Fragment>
            ))}
          </Reveal>
        </div>
      </section>

      {/* GIT LOG */}
      <section className="border-t border-ink/10 bg-night">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 section-y-lg">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-16">
            <Reveal>
              <p className="font-mono text-xs tracking-[0.3em] text-dev-bright mb-4">// git log --oneline</p>
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-6">手を動かした分だけ、進む</h2>
              <p className="text-ink/60 leading-relaxed max-w-md">
                派手な計画より、小さなコミットの積み重ね。試して、直して、出す。その繰り返しが力になる。
              </p>
            </Reveal>
            <Reveal delay={100} className="border border-ink/10 bg-night-2 font-mono text-sm">
              {gitlog.map((c) => (
                <div
                  key={c.h}
                  className="group flex items-center gap-4 px-5 py-4 border-b border-ink/5 last:border-0 hover:bg-ink/[0.03] transition-colors"
                >
                  <span className="text-dev-bright shrink-0">{c.h}</span>
                  <span className="flex-1 text-ink/75 group-hover:text-ink transition-colors truncate">
                    {c.m}
                  </span>
                  <span className="text-ink/52 shrink-0 text-xs">{c.t}</span>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* STACK */}
      <section className="border-t border-ink/10 bg-night-2">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 section-y">
          <Reveal className="mb-10">
            <p className="font-mono text-xs tracking-[0.3em] text-dev-bright mb-4">// STACK WE PLAY WITH</p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter">手札</h2>
          </Reveal>
          <Reveal delay={80} className="flex flex-wrap gap-3">
            {stack.map((s) => (
              <span
                key={s}
                className="font-mono text-sm tracking-wide text-ink/70 border border-ink/15 px-4 py-2.5 hover:border-dev-bright hover:text-dev-bright hover:-translate-y-0.5 transition-all duration-200"
              >
                {s}
              </span>
            ))}
          </Reveal>
        </div>
      </section>

      {/* CLOSING */}
      <section className="relative overflow-hidden border-t border-ink/10 bg-night">
        <div aria-hidden className="absolute inset-0 dot-grid opacity-40" />
        <div aria-hidden className="absolute left-1/3 top-1/2 -translate-y-1/2 h-[34rem] w-[34rem] rounded-full bg-dev/20 blur-[130px]" />
        <Reveal className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-32 md:py-48">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter leading-[1.1] max-w-5xl mb-12">
            <span className="text-dev-bright">面白そう</span>で終わらせず、
            <br />
            使えるところまで持っていく。
          </h2>
          <Link
            href="/join/"
            className="inline-flex items-center gap-2 bg-dev text-white px-8 py-4 text-sm font-bold tracking-widest uppercase border border-dev hover:bg-dev-bright hover:text-night hover:border-dev-bright transition-colors duration-200 shadow-[0_0_50px_-12px_rgba(11,12,14,0.25)]"
          >
            開発に参加する
            <span aria-hidden>→</span>
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
