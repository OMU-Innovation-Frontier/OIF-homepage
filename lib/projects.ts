export interface Project {
  slug: string;
  name: string;
  tagline: string;
  status: string;
  href?: string;
  image?: string;
  summary: string;
  challenge: string;
  approach: string[];
  tech: string[];
  outcome: string[];
}

// メンバー開発プロダクトの事例（課題 → アプローチ → 技術 → 成果）。
// ※ 技術スタック等は代表的な内容。実プロジェクトの詳細に合わせて更新してください。
export const projects: Project[] = [
  {
    slug: "noema",
    name: "NOEMA",
    tagline: "Pythonから深層学習まで、コードを動かしながら学ぶAI学習サービス",
    status: "公開中",
    href: "https://noema-learn.uk/",
    image: "/images/noema-screenshot.png",
    summary:
      "Pythonの基礎から機械学習・深層学習まで、コードを実行しながら学べる学習サービス。松尾研講座の予習・復習にも、読み物としても使える。",
    challenge:
      "AI学習は教材が分断されがちで、理論とコードの往復に手間がかかる。学び始めの人が「読む」と「動かす」を行き来できる環境が少なかった。",
    approach: [
      "コードを実行しながら読み進められる学習体験を設計",
      "基礎から深層学習まで段階的に積み上がる構成",
      "松尾研講座の予習・復習に対応した内容設計",
    ],
    tech: ["Next.js", "Webベースのコード実行", "学習コンテンツ設計"],
    outcome: [
      "Web上で誰でもアクセスできる学習サービスとして公開",
      "サークル内外の学習導線として活用",
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
