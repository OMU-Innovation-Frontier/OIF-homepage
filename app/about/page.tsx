import { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/site/PageHeader";
import SectionHeading from "@/components/site/SectionHeading";
import OrgStructure from "@/components/site/OrgStructure";
import Reveal from "@/components/ui/Reveal";
import { welcomeConditions } from "@/lib/join";

export const metadata: Metadata = {
  title: "OIFについて | 大阪公立大学のAIサークル",
  description:
    "OIF（OMU Innovation Frontier）は、大阪公立大学の学生がつくっている AI のコミュニティです。初心者でも、正しい順番で学んで手を動かせば、人の役に立つものをつくれるようになります。プログラミング未経験・文系も歓迎。",
  alternates: {
    canonical: "https://oif-ai.com/about/",
  },
};

const walls = [
  "数式から入って、動くものにたどり着く前に止まってしまう",
  "教材の説明が飛んでいて、途中で分からなくなる",
  "AI が自分の何に役立つのかが見えないまま終わる",
];

export default function AboutPage() {
  return (
    <div className="bg-canvas text-ink">
      <PageHeader
        title="OIF について"
        lead="OIF（OMU Innovation Frontier）は、大阪公立大学の学生がつくっている AI のコミュニティです。AI に興味がある学生が集まって、学び、ものをつくり、人前で発表しています。"
      />

      <section className="border-b border-ink/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28 grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <SectionHeading label="OIF をつくった理由" title="「AI をやってみたい。でも、何から始めればいいか分からない。」" />
          </Reveal>
          <Reveal delay={100} className="lg:col-span-6 lg:col-start-7">
            <p className="text-base md:text-lg leading-loose text-ink/75">
              大学で AI に興味を持つ学生は増えていますが、独学には壁があります。聞ける人もいないまま、次のようなところで止まってしまいます。
            </p>
            <ul className="mt-6 space-y-3">
              {walls.map((w) => (
                <li key={w} className="rounded-2xl border border-ink/10 bg-white px-5 py-4 text-sm md:text-base leading-relaxed">
                  {w}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-base md:text-lg font-bold leading-loose">OIF は、この壁を越えるための場所です。</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white border-b border-ink/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28 grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <SectionHeading label="理念" title="初心者から、即戦力へ。" />
          </Reveal>
          <Reveal delay={100} className="lg:col-span-6 lg:col-start-7 space-y-6 text-base md:text-lg leading-loose text-ink/75">
            <p>OIF は、AI の即戦力を育てる団体です。</p>
            <p>
              ここでいう即戦力は、最初から優秀な人のことではありません。AI は、少し学ぶだけでできることが大きく増える技術です。初心者でも、正しい順番で学んで手を動かせば、人の役に立つものをつくれるようになります。それを実際に体験してもらうのが OIF の役割です。
            </p>
            <p>
              エリートを選ぶ団体ではありません。参加の条件は少なくしています。目指しているのは、実際に使われるものをつくれる状態です。
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-ink/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28">
          <Reveal>
            <SectionHeading label="こんな人を歓迎します" title="参加の条件は、少なくしています。" />
          </Reveal>
          <ul className="mt-10 grid gap-4 md:grid-cols-3">
            {welcomeConditions.map((c, i) => (
              <li
                key={c}
                className="reveal rounded-2xl border border-ink/10 bg-white p-6 font-bold leading-relaxed"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                {c}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white border-b border-ink/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28">
          <Reveal>
            <SectionHeading label="組織のかたち" title="OIF は3つの層でできています。">
              <p>上下関係ではありません。内側に行くほど、関わる量と責任が増えるというだけです。</p>
            </SectionHeading>
          </Reveal>
          <Reveal delay={100} className="mt-12">
            <OrgStructure />
          </Reveal>
        </div>
      </section>

      <section>
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28 grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <SectionHeading label="目指していること" title="「この大学で AI をやるなら、まず OIF」" />
          </Reveal>
          <Reveal delay={100} className="lg:col-span-6 lg:col-start-7">
            <p className="text-base md:text-lg leading-loose text-ink/75">
              大阪公立大学で AI を学びたい学生が、学ぶ場所を見つけられないまま諦めてしまう状態をなくすことです。「この大学で AI をやるなら、まず OIF」と言われる団体を目指しています。
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/activities/"
                className="inline-flex items-center rounded-full bg-ink px-6 py-3 text-sm font-bold text-white hover:bg-ink/85 transition-colors"
              >
                活動を見る
              </Link>
              <Link
                href="/join/"
                className="inline-flex items-center rounded-full border border-ink/20 bg-white px-6 py-3 text-sm font-bold hover:border-ink/40 transition-colors"
              >
                参加する
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
