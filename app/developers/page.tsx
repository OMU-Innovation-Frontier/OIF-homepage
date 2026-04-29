import { Metadata } from "next";
import { Code2, Sparkles, Wrench } from "lucide-react";
import SectionDivider from "@/components/site/SectionDivider";

export const metadata: Metadata = {
  title: "Developers | OIF開発部門",
  description:
    "OIF開発部門は、最新技術を試し、実際に開発し、形にする部門です。AIツール、LLM、Web開発、ワークフロー自動化などを通じて、使えるものを作っていきます。",
  alternates: {
    canonical: "https://oif-ai.com/developers/",
  },
};

const pillars = [
  {
    icon: Sparkles,
    title: "最新技術を試す",
    body: "新しいAIツールやLLM関連の動きは、まずXなどで早く仕入れます。話題として追うだけで終わらせず、実際に触って、何が使えるのかを自分たちで確かめます。",
  },
  {
    icon: Code2,
    title: "実際に作る",
    body: "Webアプリ、補助ツール、小さな実験プロダクトまで、気になった技術をそのまま実装へ落とし込みます。生成AIを使うことも前提にして、速く形にすることを重視します。",
  },
  {
    icon: Wrench,
    title: "使える形に整える",
    body: "プログラミング能力だけを価値の中心には置きません。生成AI、設計、デザイン、実装、改善を組み合わせて、試作を実際に使える形へ寄せていきます。",
  },
];

const themes = [
  "AIを使ったWebアプリやLLMプロダクトの試作",
  "LLMやAPIを組み合わせたワークフロー構築",
  "生成AIを使った開発・実装・検証の改善",
  "UI/UXやビジュアル面を含むAI関連プロダクト設計",
];

const flow = [
  { step: "01", title: "Pick", body: "気になる技術やテーマを選ぶ" },
  { step: "02", title: "Test", body: "まずは小さく触って検証する" },
  { step: "03", title: "Build", body: "必要なら実装して形にする" },
  { step: "04", title: "Refine", body: "使えるところまで整える" },
];

export default function DevelopersPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-24 md:py-32 lg:py-40">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div>
              <p className="mb-6 text-sm font-bold uppercase tracking-[0.3em] text-blue-600/70">
                OIF Development Division
              </p>
              <h1 className="text-5xl font-black leading-[0.9] tracking-tighter md:text-6xl lg:text-7xl xl:text-8xl">
                OIF開発部門
              </h1>
              <p className="mt-10 max-w-2xl text-lg leading-relaxed text-black/72 md:text-xl">
                理論を理解するだけで終わらせず、最新技術を実際に試し、
                実装し、使える形にしていく部門です。
              </p>
            </div>

            <div className="border border-blue-600/20 bg-blue-50/40 p-6 md:p-8">
              <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-blue-600/70">
                Overview
              </p>
              <div className="mt-6 space-y-4">
                <div className="border-t border-blue-600/20 pt-4">
                  <p className="text-sm font-semibold text-black/55">扱うもの</p>
                  <p className="mt-2 text-sm font-medium leading-relaxed text-black/80">
                    LLM、AI、Web開発、デザイン、開発補助ツールなど、AI関連のもの全般
                  </p>
                </div>
                <div className="border-t border-blue-600/20 pt-4">
                  <p className="text-sm font-semibold text-black/55">やること</p>
                  <p className="mt-2 text-sm font-medium leading-relaxed text-black/80">
                    Xなどで最新情報を追い、試し、必要なら生成AIも使いながら小さく実装する
                  </p>
                </div>
                <div className="border-t border-blue-600/20 pt-4">
                  <p className="text-sm font-semibold text-black/55">目指す状態</p>
                  <p className="mt-2 text-sm font-medium leading-relaxed text-black/80">
                    面白そうで終わらず、実際に使えるアウトプットまで持っていく
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      <section className="py-24 md:py-40">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-black tracking-tighter md:text-4xl lg:text-6xl">
              技術を理解するだけでなく、
              <br className="hidden md:block" />
              <span className="text-blue-600">実際に試して、作ってみる</span>部門
            </h2>
            <div className="mt-14 space-y-8 text-lg font-medium leading-relaxed text-black/80 md:text-xl lg:text-2xl">
              <p>
                OIF開発部門は、理論を学ぶだけで終わらせず、最新技術を実際に触り、試し、プロダクトやワークフローとして形にしていくための部門です。
              </p>
              <p>
                AI、LLM、Web開発、デザイン、自動化、ツール作り。AI関連のものなら広く対象にして、新しい技術が出たらまず使ってみて、自分たちの手で価値がある形へ落とし込みます。
              </p>
              <p className="text-black">
                「気になる技術を追う」と「実際に作る」を、生成AIも含めた現実的な手段で進めます。
              </p>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      <section className="py-24 md:py-40">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="mb-16 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-widest text-blue-600/70">
                What we do
              </p>
              <h2 className="text-3xl font-black tracking-tight md:text-4xl lg:text-5xl">
                開発部門でやること
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-black/55 md:text-base">
              新技術の検証からプロトタイプ実装、運用を意識した改善までを一続きの流れとして扱います。
            </p>
          </div>

          <div className="grid gap-0 border-t border-black lg:grid-cols-3">
            {pillars.map((pillar, i) => (
              <div
                key={pillar.title}
                className={`pt-12 pb-16 ${i < pillars.length - 1 ? "border-b border-black lg:border-b-0 lg:border-r" : ""} ${i === 0 ? "pr-8" : "lg:px-10"} ${i === pillars.length - 1 ? "lg:pl-10" : ""}`}
              >
                <pillar.icon size={28} strokeWidth={1.5} className="mb-8 text-blue-600" />
                <h3 className="mb-8 text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl">
                  {pillar.title}
                </h3>
                <p className="text-base font-medium leading-relaxed text-black/70 md:text-lg lg:text-xl">
                  {pillar.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      <section className="py-24 md:py-40 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-widest text-blue-600/70">
                Themes
              </p>
              <h2 className="text-3xl font-black tracking-tight md:text-4xl lg:text-5xl">
                こんなテーマを扱います
              </h2>
            </div>

            <div className="border border-black bg-white">
              {themes.map((item, index) => (
                <div
                  key={item}
                  className={`px-6 py-6 md:px-8 ${index < themes.length - 1 ? "border-b border-black/10" : ""}`}
                >
                  <div className="flex items-start gap-4">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-600" />
                    <span className="text-lg font-medium leading-relaxed text-black/82">
                      {item}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      <section className="py-24 md:py-40">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-blue-600/70">
            Workflow
          </p>
          <h2 className="text-3xl font-black tracking-tight md:text-4xl lg:text-5xl">
            進め方のイメージ
          </h2>

          <div className="mt-16 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {flow.map((item) => (
              <div key={item.step} className="border border-black bg-white p-6">
                <p className="text-4xl font-black tracking-tighter text-blue-600/20">
                  {item.step}
                </p>
                <h3 className="mt-6 text-2xl font-bold tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-black/70">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      <section className="py-32 md:py-48 lg:py-64 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="max-w-5xl text-4xl font-black tracking-tighter leading-[1.1] md:text-5xl lg:text-7xl">
            <span className="text-blue-400">面白そう</span>で終わらせず、<br />
            実際に触って、作って、<br />
            使えるところまで持っていく
          </h2>
        </div>
      </section>
    </div>
  );
}
