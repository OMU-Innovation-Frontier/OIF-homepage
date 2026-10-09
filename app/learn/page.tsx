import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import PageHeader from "@/components/site/PageHeader";
import SectionHeading from "@/components/site/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { NOEMA_URL, noemaFeatures, noemaSeries } from "@/lib/noema";
import { learnGoal, learnNote, learnStages, learnSupport } from "@/lib/oif-learn";

export const metadata: Metadata = {
  title: "Noema と OIF学習 | OIF 大阪公立大学のAIサークル",
  description:
    "OIF（OMU Innovation Frontier）での学び方。だれでも読める技術メディア Noema と、勉強・制作のメンバー向けの学習プログラム「OIF学習」について。",
  alternates: {
    canonical: "https://oif-ai.com/learn/",
  },
};

const relation = [
  { name: "Noema", body: "記事を読んで、AI でできることと仕組みを知る" },
  { name: "OIF学習", body: "記事をもとにした順番で学び、課題に取り組む" },
  { name: "定例会", body: "つくったものを発表する" },
];

export default function LearnPage() {
  return (
    <div className="bg-canvas text-ink">
      <PageHeader
        title="Noema と OIF学習"
        lead="OIF では、技術メディア「Noema」と、学習プログラム「OIF学習」の2つを使って学びます。Noema はだれでも読めます。OIF学習は、勉強・制作のメンバーが使います。"
      />

      {/* 2つの関係 */}
      <section className="border-b border-ink/10 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-14 md:py-20">
          <Reveal>
            <SectionHeading title="2つの関係">
              <p>OIF学習は、Noema の記事をもとに、学ぶ順番とやることをまとめたものです。</p>
            </SectionHeading>
          </Reveal>
          <ol className="mt-8 grid gap-3 md:grid-cols-3 md:gap-4">
            {relation.map((r, i) => (
              <li key={r.name} className="relative rounded-2xl border border-ink/10 bg-canvas p-5">
                <span className="text-xs font-bold text-ink/50">{i + 1}</span>
                <p className="mt-1 text-lg font-black">{r.name}</p>
                <p className="mt-1 text-sm leading-relaxed text-ink/70">{r.body}</p>
                {i < relation.length - 1 && (
                  <ArrowRight
                    className="absolute -right-3.5 top-1/2 hidden h-5 w-5 -translate-y-1/2 rounded-full bg-white text-ink/50 md:block"
                    aria-hidden
                  />
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Noema */}
      <section id="noema" className="scroll-mt-20 border-b border-ink/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-14 md:py-20 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="text-sm font-bold text-ink/50">だれでも読める</p>
              <h2 className="mt-2 text-3xl md:text-4xl font-black leading-snug">Noema</h2>
              <p className="mt-5 text-base md:text-lg leading-loose text-ink/75">
                Noema（ノエマ）は、OIF のメンバーが記事を書いている技術メディアです。OIF で先輩が後輩に教えてきたことを、記事として残しています。
              </p>
              <a
                href={NOEMA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-bold text-white hover:bg-ink/85 transition-colors"
              >
                Noema を読む
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </a>
            </Reveal>
          </div>

          <div className="lg:col-span-7 space-y-10">
            <Reveal className="overflow-hidden rounded-2xl border border-ink/10 bg-white">
              <Image
                src="/images/noema-screenshot.png"
                alt="Noema のシリーズ一覧の画面"
                width={1905}
                height={887}
                className="h-auto w-full"
              />
            </Reveal>

            <div>
              <h3 className="text-xl font-black">Noema の特徴</h3>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {noemaFeatures.map((f) => (
                  <li key={f.title} className="rounded-2xl border border-ink/10 bg-white p-5">
                    <p className="font-bold">{f.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-ink/70">{f.body}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-black">いま読めるシリーズ</h3>
              <ul className="mt-4 divide-y divide-ink/10 border-y border-ink/10">
                {noemaSeries.map((s) => (
                  <li key={s.href}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between gap-4 py-4 font-bold hover:text-ink/70 transition-colors"
                    >
                      {s.title}
                      <ArrowUpRight
                        className="h-4 w-4 shrink-0 text-ink/40 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        aria-hidden
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* OIF学習 */}
      <section id="oif-learn" className="scroll-mt-20 border-b border-ink/10 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-14 md:py-20 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="text-sm font-bold text-ink/50">勉強・制作のメンバー向け</p>
              <h2 className="mt-2 text-3xl md:text-4xl font-black leading-snug">OIF学習</h2>
              <p className="mt-5 text-base md:text-lg leading-loose text-ink/75">
                OIF学習は、AI に興味はあるけれど何から始めればよいか分からない人のための学習プログラムです。プログラミングをしたことがなくても始められます。
              </p>
              <p className="mt-4 text-base md:text-lg leading-loose text-ink/75">{learnGoal}</p>
            </Reveal>
          </div>

          <div className="lg:col-span-7 space-y-10">
            <div>
              <h3 className="text-xl font-black">進め方</h3>
              <ol className="mt-4 space-y-3">
                {learnStages.map((st, i) => (
                  <li key={st.name} className="flex gap-4 rounded-2xl border border-ink/10 bg-canvas p-5">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink text-sm font-bold text-white">
                      {i + 1}
                    </span>
                    <span className="pt-0.5">
                      <span className="block font-bold">{st.name}</span>
                      <span className="mt-1 block text-sm leading-relaxed text-ink/70">{st.body}</span>
                    </span>
                  </li>
                ))}
              </ol>
              <p className="mt-4 rounded-2xl border border-dashed border-ink/20 px-5 py-4 text-sm leading-relaxed text-ink/70">
                {learnNote}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-black">一人で進めるときの助け</h3>
              <ul className="mt-4 grid gap-3 sm:grid-cols-3">
                {learnSupport.map((s) => (
                  <li key={s.title} className="rounded-2xl border border-ink/10 bg-canvas p-5">
                    <p className="font-bold leading-relaxed">{s.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-ink/70">{s.body}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-ink/10 bg-canvas p-5 md:p-6">
              <h3 className="text-lg font-black">使い始めるには</h3>
              <p className="mt-2 text-sm md:text-base leading-relaxed text-ink/75">
                OIF学習は、Discord で勉強・制作のロールが付くと使えるようになります。ロールは、Discord に入ったときの質問で「勉強・制作」を選ぶと付きます。
              </p>
              <Link
                href="/join/#flow"
                className="mt-4 inline-flex items-center gap-1 text-sm font-bold underline underline-offset-4"
              >
                参加の流れを見る
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
