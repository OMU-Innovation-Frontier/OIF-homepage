import { Metadata } from "next";
import Link from "next/link";
import HeroBackground from "@/components/site/HeroBackground";
import Reveal from "@/components/ui/Reveal";
import Typewriter from "@/components/ui/Typewriter";

export const metadata: Metadata = {
  title: "Theory | OIF理論部門",
  description:
    "OIF理論部門は、AIや機械学習を「なぜ動くのか」から理解する部門です。数学・統計・アルゴリズム、論文輪読、ゼミを通じて、説明できる力を育てます。",
  alternates: { canonical: "https://oif-ai.com/theory/" },
};

const concepts = [
  { n: "01", ja: "線形代数", en: "LINEAR ALGEBRA", d: "ベクトルと行列で世界を表現する。" },
  { n: "02", ja: "確率・統計", en: "PROBABILITY", d: "不確実さを数で扱う。" },
  { n: "03", ja: "最適化", en: "OPTIMIZATION", d: "損失を最小化していく。" },
  { n: "04", ja: "機械学習", en: "MACHINE LEARNING", d: "データから関数を学ぶ。" },
  { n: "05", ja: "Transformer", en: "ATTENTION", d: "注意機構で文脈を捉える。" },
  { n: "06", ja: "LLMの内部", en: "INTERNALS", d: "なぜ言葉を生成できるのか。" },
];

const journey = [
  { label: "なんとなく\n知っている", tone: "text-ink/60" },
  { label: "仕組みを\n理解する", tone: "text-ink/70" },
  { label: "説明\nできる", tone: "text-theory-bright" },
];

const reading = [
  "Attention Is All You Need (2017)",
  "Deep Learning — Goodfellow et al.",
  "Pattern Recognition and Machine Learning (PRML)",
  "ベイズ推論による機械学習",
  "Kaggleで学ぶ大規模言語モデル入門",
];

export default function TheoryPage() {
  return (
    <div className="bg-paper text-ink -mt-14 md:-mt-16 pt-14 md:pt-16">
      {/* HERO */}
      <section className="relative overflow-hidden min-h-[calc(100svh-3.5rem)] flex items-center">
        <HeroBackground accent="theory" />
        <div aria-hidden className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-night to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20 w-full">
          <div className="grid lg:grid-cols-12 gap-12 xl:gap-16 items-center">
            <div className="lg:col-span-6 animate-fade-up">
              <p className="font-mono text-xs md:text-sm tracking-[0.3em] text-theory-bright mb-6">
                OIF THEORY DIVISION
              </p>
              <h1 className="text-6xl md:text-7xl xl:text-8xl font-black tracking-tighter leading-[0.9] mb-8">
                なぜ、
                <br />
                <span className="text-theory-bright">動くのか。</span>
              </h1>
              <p className="text-lg xl:text-xl text-ink/70 max-w-lg leading-relaxed mb-10">
                AIを「ツールとして使う」だけで終わらせない。
                数学・統計・アルゴリズムの根幹から、その仕組みを理解する部門。
              </p>
              <Link
                href="/join/"
                className="inline-flex items-center gap-2 bg-theory text-white px-8 py-4 text-sm font-bold tracking-widest uppercase border border-theory hover:bg-theory-bright hover:text-night hover:border-theory-bright transition-colors duration-200 shadow-[0_0_50px_-12px_rgba(11,12,14,0.25)]"
              >
                深く知る側になる
                <span aria-hidden>→</span>
              </Link>
            </div>

            {/* Formula card */}
            <div className="lg:col-span-6 animate-fade-up [animation-delay:140ms]">
              <div className="border border-ink/12 bg-night-2/80 backdrop-blur-sm shadow-card p-8 md:p-10 font-mono">
                <p className="text-[11px] tracking-widest text-ink/60 mb-8">
                  scaled dot-product attention
                </p>
                <div className="text-xl md:text-2xl leading-[1.8] text-ink/85">
                  Attention(Q, K, V) ={" "}
                  <br className="hidden md:block" />
                  softmax(
                  <span className="text-theory-bright">QKᵀ</span> /{" "}
                  <span className="text-theory-bright">√dₖ</span>) V
                </div>
                <div className="mt-8 pt-6 border-t border-ink/10 text-sm text-ink/55">
                  <Typewriter
                    className="text-ink/80"
                    words={[
                      "QKᵀ → 関連度を測る",
                      "√dₖ → 勾配を安定させる",
                      "softmax → 割合に変える",
                      "V → 中身を混ぜる",
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATEMENT */}
      <section className="border-t border-ink/10 bg-night">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 section-y-lg">
          <Reveal className="max-w-4xl">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-tight mb-12">
              <span className="text-theory-bright">ブラックボックス</span>のまま、
              <br className="hidden md:block" />
              使わない。
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-ink/75 leading-relaxed font-medium">
              線形代数、確率統計、最適化から、モデルの動作原理、最新の論文まで。
              「なぜそう動くのか」を説明できる力が、応用力と批判的思考の土台になる。
            </p>
          </Reveal>
        </div>
      </section>

      {/* CONCEPT MAP */}
      <section className="border-t border-ink/10 bg-night-2">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 section-y-lg">
          <Reveal className="mb-12">
            <p className="font-mono text-xs tracking-[0.3em] text-theory-bright mb-4">THE STACK OF UNDERSTANDING</p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter">基礎から、積み上げる</h2>
          </Reveal>
          <Reveal delay={100} className="border-t border-ink/10">
            {concepts.map((c) => (
              <div
                key={c.n}
                className="group flex items-center gap-5 md:gap-10 py-6 md:py-7 border-b border-ink/10 hover:bg-ink/[0.02] transition-colors"
              >
                <span className="font-mono text-sm text-ink/52 group-hover:text-theory-bright transition-colors shrink-0 w-8">
                  {c.n}
                </span>
                <div className="flex-1 flex flex-col md:flex-row md:items-baseline md:gap-5">
                  <h3 className="text-2xl md:text-4xl font-black tracking-tighter group-hover:text-theory-bright transition-colors">
                    {c.ja}
                  </h3>
                  <span className="font-mono text-[11px] tracking-[0.3em] text-ink/55">{c.en}</span>
                </div>
                <p className="hidden md:block text-sm text-ink/50 text-right max-w-xs md:opacity-40 md:group-hover:opacity-100 md:translate-x-2 md:group-hover:translate-x-0 transition-all duration-300">
                  {c.d}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* JOURNEY */}
      <section className="border-t border-ink/10 bg-night">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 section-y-lg">
          <Reveal className="mb-14">
            <p className="font-mono text-xs tracking-[0.3em] text-theory-bright mb-4">THE JOURNEY</p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter">理解の、グラデーション</h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="h-1 w-full bg-gradient-to-r from-ink/10 via-ink/30 to-theory-bright mb-10" />
            <div className="grid grid-cols-3 gap-4">
              {journey.map((j, i) => (
                <div key={i} className="text-center">
                  <span className="font-mono text-xs text-ink/52">{`0${i + 1}`}</span>
                  <p className={`mt-4 text-xl md:text-3xl font-black tracking-tighter whitespace-pre-line leading-tight ${j.tone}`}>
                    {j.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* READING */}
      <section className="border-t border-ink/10 bg-night-2">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 section-y-lg">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-16">
            <Reveal>
              <p className="font-mono text-xs tracking-[0.3em] text-theory-bright mb-4">READING LIST</p>
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-6">読む、議論する</h2>
              <p className="text-ink/60 leading-relaxed max-w-md">
                論文や教材を輪読し、発表・議論・フィードバックを繰り返す。人に説明することで、理解は一段深まる。
              </p>
            </Reveal>
            <Reveal delay={100} className="border border-ink/10 bg-night font-mono text-sm">
              {reading.map((r, i) => (
                <div
                  key={r}
                  className="group flex items-baseline gap-4 px-5 py-4 border-b border-ink/5 last:border-0 hover:bg-ink/[0.03] transition-colors"
                >
                  <span className="text-theory-bright shrink-0">{`[${String(i + 1).padStart(2, "0")}]`}</span>
                  <span className="text-ink/75 group-hover:text-ink transition-colors">{r}</span>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="relative overflow-hidden border-t border-ink/10 bg-night">
        <div aria-hidden className="absolute inset-0 dot-grid opacity-40" />
        <div aria-hidden className="absolute left-1/3 top-1/2 -translate-y-1/2 h-[34rem] w-[34rem] rounded-full bg-theory/20 blur-[130px]" />
        <Reveal className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-32 md:py-48">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter leading-[1.1] max-w-5xl mb-12">
            <span className="text-theory-bright">なんとなく</span>から、
            <br />
            説明できるところまで。
          </h2>
          <Link
            href="/join/"
            className="inline-flex items-center gap-2 bg-theory text-white px-8 py-4 text-sm font-bold tracking-widest uppercase border border-theory hover:bg-theory-bright hover:text-night hover:border-theory-bright transition-colors duration-200 shadow-[0_0_50px_-12px_rgba(11,12,14,0.25)]"
          >
            理論に参加する
            <span aria-hidden>→</span>
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
