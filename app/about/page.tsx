import { Metadata } from "next";
import Link from "next/link";
import { Fragment } from "react";
import { Brain, Hammer, Compass } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "About | OIF 大阪公立大学のAIサークル",
  description:
    "OIF（OMU Innovation Frontier）は大阪公立大学のAI・プログラミングサークルです。深く考え、とにかく作ってみる、外の世界に出てみる——AIに興味のある大阪公立大学の学生には最適な環境です。",
  alternates: {
    canonical: "https://oif-ai.com/about/",
  },
};

const acronym = [
  { l: "O", w: "OMU", s: "大阪公立大学" },
  { l: "I", w: "Innovation", s: "革新する" },
  { l: "F", w: "Frontier", s: "最前線へ" },
];

const contrasts = [
  { no: "受け身で聞くだけの勉強会", yes: "手を動かして、つくるコミュニティ" },
  { no: "評価のために、こなす学び", yes: "やりたいことのための、学び" },
  { no: "教室の中で、待っている", yes: "外の世界に、出ていく" },
];

const beliefs = [
  {
    n: "01",
    en: "THINK DEEP",
    icon: Brain,
    title: "深く考える",
    body: "論文を読み、数式と向き合い、本質を掴む。AIやLLMの仕組みを表面だけでなく、根拠から理解することを大切にしている。",
  },
  {
    n: "02",
    en: "JUST BUILD",
    icon: Hammer,
    title: "とにかく作ってみる",
    body: "KaggleへのチャレンジやAIモデルの実装、アプリ開発も。試行錯誤しながらコードを書いているうちに、理解が深まっていく。",
  },
  {
    n: "03",
    en: "GO OUTSIDE",
    icon: Compass,
    title: "外の世界に出てみる",
    body: "大学発ベンチャーでインターンをしているメンバーもいる。学校の外で経験を積むことを、自然な選択肢として持っている。",
  },
];

const flow = [
  { tag: "INPUT", title: "好奇心", body: "「AIって何だろう」から始まる" },
  { tag: "PROCESS", title: "学ぶ · 作る · 出る", body: "理解して、実装して、現場に出る" },
  { tag: "OUTPUT", title: "かたち", body: "プロダクト · 論文 · 実務経験" },
];

const divisions = [
  {
    href: "/developers/",
    label: "DEVELOPMENT",
    title: "開発部門",
    body: "最新技術を試し、実装し、使える形にする。",
    labelCls: "text-dev-bright",
    hoverCls: "hover:border-dev-bright/50",
  },
  {
    href: "/theory/",
    label: "THEORY",
    title: "理論部門",
    body: "数学・統計から、AIの仕組みを根本から理解する。",
    labelCls: "text-theory-bright",
    hoverCls: "hover:border-theory-bright/50",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-paper text-ink -mt-14 md:-mt-16 pt-14 md:pt-16">
      {/* ===== HERO ===== */}
      <section className="relative min-h-[80svh] flex items-center bg-paper">
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-24 w-full">
          <div className="animate-fade-up">
            <p className="section-label mb-8">ABOUT</p>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.85] mb-10">
              OIF
              <br />について
            </h1>
            <p className="font-mono text-sm md:text-base text-ink/55 mb-12">
              私たちは、AIを<span className="text-ink/90">理解し、創り、形にする。</span>
            </p>

            {/* acronym spec */}
            <div className="flex flex-col sm:flex-row gap-px bg-ink/10 border border-ink/10 max-w-2xl">
              {acronym.map((a) => (
                <div
                  key={a.l}
                  className="group flex-1 bg-night-2 px-6 py-5 hover:bg-night-3 transition-colors"
                >
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl font-black tracking-tighter text-accent-bright">{a.l}</span>
                    <span className="font-mono text-sm tracking-wide text-ink/80">{a.w}</span>
                  </div>
                  <p className="mt-2 text-xs text-ink/60">{a.s}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== MANIFESTO ===== */}
      <section className="border-t border-ink/10 bg-night">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 section-y-lg">
          <Reveal className="max-w-4xl">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-tight mb-14">
              AIに興味がある学生が、
              <br className="hidden md:block" />
              <span>集まっている場所</span>
            </h2>
            <div className="space-y-8 text-lg md:text-xl lg:text-2xl leading-relaxed text-ink/75 font-medium">
              <p>OIFは、大阪公立大学の学生を中心にAIやテクノロジーに関心を持つ人が集まる学生コミュニティです。</p>
              <p>仕組みを理解し、自分たちの手で実装し、社会に問いを立てる。</p>
              <p className="text-ink">プログラミング経験の有無は問いません。</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== WE ARE / WE ARE NOT ===== */}
      <section className="border-t border-ink/10 bg-night-2">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 section-y-lg">
          <Reveal className="mb-12 md:mb-16">
            <p className="section-label mb-4">WE ARE / WE ARE NOT</p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter">こういう場所。</h2>
          </Reveal>
          <Reveal delay={100} className="border-t border-ink/10">
            {contrasts.map((c, i) => (
              <div
                key={i}
                className="grid md:grid-cols-2 gap-3 md:gap-12 py-7 border-b border-ink/10 items-center"
              >
                <p className="flex items-center gap-3 text-base md:text-lg text-ink/55">
                  <span className="font-mono text-ink/25">✗</span>
                  <span className="line-through decoration-ink/20">{c.no}</span>
                </p>
                <p className="flex items-center gap-3 text-lg md:text-2xl font-bold tracking-tight">
                  <span className="font-mono text-accent-bright">✓</span>
                  {c.yes}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ===== BELIEFS ===== */}
      <section className="border-t border-ink/10 bg-night">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 section-y-lg">
          <Reveal className="mb-14 md:mb-20">
            <p className="section-label mb-4">HOW WE LEARN</p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter">大事にしている3つのこと</h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-4">
            {beliefs.map((b, i) => {
              const Icon = b.icon;
              return (
                <Reveal key={b.n} delay={i * 120}>
                  <div className="h-full bg-night-2 border border-ink/10 p-8 md:p-10 transition-colors duration-300 hover:border-ink/30">
                    <div className="flex items-start justify-between mb-10">
                      <span className="text-6xl md:text-7xl font-black tracking-tighter text-ink/[0.08]">
                        {b.n}
                      </span>
                      <Icon size={28} strokeWidth={1.5} className="text-ink/70 mt-2" />
                    </div>
                    <p className="section-label mb-3">
                      {b.en}
                    </p>
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-5">
                      {b.title}
                    </h3>
                    <p className="text-sm md:text-base leading-relaxed text-ink/60">
                      {b.body}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== HOW OIF WORKS (flow) ===== */}
      <section className="border-t border-ink/10 bg-night-2">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 section-y-lg">
          <Reveal className="mb-14">
            <p className="section-label mb-4">HOW OIF WORKS</p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter">好奇心が、かたちになるまで</h2>
          </Reveal>
          <Reveal delay={120} className="flex flex-col md:flex-row md:items-stretch">
            {flow.map((f, i) => (
              <Fragment key={f.tag}>
                <div className="flex-1 border border-ink/10 bg-night p-7 md:p-8">
                  <p className="section-label mb-5">{f.tag}</p>
                  <h3 className="text-2xl md:text-3xl font-black tracking-tighter mb-3">{f.title}</h3>
                  <p className="text-sm text-ink/55 leading-relaxed">{f.body}</p>
                </div>
                {i < flow.length - 1 && (
                  <div className="flex items-center justify-center py-2 md:px-1" aria-hidden>
                    <div className="h-8 w-px md:h-px md:w-8 bg-gradient-to-b md:bg-gradient-to-r from-accent-bright/10 via-accent-bright to-accent-bright/10 bg-[length:100%_200%] md:bg-[length:200%_100%] animate-[gradient-pan_2.5s_linear_infinite]" />
                  </div>
                )}
              </Fragment>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ===== DIVISIONS ===== */}
      <section className="border-t border-ink/10 bg-night">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 section-y">
          <Reveal className="mb-12">
            <p className="section-label mb-4">TWO DIVISIONS</p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter">2つの軸で動く</h2>
          </Reveal>
          <Reveal delay={100} className="grid md:grid-cols-2 gap-px bg-ink/10 border border-ink/10">
            {divisions.map((d) => (
              <Link
                key={d.href}
                href={d.href}
                className={`group bg-night-2 p-8 md:p-12 transition-colors duration-300 hover:bg-night-3 border-y-2 border-transparent ${d.hoverCls}`}
              >
                <p className={`font-mono text-[11px] tracking-[0.3em] mb-6 ${d.labelCls}`}>{d.label}</p>
                <h3 className="text-3xl md:text-4xl font-black tracking-tighter text-ink mb-4">{d.title}</h3>
                <p className="text-ink/60 mb-8">{d.body}</p>
                <span className="inline-flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-ink">
                  見る
                  <span className="transition-transform duration-200 group-hover:translate-x-1.5">→</span>
                </span>
              </Link>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ===== MEMBERS ===== */}
      <section className="border-t border-ink/10 bg-night-2">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 section-y-lg">
          <Reveal className="max-w-4xl">
            <p className="section-label mb-4">MEMBERS</p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-10">
              すでに、<span>動いている</span>
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-ink/75 font-medium mb-10">
              大阪公立大学発ベンチャーのAffectify・Mi&amp;Tでインターンとして実務経験を積んでいるメンバーが在籍しています。
              勉強会に参加するだけでなく、実際の現場に出ていることも自然にできる環境です。
            </p>
            <div className="flex flex-wrap gap-3 font-mono text-xs tracking-widest text-ink/70">
              {["INTERNSHIP", "Affectify", "Mi&T", "REAL-WORLD EXPERIENCE"].map((c) => (
                <span key={c} className="border border-ink/15 px-3 py-1.5">{c}</span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== CLOSING ===== */}
      <section className="relative overflow-hidden border-t border-ink/10 bg-night">
        <div aria-hidden className="absolute inset-0 dot-grid opacity-40" />
        <Reveal className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-32 md:py-48 lg:py-64">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter leading-[1.12] max-w-5xl">
            求められる学びじゃなく、
            <br />
            自分たちが<span>やりたいこと</span>を、
            <br />
            自分たちのペースで
          </h2>
          <Link
            href="/join/"
            className="mt-14 inline-flex items-center gap-2 bg-accent text-white px-8 py-4 text-sm font-bold tracking-widest uppercase border border-accent hover:bg-accent-bright hover:text-night hover:border-accent-bright transition-colors duration-200"
          >
            参加する
            <span aria-hidden>→</span>
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
