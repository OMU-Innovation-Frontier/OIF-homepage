import { Metadata } from "next";
import { BookOpen, Code2, Users } from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Activities",
  description: "OMU Innovation Frontier (OIF) の活動内容。AI勉強会、プロジェクト開発、イベント企画など、テクノロジーを探究する多様な活動を紹介します。",
  alternates: {
    canonical: "https://oif-ai.com/activities/",
  },
};

// `next/image` handles `basePath` automatically when the `src` starts with `/`
const products = [
  {
    name: "NOEMA",
    badge: "Member Product",
    tagline: "Pythonから深層学習まで、コードを動かしながら学ぶAI学習サービス",
    description:
      "Pythonの基礎から機械学習、深層学習など、AI技術についてコードを実行しながら学べるサービス。松尾研講座の予習/復習としても、読み物としてもご使用いただけます。",
    href: "https://noema-learn.uk/",
    image: `/images/noema-screenshot.png`,
    layout: "hero" as const,
  },
  {
    name: "samurAI",
    badge: undefined as string | undefined,
    tagline: "ノーコードで学ぶ機械学習",
    description:
      "コードを書かずに機械学習の本質を体験できる学習アプリ。データの前処理からモデル構築、評価までの一連の流れをゲーム感覚で学べます。",
    href: undefined as string | undefined,
    image: undefined as string | undefined,
    layout: "gallery" as const,
    features: [
      "ノーコードで機械学習のワークフローを体験",
      "データの可視化・前処理・特徴量エンジニアリング",
      "モデルの学習と評価を直感的に理解",
      "ゲーム性を重視した学習設計",
    ],
    images: [
      { src: `/images/samurai-screenshot.png`, caption: "MLワークフロー" },
      { src: `/images/samurai-conquest.png`, caption: "天下統一モード" },
      { src: `/images/samurai-algorithm.png`, caption: "アルゴリズム学習" },
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
    image: `/images/obucs-contest.png`,
  },
];

const activities = [
  {
    icon: BookOpen,
    title: "Study",
    titleJa: "学ぶ",
    description:
      "資格・講座・書籍・論文。そのときの興味やノリに合わせて、各自の方法でAIを深めています。",
    items: [],
  },
  {
    icon: Code2,
    title: "Develop",
    titleJa: "創る",
    description:
      "KaggleへのチャレンジやAIモデルの実装、アプリ開発まで。個人でもチームでも、手を動かす機会をつくります。",
    items: [
      "Kaggleなどのコンペ",
      "機械学習モデルの実装",
      "AIアプリ開発",
      "ハッカソン参加・主催",
    ],
  },
  {
    icon: Users,
    title: "Connect",
    titleJa: "繋がる",
    description:
      "インターンや共同開発を通じて学外とつながる。Discordでの日常的な情報交換も。",
    items: [
      "大阪公立大学発ITベンチャーでのインターン",
      "Discordでの日常的な情報交換",
      "チームでAI開発",
      "Kaggleチーム戦",
    ],
  },
];

const studyCategories = [
  {
    label: "資格",
    examples: ["E資格", "G検定", "DS検定など"],
  },
  {
    label: "講座",
    examples: ["東大松尾研 GCI", "DL基礎講座", "LLM講座など"],
  },
  {
    label: "書籍",
    examples: ["ベイズ推論による機械学習", "パターン認識と機械学習 (PRML)", "Kaggleではじめる大規模言語モデル入門など"],
  },
  {
    label: "その他",
    examples: ["論文読み会", "勉強会・解説会など"],
  },
];

const StudyIcon = activities[0].icon;
const DevelopIcon = activities[1].icon;
const ConnectIcon = activities[2].icon;

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

          {/* Row 1: Study — full width, 2カラム */}
          <div className="border-b border-black grid lg:grid-cols-2">
            {/* Left: アイコン + タイトル + 説明 */}
            <div className="p-8 md:p-12 lg:p-16 border-b lg:border-b-0 lg:border-r border-black">
              <StudyIcon size={32} strokeWidth={1.5} className="mb-10" />
              <div className="mb-6">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-2">
                  {activities[0].title}
                </h2>
                <p className="text-sm text-black/50 mt-1">{activities[0].titleJa}</p>
              </div>
              <p className="text-base md:text-lg leading-relaxed text-black/70">
                {activities[0].description}
              </p>
            </div>

            {/* Right: カテゴリ行リスト */}
            <div className="divide-y divide-black">
              {studyCategories.map((cat) => (
                <div key={cat.label} className="flex items-baseline gap-4 px-6 md:px-10 lg:px-12 py-5 md:py-6">
                  <span className="text-xs font-bold tracking-widest uppercase text-black/40 shrink-0 w-10">
                    {cat.label}
                  </span>
                  <span className="text-sm md:text-base leading-relaxed text-black/80">
                    {cat.examples.join("、")}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Develop + Connect — 均等2カラム */}
          <div className="grid lg:grid-cols-2">
            {/* Develop */}
            <div className="p-8 md:p-12 lg:p-16 border-b lg:border-b-0 lg:border-r border-black">
              <DevelopIcon size={32} strokeWidth={1.5} className="mb-10" />
              <div className="mb-6">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-2">
                  {activities[1].title}
                </h2>
                <p className="text-sm text-black/50 mt-1">{activities[1].titleJa}</p>
              </div>
              <p className="text-base md:text-lg leading-relaxed text-black/70 mb-10">
                {activities[1].description}
              </p>
              <ul className="space-y-3">
                {activities[1].items.map((item, i) => (
                  <li key={i} className="text-sm md:text-base flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-black mt-1.5 shrink-0 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect — 黒背景 */}
            <div className="bg-black text-white p-8 md:p-12 lg:p-16">
              <ConnectIcon size={32} strokeWidth={1.5} className="mb-10 text-white" />
              <div className="mb-6">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-2">
                  {activities[2].title}
                </h2>
                <p className="text-sm text-white/40 mt-1">{activities[2].titleJa}</p>
              </div>
              <p className="text-base md:text-lg leading-relaxed text-white/60 mb-10">
                {activities[2].description}
              </p>
              <ul className="space-y-3">
                {activities[2].items.map((item, i) => (
                  <li key={i} className="text-sm md:text-base flex items-start gap-3 text-white/90">
                    <span className="w-1.5 h-1.5 bg-white mt-1.5 shrink-0 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
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
              {product.layout === "hero" ? (
                /* O-BUCs style: left image, right info */
                <div className="grid md:grid-cols-2">
                  {/* Image */}
                  <div className="border-b md:border-b-0 md:border-r border-black bg-[#141e2e] flex items-center justify-center min-h-[280px] md:min-h-[360px] p-4 md:p-6">
                    <Image
                      src={product.image!}
                      alt={product.name}
                      width={800}
                      height={500}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  {/* Info */}
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <div className="mb-6">
                      {product.badge && (
                        <span className="inline-block text-xs font-medium tracking-widest uppercase bg-black text-white px-3 py-1 mb-4">
                          {product.badge}
                        </span>
                      )}
                      <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">
                        {product.name}
                      </h3>
                      <p className="text-sm font-medium text-black/60">
                        {product.tagline}
                      </p>
                    </div>
                    <p className="text-base leading-relaxed mb-8">
                      {product.description}
                    </p>
                    {product.href && (
                      <a
                        href={product.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-black text-white px-6 py-3 text-sm font-medium tracking-widest uppercase border border-black hover:bg-white hover:text-black transition-colors duration-200 self-start"
                      >
                        サービスを見る →
                      </a>
                    )}
                  </div>
                </div>
              ) : (
                /* Gallery style: header + multi-image grid */
                <>
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
                      {product.features?.map((feature, i) => (
                        <li key={i} className="text-sm flex items-start gap-3">
                          <span className="w-1 h-1 bg-black mt-2 shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`grid ${!product.images || product.images.length <= 1 ? "" : product.images.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3"}`}>
                    {product.images?.map((image, i) => (
                      <div
                        key={i}
                        className={`bg-black/5 p-4 md:p-6 ${product.images && i < product.images.length - 1 ? "border-b md:border-b-0 md:border-r border-black" : ""}`}
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
                </>
              )}
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
                    height={600}
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
