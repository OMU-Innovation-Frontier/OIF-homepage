import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHeader from "@/components/site/PageHeader";
import OrgStructure from "@/components/site/OrgStructure";
import Reveal from "@/components/ui/Reveal";
import { welcomeConditions } from "@/lib/join";
import { members } from "@/lib/members";

export const metadata: Metadata = {
  title: "OIFについて | 大阪公立大学のAIサークル",
  description:
    "OIF（OMU Innovation Frontier）は、大阪公立大学の学生がつくっている AI のコミュニティです。理念は「初心者から、即戦力へ。」。OIF をつくった理由、理念、参加の条件、組織のかたち、目指していること。",
  alternates: {
    canonical: "https://oif-ai.com/about/",
  },
};

function TextSection({ id, title, children }: { id?: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-20 border-t border-ink/10 py-12 md:py-16">
      <Reveal className="grid gap-5 md:grid-cols-12 md:gap-10">
        <h2 className="text-2xl md:text-3xl font-black leading-snug md:col-span-4">{title}</h2>
        <div className="md:col-span-8 space-y-5 text-base md:text-lg leading-loose text-ink/80">{children}</div>
      </Reveal>
    </section>
  );
}

export default function AboutPage() {
  return (
    <div className="bg-canvas text-ink">
      <PageHeader
        title="OIF について"
        lead="OIF（OMU Innovation Frontier）は、大阪公立大学の学生がつくっている AI のコミュニティです。AI に興味がある学生が集まって、学び、ものをつくり、人前で発表しています。"
      />

      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <TextSection title="理念">
          <p className="text-2xl md:text-3xl font-black leading-snug text-ink">初心者から、即戦力へ。</p>
          <p>OIF は、AI の即戦力を育てる団体です。</p>
          <p>
            ここでいう即戦力は、最初から優秀な人のことではありません。AI は、少し学ぶだけでできることが大きく増える技術です。初心者でも、正しい順番で学んで手を動かせば、人の役に立つものをつくれるようになります。それを実際に体験してもらうのが OIF の役割です。
          </p>
          <p>エリートを選ぶ団体ではありません。参加の条件は少なくしています。目指しているのは、実際に使われるものをつくれる状態です。</p>
        </TextSection>

        <TextSection title="OIF をつくった理由">
          <p>「AI をやってみたい。でも、何から始めればいいか分からないし、聞ける人もいない。」</p>
          <p>
            大学で AI に興味を持つ学生は増えていますが、ひとりで学ぶと途中で止まりがちです。数式から入って、動くものにたどり着く前に止まってしまう。教材の説明が飛んでいて、途中で分からなくなる。AI が自分の何に役立つのかが見えないまま終わる。
          </p>
          <p>OIF は、こうしたところで止まらずに学び続けられるようにするためにつくりました。</p>
        </TextSection>

        <TextSection title="目指していること">
          <p>
            大阪公立大学で AI を学びたい学生が、学ぶ場所を見つけられないまま諦めてしまう状態をなくすことです。「この大学で AI をやるなら、まず OIF」と言われる団体を目指しています。
          </p>
        </TextSection>

        <TextSection title="参加の条件">
          <p>次の人を歓迎しています。</p>
          <ul className="list-disc space-y-2 pl-6">
            {welcomeConditions.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </TextSection>

        <TextSection title="組織のかたち">
          <p>OIF は3つの層でできています。上下関係はなく、内側に行くほど関わる量と責任が増えます。</p>
          <div className="pt-2 text-base">
            <OrgStructure />
          </div>
        </TextSection>

        {members.length > 0 && (
          <TextSection id="members" title="メンバー紹介">
            <ul className="grid gap-4 sm:grid-cols-2">
              {members.map((m) => (
                <li key={m.name} className="flex gap-4 rounded-2xl border border-ink/10 bg-white p-5 text-base">
                  {m.image && (
                    <span className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border border-ink/10">
                      <Image src={m.image} alt={m.name} fill sizes="4rem" className="object-cover" />
                    </span>
                  )}
                  <span>
                    <span className="block font-bold">{m.name}</span>
                    <span className="block text-sm text-ink/55">{m.role}</span>
                    {m.comment && <span className="mt-2 block text-sm leading-relaxed text-ink/75">{m.comment}</span>}
                  </span>
                </li>
              ))}
            </ul>
          </TextSection>
        )}

        <section className="border-t border-ink/10 py-12 md:py-16">
          <div className="flex flex-wrap gap-3">
            <Link
              href="/#flow"
              className="inline-flex items-center rounded-full bg-ink px-6 py-3 text-sm font-bold text-white hover:bg-ink/85 transition-colors"
            >
              活動の流れを見る
            </Link>
            <Link
              href="/join/"
              className="inline-flex items-center rounded-full border border-ink/20 bg-white px-6 py-3 text-sm font-bold hover:border-ink/40 transition-colors"
            >
              参加について
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
