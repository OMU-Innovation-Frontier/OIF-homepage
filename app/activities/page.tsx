import { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Code2, ExternalLink, Users } from "lucide-react";
import Image from "next/image";
import SectionDivider from "@/components/site/SectionDivider";
import DiscordCTA from "@/components/ui/DiscordCTA";
import HeroBackground from "@/components/site/HeroBackground";
import Reveal from "@/components/ui/Reveal";
import Tilt from "@/components/ui/Tilt";
import { getAllProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Activities | OIF 大阪公立大学のAIサークルの活動",
  description: "OIF（OMU Innovation Frontier）の活動内容。大阪公立大学のAIサークルとして、AI勉強会・機械学習・深層学習の実装・プログラミングコンテストへの参加など、多様な活動を行っています。",
  alternates: {
    canonical: "https://oif-ai.com/activities/",
  },
};

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
    imageWidth: 481,
    imageHeight: 399,
  },
  {
    date: "2026/3/18",
    title: "Vibe Codingワークショップ",
    category: "Workshop",
    description:
      "「環境構築不要。Vibe Codingで学ぶ次世代エンジニアリング」をテーマに、大阪公立大学スマートエネルギー棟でハイブリッド開催（計8名参加）。最新のAI開発手法を解説したのち、約50分でひとり一人が自分のアイデアをもとにオリジナルのアプリやホームページを制作しました。",
    materialLabel: "活動レポートを見る",
    materialHref:
      "https://www.omu.ac.jp/i-academy/info/activity/entry-105828.html",
    image: `/images/vibe-coding-workshop.png`,
    imageAlt: "Vibe Codingワークショップの様子（スマートエネルギー棟での開催）",
    imageWidth: 723,
    imageHeight: 484,
  },
  {
    date: "2025/12/25",
    title: "第1回ワークショップ",
    category: "Workshop",
    description:
      "記念すべき第1回のワークショップを開催。参加者一人ひとりがAIを駆使して、アプリの発案から実装、発表用スライドの作成までを行い、完成したアプリを発表しました。AIツール（Google Antigravity・Gemini）を実際に使い、その実用性と可能性を確かめ合いました。",
    materialLabel: undefined as string | undefined,
    materialHref: undefined as string | undefined,
    image: `/images/first-workshop.png`,
    imageAlt: "第1回ワークショップの様子（成果アプリの発表）",
    imageWidth: 894,
    imageHeight: 751,
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
  const projects = getAllProjects();

  return (
    <div className="bg-paper text-ink -mt-14 md:-mt-16 pt-14 md:pt-16">
      {/* HERO */}
      <section className="relative overflow-hidden min-h-[70svh] flex items-center border-b border-ink/10">
        <HeroBackground accent="accent" />
        <div aria-hidden className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-night to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-24 w-full animate-fade-up">
          <p className="font-mono text-xs md:text-sm tracking-[0.3em] text-accent-bright mb-6">
            ACTIVITIES
          </p>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8">
            Activities
          </h1>
          <p className="text-lg md:text-xl text-ink/65 max-w-2xl leading-relaxed">
            学ぶ、つくる、外に出る。勉強会・ハンズオン・プロダクト・コンテスト——
            手を動かしてきた記録。
          </p>
        </div>
      </section>

      {/* Activities Grid */}
      <section>
        <Reveal className="max-w-7xl mx-auto">

          {/* Row 1: Study - full width, 2カラム */}
          <div className="border-b border-ink/12 grid lg:grid-cols-2">
            {/* Left: アイコン + タイトル + 説明 */}
            <div className="p-8 md:p-12 lg:p-16 border-b lg:border-b-0 lg:border-r border-ink/12">
              <StudyIcon size={32} strokeWidth={1.5} className="mb-10" />
              <div className="mb-6">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-2">
                  {activitiesData[0].title}
                </h2>
                <p className="text-sm text-ink/60 mt-1">{activitiesData[0].titleJa}</p>
              </div>
              <p className="text-base md:text-lg leading-relaxed text-ink/70">
                {activitiesData[0].description}
              </p>
            </div>

            {/* Right: カテゴリ行リスト */}
            <div className="divide-y divide-ink/12">
              {studyCategories.map((cat) => (
                <div key={cat.label} className="flex items-baseline gap-4 px-6 md:px-10 lg:px-12 py-5 md:py-6">
                  <span className="text-xs font-bold tracking-widest uppercase text-ink/60 shrink-0 w-10">
                    {cat.label}
                  </span>
                  <span className="text-sm md:text-base leading-relaxed text-ink/80">
                    {cat.examples.join("、")}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Develop + Connect - 左右2カラム */}
          <div className="grid lg:grid-cols-2">
            {/* Develop */}
            <div className="p-8 md:p-12 lg:p-16 border-b lg:border-b-0 lg:border-r border-ink/12">
              <DevelopIcon size={32} strokeWidth={1.5} className="mb-10" />
              <div className="mb-6">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-2">
                  {activitiesData[1].title}
                </h2>
                <p className="text-sm text-ink/60 mt-1">{activitiesData[1].titleJa}</p>
              </div>
              <p className="text-base md:text-lg leading-relaxed text-ink/70 mb-10">
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
                <p className="text-sm text-ink/60 mt-1">{activitiesData[2].titleJa}</p>
              </div>
              <p className="text-base md:text-lg leading-relaxed text-ink/70 mb-10">
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

        </Reveal>
      </section>

      <SectionDivider />

      {/* Featured Sessions Section */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <Reveal className="mb-16">
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-accent-bright mb-4">
              Sessions
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              勉強会・ハンズオン
            </h2>
          </Reveal>

          <div className="border border-ink/12">
            {featuredSessions.map((session) => (
              <div key={`${session.date}-${session.title}`} className="grid md:grid-cols-[220px_1fr]">
                <div className="border-b md:border-b-0 md:border-r border-ink/12 p-8 md:p-10">
                  <p className="text-xs font-medium tracking-widest uppercase text-ink/60 mb-3">
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
                    <p className="text-base leading-relaxed text-ink/75 mb-6 max-w-2xl">
                      {session.description}
                    </p>
                    {session.materialHref && (
                      <a
                        href={session.materialHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium tracking-wide underline underline-offset-4 hover:text-ink/60 transition-colors duration-200 self-start"
                      >
                        {session.materialLabel}
                        <ExternalLink size={16} strokeWidth={1.75} />
                      </a>
                    )}
                  </div>

                  {session.image && (
                    <div className="border-t lg:border-t-0 lg:border-l border-ink/12 bg-ink/[0.05] flex items-center justify-center p-4 md:p-6">
                      <Image
                        src={session.image}
                        alt={session.imageAlt ?? session.title}
                        width={session.imageWidth ?? 481}
                        height={session.imageHeight ?? 399}
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
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-accent-bright mb-4">
              Products
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              メンバー開発プロダクト
            </h2>
            <p className="mt-4 text-base text-ink/60 max-w-2xl leading-relaxed">
              「面白そう」で終わらせず、実際に動くものへ。課題から成果まで、メンバーが開発したプロダクトの事例を紹介します。
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {projects.map((p, i) => (
              <Reveal key={p.slug} delay={i * 100}>
                <Tilt max={4}>
                  <Link
                    href={`/projects/${p.slug}/`}
                    className="group flex flex-col h-full border border-ink/10 bg-night-2 hover:bg-night-3 hover:border-accent-bright/40 transition-colors"
                  >
                    {p.image && (
                      <div className="bg-[#141e2e] border-b border-ink/10 p-6 flex items-center justify-center min-h-[220px]">
                        <Image
                          src={p.image}
                          alt={p.name}
                          width={640}
                          height={400}
                          className="w-full h-auto object-contain max-h-56"
                        />
                      </div>
                    )}
                    <div className="p-8 md:p-10 flex flex-col flex-1">
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-mono text-[11px] tracking-widest text-accent-bright">
                          {p.status}
                        </span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-black tracking-tighter mb-3 group-hover:text-accent-bright transition-colors">
                        {p.name}
                      </h3>
                      <p className="text-sm md:text-base text-ink/60 leading-relaxed mb-6 flex-1">
                        {p.tagline}
                      </p>
                      <span className="inline-flex items-center gap-2 text-sm font-bold tracking-widest uppercase">
                        事例を見る
                        <span className="transition-transform duration-200 group-hover:translate-x-1.5">→</span>
                      </span>
                    </div>
                  </Link>
                </Tilt>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Contest Section */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="mb-16">
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-accent-bright mb-4">
              Contest
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              コンテスト実績
            </h2>
          </div>

          {contests.map((contest) => (
            <div
              key={contest.name}
              className="border border-ink/12"
            >
              <div className="grid md:grid-cols-2">
                <div className="border-b md:border-b-0 md:border-r border-ink/12">
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
                    <p className="text-sm font-medium text-ink/60">
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
          <div className="flex justify-center">
            <DiscordCTA location="activities_cta" />
          </div>
        </div>
      </section>
    </div>
  );
}
