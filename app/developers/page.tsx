import { Metadata } from "next";
import { Code2, Sparkles, Wrench } from "lucide-react";
import DivisionPage from "@/components/site/DivisionPage";

export const metadata: Metadata = {
  title: "Developers | OIF開発部門",
  description:
    "OIF開発部門は、最新技術を試し、実際に開発し、形にする部門です。AIツール、LLM、Web開発、ワークフロー自動化などを通じて、使えるものを作っていきます。",
  alternates: {
    canonical: "https://oif-ai.com/developers/",
  },
};

export default function DevelopersPage() {
  return (
    <DivisionPage
      accent="dev"
      eyebrowEn="OIF Development Division"
      title="OIF開発部門"
      lead="理論を理解するだけで終わらせず、最新技術を実際に試し、実装し、使える形にしていく部門です。"
      overview={[
        {
          label: "扱うもの",
          body: "LLM、AI、Web開発、デザイン、開発補助ツールなど、AI関連のもの全般",
        },
        {
          label: "やること",
          body: "Xなどで最新情報を追い、試し、必要なら生成AIも使いながら小さく実装する",
        },
        {
          label: "目指す状態",
          body: "面白そうで終わらず、実際に使えるアウトプットまで持っていく",
        },
      ]}
      headline={{
        pre: "技術を理解するだけでなく、",
        accent: "実際に試して、作ってみる",
        post: "部門",
      }}
      intro={[
        "OIF開発部門は、理論を学ぶだけで終わらせず、最新技術を実際に触り、試し、プロダクトやワークフローとして形にしていくための部門です。",
        "AI、LLM、Web開発、デザイン、自動化、ツール作り。AI関連のものなら広く対象にして、新しい技術が出たらまず使ってみて、自分たちの手で価値がある形へ落とし込みます。",
        "「気になる技術を追う」と「実際に作る」を、生成AIも含めた現実的な手段で進めます。",
      ]}
      pillarsLead="新技術の検証からプロトタイプ実装、運用を意識した改善までを一続きの流れとして扱います。"
      pillars={[
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
      ]}
      themes={[
        "AIを使ったWebアプリやLLMプロダクトの試作",
        "LLMやAPIを組み合わせたワークフロー構築",
        "生成AIを使った開発・実装・検証の改善",
        "UI/UXやビジュアル面を含むAI関連プロダクト設計",
      ]}
      flow={[
        { step: "01", title: "Pick", body: "気になる技術やテーマを選ぶ" },
        { step: "02", title: "Test", body: "まずは小さく触って検証する" },
        { step: "03", title: "Build", body: "必要なら実装して形にする" },
        { step: "04", title: "Refine", body: "使えるところまで整える" },
      ]}
      closing={{
        accent: "面白そう",
        afterAccent: "で終わらせず、",
        lines: ["実際に触って、作って、", "使えるところまで持っていく"],
      }}
    />
  );
}
