import { Metadata } from "next";
import Link from "next/link";
import { MessageSquare, Compass, Rocket, Palette, Code2, Users } from "lucide-react";
import DiscordCTA from "@/components/ui/DiscordCTA";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Join | OIF 大阪公立大学のAIサークルに参加",
  description:
    "OIF（OMU Innovation Frontier）への加入はDiscordから。大阪公立大学のAI・プログラミングサークルで、AIや機械学習に興味のある学生を募集中。初心者歓迎、プログラミング経験不問。デザイン・教材づくり・イベント運営など、つくる側の役割も募集中。",
  alternates: {
    canonical: "https://oif-ai.com/join/",
  },
};

const roles = [
  {
    icon: Palette,
    title: "デザイン",
    body: "SNS・ホームページ・イベントのスライドなど、OIFの「見た目」と発信をつくる。",
    note: "「デザインだけやりたい」も大歓迎",
    wanted: true,
  },
  {
    icon: Code2,
    title: "技術",
    body: "勉強会・ハンズオンの教材づくりや、コミュニティ発のサービス開発。",
    note: "つくりながら学ぶスタイルでOK",
    wanted: false,
  },
  {
    icon: Users,
    title: "運営",
    body: "イベントの企画・他団体や企業との連携・プロジェクトの進行管理。",
    note: "非エンジニアも主戦力",
    wanted: true,
  },
];

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
      <section className="relative bg-paper">
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-24 md:py-32">
          <p className="section-label mb-6">JOIN THE COMMUNITY</p>
          <h1 className="display mb-8">
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
            無料 · 経験不問 · 見るだけOK
          </p>
        </div>
      </section>

      {/* 3 Steps */}
      <section className="border-t border-ink/10 bg-night">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 section-y">
          <p className="section-label mb-3">HOW IT WORKS</p>
          <h2 className="headline mb-14">
            参加までの3ステップ
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.n} delay={i * 100}>
                <div className="h-full border border-ink/10 bg-night-2 p-8 md:p-10 hover:border-ink/30 transition-colors">
                  <div className="flex items-center justify-between mb-8">
                    <Icon size={26} strokeWidth={1.5} className="text-ink/70" />
                    <span className="font-mono text-sm text-ink/52">{s.n}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-3">{s.title}</h3>
                  <p className="text-sm md:text-base leading-relaxed text-ink/60">{s.body}</p>
                </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Roles: get involved */}
      <section id="roles" className="border-t border-ink/10 bg-night">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 section-y">
          <Reveal className="max-w-2xl mb-12 md:mb-16">
            <p className="section-label mb-3">GET INVOLVED</p>
            <h2 className="headline mb-5">
              つくる側にも、まわれる。
            </h2>
            <p className="text-base text-ink/60 leading-relaxed">
              OIFへの参加はDiscordに入るだけ。
              ほとんどのメンバーは役割を持たず、見るだけ・イベントだけで参加しています。
              そのうえで「OIFをつくる側」をやってみたい人には、3つの役割があります。
              ひとつだけでも、兼任でも、途中からでも。
            </p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-px bg-ink/10 border border-ink/10">
            {roles.map((r, i) => {
              const Icon = r.icon;
              return (
                <Reveal key={r.title} delay={i * 100} className="bg-night-2 p-8 md:p-10">
                  <div className="flex items-center justify-between mb-8">
                    <Icon size={26} strokeWidth={1.5} className="text-ink/70" aria-hidden />
                    {r.wanted && (
                      <span className="font-mono text-[11px] tracking-widest text-accent-bright">
                        いま特に募集中
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-3">{r.title}</h3>
                  <p className="text-sm md:text-base leading-relaxed text-ink/60">{r.body}</p>
                  <p className="mt-5 font-mono text-xs text-ink/45">{r.note}</p>
                </Reveal>
              );
            })}
          </div>

          <div className="mt-10 flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
            <p className="text-sm text-ink/55 leading-relaxed max-w-xl">
              目安は週2〜3時間から。スキルは入ってから身につければ大丈夫です。
              興味があれば、Discordで「デザインやりたい」「イベント企画やりたい」とひとこと送ってください。
            </p>
            <div className="shrink-0">
              <DiscordCTA location="join_roles" size="md" label="Discordで声をかける" />
            </div>
          </div>
        </div>
      </section>

      {/* Interest: recommended for */}
      <section className="border-t border-ink/10 bg-night-2">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 section-y">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20 items-center">
            <div>
              <p className="section-label mb-3">IS THIS YOU?</p>
              <h2 className="headline mb-6">
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
              <p className="section-label mb-3">QUICK ANSWERS</p>
              <h2 className="headline">不安な点は？</h2>
            </div>
            <Link
              href="/faq/"
              className="hidden md:inline-flex items-center gap-1 font-mono text-xs tracking-widest text-ink/60 hover:text-ink transition-colors shrink-0"
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
            className="md:hidden mt-8 inline-flex items-center gap-1 font-mono text-xs tracking-widest text-ink/60 hover:text-ink transition-colors"
          >
            すべてのFAQ →
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden border-t border-ink/10 bg-night">
        <div aria-hidden className="absolute inset-0 dot-grid opacity-50" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-28 md:py-40 text-center">
          <p className="section-label mb-8">JOIN</p>
          <h2 className="statement mb-10">
            一歩、<span>外の世界</span>を<br />覗いてみませんか。
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
