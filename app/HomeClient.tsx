import Link from "next/link";
import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { flowSteps } from "@/lib/flow";
import { discordAbout } from "@/lib/join";
import { learnNote, learnStages } from "@/lib/oif-learn";
import { projects } from "@/lib/projects";
import { achievements } from "@/lib/achievements";
import { pastSessions } from "@/lib/archive";
import { ltEvents } from "@/lib/lt-events";
import { newsItems } from "@/lib/news";
import DiscordCTA from "@/components/ui/DiscordCTA";
import JoinSteps from "@/components/site/JoinSteps";
import RoleChoices from "@/components/site/RoleChoices";
import StepSection, { StepBlock } from "@/components/site/StepSection";
import PhotoStack from "@/components/site/PhotoStack";
import HeroSlideshow from "@/components/site/HeroSlideshow";

const [stepJoin, stepLearn, stepBuild, stepPresent] = flowSteps;

const meetings = [
  {
    title: "進み具合を報告する回",
    body: "それぞれが、いま取り組んでいることと、詰まっているところを報告します。詰まっているところは、その場で相談します。",
  },
  {
    title: "集まって作業する回",
    body: "同じ場所で、それぞれの作業を進めます。分からないことがあれば、近くのメンバーに聞けます。",
  },
];

const pastEvents = [
  ...pastSessions.map((s) => ({ date: s.date, title: s.title, href: s.materialHref, label: s.materialLabel })),
  ...ltEvents.map((lt) => ({ date: lt.date.replaceAll("-", "."), title: lt.title, href: undefined, label: undefined })),
].sort((a, b) => b.date.localeCompare(a.date));

const heroSlides = [
  { src: "/images/lt/lt1-02.webp", alt: "発表するメンバー" },
  { src: "/images/vibe-coding-workshop.webp", alt: "ワークショップで作業するメンバー" },
  { src: "/images/lt/lt1-03.webp", alt: "発表するメンバー" },
  { src: "/images/first-workshop.webp", alt: "つくったアプリを発表するメンバー" },
  { src: "/images/lt/lt1-01.webp", alt: "発表を聞くメンバー" },
];

const eventPhotos = [
  { src: "/images/first-workshop.webp", alt: "第1回ワークショップの様子" },
  { src: "/images/lt/lt1-03.webp", alt: "LT会での発表の様子" },
  { src: "/images/vibe-coding-workshop.webp", alt: "Vibe Codingワークショップの様子" },
  { src: "/images/llm-handson.webp", alt: "ローカルLLMハンズオンの参加者" },
  { src: "/images/lt/lt1-01.webp", alt: "LT会での発表の様子" },
];

export default function HomeClient() {
  return (
    <div className="bg-canvas text-ink">
      {/* ============ 最初の画面 ============ */}
      <section>
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-12 pb-16 md:pt-20 md:pb-24 grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <p className="text-sm font-bold text-ink/55 animate-fade-up">大阪公立大学の AI コミュニティ</p>
            <h1 className="mt-5 font-black leading-[1.15] text-[clamp(2.5rem,6.5vw,4.75rem)] animate-fade-up [animation-delay:80ms]">
              <span className="whitespace-nowrap">初心者から、</span>
              <wbr />
              <span className="whitespace-nowrap">即戦力へ。</span>
            </h1>
            <p className="mt-7 max-w-xl text-base md:text-lg leading-loose text-ink/75 animate-fade-up [animation-delay:160ms]">
              OIF（OMU Innovation Frontier）は、大阪公立大学の学生がつくっている AI のコミュニティです。AI は少し学ぶだけで、できることが大きく増えます。プログラミングの経験がない人も、順番に学んで、実際に使われるものをつくるところまで進みます。
            </p>
            <ul className="mt-6 flex flex-wrap gap-2 animate-fade-up [animation-delay:200ms]">
              {["会費無料", "プログラミング経験不要", "文系・1年生も歓迎"].map((t) => (
                <li key={t} className="rounded-full border border-ink/15 bg-white px-3 py-1 text-xs font-bold text-ink/70">
                  {t}
                </li>
              ))}
            </ul>
            <div className="mt-9 flex flex-wrap gap-3 animate-fade-up [animation-delay:240ms]">
              <DiscordCTA location="home_hero" variant="brand" size="md" label="Discord に参加する" />
              <a
                href="#flow"
                className="inline-flex items-center gap-2 rounded-full border border-ink/20 bg-white px-6 py-3 text-sm font-bold hover:border-ink/40 transition-colors duration-200"
              >
                活動の流れを見る
                <ArrowDown className="h-4 w-4" aria-hidden />
              </a>
            </div>
          </div>

          <div className="hidden lg:block lg:col-span-6 animate-fade-up [animation-delay:200ms]">
            <HeroSlideshow slides={heroSlides} />
          </div>
        </div>
      </section>

      {/* ============ 活動の流れ（概要） ============ */}
      <section id="flow" className="scroll-mt-16 border-t border-ink/10 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-14 md:py-24">
          <div className="reveal max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-black leading-snug">活動の流れ</h2>
            <p className="mt-4 text-base md:text-lg leading-relaxed text-ink/70">
              OIF での活動は、次の4つの段階で進みます。それぞれの詳しい内容は、このページの下で説明しています。
            </p>
          </div>

          <ol className="mt-8 grid gap-3 md:mt-12 md:grid-cols-2 md:gap-4 lg:grid-cols-4">
            {flowSteps.map((f) => (
              <li key={f.id} className="reveal">
                <a
                  href={`#${f.id}`}
                  className="group flex h-full flex-col rounded-2xl border border-ink/10 bg-canvas p-5 md:p-6 hover:border-ink/30 hover:bg-white hover:shadow-card transition-all duration-200"
                >
                  <span className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-xs font-bold text-white">
                      {f.step}
                    </span>
                    <span className="text-sm font-bold">{f.name}</span>
                  </span>
                  <span className="mt-4 text-lg font-black leading-snug md:mt-5">{f.title}</span>
                  <span className="mt-3 hidden text-sm leading-relaxed text-ink/70 md:block">{f.body}</span>
                  <span className="mt-auto pt-4 md:pt-6 inline-flex items-center gap-1 text-sm font-bold text-ink/55 group-hover:text-ink transition-colors">
                    詳しく見る
                    <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" aria-hidden />
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ============ 01 入る ============ */}
      <StepSection step={stepJoin}>
        <StepBlock title="Discord について">
          <div className="rounded-2xl border border-ink/10 bg-white p-6 space-y-3 text-sm md:text-base leading-relaxed text-ink/75">
            {discordAbout.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </StepBlock>

        <StepBlock title="参加の流れ">
          <JoinSteps />
        </StepBlock>

        <StepBlock title="Discord で選ぶ項目" lead="Discord に入ると、次の2つを選択肢から選びます。選んだ内容に合わせてロールが付きます。">
          <RoleChoices />
        </StepBlock>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
          <DiscordCTA location="home_step_join" variant="brand" size="md" label="Discord に参加する" />
          <Link href="/join/#discord-account" className="text-sm font-bold underline underline-offset-4">
            Discord のアカウントの作り方
          </Link>
        </div>
      </StepSection>

      {/* ============ 02 学ぶ ============ */}
      <StepSection step={stepLearn} tone="white">
        <StepBlock title="Noema" lead="OIF のメンバーが記事を書いている技術メディアです。だれでも読めます。">
          <a
            href="https://noema-learn.uk/"
            target="_blank"
            rel="noopener noreferrer"
            className="group grid overflow-hidden rounded-2xl border border-ink/10 bg-canvas sm:grid-cols-5 hover:border-ink/30 transition-colors"
          >
            <span className="relative block aspect-[16/10] sm:col-span-2 sm:aspect-auto border-b sm:border-b-0 sm:border-r border-ink/10 bg-white">
              <Image
                src="/images/noema-screenshot.webp"
                alt="Noema のシリーズ一覧の画面"
                fill
                sizes="(max-width: 640px) 100vw, 20rem"
                className="object-cover object-left-top"
              />
            </span>
            <span className="flex flex-col p-6 sm:col-span-3">
              <span className="text-sm leading-relaxed text-ink/75">
                AI で何ができるかと、それがなぜ動くのかを、具体例を使って説明しています。記事はテーマごとのシリーズにまとまっていて、順番に読めます。
              </span>
              <span className="mt-auto pt-5 inline-flex items-center gap-1 text-sm font-bold">
                Noema を読む
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
              </span>
            </span>
          </a>
        </StepBlock>

        <StepBlock
          title="OIF学習の進め方"
          lead="勉強・制作のメンバー向けの学習プログラムです。学ぶ順番とやることをまとめています。"
        >
          <ol className="grid gap-3 md:grid-cols-3">
            {learnStages.map((st, n) => (
              <li key={st.name} className="rounded-2xl border border-ink/10 bg-canvas p-5">
                <span className="text-xs font-bold text-ink/50">STEP {n + 1}</span>
                <span className="mt-2 block text-lg font-black">{st.name}</span>
                <span className="mt-2 block text-sm leading-relaxed text-ink/70">{st.body}</span>
              </li>
            ))}
          </ol>

          <p className="mt-4 rounded-2xl border border-dashed border-ink/20 px-5 py-4 text-sm leading-relaxed text-ink/70">
            {learnNote}
          </p>

          <p className="mt-4 text-sm leading-relaxed text-ink/65">
            OIF学習は、Discord で勉強・制作のロールが付くと使えるようになります。進めるにはパソコンが必要です。期限はありません。
          </p>
          <Link href="/learn/" className="mt-6 inline-flex items-center gap-1 text-sm font-bold underline underline-offset-4">
            Noema と OIF学習について詳しく見る
          </Link>
        </StepBlock>
      </StepSection>

      {/* ============ 03 つくる ============ */}
      <StepSection step={stepBuild}>
        <StepBlock title="週1回の定例会" lead="定例会には2種類の回があります。">
          <div className="grid gap-4 sm:grid-cols-2">
            {meetings.map((m) => (
              <div key={m.title} className="rounded-2xl border border-ink/10 bg-white p-5">
                <p className="font-bold">{m.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{m.body}</p>
              </div>
            ))}
          </div>
        </StepBlock>

        <StepBlock title="メンバーがつくったもの">
          <div className="grid gap-4 md:grid-cols-3">
            {projects.map((p) => (
              <Link
                key={p.slug}
                href={`/projects/${p.slug}/`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white hover:border-ink/30 hover:shadow-card transition-all duration-200"
              >
                {p.image && (
                  <span className="relative block aspect-[16/10] overflow-hidden border-b border-ink/10">
                    <Image
                      src={p.image}
                      alt={`${p.name} の画面`}
                      fill
                      sizes="(max-width: 768px) 100vw, 20rem"
                      className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-500 ease-smooth"
                    />
                  </span>
                )}
                <span className="flex flex-1 flex-col p-5">
                  <span className="text-xs font-bold text-ink/50">{p.status}</span>
                  <span className="mt-1 text-lg font-black">{p.name}</span>
                  <span className="mt-2 text-sm leading-relaxed text-ink/70">{p.tagline}</span>
                </span>
              </Link>
            ))}
          </div>
        </StepBlock>
      </StepSection>

      {/* ============ 04 発表する ============ */}
      <StepSection step={stepPresent} tone="white">
        <StepBlock title="メンバーの実績">
          <ul className="grid gap-4 sm:grid-cols-2">
            {achievements.map((a) => (
              <li key={a.title} className="rounded-2xl border border-ink/10 bg-canvas p-5">
                <span className="inline-block rounded-full border border-ink/25 px-3 py-0.5 text-xs font-bold">{a.category}</span>
                <p className="mt-3 font-bold leading-relaxed">{a.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-ink/70">{a.detail}</p>
              </li>
            ))}
          </ul>
        </StepBlock>

        <div id="archive" className="scroll-mt-24">
          <StepBlock title="これまでに開いたイベント" lead="過去に開いたハンズオン・ワークショップと LT会です。資料は公開しているものだけ載せています。">
            <ul className="divide-y divide-ink/10 border-y border-ink/10">
              {pastEvents.map((e) => (
                <li key={`${e.date}-${e.title}`} className="flex flex-col gap-1 py-4 sm:flex-row sm:items-center sm:gap-6">
                  <time className="w-24 shrink-0 text-sm font-bold text-ink/50">{e.date}</time>
                  <span className="flex-1 font-bold">{e.title}</span>
                  {e.href && (
                    <a
                      href={e.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 self-start text-sm font-bold underline underline-offset-4 sm:self-auto"
                    >
                      {e.label}
                      <ArrowUpRight className="h-4 w-4" aria-hidden />
                    </a>
                  )}
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <PhotoStack photos={eventPhotos} />
            </div>
          </StepBlock>
        </div>
      </StepSection>

      {/* ============ お知らせ ============ */}
      <section className="border-t border-ink/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-20 grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="text-2xl font-black">お知らせ</h2>
            <Link href="/news/" className="mt-4 inline-block text-sm font-bold text-ink/60 hover:text-ink transition-colors">
              すべてのお知らせ →
            </Link>
          </div>
          <ul className="lg:col-span-8 divide-y divide-ink/10 border-y border-ink/10">
            {newsItems.slice(0, 3).map((item) => (
              <li key={`${item.date}-${item.title}`} className="flex flex-col gap-1 py-4 sm:flex-row sm:gap-6">
                <time className="w-24 shrink-0 text-sm font-bold text-ink/50">{item.date}</time>
                <span className="font-bold">{item.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ============ 参加 ============ */}
      <section className="border-t border-ink/10 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-20">
          <div className="flex flex-col gap-6 rounded-3xl border border-ink/10 bg-canvas p-6 md:flex-row md:items-center md:justify-between md:p-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-black leading-snug">参加について</h2>
              <p className="mt-3 leading-relaxed text-ink/70">
                Discord に入って、所属とやりたいことを選んでください。会費はかかりません。Discord を使ったことがない人は、
                <Link href="/join/#discord-account" className="font-bold underline underline-offset-4">アカウントの作り方</Link>
                を見てください。
              </p>
            </div>
            <DiscordCTA location="home_bottom" variant="brand" size="md" label="Discord に参加する" className="shrink-0 self-start md:self-auto" />
          </div>
        </div>
      </section>
    </div>
  );
}
