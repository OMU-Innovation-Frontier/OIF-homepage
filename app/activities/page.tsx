import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import PageHeader from "@/components/site/PageHeader";
import SectionHeading from "@/components/site/SectionHeading";
import DiscordCTA from "@/components/ui/DiscordCTA";
import Reveal from "@/components/ui/Reveal";
import { getAllProjects } from "@/lib/projects";
import { ltEvents } from "@/lib/lt-events";
import { learnBasics, learnCourses } from "@/lib/oif-learn";
import { contests, pastSessions } from "@/lib/archive";

export const metadata: Metadata = {
  title: "活動 | OIF 大阪公立大学のAIサークル",
  description:
    "OIF（OMU Innovation Frontier）の活動。週1回の定例会、技術メディア Noema と学習プログラム「OIF学習」での学習、メンバーによるプロダクト開発、定例会や学外コンテストでの発表。",
  alternates: {
    canonical: "https://oif-ai.com/activities/",
  },
};

const sectionNav = [
  { href: "#weekly", label: "毎週の活動" },
  { href: "#learn", label: "学ぶ" },
  { href: "#build", label: "つくる" },
  { href: "#present", label: "発表する" },
  { href: "#archive", label: "これまでの記録" },
];

export default function ActivitiesPage() {
  const projects = getAllProjects();

  return (
    <div className="bg-canvas text-ink">
      <PageHeader
        title="活動"
        lead="OIF での活動は、入る → 学ぶ → つくる → 発表する の順番で進みます。このページでは、それぞれで実際に何をしているかを紹介します。"
      />

      <nav aria-label="このページの目次" className="border-b border-ink/10 bg-white">
        <ul className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex gap-2 overflow-x-auto py-4">
          {sectionNav.map((n) => (
            <li key={n.href} className="shrink-0">
              <a
                href={n.href}
                className="inline-block rounded-full border border-ink/15 px-4 py-2 text-sm font-bold text-ink/70 hover:border-ink/40 hover:text-ink transition-colors"
              >
                {n.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* 毎週の活動 */}
      <section id="weekly" className="scroll-mt-20 border-b border-ink/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28 grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <SectionHeading label="毎週の活動" title="週に1回、定例会を開いています。" />
          </Reveal>
          <Reveal delay={100} className="lg:col-span-6 lg:col-start-7 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-ink/10 bg-white p-6">
              <h3 className="text-lg font-black">進み具合を報告し合う回</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">
                いま何をしているか、どこで詰まっているかを短く共有します。詰まっているところは、その場で相談します。
              </p>
            </div>
            <div className="rounded-2xl border border-ink/10 bg-white p-6">
              <h3 className="text-lg font-black">集まって作業する回</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">
                同じ場所でそれぞれの作業を進めます。手が止まったときに聞ける人がいる状態をつくるための時間です。
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 学ぶ */}
      <section id="learn" className="scroll-mt-20 bg-white border-b border-ink/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28">
          <Reveal>
            <SectionHeading label="学ぶ" title="Noema と OIF学習">
              <p>
                だれでも読める技術メディア「Noema」と、勉強・制作のメンバー向けの学習プログラム「OIF学習」の2つで学びます。
              </p>
            </SectionHeading>
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:items-start">
            <Reveal className="flex flex-col rounded-3xl border border-ink/10 bg-canvas p-6 md:p-8">
              <p className="text-sm font-bold text-ink/50">だれでも読める</p>
              <h3 className="mt-2 text-2xl font-black">Noema</h3>
              <p className="mt-4 leading-relaxed text-ink/75">
                OIF で先輩が後輩に教えてきたことを、記事として残している技術メディアです。「AI で何ができるか」と「それがなぜ動くのか」を、具体例を使って説明しています。まず動かしてみて、そのあと仕組みを理解する、という順番で読めます。
              </p>
              <a
                href="https://noema-learn.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto pt-8 inline-flex items-center gap-1 self-start text-sm font-bold underline underline-offset-4"
              >
                Noema を読む
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </a>
            </Reveal>

            <Reveal delay={100} className="rounded-3xl bg-ink p-6 md:p-8 text-white">
              <p className="text-sm font-bold text-white/60">勉強・制作のメンバー向け</p>
              <h3 className="mt-2 text-2xl font-black">OIF学習</h3>
              <p className="mt-4 leading-relaxed text-white/80">
                AI と一緒に自分で小さなものをつくり、仕組みを自分の言葉で説明できるところまで進むための学習プログラムです。Noema の記事をもとに、学ぶ順番とやることをまとめています。勉強・制作のメンバーは、全員がまず基礎編を進めます。
              </p>

              <h4 className="mt-8 text-sm font-bold text-white/60">基礎編（全員）</h4>
              <ol className="mt-3 space-y-2">
                {learnBasics.map((b, i) => (
                  <li key={b} className="flex gap-3 text-sm leading-relaxed">
                    <span className="w-5 shrink-0 font-bold text-white/50">{i + 1}</span>
                    {b}
                  </li>
                ))}
              </ol>

              <h4 className="mt-8 text-sm font-bold text-white/60">コース（基礎編のあとに選ぶ。いくつでも同時に進められます）</h4>
              <ul className="mt-3 space-y-3">
                {learnCourses.map((c) => (
                  <li key={c.name} className="rounded-2xl bg-white/[0.07] p-4">
                    <p className="font-bold">{c.name}</p>
                    <p className="mt-1 text-sm leading-relaxed text-white/70">{c.body}</p>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm leading-relaxed text-white/70">
                各コースの最後に修了課題があり、定例会で発表します。基礎編を終えたら、コースの途中でも OIF のプロジェクトに参加できます。
              </p>
            </Reveal>
          </div>

          <Reveal className="mt-6 rounded-2xl border border-ink/10 bg-canvas p-5 md:p-6 text-sm md:text-base leading-relaxed">
            OIF学習は、Discord で勉強・制作のロールが付くと使えるようになります。
            <Link href="/join/" className="ml-1 font-bold underline underline-offset-4">
              参加の流れを見る
            </Link>
          </Reveal>
        </div>
      </section>

      {/* つくる */}
      <section id="build" className="scroll-mt-20 border-b border-ink/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28">
          <Reveal>
            <SectionHeading label="つくる" title="実際に動くものをつくる">
              <p>記事を読んで分かることと、自分でつくれることは別です。OIF では、実際に動くものをつくるところまで取り組みます。メンバーがつくったものの例です。</p>
            </SectionHeading>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {projects.map((p, i) => (
              <Reveal key={p.slug} delay={i * 80}>
                <Link
                  href={`/projects/${p.slug}/`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white hover:shadow-card transition-shadow duration-200"
                >
                  {p.image && (
                    <span className="relative block aspect-[16/10] overflow-hidden border-b border-ink/10">
                      <Image
                        src={p.image}
                        alt={`${p.name} の画面`}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-500 ease-smooth"
                      />
                    </span>
                  )}
                  <span className="flex flex-1 flex-col p-6">
                    <span className="text-xs font-bold text-ink/50">{p.status}</span>
                    <span className="mt-1 text-xl font-black">{p.name}</span>
                    <span className="mt-2 text-sm leading-relaxed text-ink/70">{p.tagline}</span>
                    <span className="mt-auto pt-5 text-sm font-bold text-ink/60 group-hover:text-ink">詳しく見る →</span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 発表する */}
      <section id="present" className="scroll-mt-20 bg-white border-b border-ink/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28 grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <SectionHeading label="発表する" title="つくったものを人前に出す">
              <p>
                つくったものは、団体の中だけで終わらせずに発表します。定例会では、完成していなくても発表できます。「途中までつくった」「やってみたら動かなかった」も発表になります。OIF学習の修了課題も、定例会で発表します。
              </p>
            </SectionHeading>
          </Reveal>

          <div className="lg:col-span-6 lg:col-start-7">
            <p className="text-sm font-bold text-ink/50">学外での発表</p>
            {contests.map((c) => (
              <Reveal key={c.name} className="mt-4 overflow-hidden rounded-2xl border border-ink/10 bg-canvas">
                <span className="relative block aspect-[16/9]">
                  <Image src={c.image} alt={`${c.name} での発表`} fill sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover" />
                </span>
                <div className="p-6">
                  <span className="inline-block rounded-full bg-ink px-3 py-1 text-xs font-bold text-white">{c.result}</span>
                  <h3 className="mt-3 text-xl font-black">{c.name}</h3>
                  <p className="mt-1 text-sm text-ink/60">{c.detail}</p>
                  <p className="mt-3 text-sm md:text-base leading-relaxed text-ink/75">{c.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* これまでの記録 */}
      <section id="archive" className="scroll-mt-20 border-b border-ink/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28">
          <Reveal>
            <SectionHeading label="これまでの記録" title="これまでに開いたイベント">
              <p>過去に開いたハンズオン・ワークショップと LT会の記録です。資料は公開しているものだけ載せています。</p>
            </SectionHeading>
          </Reveal>

          <ul className="mt-12 grid gap-4 md:grid-cols-2">
            {pastSessions.map((s, i) => (
              <li
                key={`${s.date}-${s.title}`}
                className="reveal flex flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white sm:flex-row"
                style={{ animationDelay: `${(i % 2) * 60}ms` }}
              >
                {s.image && (
                  <span className="relative block aspect-[4/3] sm:aspect-auto sm:w-40 shrink-0 border-b sm:border-b-0 sm:border-r border-ink/10">
                    <Image src={s.image} alt={s.imageAlt ?? s.title} fill sizes="(max-width: 640px) 100vw, 10rem" className="object-cover" />
                  </span>
                )}
                <div className="flex flex-1 flex-col p-5">
                  <time className="text-xs font-bold text-ink/50">{s.date}</time>
                  <h3 className="mt-1 font-black">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70">{s.description}</p>
                  {s.materialHref && (
                    <a
                      href={s.materialHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-1 self-start text-sm font-bold underline underline-offset-4"
                    >
                      {s.materialLabel}
                      <ArrowUpRight className="h-4 w-4" aria-hidden />
                    </a>
                  )}
                </div>
              </li>
            ))}
          </ul>

          {ltEvents.map((lt) => (
            <Reveal key={lt.slug} className="mt-4 overflow-hidden rounded-2xl border border-ink/10 bg-white">
              <div className="grid grid-cols-3 gap-px bg-ink/10">
                {lt.photos.map((p) => (
                  <span key={p.src} className="relative block aspect-[4/3]">
                    <Image src={p.src} alt={p.alt} fill sizes="(max-width: 768px) 33vw, 25vw" className="object-cover" />
                  </span>
                ))}
              </div>
              <div className="p-5 md:p-6">
                <time className="text-xs font-bold text-ink/50">{lt.dateLabel}</time>
                <h3 className="mt-1 font-black">{lt.title}</h3>
                <ul className="mt-3 divide-y divide-ink/10 border-t border-ink/10">
                  {lt.talks.map((t) => (
                    <li key={t.title} className="flex items-center justify-between gap-4 py-3 text-sm">
                      <span className="font-bold">{t.title}</span>
                      {t.slideUrl && (
                        <a
                          href={t.slideUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex shrink-0 items-center gap-1 font-bold underline underline-offset-4"
                        >
                          スライド
                          <ArrowUpRight className="h-4 w-4" aria-hidden />
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-ink text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-24 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <p className="text-2xl md:text-3xl font-black leading-snug">まずは Discord から。</p>
          <DiscordCTA location="activities_bottom" variant="brandOnDark" size="md" label="Discord に参加する" />
        </div>
      </section>
    </div>
  );
}
