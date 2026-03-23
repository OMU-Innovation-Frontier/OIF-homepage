import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "OMU Innovation Frontier (OIF) について。大阪公立大学のAI・IT学習コミュニティのビジョン、活動内容、組織概要を紹介します。",
  alternates: {
    canonical: "https://oif-ai.com/about/",
  },
};

const pillars = [
  {
    title: "Learning",
    description: "AIやプログラミング、最新技術について学びます。",
    examples: ["AI入門", "機械学習", "LLM（大規模言語モデル）", "技術勉強会"]
  },
  {
    title: "Building",
    description: "学んだ知識をもとに、実際にプロジェクトを作ります。",
    examples: ["AIアプリケーション", "AIツール", "個人・チーム開発"]
  },
  {
    title: "Exploration",
    description: "最新のAI技術や社会への影響について探究します。",
    examples: ["AIニュース共有", "技術ディスカッション", "研究テーマの探究"]
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 md:py-32 lg:py-40 border-b border-black">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <p className="text-sm font-bold tracking-[0.3em] uppercase opacity-40 mb-6">About the Community</p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter leading-[0.9]">
            OIF について
          </h1>
        </div>
      </section>

      {/* Section 1: Introduction */}
      <section className="py-20 md:py-32 border-b border-black bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-black mb-12 tracking-tight">
              OIF は、<br />
              AI・テクノロジー・イノベーションに関心のある学生が集まり、<br />
              学び・実験し・創造するコミュニティです。
            </h2>
          </div>
        </div>
      </section>

      {/* Section 2: Pillars */}
      <section className="border-b border-black">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-32">
          <h2 className="text-3xl md:text-4xl font-black mb-20 tracking-tighter uppercase">私たちは次の3つを軸に活動しています。</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 border border-black">
            {pillars.map((pillar, i) => (
              <div key={i} className={`p-10 ${i !== pillars.length - 1 ? "border-b md:border-b-0 md:border-r" : ""} border-black`}>
                <h3 className="text-2xl font-black mb-6 tracking-tight flex items-center gap-4">
                  <span className="text-xs opacity-40">0{i + 1}</span>
                  {pillar.title}
                </h3>
                <p className="text-lg font-medium mb-8 leading-relaxed">
                  {pillar.description}
                </p>
                <div className="pt-6 border-t border-black/10">
                  <p className="text-xs font-bold uppercase tracking-widest opacity-40 mb-4">Examples</p>
                  <ul className="space-y-2">
                    {pillar.examples.map((ex, j) => (
                      <li key={j} className="text-sm font-medium flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-black rounded-full" />
                        {ex}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Conclusion */}
      <section className="py-24 md:py-40 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-12 leading-tight tracking-tighter">
            OIF は、<br />
            AIやテクノロジーの可能性を探りながら、<br />
            学生同士が学び合い成長する場を目指しています。
          </h2>
        </div>
      </section>
    </div>
  );
}
