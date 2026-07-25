import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import DiscordCTA from "@/components/ui/DiscordCTA";

export const metadata: Metadata = {
  title: "About | OIF 大阪公立大学のAIサークル",
  description:
    "OIF（OMU Innovation Frontier）は大阪公立大学のAI・テクノロジーサークルです。初心者でも、AIを少し学ぶだけで即戦力に。プログラミング未経験・文系も歓迎。「ちょっと気になる」から始めて、使える・つくれるようになる場所。",
  alternates: {
    canonical: "https://oif-ai.com/about/",
  },
};

const facts = [
  { k: "SINCE", v: "2025.12", s: "第1回ワークショップから活動中" },
  { k: "LT TALKS", v: "定期", s: "メンバーの挑戦を持ち寄るLT会を定期開催" },
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

const themes = [
  {
    href: "/developers/",
    label: "THEME 01 — BUILD",
    title: "つくる",
    body: "最新技術を試し、実装し、使える形にして出す。",
  },
  {
    href: "/theory/",
    label: "THEME 02 — UNDERSTAND",
    title: "理解する",
    body: "AIの「なぜ動くのか」を、いちから少しずつ理解していく。",
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
            <h1 className="display mb-8">
              OIFについて
            </h1>
            <p className="text-lg md:text-xl text-ink/60 max-w-2xl leading-relaxed">
              AIを、もっと身近に。使う人も、つくる人も。
            </p>
          </div>
        </div>
      </section>

      {/* ===== MANIFESTO + FACTS — one continuous dark photo band ===== */}
      <section className="relative overflow-hidden bg-ink border-t border-white/10">
        <div aria-hidden className="absolute inset-0">
          <Image
            src="/images/morinomiya-campus.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover parallax-bg opacity-80"
          />
          <div className="absolute inset-0 bg-black/75" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20 section-y-lg">
          <Reveal className="max-w-3xl">
            <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-white/50 mb-4">
              MANIFESTO
            </p>
            <h2 className="statement text-white mb-10">
              初心者が、
              <br className="hidden md:block" />
              即戦力になる場所
            </h2>
            <div className="space-y-6 text-base md:text-lg leading-relaxed text-white/75">
              <p>OIFは、大阪公立大学の学生を中心に、AIやテクノロジーに興味がある人が集まる学生コミュニティです。</p>
              <p>むずかしい前提知識はいりません。AIを少し学ぶだけで、できることが一気に増える。「ちょっと気になる」から始めて、気づけば「使える側」へ。</p>
              <p className="text-white font-medium">
                プログラミングが初めての人、文系の人、もう開発やインターンをしている人。レベルも興味もバラバラなメンバーが、それぞれのペースで関わっています。
              </p>
            </div>
            <div className="mt-10 flex flex-wrap gap-3 font-mono text-xs tracking-widest text-white/75">
              {["BEGINNER FRIENDLY", "ANY MAJOR", "ALL YEARS", "YOUR OWN PACE"].map((c) => (
                <span key={c} className="border border-white/25 px-3 py-1.5">{c}</span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120} className="mt-16 md:mt-24 grid sm:grid-cols-3 gap-px bg-white/15 border border-white/15">
            {facts.map((f) => (
              <div key={f.k} className="bg-black/40 backdrop-blur-[2px] px-6 py-7 md:px-8 md:py-9">
                <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-white/50 mb-3">{f.k}</p>
                <p className="text-4xl md:text-5xl font-black tracking-tighter text-white">{f.v}</p>
                <p className="mt-3 text-sm text-white/65 leading-relaxed">{f.s}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ===== WE ARE / WE ARE NOT ===== */}
      <section className="bg-paper">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 section-y">
          <Reveal className="mb-12 md:mb-16">
            <p className="section-label mb-4">WE ARE / WE ARE NOT</p>
            <h2 className="headline">こういう場所。</h2>
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
                  <span className="font-mono">✓</span>
                  {c.yes}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ===== WAYS TO GET INVOLVED + THEMES ===== */}
      <section className="border-t border-ink/10 bg-night-2">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 section-y">
          <Reveal className="mb-14">
            <p className="section-label mb-4">WHAT YOU CAN DO</p>
            <h2 className="headline">AIとの、いろんな関わり方</h2>
            <p className="mt-5 text-ink/60 leading-relaxed max-w-xl">
              ぜんぶやらなくていい。一つでも、行き来しても。気になるところから始めれば大丈夫。
            </p>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ways.map((w, i) => (
              <Reveal key={w.tag} delay={i * 100}>
                <div className="h-full border border-ink/10 bg-paper p-7 md:p-8 transition-colors duration-300 hover:border-ink/40">
                  <p className="section-label mb-5">{w.tag}</p>
                  <h3 className="text-2xl md:text-3xl font-black tracking-tighter mb-3">{w.title}</h3>
                  <p className="text-sm text-ink/55 leading-relaxed">{w.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* themes: 部門ではなく、活動を貫く2つのテーマ */}
          <Reveal delay={200} className="mt-16 md:mt-20">
            <p className="section-label mb-4">TWO THEMES</p>
            <p className="text-ink/60 leading-relaxed max-w-xl mb-8">
              部門はありません。かわりに、どの活動にも「つくる」と「理解する」の2つのテーマが流れています。気になるほうから、のぞいてみてください。
            </p>
            <div className="grid md:grid-cols-2 gap-px bg-ink/10 border border-ink/10">
              {themes.map((d) => (
                <Link
                  key={d.href}
                  href={d.href}
                  className="group bg-paper p-7 md:p-9 transition-colors duration-300 hover:bg-night-3"
                >
                  <p className="font-mono text-[11px] tracking-[0.3em] text-ink/45 mb-5">{d.label}</p>
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

      {/* ===== CLOSING — dark photo band ===== */}
      <section className="relative overflow-hidden bg-ink">
        <div aria-hidden className="absolute inset-0">
          <Image
            src="/images/lt/lt1-03.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover parallax-bg opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
        </div>
        <Reveal className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-28 md:py-40">
          <h2 className="statement text-white max-w-5xl">
            求められる学びじゃなく、
            <br />
            自分たちがやりたいことを、
            <br />
            自分たちのペースで
          </h2>
          <p className="mt-8 text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl">
            少し学べば、すぐ動ける。その第一歩を、ここから。
          </p>
          <div className="mt-12 flex flex-wrap items-center gap-5">
            <DiscordCTA location="about_closing" variant="light" />
            <Link
              href="/join/"
              className="inline-flex items-center gap-2 px-8 py-5 text-sm font-bold tracking-widest uppercase border border-white/40 text-white hover:bg-white hover:text-ink transition-colors duration-200"
            >
              参加方法を見る
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
