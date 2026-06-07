import { Metadata } from "next";
import { BookOpen, Brain, FlaskConical } from "lucide-react";
import DivisionPage from "@/components/site/DivisionPage";

export const metadata: Metadata = {
  title: "Theory | OIF理論部門",
  description:
    "OIF理論部門は、AIや機械学習の仕組みを数学・統計から深く理解し、理論的な基礎を固める部門です。論文読解、数学学習、ゼミ形式のディスカッションを通じて、AIの本質を探究します。",
  alternates: {
    canonical: "https://oif-ai.com/theory/",
  },
};

export default function TheoryPage() {
  return (
    <DivisionPage
      accent="theory"
      eyebrowEn="OIF Theory Division"
      title="OIF理論部門"
      lead="AIの表面をなぞるだけでなく、数学・統計・アルゴリズムの根幹から理解し、理論的な土台を築く部門です。"
      overview={[
        {
          label: "扱うもの",
          body: "数学基礎（線形代数・確率統計）、機械学習理論、論文、LLMの内部構造",
        },
        {
          label: "やること",
          body: "教材・論文の読解、ゼミ形式の発表・議論、数学学習",
        },
        {
          label: "目指す状態",
          body: "AIを「なんとなく使う」から「仕組みを説明できる」へ",
        },
      ]}
      headline={{
        pre: "使うだけでなく、",
        accent: "仕組みから理解する",
        post: "部門",
      }}
      intro={[
        "OIF理論部門は、AIや機械学習を「ツールとして使う」だけで終わらせず、その背後にある数学・アルゴリズム・理論的な仕組みを深く理解することを目指す部門です。",
        "線形代数、確率統計、最適化理論から始まり、機械学習モデルの動作原理、最新の論文まで。理論を通じてAIの本質に迫ります。",
        "「なぜそう動くのか」を説明できる力が、応用力と批判的思考の土台になります。",
      ]}
      pillarsLead="数学の基礎から最新研究まで、理論的な理解を積み重ねていきます。"
      pillars={[
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
      ]}
      themes={[
        "線形代数・確率統計・微積分などの数学基礎",
        "機械学習・深層学習のアルゴリズム理解",
        "最新AI論文の読解と輪読会",
        "Transformer・LLMの内部構造の理解",
      ]}
      flow={[
        { step: "01", title: "Learn", body: "数学・理論の基礎を体系的に学ぶ" },
        { step: "02", title: "Read", body: "論文や教材を読んで理解を深める" },
        { step: "03", title: "Present", body: "発表・議論でアウトプットする" },
        { step: "04", title: "Connect", body: "理論と実践のつながりを見つける" },
      ]}
      closing={{
        accent: "なんとなく知っている",
        afterAccent: "から、",
        lines: ["仕組みを理解して、", "説明できるところまで持っていく"],
      }}
    />
  );
}
