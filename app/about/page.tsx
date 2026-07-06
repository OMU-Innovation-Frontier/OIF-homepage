import { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "About | OIF 大阪公立大学のAIサークル",
  description:
    "OIF（OMU Innovation Frontier）は大阪公立大学のAI・テクノロジーサークルです。初心者でも、AIを少し学ぶだけで即戦力に。プログラミング未経験・文系も歓迎。「ちょっと気になる」から始めて、使える・つくれるようになる場所。",
  alternates: {
    canonical: "https://oif-ai.com/about/",
  },
};

const acronym = [
  { l: "O", w: "OMU", s: "大阪公立大学" },
  { l: "I", w: "Innovation", s: "革新する" },
  { l: "F", w: "Frontier", s: "最前線へ" },
];

const facts = [
  { k: "SINCE", v: "2025.12", s: "第1回ワークショップから活動中" },
  { k: "LT TALKS", v: "週1", s: "中百舌鳥キャンパスでLT会を毎週開催" },
  { k: "EVENTS", v: "月1", s: "ハンズオン・交流会を森ノ宮「ほとりで」で開催" },
];

const contrasts = [
  { no: "経験者やすごい人だけの場所", yes: "未経験から始められる場所" },
  { no: "AIを「つくる人」だけの場所", yes: "「使ってみたい」だけでも大歓迎" },
  { no: "知って終わる勉強会", yes: "少し学んで、使えるようになる場所" },
  { no: "評価のために、こなす学び", yes: "やりたいことのための、学び" },
];

const ways = [
  { tag: "USE", title: "生活に使う", body: "AIツールをレポートや課題、毎日のちょっとした作業に取り入れて、楽をする。" },
  { tag: "MAKE", title: "つくってみる", body: "アプリや簡単なAIを、自分の手で動かしてつくってみる。" },
  { tag: "LEARN", title: "仕組みを知る", body: "「なぜ動くのか」を、いちから少しずつ理解していく。" },
  { tag: "CONNECT", title: "仲間とつながる", body: "イベントや勉強会で、刺激をくれる仲間や先輩に出会う。" },
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
    body: "AIの「なぜ動くのか」を、いちから一緒に理解していく。",
    labelCls: "text-theory-bright",
    hoverCls: "hover:border-theory-bright/50",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-paper text-ink -mt-14 md:-mt-16 pt-14 md:pt-16">
      {/* ===== HERO ===== */}
      <section className="relative bg-paper">
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28 w-full">
          <div className="animate-fade-up">
            <p className="section-label mb-8">ABOUT</p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] mb-10">
              OIF
              <br />について
            </h1>
            <p className="font-mono text-sm md:text-base text-ink/55 mb-12">
              AIを、<span className="text-ink/90">もっと身近に。使う人も、つくる人も。</span>
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
              初心者が、
              <br className="hidden md:block" />
              <span>即戦力になる場所</span>
            </h2>
            <div className="space-y-8 text-lg md:text-xl lg:text-2xl leading-relaxed text-ink/75 font-medium">
              <p>OIFは、大阪公立大学の学生を中心に、AIやテクノロジーに興味がある人が集まる学生コミュニティです。</p>
              <p>むずかしい前提知識はいりません。AIを少し学ぶだけで、できることが一気に増える。「ちょっと気になる」から始めて、気づけば「使える側」へ。</p>
              <p className="text-ink">
                プログラミングが初めての人、文系の人、もう開発やインターンをしている人。レベルも興味もバラバラなメンバーが、それぞれのペースで関わっています。
              </p>
            </div>
            <div className="mt-10 flex flex-wrap gap-3 font-mono text-xs tracking-widest text-ink/70">
              {["BEGINNER FRIENDLY", "ANY MAJOR", "ALL YEARS", "YOUR OWN PACE"].map((c) => (
                <span key={c} className="border border-ink/15 px-3 py-1.5">{c}</span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== FACTS ===== */}
      <section className="border-t border-ink/10 bg-night-2">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 section-y-sm">
          <Reveal className="grid sm:grid-cols-3 gap-px bg-ink/10 border border-ink/10">
            {facts.map((f) => (
              <div key={f.k} className="bg-night px-6 py-6 md:px-8 md:py-7">
                <p className="section-label mb-3">{f.k}</p>
                <p className="text-3xl md:text-4xl font-black tracking-tighter">{f.v}</p>
                <p className="mt-2 text-sm text-ink/60 leading-relaxed">{f.s}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ===== WE ARE / WE ARE NOT ===== */}
      <section className="border-t border-ink/10 bg-night">
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

      {/* ===== WAYS TO GET INVOLVED + DIVISIONS ===== */}
      <section className="border-t border-ink/10 bg-night-2">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 section-y-lg">
          <Reveal className="mb-14">
            <p className="section-label mb-4">WHAT YOU CAN DO</p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter">AIとの、いろんな関わり方</h2>
            <p className="mt-5 text-ink/60 leading-relaxed max-w-xl">
              ぜんぶやらなくていい。一つでも、行き来しても。気になるところから始めれば大丈夫。
            </p>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ways.map((w, i) => (
              <Reveal key={w.tag} delay={i * 100}>
                <div className="h-full border border-ink/10 bg-night p-7 md:p-8 transition-colors duration-300 hover:border-ink/30">
                  <p className="section-label mb-5">{w.tag}</p>
                  <h3 className="text-2xl md:text-3xl font-black tracking-tighter mb-3">{w.title}</h3>
                  <p className="text-sm text-ink/55 leading-relaxed">{w.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* divisions: もっと深くやりたくなった人向けの出口 */}
          <Reveal delay={200} className="mt-16 md:mt-20">
            <p className="section-label mb-4">TWO DIRECTIONS</p>
            <p className="text-ink/60 leading-relaxed max-w-xl mb-8">
              もっと深くやりたくなったら、興味別の2部門へ。両方のぞいても、どちらにも入らなくてもOK。
            </p>
            <div className="grid md:grid-cols-2 gap-px bg-ink/10 border border-ink/10">
              {divisions.map((d) => (
                <Link
                  key={d.href}
                  href={d.href}
                  className={`group bg-night p-7 md:p-9 transition-colors duration-300 hover:bg-night-3 border-y-2 border-transparent ${d.hoverCls}`}
                >
                  <p className={`font-mono text-[11px] tracking-[0.3em] mb-5 ${d.labelCls}`}>{d.label}</p>
                  <h3 className="text-2xl md:text-3xl font-black tracking-tighter text-ink mb-3">{d.title}</h3>
                  <p className="text-ink/60 mb-6">{d.body}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-ink">
                    見る
                    <span className="transition-transform duration-200 group-hover:translate-x-1.5">→</span>
                  </span>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== CLOSING ===== */}
      <section className="relative overflow-hidden border-t border-ink/10 bg-night">
        <div aria-hidden className="absolute inset-0 dot-grid opacity-40" />
        <Reveal className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-24 md:py-32 lg:py-40">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter leading-[1.12] max-w-5xl">
            求められる学びじゃなく、
            <br />
            自分たちが<span>やりたいこと</span>を、
            <br />
            自分たちのペースで
          </h2>
          <p className="mt-8 text-lg md:text-xl text-ink/65 leading-relaxed max-w-2xl">
            少し学べば、すぐ動ける。その第一歩を、ここから。
          </p>
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
