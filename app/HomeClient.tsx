import Link from "next/link";
import Image from "next/image";
import { Check } from "lucide-react";
import { newsItems } from "@/lib/news";
import { getNextEvent } from "@/lib/events";
import { ltEvents } from "@/lib/lt-events";
import { members } from "@/lib/members";
import NextEvent from "@/components/site/NextEvent";
import OrgStructure from "@/components/site/OrgStructure";
import PastEvents from "@/components/site/PastEvents";
import DiscordCTA from "@/components/ui/DiscordCTA";
import InstagramCTA from "@/components/ui/InstagramCTA";
import Reveal from "@/components/ui/Reveal";

const ticker = [
  "LLM", "MACHINE LEARNING", "DEEP LEARNING", "WEB DEV", "PAPERS",
  "TRANSFORMER", "PROTOTYPING", "KAGGLE", "GENERATIVE AI", "RESEARCH",
];

// ふだんの活動＝この3つ。部門ではなく、全員でひとつのコミュニティ。
const activities = [
  {
    index: "01",
    label: "LT TALKS",
    title: "LT会",
    body: "いま挑戦していることを持ち寄って発表する、OIFの生命線。テーマは自由——AIでも、それ以外でも。",
    href: "/lt/",
    cta: "記録を見る",
  },
  {
    index: "02",
    label: "EVENTS",
    title: "イベント",
    body: "月1ペースの初心者向けハンズオンや交流会。単発完結だから、1回だけの参加でも大丈夫。",
    href: "/activities/",
    cta: "これまでの開催",
  },
  {
    index: "03",
    label: "MAKE",
    title: "教材・サービスづくり",
    body: "ハンズオンの教材や、コミュニティ発のサービスを自分たちの手でつくる。デザイン・運営も立派な戦力。",
    href: "/join/#roles",
    cta: "つくる側にまわる",
  },
];

export default function HomeClient() {
  const nextEvent = getNextEvent();
  const latestLT = ltEvents[0];

  return (
    <div className="bg-paper text-ink -mt-14 md:-mt-16 pt-14 md:pt-16">
      {/* ============ HERO (Vercel-route: one calm statement) ============ */}
      <section className="relative min-h-[calc(100svh-3.5rem)] md:min-h-[calc(100svh-4rem)] flex items-center bg-paper overflow-hidden">
        {/* --- right half: Morinomiya campus, wrapped by the OIF swirl (large, faded) --- */}
        {/* outer = positioning only (keeps it centered in the first screen) */}
        <div
          aria-hidden
          className="hidden md:block absolute top-1/2 -translate-y-1/2 right-[-8%] lg:right-[-4%] aspect-square w-[40rem] lg:w-[52rem] pointer-events-none"
        >
          {/* inner = fade-in animation (separate node so it can't override the centering transform) */}
          <div className="relative h-full w-full animate-fade-up [animation-delay:240ms]">
            {/* campus photo: circular, edge feathered so there's no visible seam */}
            <div className="absolute inset-[8%] overflow-hidden rounded-full opacity-50 [mask-image:radial-gradient(closest-side,#000_72%,transparent_94%)] [-webkit-mask-image:radial-gradient(closest-side,#000_72%,transparent_94%)]">
              <Image
                src="/images/morinomiya-campus.jpg"
                alt=""
                fill
                sizes="(max-width: 768px) 0px, 52rem"
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-24 md:py-32 w-full">
          {/* --- left: statement --- */}
          <div className="max-w-xl">
            <p className="eyebrow text-ink/45 mb-8 animate-fade-up">
              OMU Innovation Frontier
            </p>

            <h1 className="display animate-fade-up [animation-delay:80ms]">
              <span className="whitespace-nowrap">初心者から、</span><wbr /><span className="whitespace-nowrap">即戦力へ。</span>
            </h1>

            <p className="mt-7 font-mono text-xs md:text-sm tracking-[0.4em] uppercase text-ink/40 animate-fade-up [animation-delay:160ms]">
              Beginner to capable, fast.
            </p>

            <p className="lede mt-10 max-w-xl animate-fade-up [animation-delay:240ms]">
              大阪公立大学のAI・テクノロジーコミュニティ。
              プログラミング未経験でも、AIを少し学ぶだけで、
              できることが一気に広がる。
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

            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 animate-fade-up [animation-delay:480ms]">
              <p className="font-mono text-xs tracking-widest text-ink/50">
                経験不問・文系歓迎・入会費なし
              </p>
              <InstagramCTA location="home_hero_instagram" size="sm" label="活動を見る @oif.ai.omu" />
            </div>
          </div>
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

      {/* ============ MISSION (photo band, scroll parallax) ============ */}
      <section className="relative overflow-hidden bg-ink">
        <div aria-hidden className="absolute inset-0">
          <Image
            src="/images/lt/lt1-02.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover parallax-bg opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/45" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20 section-y-lg">
          <Reveal className="max-w-4xl">
            <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-white/50 mb-8">
              MISSION
            </p>
            <h2 className="statement text-white">
              AIを少し学ぶだけで、
              <br className="hidden md:block" />
              できることが、一気に増える。
              <br className="hidden md:block" />
              それを、ここで。
            </h2>
            <Link
              href="/about/"
              className="mt-10 inline-flex items-center gap-2 font-mono text-xs tracking-widest text-white/60 hover:text-white transition-colors link-underline"
            >
              OIFについて →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ============ ACTIVITIES (what we actually do) ============ */}
      <section className="border-t border-ink/10 bg-night">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 section-y">
          <Reveal className="mb-10 md:mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div className="max-w-xl">
              <p className="section-label mb-3">WHAT WE DO</p>
              <h2 className="headline">ふだんの活動は、この3つ。</h2>
              <p className="mt-4 text-ink/60 leading-relaxed">
                部門はなく、全員でひとつのコミュニティ。
                興味のある活動にだけ、顔を出せばOK。
              </p>
            </div>
            <p className="font-mono text-xs text-ink/40 md:pb-2">
              参加自由・掛け持ち歓迎
            </p>
          </Reveal>

          <Reveal delay={120} className="grid md:grid-cols-3 gap-px bg-ink/10 border border-ink/10">
            {activities.map((a) => (
              <Link
                key={a.index}
                href={a.href}
                className="group relative bg-night-2 p-8 md:p-10 flex flex-col min-h-[18rem] hover:bg-night-3 transition-colors duration-300"
              >
                <span
                  aria-hidden
                  className="absolute -top-4 right-5 text-[6rem] font-black leading-none tracking-tighter text-ink/[0.04] group-hover:text-ink/[0.06] transition-colors"
                >
                  {a.index}
                </span>
                <p className="relative font-mono text-[11px] tracking-[0.35em] text-ink/45 mb-5">
                  {a.label}
                </p>
                <h3 className="relative text-2xl md:text-3xl font-black tracking-tighter mb-3">
                  {a.title}
                </h3>
                <p className="relative text-sm md:text-base text-ink/60 leading-relaxed mb-8">
                  {a.body}
                </p>
                <span className="relative mt-auto inline-flex items-center gap-2 text-sm font-bold tracking-widest uppercase opacity-90 md:opacity-60 group-hover:opacity-100 transition-opacity">
                  {a.cta}
                  <span className="transition-transform duration-200 group-hover:translate-x-2" aria-hidden>→</span>
                </span>
              </Link>
            ))}
          </Reveal>

          {/* themes: つくる/理解する は部門ではなくタグ */}
          <Reveal delay={200} className="mt-8 flex flex-col md:flex-row md:items-center gap-3 md:gap-8 border border-ink/10 bg-night px-6 py-5 md:px-8">
            <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-ink/40 shrink-0">
              2 THEMES
            </p>
            <p className="text-sm text-ink/60 leading-relaxed">
              どの活動にも、2つのテーマが流れている——
              <Link href="/developers/" className="font-bold text-ink/80 hover:text-ink transition-colors link-underline">つくる</Link>
              （手を動かして形にする）と、
              <Link href="/theory/" className="font-bold text-ink/80 hover:text-ink transition-colors link-underline">理解する</Link>
              （なぜ動くのかから考える）。
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============ STRUCTURE (org shape + recruiting) ============ */}
      <section className="border-t border-ink/10 bg-night">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 section-y">
          <Reveal className="mb-10 md:mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div className="max-w-xl">
              <p className="section-label mb-3">STRUCTURE</p>
              <h2 className="headline">組織のかたち</h2>
              <p className="mt-4 text-ink/60 leading-relaxed">
                外側にいるほど身軽で、内側に入るほどOIFをつくる側になる。
                どこにいてもメンバーで、行き来はいつでも自由。
              </p>
            </div>
            <p className="font-mono text-xs text-ink/40 md:pb-2">
              役割なしが基本・立候補はいつでも
            </p>
          </Reveal>

          <Reveal delay={120}>
            <OrgStructure />
          </Reveal>
        </div>
      </section>

      {/* ============ MEMBERS (運営・制作の顔ぶれ) ============ */}
      <section className="border-t border-ink/10 bg-night">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 section-y">
          <Reveal className="mb-10 md:mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div className="max-w-xl">
              <p className="section-label mb-3">MEMBERS</p>
              <h2 className="headline">つくっている人たち</h2>
              <p className="mt-4 text-ink/60 leading-relaxed">
                OIFを動かしている運営・制作のメンバー。
                もちろん、役割を持たない参加が基本のコミュニティです。
              </p>
            </div>
            <Link
              href="/join/#roles"
              className="font-mono text-xs tracking-widest text-ink/50 hover:text-ink transition-colors md:pb-2 link-underline"
            >
              仲間になる →
            </Link>
          </Reveal>

          <Reveal delay={120} className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-ink/10 border border-ink/10">
            {members.map((m) => (
              <div key={m.name} className="group bg-night-2 flex flex-col">
                {/* photo — 未設定時はイニシャルのタイル */}
                <div className="relative aspect-square overflow-hidden bg-night-3">
                  {m.photo ? (
                    <Image
                      src={m.photo}
                      alt={`${m.name}の写真`}
                      fill
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-700 ease-smooth"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-mono text-5xl md:text-6xl font-black tracking-tighter text-ink/15 group-hover:text-ink/30 transition-colors">
                        {m.initials}
                      </span>
                    </div>
                  )}
                  <span className="absolute top-0 left-0 bg-ink text-white font-mono text-[10px] tracking-[0.25em] px-2.5 py-1">
                    {m.role}
                  </span>
                </div>

                <div className="p-5 md:p-6 flex flex-col flex-1">
                  <h3 className="text-lg md:text-xl font-black tracking-tighter mb-2">
                    {m.name}
                  </h3>
                  <p className="text-xs md:text-sm text-ink/60 leading-relaxed">
                    {m.intro}
                  </p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ============ SNAPSHOTS (layered photo collage) ============ */}
      <section className="border-t border-ink/10 bg-night overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 section-y">
          <Reveal className="mb-12 md:mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
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

          {/* overlapping collage — photos layer over each other, never a flat grid */}
          <div className="relative aspect-[4/3] sm:aspect-[16/9] lg:aspect-[2/1]">
            {[
              {
                src: "/images/first-workshop.png",
                alt: "第1回ワークショップの様子",
                cls: "left-0 top-[6%] w-[58%] z-10",
                delay: 0,
              },
              {
                src: "/images/vibe-coding-workshop.png",
                alt: "Vibe Codingワークショップの様子",
                cls: "right-0 top-0 w-[46%] z-20",
                delay: 120,
              },
              {
                src: "/images/llm-handson.png",
                alt: "ローカルLLMハンズオンの様子",
                cls: "left-[32%] bottom-0 w-[44%] z-30",
                delay: 240,
              },
            ].map((p) => (
              <Reveal key={p.src} delay={p.delay} className={`absolute ${p.cls}`}>
                <Link
                  href="/activities/"
                  className="group block border-[5px] md:border-8 border-paper bg-paper shadow-card hover:shadow-card-hover transition-shadow duration-300"
                >
                  <span className="relative block w-full aspect-[4/3] overflow-hidden">
                    <Image
                      src={p.src}
                      alt={p.alt}
                      fill
                      sizes="(max-width: 640px) 60vw, 40vw"
                      className="object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-smooth"
                    />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ LT会 (light band + layered photo) ============ */}
      {latestLT && (
        <section className="border-t border-ink/10 bg-night overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 section-y">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <Reveal className="lg:col-span-7">
                <p className="section-label mb-3">LT会</p>
                <h2 className="headline">{latestLT.title}</h2>
                <p className="mt-4 text-ink/60 leading-relaxed max-w-2xl">
                  {latestLT.summary}
                </p>

                <ul className="mt-8 max-w-xl border-t border-ink/10">
                  {latestLT.talks.map((t, i) => (
                    <li
                      key={t.title}
                      className="flex items-baseline gap-4 py-3.5 border-b border-ink/10"
                    >
                      <span className="font-mono text-[11px] tracking-widest text-ink/40 shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-sm md:text-base font-bold tracking-tight">
                        {t.title}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/lt/"
                  className="mt-8 inline-flex items-center gap-2 font-mono text-xs tracking-widest text-ink/50 hover:text-ink transition-colors link-underline"
                >
                  すべての記録を見る →
                </Link>
              </Reveal>

              {/* layered photo pair (kept from the collage language) */}
              <Reveal delay={140} className="lg:col-span-5">
                <div className="relative pb-10 pr-4">
                  <Link
                    href="/lt/"
                    className="group relative block w-[88%] aspect-[4/3] overflow-hidden border border-ink/10 shadow-card"
                  >
                    <Image
                      src={latestLT.photos[0].src}
                      alt={latestLT.photos[0].alt}
                      fill
                      sizes="(max-width: 1024px) 88vw, 36vw"
                      className="object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-smooth"
                    />
                  </Link>
                  <Link
                    href="/lt/"
                    className="group absolute bottom-0 right-0 w-[52%] block border-[6px] border-paper bg-paper shadow-card-hover z-10"
                  >
                    <span className="relative block w-full aspect-[4/3] overflow-hidden">
                      <Image
                        src={latestLT.photos[2].src}
                        alt={latestLT.photos[2].alt}
                        fill
                        sizes="(max-width: 1024px) 52vw, 20vw"
                        className="object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-smooth"
                      />
                    </span>
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      )}

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
              <div className="mt-8 pt-6 border-t border-ink/10">
                <p className="text-sm text-ink/60 leading-relaxed mb-4">
                  日々の活動は Instagram で発信中。
                </p>
                <InstagramCTA location="home_log_instagram" size="sm" />
              </div>
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

        </div>
      </section>
    </div>
  );
}
