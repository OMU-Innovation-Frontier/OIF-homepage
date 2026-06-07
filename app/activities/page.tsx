import { Metadata } from "next";
import { BookOpen, Code2, ExternalLink, Users } from "lucide-react";
import Image from "next/image";
import SectionDivider from "@/components/site/SectionDivider";

export const metadata: Metadata = {
  title: "Activities | OIF 大阪公立大学のAIサークルの活動",
  description: "OIF（OMU Innovation Frontier）の活動内容。大阪公立大学のAIサークルとして、AI勉強会・機械学習・深層学習の実装・プログラミングコンテストへの参加など、多様な活動を行っています。",
  alternates: {
    canonical: "https://oif-ai.com/activities/",
  },
};

const products = [
  {
    name: "NOEMA",
    badge: "Member Product",
    tagline: "Pythonから深層学習まで、コードを動かしながら学ぶAI学習サービス",
    description:
      "Pythonの基礎から機械学習、深層学習など、AI技術についてコードを実行しながら学べるサービス。松尾研講座の予習・復習としても、読み物としてもご使用いただけます。",
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
    fullName: "第4回学生ビジネスプランコンテスト",
    organizer: "大阪信用金庫",
    result: "ファイナル進出",
    description:
      "大阪信用金庫主催の学生ビジネスプランコンテストにて、samurAIを発表しファイナルに進出。機械学習をノーコードで学べるプラットフォームとして評価されました。",
    image: `/images/obucs-contest.png`,
  },
];

const featuredSessions = [
  {
    date: "2026/5/22",
    title: "ローカルLLMハンズオン",
    category: "Hands-on",
    description:
      "ローカル環境でLLMを動かすための導入ハンズオンを実施。セットアップの流れを追いながら、実際に手元でモデルを動かして試しました。",
    materialLabel: "公開資料（PDF）",
    materialHref:
      "https://drive.google.com/file/d/1E6FYe200ioRtAAPW8TDyS8e2XkS2g-qu/view?usp=sharing",
    image: `/images/llm-handson.png`,
    imageAlt: "ローカルLLMハンズオンの様子（参加メンバーの集合写真）",
  },
];

const activitiesData = [
  {
    icon: BookOpen,
    title: "Study",
    titleJa: "学ぶ",
    description:
      "資格・講座・書籍・論文。そのときの興味やキャリアに合わせて、各自の方法でAIを深めています。",
    items: [],
  },
  {
    icon: Code2,
    title: "Develop",
    titleJa: "創る",
    description:
      "KaggleへのチャレンジやAIモデルの実装、アプリ開発まで。個人でもチームでも、手を動かす機会をつくります。",
    items: [
      "Kaggleなどのコンテスト",
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
    examples: ["東大松尾研JGCI", "DL基礎講座", "LLM講座など"],
  },
  {
    label: "書籍",
    examples: ["ベイズ推論による機械学習", "パターン認識と機械学習(PRML)", "Kaggleではじめる大規模言語モデル入門など"],
  },
  {
    label: "その他",
    examples: ["論文読み企画", "勉強会・解説会など"],
  },
];

const StudyIcon = activitiesData[0].icon;
const DevelopIcon = activitiesData[1].icon;
const ConnectIcon = activitiesData[2].icon;

export default function ActivitiesPage() {
  return (
    <div className="min-h-screen">
      {/* Title Section */}
      <section className="py-24 md:py-32 lg:py-40">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <p className="text-sm font-bold tracking-[0.3em] uppercase text-accent-bright mb-6">
            What we do
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter">
            Activities
          </h1>
        </div>
      </section>

      <SectionDivider />

      {/* Activities Grid */}
      <section>
        <div className="max-w-7xl mx-auto">

          {/* Row 1: Study - full width, 2カラム */}
          <div className="border-b border-white/12 grid lg:grid-cols-2">
            {/* Left: アイコン + タイトル + 説明 */}
            <div className="p-8 md:p-12 lg:p-16 border-b lg:border-b-0 lg:border-r border-white/12">
              <StudyIcon size={32} strokeWidth={1.5} className="mb-10" />
              <div className="mb-6">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-2">
                  {activitiesData[0].title}
                </h2>
                <p className="text-sm text-white/60 mt-1">{activitiesData[0].titleJa}</p>
              </div>
              <p className="text-base md:text-lg leading-relaxed text-white/70">
                {activitiesData[0].description}
              </p>
            </div>

            {/* Right: カテゴリ行リスト */}
            <div className="divide-y divide-white/12">
              {studyCategories.map((cat) => (
                <div key={cat.label} className="flex items-baseline gap-4 px-6 md:px-10 lg:px-12 py-5 md:py-6">
                  <span className="text-xs font-bold tracking-widest uppercase text-white/60 shrink-0 w-10">
                    {cat.label}
                  </span>
                  <span className="text-sm md:text-base leading-relaxed text-white/80">
                    {cat.examples.join("、")}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Develop + Connect - 左右2カラム */}
          <div className="grid lg:grid-cols-2">
            {/* Develop */}
            <div className="p-8 md:p-12 lg:p-16 border-b lg:border-b-0 lg:border-r border-white/12">
              <DevelopIcon size={32} strokeWidth={1.5} className="mb-10" />
              <div className="mb-6">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-2">
                  {activitiesData[1].title}
                </h2>
                <p className="text-sm text-white/60 mt-1">{activitiesData[1].titleJa}</p>
              </div>
              <p className="text-base md:text-lg leading-relaxed text-white/70 mb-10">
                {activitiesData[1].description}
              </p>
              <ul className="space-y-3">
                {activitiesData[1].items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm md:text-base">
                    <span className="w-1 h-1 bg-accent rounded-full shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div className="p-8 md:p-12 lg:p-16">
              <ConnectIcon size={32} strokeWidth={1.5} className="mb-10" />
              <div className="mb-6">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-2">
                  {activitiesData[2].title}
                </h2>
                <p className="text-sm text-white/60 mt-1">{activitiesData[2].titleJa}</p>
              </div>
              <p className="text-base md:text-lg leading-relaxed text-white/70 mb-10">
                {activitiesData[2].description}
              </p>
              <ul className="space-y-3">
                {activitiesData[2].items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm md:text-base">
                    <span className="w-1 h-1 bg-accent rounded-full shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </section>

      <SectionDivider />

      {/* Featured Sessions Section */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="mb-16">
            <p className="text-xs font-bold tracking-widest uppercase text-accent-bright mb-4">
              Sessions
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              勉強会・ハンズオン
            </h2>
          </div>

          <div className="border border-white/12">
            {featuredSessions.map((session) => (
              <div key={`${session.date}-${session.title}`} className="grid md:grid-cols-[220px_1fr]">
                <div className="border-b md:border-b-0 md:border-r border-white/12 p-8 md:p-10">
                  <p className="text-xs font-medium tracking-widest uppercase text-white/60 mb-3">
                    {session.category}
                  </p>
                  <p className="text-2xl md:text-3xl font-bold tracking-tight">
                    {session.date}
                  </p>
                </div>

                <div className="grid lg:grid-cols-[1fr_minmax(0,360px)]">
                  <div className="p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
                      {session.title}
                    </h3>
                    <p className="text-base leading-relaxed text-white/75 mb-6 max-w-2xl">
                      {session.description}
                    </p>
                    <a
                      href={session.materialHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium tracking-wide underline underline-offset-4 hover:text-white/60 transition-colors duration-200 self-start"
                    >
                      {session.materialLabel}
                      <ExternalLink size={16} strokeWidth={1.75} />
                    </a>
                  </div>

                  {session.image && (
                    <div className="border-t lg:border-t-0 lg:border-l border-white/12 bg-white/[0.05] flex items-center justify-center p-4 md:p-6">
                      <Image
                        src={session.image}
                        alt={session.imageAlt ?? session.title}
                        width={481}
                        height={399}
                        className="w-full h-auto max-w-md object-contain"
                      />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Products Section */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="mb-16">
            <p className="text-xs font-bold tracking-widest uppercase text-accent-bright mb-4">
              Products
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              メンバー開発プロダクト
            </h2>
          </div>

          {products.map((product) => (
            <div
              key={product.name}
              className="border border-white/12"
            >
              {product.layout === "hero" ? (
                <div className="grid md:grid-cols-2">
                  <div className="border-b md:border-b-0 md:border-r border-white/12 bg-[#141e2e] flex items-center justify-center min-h-[280px] md:min-h-[360px] p-4 md:p-6">
                    <Image
                      src={product.image!}
                      alt={product.name}
                      width={800}
                      height={500}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <div className="mb-6">
                      {product.badge && (
                        <span className="inline-block text-xs font-medium tracking-widest uppercase bg-accent text-white px-3 py-1 mb-4">
                          {product.badge}
                        </span>
                      )}
                      <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">
                        {product.name}
                      </h3>
                      <p className="text-sm font-medium text-white/60">
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
                        className="inline-block bg-accent text-white px-6 py-3 text-sm font-medium tracking-widest uppercase border border-accent hover:bg-accent-bright hover:text-night transition-colors duration-200 self-start"
                      >
                        サービスを見る →
                      </a>
                    )}
                  </div>
                </div>
              ) : (
                <>
                  <div className="p-8 md:p-12 border-b border-white/12">
                    <div className="mb-6">
                      <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">
                        {product.name}
                      </h3>
                      <p className="text-sm font-medium text-white/60">
                        {product.tagline}
                      </p>
                    </div>
                    <p className="text-base leading-relaxed mb-8 max-w-2xl">
                      {product.description}
                    </p>
                    <ul className="grid sm:grid-cols-2 gap-3 max-w-2xl">
                      {product.features?.map((feature, i) => (
                        <li key={i} className="text-sm flex items-start gap-3">
                          <span className="w-1 h-1 bg-accent mt-2 shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`grid ${!product.images || product.images.length <= 1 ? "" : product.images.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3"}`}>
                    {product.images?.map((image, i) => (
                      <div
                        key={i}
                        className={`bg-white/5 p-4 md:p-6 ${product.images && i < product.images.length - 1 ? "border-b md:border-b-0 md:border-r border-white/12" : ""}`}
                      >
                        <Image
                          src={image.src}
                          alt={`${product.name} - ${image.caption}`}
                          width={600}
                          height={400}
                          className="w-full h-auto border border-white/10 mb-3"
                        />
                        <p className="text-xs font-medium tracking-wide text-white/60 text-center">
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

      <SectionDivider />

      {/* Contest Section */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="mb-16">
            <p className="text-xs font-bold tracking-widest uppercase text-accent-bright mb-4">
              Contest
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              コンテスト実績
            </h2>
          </div>

          {contests.map((contest) => (
            <div
              key={contest.name}
              className="border border-white/12"
            >
              <div className="grid md:grid-cols-2">
                <div className="border-b md:border-b-0 md:border-r border-white/12">
                  <Image
                    src={contest.image}
                    alt={contest.name}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="mb-6">
                    <span className="inline-block text-xs font-medium tracking-widest uppercase bg-accent text-white px-3 py-1 mb-4">
                      {contest.result}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">
                      {contest.name}
                    </h3>
                    <p className="text-sm font-medium text-white/60">
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

      <SectionDivider />

      {/* CTA Section */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 text-center">
          <p className="text-base md:text-lg mb-10 max-w-xl mx-auto">
            どんな活動にも気軽に参加できます。<br />
            まずはDiscordに参加してみて。
          </p>
          <a
            href="https://discord.gg/Brg6GxJnBW"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-accent text-white px-10 py-5 text-sm font-medium tracking-widest uppercase border border-accent hover:bg-accent-bright hover:text-night transition-colors duration-200"
          >
            Discordに参加
          </a>
        </div>
      </section>
    </div>
  );
}
