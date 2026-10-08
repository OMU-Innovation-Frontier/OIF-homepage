import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { newsItems } from "@/lib/news";
import { projects } from "@/lib/projects";
import DiscordCTA from "@/components/ui/DiscordCTA";
import Reveal from "@/components/ui/Reveal";

// 活動の流れ。文言の根拠は docs/redesign-2026-10.md（代表確認済み）
const flow = [
  {
    step: "01",
    name: "入る",
    title: "まずは Discord から",
    body: "会費は無料で、プログラミングの経験もいりません。まずは Discord に入って、雰囲気を見るところから始められます。",
    href: "/join/",
  },
  {
    step: "02",
    name: "学ぶ",
    title: "Noema と OIF学習",
    body: "技術メディア Noema では、AI で何ができるかと、それがなぜ動くのかを具体例で説明しています。勉強・制作のメンバーは、全員が学習プログラム「OIF学習」で同じ土台をつくります。",
    href: "/activities/#learn",
  },
  {
    step: "03",
    name: "つくる",
    title: "実際に動くものをつくる",
    body: "記事を読んで分かることと、自分でつくれることは別です。週1回の定例会で進み具合を共有しながら、動くものをつくるところまで取り組みます。",
    href: "/activities/#build",
  },
  {
    step: "04",
    name: "発表する",
    title: "つくったものを人前に出す",
    body: "つくったものは定例会で発表します。完成していなくてもかまいません。学外のコンテストにも出ています。",
    href: "/activities/#present",
  },
];

const startSteps = [
  "Discord に参加する",
  "Noema の記事を1本読んでみる",
  "勉強・制作に加わりたくなったら、運営に声をかける",
];

const snapshots = [
  { src: "/images/lt/lt1-02.jpg", alt: "LT会で発表するメンバー" },
  { src: "/images/llm-handson.png", alt: "ローカルLLMハンズオンの様子" },
  { src: "/images/vibe-coding-workshop.png", alt: "Vibe Codingワークショップの様子" },
];

export default function HomeClient() {
  return (
    <div className="bg-canvas text-ink">
      {/* ============ 最初の画面 ============ */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="hidden md:block absolute top-1/2 -translate-y-1/2 -right-40 lg:-right-24 h-[44rem] w-[44rem] opacity-[0.06] mix-blend-multiply pointer-events-none"
        >
          <Image src="/logo-square.png" alt="" fill sizes="44rem" className="object-contain" priority />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-16 pb-20 md:pt-28 md:pb-32">
          <p className="text-sm font-bold text-brand animate-fade-up">大阪公立大学の AI コミュニティ</p>

          <h1 className="mt-5 font-black leading-[1.1] text-[clamp(2.75rem,8vw,6rem)] animate-fade-up [animation-delay:80ms]">
            <span className="whitespace-nowrap">初心者から、</span>
            <wbr />
            <span className="whitespace-nowrap">即戦力へ。</span>
          </h1>

          <p className="mt-8 max-w-2xl text-base md:text-lg leading-loose text-ink/75 animate-fade-up [animation-delay:160ms]">
            大阪公立大学の学生がつくっている AI のコミュニティです。プログラミングの経験がなくても、正しい順番で学んで手を動かせば、人の役に立つものをつくれるようになります。
          </p>

          <ul className="mt-6 flex flex-wrap gap-2 animate-fade-up [animation-delay:200ms]">
            {["会費無料", "経験不問", "文系も1年生も歓迎"].map((t) => (
              <li key={t} className="rounded-full border border-ink/15 bg-white px-3 py-1 text-xs font-bold text-ink/70">
                {t}
              </li>
            ))}
          </ul>


          <div className="mt-10 flex flex-wrap gap-3 animate-fade-up [animation-delay:280ms]">
            <DiscordCTA location="home_hero" variant="brand" size="md" label="Discord に参加する" />
            <Link
              href="/about/"
              className="inline-flex items-center gap-2 rounded-full border border-ink/20 bg-white px-6 py-3 text-sm font-bold hover:border-ink/40 transition-colors duration-200"
            >
              OIF について
            </Link>
          </div>
        </div>
      </section>

      {/* ============ 理念 ============ */}
      <section className="bg-white border-y border-ink/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28 grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="text-sm font-bold text-brand">理念</p>
            <h2 className="mt-4 text-3xl md:text-4xl font-black leading-snug">
              AI を少し学ぶだけで、できることが一気に増える。
            </h2>
          </Reveal>
          <Reveal delay={100} className="lg:col-span-6 lg:col-start-7 lg:pt-10">
            <p className="text-base md:text-lg leading-loose text-ink/75">
              ここでいう即戦力は、最初から優秀な人のことではありません。初心者が、実際に使われるものをつくれるところまで進むための場所です。エリートを選ぶ団体ではないので、参加の条件は少なくしています。
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============ 活動の流れ ============ */}
      <section id="flow">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28">
          <Reveal className="max-w-2xl">
            <p className="text-sm font-bold text-brand">活動の流れ</p>
            <h2 className="mt-4 text-3xl md:text-4xl font-black leading-snug">
              OIF での活動は、この順番で進みます。
            </h2>
          </Reveal>

          <ol className="relative mt-14 grid gap-5 lg:grid-cols-4 lg:gap-5">
            <span aria-hidden className="hidden lg:block absolute left-[12.5%] right-[12.5%] top-6 h-px bg-brand/30" />
            <span aria-hidden className="lg:hidden absolute left-6 top-6 bottom-6 w-px bg-brand/30" />
            {flow.map((f, i) => (
              <li key={f.step} className="reveal relative flex gap-5 lg:flex-col lg:gap-0" style={{ animationDelay: `${i * 60}ms` }}>
                  <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-bold text-white lg:mx-auto">
                    {f.step}
                  </span>
                  <Link
                    href={f.href}
                    className="group flex flex-1 flex-col rounded-2xl border border-ink/10 bg-white p-6 lg:mt-6 hover:border-brand/40 hover:shadow-card transition-all duration-200"
                  >
                    <p className="text-sm font-bold text-brand">{f.name}</p>
                    <h3 className="mt-2 text-lg font-black leading-snug">{f.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink/70">{f.body}</p>
                    <span className="mt-auto pt-5 inline-flex items-center gap-1 text-sm font-bold text-ink/60 group-hover:text-brand transition-colors">
                      詳しく見る
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
                    </span>
                  </Link>
                </li>
            ))}
          </ol>

        </div>
      </section>

      {/* ============ メンバーがつくったもの ============ */}
      <section className="bg-white border-y border-ink/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28">
          <Reveal className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-bold text-brand">つくったもの</p>
              <h2 className="mt-4 text-3xl md:text-4xl font-black leading-snug">メンバーがつくったもの</h2>
            </div>
            <Link href="/activities/#build" className="text-sm font-bold text-ink/60 hover:text-brand transition-colors">
              活動ページで見る →
            </Link>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {projects.map((p, i) => (
              <Reveal key={p.slug} delay={i * 80}>
                <Link
                  href={`/projects/${p.slug}/`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-ink/10 bg-canvas hover:shadow-card transition-shadow duration-200"
                >
                  {p.image && (
                    <span className="relative block aspect-[16/10] overflow-hidden border-b border-ink/10 bg-white">
                      <Image
                        src={p.image}
                        alt={`${p.name} の画面`}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-500 ease-smooth"
                      />
                    </span>
                  )}
                  <span className="flex flex-1 flex-col p-6">
                    <span className="text-xs font-bold text-ink/50">{p.status}</span>
                    <span className="mt-1 text-xl font-black">{p.name}</span>
                    <span className="mt-2 text-sm leading-relaxed text-ink/70">{p.tagline}</span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 最近の活動 ============ */}
      <section>
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28 grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <p className="text-sm font-bold text-brand">これまでの活動</p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {snapshots.map((s, i) => (
                <span
                  key={s.src}
                  className={`relative block overflow-hidden rounded-2xl ${i === 0 ? "col-span-2 aspect-[16/9]" : "aspect-[4/3]"}`}
                >
                  <Image src={s.src} alt={s.alt} fill sizes="(max-width: 1024px) 100vw, 55vw" className="object-cover" />
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={100} className="lg:col-span-5">
            <h2 className="text-2xl font-black">お知らせ</h2>
            <ul className="mt-6 border-t border-ink/10">
              {newsItems.slice(0, 3).map((item) => (
                <li key={`${item.date}-${item.title}`} className="border-b border-ink/10 py-5">
                  <time className="text-xs font-bold text-ink/50">{item.date}</time>
                  <p className="mt-1 font-bold leading-relaxed">{item.title}</p>
                </li>
              ))}
            </ul>
            <Link href="/news/" className="mt-6 inline-block text-sm font-bold text-ink/60 hover:text-brand transition-colors">
              お知らせをすべて見る →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ============ はじめ方 ============ */}
      <section className="bg-ink text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28 grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <h2 className="text-3xl md:text-4xl font-black leading-snug">はじめ方</h2>
            <p className="mt-5 leading-relaxed text-white/70">
              会費は無料です。他大学の学生も参加できますが、キャンパスで直接会って活動することが多いので、大阪公立大学の学生をおすすめしています。
            </p>
            <div className="mt-8">
              <DiscordCTA location="home_start" variant="brand" size="md" label="Discord に参加する" />
            </div>
          </Reveal>

          <ol className="lg:col-span-6 lg:col-start-7 space-y-3">
            {startSteps.map((s, i) => (
              <li key={s} className="reveal flex items-center gap-4 rounded-2xl bg-white/[0.06] p-5" style={{ animationDelay: `${i * 60}ms` }}>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/30 text-sm font-bold">
                    {i + 1}
                  </span>
                  <span className="font-bold leading-relaxed">{s}</span>
                </li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  );
}
