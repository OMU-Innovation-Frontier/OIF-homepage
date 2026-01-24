import { Metadata } from "next";
import Image from "next/image";
import { BookOpen, Code2, Users, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Activities",
  description: "OIFの活動内容 - 学ぶ、創る、繋がる",
};

const products = [
  {
    name: "samurAI",
    tagline: "ノーコードで学ぶ機械学習",
    description:
      "コードを書かずに機械学習の本質を体験できる学習アプリ。データの前処理からモデル構築、評価までの一連の流れをゲーム感覚で学べます。",
    features: [
      "ノーコードで機械学習のワークフローを体験",
      "データの可視化・前処理・特徴量エンジニアリング",
      "モデルの学習と評価を直感的に理解",
      "ゲーム性を重視した学習設計",
    ],
    images: [
      { src: "/images/samurai-screenshot.png", caption: "MLワークフロー" },
      { src: "/images/samurai-conquest.png", caption: "天下統一モード" },
      { src: "/images/samurai-algorithm.png", caption: "アルゴリズム学習" },
    ],
  },
];

const contests = [
  {
    name: "O-BUCs（オブックス）",
    fullName: "第4回 学生ビジネスプランコンテスト",
    organizer: "大阪信用金庫",
    result: "ファイナル進出",
    description:
      "大阪信用金庫主催の学生ビジネスプランコンテストにて、samurAIを発表しファイナルに進出。機械学習をノーコードで学べるプラットフォームとして評価されました。",
    image: "/images/obucs-contest.png",
  },
];

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

      {/* Products Section */}
      <section className="py-20 md:py-28 border-b border-black">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="mb-16">
            <p className="text-xs font-medium tracking-widest uppercase mb-4">
              Products
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              メンバーが開発したプロダクト
            </h2>
          </div>

          {products.map((product) => (
            <div
              key={product.name}
              className="border border-black"
            >
              {/* Product Header */}
              <div className="p-8 md:p-12 border-b border-black">
                <div className="mb-6">
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">
                    {product.name}
                  </h3>
                  <p className="text-sm font-medium text-black/60">
                    {product.tagline}
                  </p>
                </div>

                <p className="text-base leading-relaxed mb-8 max-w-2xl">
                  {product.description}
                </p>

                <ul className="grid sm:grid-cols-2 gap-3 max-w-2xl">
                  {product.features.map((feature, i) => (
                    <li key={i} className="text-sm flex items-start gap-3">
                      <span className="w-1 h-1 bg-black mt-2 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Product Screenshots Gallery */}
              <div className="grid md:grid-cols-3">
                {product.images.map((image, i) => (
                  <div
                    key={i}
                    className={`bg-black/5 p-4 md:p-6 ${
                      i < product.images.length - 1
                        ? "border-b md:border-b-0 md:border-r border-black"
                        : ""
                    }`}
                  >
                    <Image
                      src={image.src}
                      alt={`${product.name} - ${image.caption}`}
                      width={600}
                      height={400}
                      className="w-full h-auto border border-black/10 mb-3"
                    />
                    <p className="text-xs font-medium tracking-wide text-black/60 text-center">
                      {image.caption}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contest Section */}
      <section className="py-20 md:py-28 border-b border-black">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="mb-16">
            <p className="text-xs font-medium tracking-widest uppercase mb-4">
              Contest
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              コンテスト実績
            </h2>
          </div>

          {contests.map((contest) => (
            <div
              key={contest.name}
              className="border border-black"
            >
              <div className="grid md:grid-cols-2">
                {/* Contest Image */}
                <div className="border-b md:border-b-0 md:border-r border-black">
                  <Image
                    src={contest.image}
                    alt={contest.name}
                    width={800}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Contest Info */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="mb-6">
                    <span className="inline-block text-xs font-medium tracking-widest uppercase bg-black text-white px-3 py-1 mb-4">
                      {contest.result}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">
                      {contest.name}
                    </h3>
                    <p className="text-sm font-medium text-black/60">
                      {contest.fullName} / {contest.organizer}
                    </p>
                  </div>

                  <p className="text-base leading-relaxed">
                    {contest.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
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
            href="https://discord.gg/TfdmrXKNgD"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-black text-white px-10 py-5 text-sm font-medium tracking-widest uppercase border border-black hover:bg-white hover:text-black transition-colors duration-200"
          >
            Discordに参加
          </a>
        </div>
      </section>
    </div>
  );
}
