import { Metadata } from "next";
import { ArrowRight, MessageSquare, Terminal, Lightbulb, Users } from "lucide-react";
import SectionDivider from "@/components/site/SectionDivider";

export const metadata: Metadata = {
  title: "Join | OIF 大阪公立大学のAIサークルに参加",
  description: "OIF（OMU Innovation Frontier）への加入は簡単。大阪公立大学のAI・プログラミングサークルで、AIや機械学習に興味のある学生を募集中。初心者歓迎、プログラミング経験不問。Discordから参加できます。",
  alternates: {
    canonical: "https://oif-ai.com/join/",
  },
};

const discordActivities = [
  { icon: MessageSquare, text: "AIニュース共有" },
  { icon: Users, text: "イベント案内" },
  { icon: Terminal, text: "技術的な質問・相談" },
  { icon: Lightbulb, text: "プロジェクトのアイデア共有" },
  { icon: MessageSquare, text: "メンバー同士の交流" },
];

const recommendedFor = [
  "AIに興味がある",
  "プログラミングを始めてみたい",
  "AIツールを触ってみたい",
  "技術系のコミュニティに参加したい",
  "一緒にプロジェクトを作る仲間がほしい",
];

export default function JoinPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-24 md:py-32 lg:py-40">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <p className="text-sm font-bold tracking-[0.3em] uppercase opacity-40 mb-6">
            Join the Community
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-black tracking-tighter leading-[0.9]">
            Discordから、<br />はじめよう
          </h1>
        </div>
      </section>

      <SectionDivider />

      {/* Introduction */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-4xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter mb-12 leading-tight">
              AIをもっと身近に、<br />
              もっと日常の選択肢に
            </h2>
            <div className="space-y-6 text-base md:text-lg lg:text-xl leading-relaxed text-black/80 font-medium">
              <p>
                OIFは、特定の専門スキルを持った人だけの場所ではありません。<br className="hidden md:block" />
                「AIってなんだろう」「何かツールを使ってみようかな」——そんな、ごく自然な好奇心から活動が始まります。
              </p>
              <p>
                プログラミングの経験はあってもなくても、どちらでも構いません。<br className="hidden md:block" />
                まずは同じ興味を持つ仲間とつながること。そこから自分たちのペースで進んでいきましょう。
              </p>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Main Content Grid */}
      <section>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 divide-x-0 lg:divide-x divide-black">

          {/* Left: Recommended For */}
          <div className="p-8 md:p-12 lg:p-16 border-b lg:border-b-0 border-black bg-gray-50/50">
            <p className="text-xs font-bold tracking-widest uppercase text-black/40 mb-6">
              Recommended for
            </p>
            <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-16">
              こんな人におすすめ
            </h2>
            <ul className="space-y-6">
              {recommendedFor.map((item, index) => (
                <li key={index} className="flex items-center gap-5 group">
                  <div className="w-1.5 h-1.5 bg-black rounded-full shrink-0 group-hover:scale-150 transition-transform duration-300" />
                  <span className="text-lg md:text-xl font-bold tracking-tight text-black/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: How to Join (Discord) */}
          <div className="p-8 md:p-12 lg:p-16 bg-black text-white">
            <p className="text-xs font-bold tracking-widest uppercase text-white/30 mb-6">
              How to Join
            </p>
            <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-12">
              参加はDiscordから
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-white/60 mb-12 lg:pr-10">
              OIFのコミュニケーションはすべて Discord 上で行われています。
              ニュースの共有や技術的な相談、プロジェクトの募集など、
              日常的なやり取りに参加するだけで、新しい景色が見えてくるはずです。
            </p>

            <div className="grid grid-cols-2 gap-y-8 gap-x-8 mb-20">
              {discordActivities.map((activity, index) => (
                <div key={index} className="flex flex-col gap-3 group">
                  <activity.icon className="w-6 h-6 text-white/40 group-hover:text-white transition-colors duration-300" />
                  <span className="text-sm md:text-base font-bold tracking-tight">{activity.text}</span>
                </div>
              ))}
            </div>

            <div className="pt-10 border-t border-white/20">
              <a
                href="https://discord.gg/pEHeeYKUnX"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between gap-12 bg-white text-black px-8 py-5 text-sm font-black tracking-widest uppercase hover:bg-black hover:text-white border-2 border-white transition-all duration-300 group overflow-hidden relative"
              >
                <span className="relative z-10 flex items-center gap-4">
                  Discordに参加
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Member Types Section */}
      <section className="py-24 md:py-40 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <p className="text-xs font-bold tracking-widest uppercase text-black/40 mb-4">
            Community Structure
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight mb-6 leading-tight">
            Discordに入ると、<br className="hidden md:block" />どうなるの？
          </h2>
          <p className="text-base md:text-lg text-black/60 font-medium mb-16 max-w-2xl">
            誰でも無料でDiscordに参加できます。入った後は、自分のペースに合わせて2つのスタイルから関わり方を選べます。
          </p>

          <div className="grid md:grid-cols-2 gap-0 border border-black">
            <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-black bg-white">
              <p className="text-xs font-bold tracking-widest uppercase text-black/30 mb-6">
                Style 01
              </p>
              <h3 className="text-2xl md:text-3xl font-black tracking-tight mb-6">
                メンバー
              </h3>
              <p className="text-sm md:text-base text-black/60 leading-relaxed mb-8 font-medium">
                気軽に覗きに来るだけでOK。特別な参加義務はありません。
              </p>
              <ul className="space-y-4">
                {[
                  "AIニュースや情報をDiscordで受け取る",
                  "イベント・勉強会の案内を見られる",
                  "気になることをDiscordで相談できる",
                  "自分のペースで眺めるだけでもOK",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 bg-black/30 rounded-full shrink-0" />
                    <span className="text-sm md:text-base font-medium text-black/70">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 md:p-12 bg-black text-white">
              <p className="text-xs font-bold tracking-widest uppercase text-white/30 mb-6">
                Style 02
              </p>
              <h3 className="text-2xl md:text-3xl font-black tracking-tight mb-6">
                コアメンバー
              </h3>
              <p className="text-sm md:text-base text-white/60 leading-relaxed mb-8 font-medium">
                一緒に学び、作りたい人へ。プロジェクトや勉強会に積極的に参加します。
              </p>
              <ul className="space-y-4">
                {[
                  "勉強会・輪読会に参加して深く学ぶ",
                  "AI・アプリ開発プロジェクトを一緒に進める",
                  "メンバーと積極的に議論・交流する",
                  "外部インターンなど実務経験への道も",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 bg-white/40 rounded-full shrink-0" />
                    <span className="text-sm md:text-base font-medium text-white/70">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="mt-8 text-sm text-black/40 font-medium text-center">
            ※ どちらのスタイルも、まずDiscordに参加するところから始まります
          </p>
        </div>
      </section>

      <SectionDivider />

      {/* Final Message */}
      <section className="py-24 md:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter mb-10 leading-tight">
              特別な準備は、<br />必要ありません
            </h2>
            <p className="text-lg md:text-xl font-medium text-black/60 leading-relaxed mb-16 px-4">
              Discordに入った後は、興味のあるチャンネルを眺めてみたり、
              たまにあるイベントに参加してみたりするだけで十分です。<br />
              一歩、外の世界を覗いてみませんか。
            </p>
            <p className="text-xs font-bold tracking-[0.3em] uppercase opacity-20">
              OIF Community Office
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
