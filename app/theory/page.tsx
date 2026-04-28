import { Metadata } from "next";
import { BookOpen, Brain, FlaskConical } from "lucide-react";
import SectionDivider from "@/components/site/SectionDivider";

export const metadata: Metadata = {
  title: "Theory | OIF理論部",
  description:
    "OIF理論部は、AIや機械学習の仕組みを数学・統計から深く理解し、理論的な基礎を固める部門です。論文読解、数学学習、ゼミ形式のディスカッションを通じて、AIの本質を探究します。",
  alternates: {
    canonical: "https://oif-ai.com/theory/",
  },
};

const pillars = [
  {
    icon: Brain,
    title: "理論を深く理解する",
    body: "機械学習や深層学習の仕組みを、ブラックボックスとして使うだけでなく、数学・統計の観点から根本的に理解することを目指します。",
  },
  {
    icon: BookOpen,
    title: "論文を読む",
    body: "最新のAI研究論文を読み解き、研究の動向や手法の背景を把握します。論文読解を通じて、現場で起きていることの本質を追います。",
  },
  {
    icon: FlaskConical,
    title: "ゼミ形式で学ぶ",
    body: "個人学習にとどまらず、発表・議論・フィードバックを繰り返すゼミスタイルで学びます。人に説明することで理解が深まります。",
  },
];

const themes = [
  "線形代数・確率統計・微積分などの数学基礎",
  "機械学習・深層学習のアルゴリズム理解",
  "最新AI論文の読解と輪読会",
  "Transformer・LLMの内部構造の理解",
];

const flow = [
  { step: "01", title: "Learn", body: "数学・理論の基礎を体系的に学ぶ" },
  { step: "02", title: "Read", body: "論文や教材を読んで理解を深める" },
  { step: "03", title: "Present", body: "発表・議論でアウトプットする" },
  { step: "04", title: "Connect", body: "理論と実践のつながりを見つける" },
];

export default function TheoryPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-24 md:py-32 lg:py-40">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div>
              <p className="mb-6 text-sm font-bold uppercase tracking-[0.3em] text-red-800/60">
                OIF Theory Club
              </p>
              <h1 className="text-5xl font-black leading-[0.9] tracking-tighter md:text-6xl lg:text-7xl xl:text-8xl">
                OIF理論部
              </h1>
              <p className="mt-10 max-w-2xl text-lg leading-relaxed text-black/72 md:text-xl">
                AIの表面をなぞるだけでなく、数学・統計・アルゴリズムの根幹から
                理解し、理論的な土台を築く部門です。
              </p>
            </div>

            <div className="border border-black bg-white p-6 md:p-8" style={{ borderLeft: '4px solid #991b1b' }}>
              <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-red-800/60">
                Overview
              </p>
              <div className="mt-6 space-y-4">
                <div className="border-t border-black/10 pt-4">
                  <p className="text-sm font-semibold text-black/55">扱うもの</p>
                  <p className="mt-2 text-sm font-medium leading-relaxed text-black/80">
                    数学基礎（線形代数・確率統計）、機械学習理論、論文、LLMの内部構造
                  </p>
                </div>
                <div className="border-t border-black/10 pt-4">
                  <p className="text-sm font-semibold text-black/55">やること</p>
                  <p className="mt-2 text-sm font-medium leading-relaxed text-black/80">
                    教材・論文の読解、ゼミ形式の発表・議論、数学学習
                  </p>
                </div>
                <div className="border-t border-black/10 pt-4">
                  <p className="text-sm font-semibold text-black/55">目指す状態</p>
                  <p className="mt-2 text-sm font-medium leading-relaxed text-black/80">
                    AIを「なんとなく使う」から「仕組みを説明できる」へ
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
              使うだけでなく、
              <br className="hidden md:block" />
              <span className="text-red-800">仕組みから理解する</span>部門
            </h2>
            <div className="mt-14 space-y-8 text-lg font-medium leading-relaxed text-black/80 md:text-xl lg:text-2xl">
              <p>
                OIF理論部は、AIや機械学習を「ツールとして使う」だけで終わらせず、
                その背後にある数学・アルゴリズム・理論的な仕組みを深く理解することを目指す部門です。
              </p>
              <p>
                線形代数、確率統計、最適化理論から始まり、機械学習モデルの動作原理、
                最新の論文まで。理論を通じてAIの本質に迫ります。
              </p>
              <p className="text-black">
                「なぜそう動くのか」を説明できる力が、応用力と批判的思考の土台になります。
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
              <p className="mb-4 text-xs font-bold uppercase tracking-widest text-red-800/60">
                What we do
              </p>
              <h2 className="text-3xl font-black tracking-tight md:text-4xl lg:text-5xl">
                理論部でやること
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-black/55 md:text-base">
              数学の基礎から最新研究まで、理論的な理解を積み重ねていきます。
            </p>
          </div>

          <div className="grid gap-0 border-t border-black lg:grid-cols-3">
            {pillars.map((pillar, i) => (
              <div
                key={pillar.title}
                className={`pt-12 pb-16 ${i < pillars.length - 1 ? "border-b border-black lg:border-b-0 lg:border-r" : ""} ${i === 0 ? "pr-8" : "lg:px-10"} ${i === pillars.length - 1 ? "lg:pl-10" : ""}`}
              >
                <pillar.icon size={28} strokeWidth={1.5} className="mb-8 text-red-800" />
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
              <p className="mb-4 text-xs font-bold uppercase tracking-widest text-red-800/60">
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
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-red-800" />
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
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-red-800/60">
            Workflow
          </p>
          <h2 className="text-3xl font-black tracking-tight md:text-4xl lg:text-5xl">
            進め方のイメージ
          </h2>

          <div className="mt-16 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {flow.map((item) => (
              <div key={item.step} className="border border-black bg-white p-6">
                <p className="text-4xl font-black tracking-tighter text-red-800/20">
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
            <span className="text-red-500">なんとなく知っている</span>から、<br />
            仕組みを理解して、<br />
            説明できるところまで持っていく
          </h2>
        </div>
      </section>
    </div>
  );
}
