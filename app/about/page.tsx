import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | OIF 大阪公立大学のAIサークル",
  description:
    "OIF（OMU Innovation Frontier）は大阪公立大学のAI・プログラミングサークルです。深く考え、とにかく作ってみる、外の世界に出てみる——AIに兴味のある大阪公立大学の学生には最適な環境です。",
  alternates: {
    canonical: "https://oif-ai.com/about/",
  },
};

const beliefs = [
  {
    number: "01",
    title: "深く考える",
    body: "論文を読み、数式と向き合い、本質を掴む。AIやLLMの仕組みを表面だけでなく、根拠から理解することを大切にしている。",
  },
  {
    number: "02",
    title: "とにかく作ってみる",
    body: "KaggleへのチャレンジやAIモデルの実装、アプリ開発も。試行錯誤しながらコードを書いているうちに、理解が深まっていく。",
  },
  {
    number: "03",
    title: "外の世界に出てみる",
    body: "大学発ベンチャーでインターンをしているメンバーもいる。学校の外で経験を積むことを、自然な選択肢として持っているいる。",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-24 md:py-32 lg:py-48 border-b border-black">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <p className="text-sm font-bold tracking-[0.3em] uppercase opacity-40 mb-6">
            About the Community
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter leading-[0.9]">
            OIF について
          </h1>
        </div>
      </section>

      {/* Section 1 */}
      <section className="py-24 md:py-40 border-b border-black bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-4xl">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-black tracking-tighter mb-16 leading-tight">
              AIに興味がある学生が、<br className="hidden md:block" />集まっている場所
            </h2>
            <div className="space-y-8 text-lg md:text-xl lg:text-2xl leading-relaxed text-black/80 font-medium">
              <p>
                OIFは、大阪公立大学の学生を中心にAIやテクノロジーに関心を持つ人が集まる学生コミュニティです。
              </p>
              <p>
                仕組みを理解し、自分たちの手で実装し、社会に問いを立てる。
              </p>
              <p className="text-black">
                プログラミング経験の有無は問いません。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: 3つの信条 */}
      <section className="border-b border-black">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-24 md:py-40">
          <p className="text-xs font-bold tracking-widest uppercase text-black/40 mb-4">
            How we learn
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight mb-20">
            大事にしていること
          </h2>

          <div className="grid lg:grid-cols-3 border-t border-black">
            {beliefs.map((belief, i) => (
              <div
                key={i}
                className={`pt-12 pb-16 pr-8 ${i < beliefs.length - 1
                    ? "border-b lg:border-b-0 lg:border-r border-black"
                    : ""
                  } ${i > 0 ? "lg:pl-12" : ""}`}
              >
                <span className="block text-5xl md:text-6xl font-black text-black/5 tracking-tighter mb-8">
                  {belief.number}
                </span>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-8">
                  {belief.title}
                </h3>
                <p className="text-base md:text-lg lg:text-xl leading-relaxed text-black/70 font-medium">
                  {belief.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: メンバー */}
      <section className="py-24 md:py-40 border-b border-black bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-4xl">
            <p className="text-xs font-bold tracking-widest uppercase text-black/40 mb-4">
              Members
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight mb-12">
              すでに動いているメンバーもいる
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-black/80 font-medium">
              大阪公立大学発ベンチャーのAffectify・Mi&Tでインターンとして実務経験を積んでいるメンバーが在籍しています。勉強会に参加するだけでなく、実際の現場に出ていることも自然にできる環境です。
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: 黒背景メッセージ */}
      <section className="py-32 md:py-48 lg:py-64 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter leading-[1.1] max-w-5xl">
            求められる学びじゃなく、<br />
            自分たちがやりたいことを、<br />
            自分たちのペースで
          </h2>
        </div>
      </section>
    </div>
  );
}