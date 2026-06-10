import { Metadata } from "next";
import Link from "next/link";
import { MessageSquare, Compass, Rocket } from "lucide-react";
import DiscordCTA from "@/components/ui/DiscordCTA";
import Reveal from "@/components/ui/Reveal";
import Tilt from "@/components/ui/Tilt";

export const metadata: Metadata = {
  title: "Join | OIF 大阪公立大学のAIサークルに参加",
  description:
    "OIF（OMU Innovation Frontier）への加入はDiscordから。大阪公立大学のAI・プログラミングサークルで、AIや機械学習に興味のある学生を募集中。初心者歓迎、プログラミング経験不問。",
  alternates: {
    canonical: "https://oif-ai.com/join/",
  },
};

const steps = [
  {
    icon: MessageSquare,
    n: "01",
    title: "Discordに参加",
    body: "メールアドレスだけで無料登録。スマホからもPCからも、1分で入れます。",
  },
  {
    icon: Compass,
    n: "02",
    title: "チャンネルを覗く",
    body: "AIニュース、勉強会の案内、開発の様子。気になるチャンネルを眺めるだけでOK。",
  },
  {
    icon: Rocket,
    n: "03",
    title: "興味のあることに参加",
    body: "ハンズオン、輪読会、プロジェクト。自分のペースで関わり方を選べます。",
  },
];

const recommendedFor = [
  "AIに興味がある",
  "プログラミングを始めてみたい",
  "AIツールを触ってみたい",
  "技術系のコミュニティに参加したい",
  "一緒にプロジェクトを作る仲間がほしい",
];

const faqHighlights = [
  { q: "参加は無料ですか？", a: "はい、完全無料です。Discordに入るだけで費用は一切かかりません。" },
  { q: "大阪公立大学の学生じゃないと無理？", a: "他大学の学生も歓迎です。AIに興味があれば学校・学部・専攻は問いません。" },
  { q: "プログラミング初心者でも大丈夫？", a: "もちろんです。経験不問。まず眺めるだけの参加スタイルもあります。" },
];

export default function JoinPage() {
  return (
    <div className="bg-paper text-ink -mt-14 md:-mt-16 pt-14 md:pt-16">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div aria-hidden className="absolute inset-0 dot-grid opacity-40" />
        <div aria-hidden className="absolute -top-32 right-0 h-[30rem] w-[30rem] rounded-full bg-accent/15 blur-[120px]" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-24 md:py-32">
          <p className="font-mono text-xs md:text-sm tracking-[0.3em] text-accent-bright mb-6">
            JOIN THE COMMUNITY
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.95] mb-8">
            Discordから、<br />はじめよう
          </h1>
          <p className="text-lg md:text-xl text-ink/70 max-w-2xl mb-12 leading-relaxed">
            OIFのコミュニケーションはすべて Discord 上で。
            ニュース共有も、勉強会も、プロジェクトも、まずは覗いてみることから始まります。
          </p>
          <div className="flex flex-wrap items-center gap-5">
            <DiscordCTA location="join_hero" />
            <Link
              href="/activities/"
              className="inline-flex items-center gap-2 px-8 py-5 text-sm font-bold tracking-widest uppercase border border-ink/20 text-ink hover:bg-ink/5 hover:border-ink/40 transition-colors duration-200"
            >
              活動を見る
            </Link>
          </div>
          <p className="mt-6 font-mono text-xs text-ink/60">
            無料 · 経験不問 · 初心者歓迎
          </p>
        </div>
      </section>

      {/* 3 Steps */}
      <section className="border-t border-ink/10 bg-night">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 section-y">
          <p className="font-mono text-xs tracking-[0.3em] text-accent-bright mb-3">HOW IT WORKS</p>
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-14">
            参加までの3ステップ
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.n} delay={i * 100}>
                <Tilt max={5}>
                <div className="h-full border border-ink/10 bg-night-2 p-8 md:p-10 hover:border-accent-bright/40 transition-colors">
                  <div className="flex items-center justify-between mb-8">
                    <Icon size={26} strokeWidth={1.5} className="text-accent-bright" />
                    <span className="font-mono text-sm text-ink/52">{s.n}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-3">{s.title}</h3>
                  <p className="text-sm md:text-base leading-relaxed text-ink/60">{s.body}</p>
                </div>
                </Tilt>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interest: recommended for */}
      <section className="border-t border-ink/10 bg-night-2">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 section-y">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20 items-center">
            <div>
              <p className="font-mono text-xs tracking-[0.3em] text-accent-bright mb-3">IS THIS YOU?</p>
              <h2 className="text-3xl md:text-4xl font-black tracking-tighter leading-tight mb-6">
                こんな人に<br />おすすめ
              </h2>
              <p className="text-base text-ink/55 leading-relaxed mb-8 max-w-md">
                ひとつでも当てはまれば、きっと楽しめます。完璧な準備は要りません。
              </p>
              <DiscordCTA location="join_interest" size="md" label="いま参加する" />
            </div>
            <ul className="space-y-5">
              {recommendedFor.map((item) => (
                <li key={item} className="flex items-center gap-5 border-b border-ink/10 pb-5">
                  <span className="font-mono text-accent-bright text-sm shrink-0">✓</span>
                  <span className="text-lg md:text-xl font-bold tracking-tight">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ highlights */}
      <section className="border-t border-ink/10 bg-night">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 section-y">
          <div className="flex items-end justify-between gap-6 mb-12">
            <div>
              <p className="font-mono text-xs tracking-[0.3em] text-accent-bright mb-3">QUICK ANSWERS</p>
              <h2 className="text-3xl md:text-4xl font-black tracking-tighter">不安な点は？</h2>
            </div>
            <Link
              href="/faq/"
              className="hidden md:inline-flex items-center gap-1 font-mono text-xs tracking-widest text-ink/60 hover:text-accent-bright transition-colors shrink-0"
            >
              すべてのFAQ →
            </Link>
          </div>
          <div className="border-t border-ink/10">
            {faqHighlights.map((f) => (
              <div key={f.q} className="grid md:grid-cols-[0.8fr_1.2fr] gap-3 md:gap-10 py-7 border-b border-ink/10">
                <p className="text-lg font-bold tracking-tight">{f.q}</p>
                <p className="text-base text-ink/65 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
          <Link
            href="/faq/"
            className="md:hidden mt-8 inline-flex items-center gap-1 font-mono text-xs tracking-widest text-ink/60 hover:text-accent-bright transition-colors"
          >
            すべてのFAQ →
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden border-t border-ink/10 bg-night">
        <div aria-hidden className="absolute inset-0 dot-grid opacity-50" />
        <div aria-hidden className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[30rem] w-[30rem] rounded-full bg-accent/15 blur-[120px]" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-28 md:py-40 text-center">
          <p className="font-mono text-xs tracking-[0.3em] text-accent-bright mb-8">JOIN</p>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-[1.05] mb-10">
            一歩、<span className="accent-gradient-text">外の世界</span>を<br />覗いてみませんか。
          </h2>
          <p className="text-base md:text-lg text-ink/60 max-w-xl mx-auto mb-12">
            特別な準備は必要ありません。まずはDiscordに入るところから。
          </p>
          <div className="flex justify-center">
            <DiscordCTA location="join_footer" />
          </div>
        </div>
      </section>
    </div>
  );
}
