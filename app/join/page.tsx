import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight, CheckCircle2, MessageSquare, Terminal, Lightbulb, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Join the Community",
  description: "OMU Innovation Frontier (OIF) への加入方法。AIやITに興味のある大阪公立大学の学生を募集しています。初心者も大歓迎です。",
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
      <section className="py-24 md:py-32 lg:py-40 border-b border-black relative overflow-hidden">
        {/* Subtle decorative background */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03] pointer-events-none">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full text-black fill-current">
            <polygon points="100,0 0,100 100,100" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          <p className="text-sm font-bold tracking-[0.3em] uppercase opacity-40 mb-6">
            Join the Community
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-black tracking-tighter leading-[0.9]">
            Join OIF
          </h1>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 md:py-28 border-b border-black">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-4xl space-y-10 text-lg md:text-2xl leading-relaxed font-bold tracking-tight">
            <p>
              OIF は、<br className="hidden md:block" />
              AI・テクノロジー・イノベーションに興味のある<br className="hidden md:block" />
              大阪公立大学の学生が参加できるコミュニティです。
            </p>
            <p className="opacity-60">
              プログラミング経験は必要ありません。<br className="hidden md:block" />
              AIに興味がある人、何か新しいことを始めたい人、<br className="hidden md:block" />
              テクノロジーの未来について語りたい人を歓迎します。
            </p>
          </div>
        </div>
      </section>

      {/* Recommended For & Discord Section */}
      <section className="border-b border-black bg-gray-50">
        <div className="grid lg:grid-cols-2">
          {/* Left: Recommended For */}
          <div className="p-8 md:p-12 lg:p-20 border-b lg:border-b-0 lg:border-r border-black flex flex-col justify-between">
            <div>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-12">
                こんな人におすすめ
              </h2>
              <ul className="space-y-6">
                {recommendedFor.map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 shrink-0 mt-0.5" />
                    <span className="text-lg md:text-xl font-bold tracking-tight">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: How to Join (Discord) */}
          <div className="p-8 md:p-12 lg:p-20 bg-black text-white relative flex flex-col justify-between overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-8">
                参加方法
              </h2>
              <p className="text-lg font-medium opacity-80 mb-10 leading-relaxed">
                OIF への参加は Discord から始まります。<br />
                Discordでは次のようなことを行っています。
              </p>

              <div className="grid sm:grid-cols-2 gap-y-6 gap-x-8 mb-16">
                {discordActivities.map((activity, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center shrink-0">
                      <activity.icon className="w-5 h-5 text-white/80" />
                    </div>
                    <span className="text-sm md:text-base font-bold tracking-tight">{activity.text}</span>
                  </div>
                ))}
              </div>

              <div className="pt-8 border-t border-white/20">
                <p className="text-base font-medium mb-6 opacity-80">
                  まずはDiscordに参加して、コミュニティの雰囲気を見てみてください。
                </p>
                <a
                  href="https://discord.gg/TfdmrXKNgD"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-between gap-6 bg-white text-black px-10 py-5 text-sm font-black tracking-widest uppercase hover:bg-black hover:text-white border-2 border-white transition-all duration-300 group"
                >
                  Discordに参加する
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Activity Participation */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 text-center">
          <div className="max-w-3xl mx-auto border border-black bg-white p-12 md:p-20 shadow-[12px_12px_0_0_rgba(0,0,0,1)]">
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-8">
              自由な参加スタイル
            </h2>
            <div className="space-y-6 text-lg md:text-xl font-bold tracking-tight text-black/80">
              <p>
                Discordに参加した後は、<br />
                イベントや勉強会、プロジェクトに自由に参加できます。
              </p>
              <p className="text-black pt-4 text-xl md:text-2xl">
                まずは気軽にコミュニティに参加してみてください。
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
