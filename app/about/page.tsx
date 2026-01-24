"use client";

import { useChapter } from "@/contexts/ChapterContext";

const content = {
  global: {
    intro: {
      title: "Osaka Innovation Frontier",
      description: [
        "OIFは、大学を超えて技術者が集まるネットワークです。",
        "各大学に「チャプター」を置き、ローカルな活動拠点を確保しながら、全体としては一つのコミュニティとして機能しています。",
      ],
    },
    reason: {
      title: "なぜ、大学を超えるのか",
      description: [
        "一つの大学だけでは、出会える仲間や技術の幅に限界があります。",
        "異なる環境で学ぶエンジニアが交わることで、新しい視点と刺激が生まれます。",
        "OIFは、そのための「窓」を提供します。",
      ],
    },
  },
  omu: {
    intro: {
      title: "大阪公立大学 技術コミュニティ OIF",
      description: [
        "OIFは、公立大の学生が主体となって活動する技術サークルです。",
        "しかし、ただのサークルではありません。",
      ],
    },
    reason: {
      title: "閉ざさず、拠り所を持つ",
      description: [
        "大学の中だけで完結していると、技術の視野は狭くなりがちです。",
        "逆に、ネット上の繋がりだけでは、深い議論や継続的な開発は難しくなります。",
        "だから、OIFは「学外とのネットワーク」と「学内の活動拠点」の両方を持っています。",
      ],
    },
  },
};

export default function AboutPage() {
  const { chapter } = useChapter();
  const { intro, reason } = content[chapter];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 md:py-32 lg:py-40 border-b border-black">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter">
            About
          </h1>
        </div>
      </section>

      {/* Section 1: Introduction */}
      <section className="py-20 md:py-28 border-b border-black">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-3xl">
            <p className="text-lg md:text-xl font-medium mb-8">{intro.title}</p>
            <div className="space-y-6 text-base md:text-lg leading-relaxed">
              {intro.description.map((text, i) => (
                <p key={i}>{text}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Reason */}
      <section className="border-b border-black">
        <div className="py-20 md:py-28 border-b border-black">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-12">
              {reason.title}
            </h2>
            <div className="max-w-3xl space-y-6 text-base md:text-lg leading-relaxed">
              {reason.description.map((text, i) => (
                <p key={i} className={i === reason.description.length - 1 ? "font-medium" : ""}>
                  {text}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Two Parts Grid */}
        <div className="grid md:grid-cols-2">
          {/* Part A: Network */}
          <div className="p-8 md:p-12 lg:p-16 border-b md:border-b-0 md:border-r border-black">
            <p className="text-xs font-medium tracking-widest uppercase mb-4">
              {chapter === "global" ? "Structure" : "Part A"}
            </p>
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">
              {chapter === "global" ? "チャプター制" : "広域ネットワーク"}
            </h3>
            <div className="space-y-4 text-base leading-relaxed">
              {chapter === "global" ? (
                <>
                  <p>各大学に「チャプター」を設置し、ローカルな活動拠点を確保。</p>
                  <p>現在、大阪公立大学（OMU Chapter）を中心に活動中。</p>
                </>
              ) : (
                <>
                  <p>大阪大学や東京科学大学（旧東工大）などのエンジニア学生と接続しています。</p>
                  <p>普段会えないレベルの仲間と交流し、常に視座を高く保つための「窓」です。</p>
                </>
              )}
            </div>
          </div>

          {/* Part B: Base */}
          <div className="p-8 md:p-12 lg:p-16 bg-black text-white">
            <p className="text-xs font-medium tracking-widest uppercase mb-4">
              {chapter === "global" ? "Hub" : "Part B"}
            </p>
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">
              {chapter === "global" ? "Global Discord" : "OMUチャプター"}
            </h3>
            <div className="space-y-4 text-base leading-relaxed text-white/80">
              {chapter === "global" ? (
                <>
                  <p>すべてのメンバーが集まる一つのDiscordサーバー。</p>
                  <p>チャプター間の交流、全体イベント、知識の共有が行われます。</p>
                </>
              ) : (
                <>
                  <p>私たちのホームグラウンドです。</p>
                  <p>大学公認団体として、部室や予算を持ち、腰を据えて開発に取り組むための「基地」です。</p>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Partner */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-12">
            Partner
          </h2>

          <div className="max-w-2xl">
            <div className="border border-black p-8 md:p-10">
              <div className="flex items-start justify-between gap-6 mb-6">
                <h3 className="text-xl md:text-2xl font-bold tracking-tight">
                  Code.Gate?
                </h3>
                <a
                  href="#"
                  className="text-sm font-medium tracking-wide border border-black px-4 py-2 hover:bg-black hover:text-white transition-colors shrink-0"
                >
                  Website
                </a>
              </div>
              <p className="text-base leading-relaxed">
                プログラミングの基礎から始めたい方は、提携団体の Code.Gate?
                を推奨しています。
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
