import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight, CheckCircle2, MessageSquare, Terminal, Lightbulb, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Join the Community",
  description: "OMU Innovation Frontier (OIF) への加入方法。AIやITに興味のある大阪公立大学の学生を募集しています。初心者も大歓迎です。",
  alternates: {
    canonical: "https://oif-ai.com/join/",
  },
};

const discordActivities = [
  { icon: MessageSquare, text: "AIニュース共有" },
  { icon: Users, text: "イベント案内" },
  { icon: Terminal, text: "技術の質問・相談" },
  { icon: Lightbulb, text: "プロジェクトのアイデア共有" },
  { icon: MessageSquare, text: "メンバー同士の交流" },
];

const recommendedFor = [
  "AIに興味がある",
  "プログラミングを始めてみたい",
  "AIツールを触ってみたい",
  "技術系のコミュニティに参加したい",
  "一緒にプロジェクトを作る仲間がほしい"
];

export default function JoinPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-24 md:py-32 lg:py-40 border-b border-black">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <p className="text-sm font-bold tracking-[0.3em] uppercase opacity-40 mb-6">
            Join the Community
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-black tracking-tighter leading-[0.9]">
            Discordから、<br />はじめよう。
          </h1>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 md:py-32 border-b border-black">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-4xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter mb-12 leading-tight">
              AIをもっと身近に、<br />
              もっと日常の選択肢に。
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

      {/* Main Content Grid */}
      <section className="border-b border-black">
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
              参加はDiscordから。
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
                href="https://discord.gg/TfdmrXKNgD"
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

      {/* Final Message */}
      <section className="py-24 md:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter mb-10 leading-tight">
              特別な準備は、<br />必要ありません。
            </h2>
            <p className="text-lg md:text-xl font-medium text-black/60 leading-relaxed mb-16 px-4">
              Discordに入った後は、興味のあるチャンネルを眺めてみたり、
              たまにあるイベントに参加してみたりするだけで十分です。<br />
              一歩、外の世界をのぞいてみませんか。
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
