import { Metadata } from "next";
import { BookOpen, Code2, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Activities",
  description: "OIFの活動内容 - 学ぶ、創る、繋がる",
};

const activities = [
  {
    icon: BookOpen,
    title: "Study",
    titleJa: "学ぶ",
    description:
      "技術書の輪読会や、論文の解説会。情報科学の基礎や数理を深く学びます。",
    items: [
      "技術書の輪読会",
      "最新論文の解説会",
      "アルゴリズム勉強会",
      "数学・統計の基礎学習",
    ],
  },
  {
    icon: Code2,
    title: "Develop",
    titleJa: "創る",
    description:
      "WebアプリやAIモデルの実装。個人開発やチームでのハッカソン参加を支援します。",
    items: [
      "Webアプリケーション開発",
      "機械学習モデルの実装",
      "ハッカソン参加・主催",
      "学内向けツール開発",
    ],
  },
  {
    icon: Users,
    title: "Connect",
    titleJa: "繋がる",
    description:
      "Discordでの情報交換や、LT会（ライトニングトーク）を通じた知見の共有。",
    items: [
      "Discordでの日常的な交流",
      "月例LT会の開催",
      "開発合宿の実施",
      "他大学との合同イベント",
    ],
  },
];

export default function ActivitiesPage() {
  return (
    <div className="min-h-screen">
      {/* Title Section */}
      <section className="py-24 md:py-32 lg:py-40 border-b border-black">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter">
            Activities
          </h1>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="border-b border-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3">
            {activities.map((activity, index) => (
              <div
                key={activity.title}
                className={`p-8 md:p-10 lg:p-12 ${
                  index < activities.length - 1
                    ? "border-b md:border-b-0 md:border-r border-black"
                    : ""
                }`}
              >
                {/* Icon */}
                <activity.icon size={28} strokeWidth={1.5} className="mb-8" />

                {/* Title */}
                <div className="mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">
                    {activity.title}
                  </h2>
                  <p className="text-sm text-black">{activity.titleJa}</p>
                </div>

                {/* Description */}
                <p className="text-base leading-relaxed mb-8">
                  {activity.description}
                </p>

                {/* Items List */}
                <ul className="space-y-3">
                  {activity.items.map((item, i) => (
                    <li key={i} className="text-sm flex items-start gap-3">
                      <span className="w-1 h-1 bg-black mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 text-center">
          <p className="text-base md:text-lg mb-10 max-w-xl mx-auto">
            興味のある活動から自由に参加できます。
            <br />
            まずはDiscordに参加してみてください。
          </p>
          <a
            href="#"
            className="inline-block bg-black text-white px-10 py-5 text-sm font-medium tracking-widest uppercase border border-black hover:bg-white hover:text-black transition-colors duration-200"
          >
            Discordに参加
          </a>
        </div>
      </section>
    </div>
  );
}
