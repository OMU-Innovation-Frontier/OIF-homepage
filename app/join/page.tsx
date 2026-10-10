import { Metadata } from "next";
import { ChevronDown } from "lucide-react";
import PageHeader from "@/components/site/PageHeader";
import SectionHeading from "@/components/site/SectionHeading";
import JoinSteps from "@/components/site/JoinSteps";
import RoleChoices from "@/components/site/RoleChoices";
import DiscordCTA from "@/components/ui/DiscordCTA";
import Reveal from "@/components/ui/Reveal";
import { discordAbout, discordSignup, faqs, welcomeConditions } from "@/lib/join";

export const metadata: Metadata = {
  title: "参加について | OIF 大阪公立大学のAIサークル",
  description:
    "OIF（OMU Innovation Frontier）への参加は Discord から。Discord のアカウントの作り方、参加の流れ、よくある質問。会費無料・プログラミング経験不問・文系も1年生も歓迎。",
  alternates: {
    canonical: "https://oif-ai.com/join/",
  },
};

export default function JoinPage() {
  return (
    <div className="bg-canvas text-ink">
      <PageHeader
        title="参加について"
        lead="OIF への参加は Discord から行います。会費は無料で、プログラミングの経験もいりません。文系の学生も1年生も参加できます。"
      />

      <section className="border-b border-ink/10 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-14 md:py-20 grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <SectionHeading title="Discord について" />
          </Reveal>
          <div className="lg:col-span-7 space-y-3 text-base leading-loose text-ink/75">
            {discordAbout.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section id="discord-account" className="scroll-mt-20 border-b border-ink/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-14 md:py-20 grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <SectionHeading title="Discord のアカウントの作り方">
              <p>
                Discord を使ったことがない人は、次の順番でアカウントを作ってください。すでにアカウントがある人は、この手順は飛ばして、下の「参加の流れ」に進んでください。
              </p>
            </SectionHeading>
          </Reveal>
          <ol className="lg:col-span-7 space-y-3">
            {discordSignup.map((s, i) => (
              <li key={s.title} className="flex gap-4 rounded-2xl border border-ink/10 bg-white p-5">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-ink/25 text-sm font-bold">
                  {i + 1}
                </span>
                <span className="pt-0.5">
                  <span className="block font-bold leading-relaxed">{s.title}</span>
                  <span className="mt-1 block text-sm leading-relaxed text-ink/65">{s.body}</span>
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="flow" className="scroll-mt-20 border-b border-ink/10 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-14 md:py-20 grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <SectionHeading title="参加の流れ">
              <p>Discord に入ったあと、所属とやりたいことを選択肢から選びます。選んだ内容に合わせてロールが付きます。</p>
            </SectionHeading>
            <div className="mt-8 hidden lg:block">
              <DiscordCTA location="join_steps" variant="brand" size="md" label="Discord に参加する" />
            </div>
          </Reveal>
          <div className="lg:col-span-7 space-y-6">
            <JoinSteps />
            <RoleChoices />
            <div className="lg:hidden">
              <DiscordCTA location="join_steps_mobile" variant="brand" size="md" label="Discord に参加する" />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-ink/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-14 md:py-20 grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <SectionHeading title="参加の条件" />
          </Reveal>
          <ul className="lg:col-span-7 space-y-3">
            {welcomeConditions.map((c) => (
              <li key={c} className="rounded-2xl border border-ink/10 bg-white px-5 py-4 font-bold leading-relaxed">
                {c}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="faq" className="scroll-mt-20 border-b border-ink/10 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-14 md:py-20 grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <SectionHeading title="よくある質問" />
          </Reveal>
          <div className="lg:col-span-7 space-y-3">
            {faqs.map((f) => (
              <details key={f.question} className="group rounded-2xl border border-ink/10 bg-canvas">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-bold leading-relaxed [&::-webkit-details-marker]:hidden">
                  {f.question}
                  <ChevronDown
                    className="h-5 w-5 shrink-0 text-ink/50 transition-transform duration-200 group-open:rotate-180"
                    aria-hidden
                  />
                </summary>
                <p className="px-5 pb-5 text-sm md:text-base leading-loose text-ink/70">{f.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-14 md:py-20">
          <div className="flex flex-col gap-6 rounded-3xl border border-ink/10 bg-white p-6 md:flex-row md:items-center md:justify-between md:p-10">
            <p className="text-lg md:text-xl font-bold leading-relaxed">ほかに質問があれば、Discord で運営に連絡してください。</p>
            <DiscordCTA location="join_bottom" variant="brand" size="md" label="Discord に参加する" className="shrink-0 self-start md:self-auto" />
          </div>
        </div>
      </section>
    </div>
  );
}
