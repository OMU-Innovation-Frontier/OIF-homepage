export interface Project {
  slug: string;
  name: string;
  tagline: string;
  status: string;
  href?: string;
  image?: string;
  images?: string[];
  summary: string;
  challenge: string;
  approach: string[];
  tech?: string[];
  outcome: string[];
}

// メンバー開発プロダクトの事例（課題 → アプローチ → 技術 → 成果）。
// ※ 技術スタック等は代表的な内容。実プロジェクトの詳細に合わせて更新してください。
export const projects: Project[] = [
  {
    slug: "study-materials",
    name: "Strategic Study Tracker",
    tagline: "クラウド同期・手書き・AI支援を統合したスマート学習プラットフォーム",
    status: "公開中",
    href: "https://strategic-study-tracker.vercel.app/",
    image: "/images/study-materials.png",
    summary:
      "教材（PDF、講義動画、Webドキュメント等）を一元管理し、進捗や手書きアノテーションをクラウドでリアルタイムに同期。さらにGemini APIを搭載したAI Copilotにより、翻訳・学術的なQ&Aまでをシームレスに行える次世代の学習管理プラットフォーム。",
    challenge:
      "PDF教科書、講義動画、ノートアプリ、AI質問ツールなど、学習に必要なツールや教材が分断されているため、デバイス間（PCとiPadなど）の往復や、学習進捗の同期、アノテーションの共有に多大な摩擦が生じ、学習効率が低下していた。",
    approach: [
      "PDFビューア、動画プレイヤー、Webブックマークを『Field』と『Material』の階層構造で一元管理するダッシュボードを設計",
      "iPadでの手書き入力とPCでの閲覧・編集を可能にするため、アノテーションの座標データを0〜1のスケールに正規化してリアルタイムにクラウド（Supabase）と同期",
    ],
    outcome: [
      "PCとiPadの垣根を越えたシームレスな学習体験・アノテーション同期を実現",
      "AIとの対話から理論の視覚的理解へのスムーズな接続により、高度な数理・情報科学の学習効率を大幅に向上",
    ],
  },
  {
    slug: "noema",
    name: "Noema",
    tagline: "AIでできることと、その仕組みを、具体例から解説する技術メディア",
    status: "公開中",
    href: "https://noema-learn.uk/",
    image: "/images/noema-screenshot.png",
    summary:
      "コーディングエージェントやニューラルネットワークなど、AIでできることとその仕組みを、初めての人にもわかる具体例から解説する技術メディア。記事はテーマごとのシリーズにまとまっていて、順番にたどりながら学べる。",
    challenge:
      "AIの情報は量が多く、初めての人はどこから読めばよいか分からない。使い方の記事と仕組みの記事も別々の場所にあり、「使ってみる」から「仕組みを知る」へ進む道筋が見えにくかった。",
    approach: [
      "記事をテーマごとのシリーズにまとめ、順番に読めば理解が積み上がる構成にした",
      "複数人で記事を書き、レビューしてから公開できる執筆用の管理画面（Studio）を用意した",
      "表示中の記事の内容をもとに質問できる記事アシスタントを付けた",
    ],
    tech: ["Astro", "React / Vite", "Cloudflare Workers / D1", "デジタル庁デザインシステム準拠のUI"],
    outcome: [
      "「ニューラルネットワークの構造」「はじめよう、AI駆動開発」などのシリーズを公開",
      "OIFメンバーが学ぶときの読み物として活用",
    ],
  },
  {
    slug: "samurai",
    name: "samurAI",
    tagline: "ノーコードで学ぶ機械学習",
    status: "開発・運用中",
    image: "/images/samurai-screenshot.png",
    summary:
      "コードを書かずに機械学習の本質を体験できる学習アプリ。データの前処理からモデル構築・評価までをゲーム感覚で学べる。",
    challenge:
      "機械学習は最初の「コードの壁」が高く、ワークフロー全体像をつかむ前に挫折しやすい。",
    approach: [
      "ノーコードで前処理〜モデル構築〜評価の一連を体験",
      "データの可視化・特徴量エンジニアリングを直感的に",
      "ゲーム性を取り入れて継続しやすく設計",
    ],
    tech: ["可視化UI", "ノーコードMLパイプライン", "ゲーム的学習設計"],
    outcome: [
      "大阪信用金庫主催 O-BUCs（学生ビジネスプランコンテスト）でファイナル進出",
      "ノーコードML学習プラットフォームとして評価",
    ],
  },
];

export function getAllProjects(): Project[] {
  return projects;
}

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
