import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { getAllProjects, getProject } from "@/lib/projects";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllProjects().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.name} | OIF メンバーがつくったもの`,
    description: project.summary,
    alternates: { canonical: `https://oif-ai.com/projects/${slug}/` },
    openGraph: {
      title: project.name,
      description: project.summary,
      type: "article",
      url: `https://oif-ai.com/projects/${slug}/`,
    },
  };
}

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <section className="grid gap-4 border-t border-ink/10 py-10 md:grid-cols-4 md:gap-8 md:py-12">
      <h2 className="text-lg font-black">{label}</h2>
      <div className="md:col-span-3">{children}</div>
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((t) => (
        <li key={t} className="flex items-start gap-3 text-base leading-relaxed text-ink/80">
          <span className="mt-[0.7em] h-1.5 w-1.5 shrink-0 rounded-full bg-ink" aria-hidden />
          {t}
        </li>
      ))}
    </ul>
  );
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const shots = project.images && project.images.length > 0 ? project.images : project.image ? [project.image] : [];

  return (
    <div className="bg-canvas text-ink">
      <section className="border-b border-ink/10">
        <div className="max-w-5xl mx-auto px-6 md:px-12 pt-12 pb-14 md:pt-16 md:pb-20">
          <Link href="/#step-build" className="text-sm font-bold text-ink/60 hover:text-ink transition-colors">
            ← メンバーがつくったもの
          </Link>
          <p className="mt-10 text-sm font-bold text-ink/55">{project.status}</p>
          <h1 className="mt-2 font-black leading-tight text-[clamp(2.25rem,6vw,3.75rem)]">{project.name}</h1>
          <p className="mt-5 max-w-2xl text-base md:text-lg leading-loose text-ink/70">{project.tagline}</p>
          {project.href && (
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-bold text-white hover:bg-ink/85 transition-colors"
            >
              サービスを開く
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </a>
          )}
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 md:px-12">
        {shots.length > 0 && (
          <div className={`mt-10 grid gap-4 ${shots.length > 1 ? "md:grid-cols-3" : ""}`}>
            {shots.map((img, idx) => (
              <div
                key={img}
                className={`overflow-hidden rounded-2xl border border-ink/10 bg-white ${idx > 0 ? "hidden md:block" : ""}`}
              >
                <Image
                  src={img}
                  alt={`${project.name} の画面 ${idx + 1}`}
                  width={1200}
                  height={750}
                  className="h-auto w-full"
                />
              </div>
            ))}
          </div>
        )}

        <p className="py-10 md:py-14 text-base md:text-lg leading-loose text-ink/80">{project.summary}</p>

        <Block label="課題">
          <p className="text-base leading-relaxed text-ink/80">{project.challenge}</p>
        </Block>

        <Block label="やったこと">
          <BulletList items={project.approach} />
        </Block>

        {project.tech && project.tech.length > 0 && (
          <Block label="使った技術">
            <ul className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <li key={t} className="rounded-full border border-ink/15 bg-white px-3 py-1 text-sm">
                  {t}
                </li>
              ))}
            </ul>
          </Block>
        )}

        <Block label="成果">
          <BulletList items={project.outcome} />
        </Block>
      </div>

      <section className="max-w-5xl mx-auto px-6 md:px-12 pb-16">
        <div className="flex flex-col gap-6 rounded-3xl border border-ink/10 bg-white p-6 md:flex-row md:items-center md:justify-between md:p-10">
          <p className="text-lg font-bold leading-relaxed">OIF では、メンバーがこうしたものをつくっています。</p>
          <Link
            href="/join/"
            className="inline-flex shrink-0 items-center self-start rounded-full bg-ink px-6 py-3 text-sm font-bold text-white hover:bg-ink/85 transition-colors md:self-auto"
          >
            参加の流れを見る
          </Link>
        </div>
      </section>
    </div>
  );
}
