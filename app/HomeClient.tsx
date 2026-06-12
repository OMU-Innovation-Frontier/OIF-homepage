import Link from "next/link";
import Image from "next/image";
import { Check } from "lucide-react";
import { newsItems } from "@/lib/news";
import { getNextEvent } from "@/lib/events";
import DivisionSplit from "@/components/site/DivisionSplit";
import NextEvent from "@/components/site/NextEvent";
import PastEvents from "@/components/site/PastEvents";
import DiscordCTA from "@/components/ui/DiscordCTA";
import Reveal from "@/components/ui/Reveal";

const ticker = [
  "LLM", "MACHINE LEARNING", "DEEP LEARNING", "WEB DEV", "PAPERS",
  "TRANSFORMER", "PROTOTYPING", "KAGGLE", "GENERATIVE AI", "RESEARCH",
];

export default function HomeClient() {
  const nextEvent = getNextEvent();

  return (
    <div className="bg-paper text-ink -mt-14 md:-mt-16 pt-14 md:pt-16">
      {/* ============ HERO (Vercel-route: one calm statement) ============ */}
      <section className="relative min-h-[calc(100svh-3.5rem)] md:min-h-[calc(100svh-4rem)] flex items-center bg-paper">
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-24 md:py-32 w-full">
          <p className="eyebrow text-ink/45 mb-8 animate-fade-up">
            OMU Innovation Frontier
          </p>

          <h1 className="display animate-fade-up [animation-delay:80ms]">
            AIを、<br className="sm:hidden" />当たり前に。
          </h1>

          <p className="mt-7 font-mono text-xs md:text-sm tracking-[0.4em] uppercase text-ink/40 animate-fade-up [animation-delay:160ms]">
            AI, as default.
          </p>

          <p className="lede mt-10 max-w-xl animate-fade-up [animation-delay:240ms]">
            大阪公立大学のAI・テクノロジーコミュニティ。
            プログラミング未経験から、手を動かして学べる。
          </p>

          {nextEvent && (
            <a
              href="#next-event"
              className="group inline-flex items-center gap-3 border border-ink/15 bg-night-2 px-4 py-2.5 mt-10 animate-fade-up [animation-delay:320ms] hover:border-ink/35 transition-colors"
            >
              <span className="font-mono text-[11px] tracking-widest text-accent-bright">NEXT</span>
              <span className="text-sm font-bold tracking-tight">
                {nextEvent.dateLabel} — {nextEvent.audience}
              </span>
              <span className="text-ink/40 group-hover:translate-y-0.5 transition-transform" aria-hidden>↓</span>
            </a>
          )}

          <div className="mt-8 flex flex-wrap gap-4 animate-fade-up [animation-delay:400ms]">
            <DiscordCTA location="home_hero" />
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-8 py-5 text-sm font-bold tracking-widest uppercase border border-ink/20 text-ink hover:bg-ink/5 hover:border-ink/40 transition-colors duration-200"
            >
              OIFについて
            </Link>
          </div>

          <p className="mt-5 font-mono text-xs tracking-widest text-ink/50 animate-fade-up [animation-delay:480ms]">
            経験不問・文系歓迎・入会費なし
          </p>
        </div>
      </section>

      {/* ============ NEXT EVENT (low-barrier on-ramp) ============ */}
      <NextEvent />

      {/* ============ PAST EVENTS (social proof) ============ */}
      <PastEvents />

      {/* ============ TICKER (decorative) ============ */}
      <div aria-hidden className="border-y border-ink/10 overflow-hidden py-4 bg-paper">
        <div className="flex w-max animate-marquee gap-10 font-mono text-xs tracking-[0.25em] uppercase text-ink/35">
          {[...ticker, ...ticker].map((t, i) => (
            <span key={i} className="flex items-center gap-10">
              {t}
              <span className="h-1 w-1 bg-ink/20" />
            </span>
          ))}
        </div>
      </div>

      {/* ============ MISSION ============ */}
      <section className="bg-night">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 section-y-lg">
          <Reveal className="max-w-4xl">
            <h2 className="statement">
              仕組みを理解し、
              <br className="hidden md:block" />
              自分たちの手で実装し、
              <br className="hidden md:block" />
              社会に問いを立てる。
            </h2>
            <Link
              href="/about/"
              className="mt-10 inline-flex items-center gap-2 font-mono text-xs tracking-widest text-ink/50 hover:text-ink transition-colors link-underline"
            >
              OIFについて →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ============ DEPARTMENTS (interactive split) ============ */}
      <section className="border-t border-ink/10 bg-night">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 section-y">
          <Reveal className="mb-10 md:mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <p className="section-label mb-3">CHOOSE YOUR PATH</p>
              <h2 className="headline">進む道を、選ぶ</h2>
            </div>
            <p className="font-mono text-xs text-ink/40 md:pb-2">
              2 divisions, 1 community
            </p>
          </Reveal>

          <Reveal delay={120}>
            <DivisionSplit />
          </Reveal>
        </div>
      </section>

      {/* ============ SNAPSHOTS (real activity photos) ============ */}
      <section className="border-t border-ink/10 bg-night">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 section-y">
          <Reveal className="mb-10 md:mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <p className="section-label mb-3">SNAPSHOTS</p>
              <h2 className="headline">活動の風景</h2>
            </div>
            <Link
              href="/activities/"
              className="font-mono text-xs tracking-widest text-ink/50 hover:text-ink transition-colors md:pb-2 link-underline"
            >
              view all →
            </Link>
          </Reveal>

          <Reveal delay={120} className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-ink/10 border border-ink/10">
            {[
              { src: "/images/first-workshop.png", alt: "第1回ワークショップの様子" },
              { src: "/images/vibe-coding-workshop.png", alt: "Vibe Codingワークショップの様子" },
              { src: "/images/llm-handson.png", alt: "ローカルLLMハンズオンの様子" },
            ].map((p) => (
              <Link key={p.src} href="/activities/" className="group relative block aspect-[4/3] overflow-hidden bg-night-2">
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-700 ease-smooth"
                />
              </Link>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ============ LATEST UPDATES ============ */}
      <section className="bg-night">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 section-y">
          <div className="flex flex-col md:flex-row md:items-start gap-10 md:gap-20">
            <div className="shrink-0">
              <p className="section-label mb-3">LOG</p>
              <h2 className="text-2xl md:text-3xl font-black tracking-tighter">Latest Updates</h2>
              <Link href="/news/" className="mt-5 inline-flex items-center gap-1 font-mono text-xs tracking-widest text-ink/50 hover:text-ink transition-colors">
                view all →
              </Link>
            </div>
            <div className="flex-1 border-t border-ink/10">
              {newsItems.map((item, i) => (
                <div key={i} className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-10 py-6 border-b border-ink/10">
                  <time className="font-mono text-xs tracking-widest text-ink/50 w-28 shrink-0">
                    {item.date || "——.——.——"}
                  </time>
                  <span className="text-base md:text-lg font-bold tracking-tight">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ FIRST STEP — 2 doors + staircase (low-barrier on-ramp) ============ */}
      <section id="start" className="relative overflow-hidden border-t border-ink/10 bg-night">
        {/* brand motif: the OIF swirl, oversized and barely-there */}
        <div aria-hidden className="absolute -right-32 top-1/3 -translate-y-1/2 h-[34rem] w-[34rem] opacity-[0.04] mix-blend-multiply animate-[spin_140s_linear_infinite] pointer-events-none">
          <Image src="/logo-square.png" alt="" fill className="object-contain" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20 section-y-lg">
          <Reveal className="max-w-2xl">
            <p className="section-label mb-4">START HERE</p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-tight">
              まずは、のぞくところから。
            </h2>
            <p className="mt-5 lede">
              「すごい人の集まり」に見えるかもしれません。でも入口はこの2つだけ。どちらも、今日からで大丈夫。
            </p>
          </Reveal>

          {/* two doors */}
          <div className="mt-12 grid md:grid-cols-2 gap-px bg-ink/10 border border-ink/10">
            {/* Door 01 — Discord */}
            <div className="bg-night p-8 md:p-10 flex flex-col">
              <p className="font-mono text-[11px] tracking-widest text-ink/45 mb-4">DOOR 01 · いつでも</p>
              <h3 className="text-2xl font-black tracking-tighter">Discordに入る</h3>
              <p className="mt-3 text-ink/65 leading-relaxed">
                まずは雰囲気を見るだけでOK。0コミットで、質問も雑談も自由。
              </p>
              <ul className="mt-6 space-y-2 text-sm">
                {["1クリックで参加", "退会はいつでも自由", "通知だけ受け取るのもOK"].map((t) => (
                  <li key={t} className="flex items-center gap-2 text-ink/75">
                    <Check className="w-4 h-4 text-ink/55 shrink-0" aria-hidden />
                    {t}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-8">
                <DiscordCTA location="home_door_discord" size="md" label="Discordに参加" />
              </div>
            </div>

            {/* Door 02 — Event */}
            <div className="bg-night p-8 md:p-10 flex flex-col">
              <p className="font-mono text-[11px] tracking-widest text-ink/45 mb-4">DOOR 02 · 月1ペース</p>
              <h3 className="text-2xl font-black tracking-tighter">イベントに来る</h3>
              <p className="mt-3 text-ink/65 leading-relaxed">
                単発のハンズオンや交流会に1回だけ。申し込み不要・出入り自由のゆるい回もあります。
              </p>
              <ul className="mt-6 space-y-2 text-sm">
                {["未経験OK", "1人参加歓迎", "友達づくり歓迎"].map((t) => (
                  <li key={t} className="flex items-center gap-2 text-ink/75">
                    <Check className="w-4 h-4 text-ink/55 shrink-0" aria-hidden />
                    {t}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-8">
                <a
                  href="#next-event"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold tracking-widest uppercase border border-ink/20 text-ink hover:bg-ink/5 hover:border-ink/40 transition-colors duration-200"
                >
                  次回のイベントを見る
                  <span aria-hidden>↑</span>
                </a>
              </div>
            </div>
          </div>

          {/* staircase: L0 -> L3 (kills "what happens after I join") */}
          <Reveal className="mt-12">
            <p className="font-mono text-xs tracking-widest text-ink/45 mb-4">入った後の道のり</p>
            <ol className="grid grid-cols-2 md:grid-cols-4 gap-px bg-ink/10 border border-ink/10">
              {[
                ["L0", "のぞく", "Discordで雰囲気を見る"],
                ["L1", "来てみる", "イベントに単発参加"],
                ["L2", "続ける", "勉強会・プロジェクト班"],
                ["L3", "つくる", "プロダクト / 研究を駆動"],
              ].map(([lv, t, d]) => (
                <li key={lv} className="bg-night p-5">
                  <span className="font-mono text-xs text-accent-bright">{lv}</span>
                  <p className="mt-2 font-bold tracking-tight">{t}</p>
                  <p className="mt-1 text-xs text-ink/55 leading-relaxed">{d}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
