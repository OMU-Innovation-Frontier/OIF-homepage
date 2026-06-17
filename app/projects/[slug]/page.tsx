import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
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
    title: `${project.name} | OIF Projects`,
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
    <section className="border-t border-ink/10 py-12 md:py-16">
      <p className="section-label mb-6">{label}</p>
      {children}
    </section>
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

  return (
    <div className="bg-paper text-ink -mt-14 md:-mt-16 pt-14 md:pt-16 min-h-screen">
      {/* Hero */}
      <section className="relative border-b border-ink/10 bg-paper">
        <div className="relative max-w-5xl mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28">
          <Link
            href="/activities/"
            className="inline-flex items-center gap-1 font-mono text-xs tracking-widest text-ink/60 hover:text-ink transition-colors mb-12"
          >
            ← back to activities
          </Link>
          <p className="section-label mb-5">
            CASE STUDY · {project.status}
          </p>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-5">{project.name}</h1>
          <p className="text-lg md:text-xl text-ink/70 leading-relaxed max-w-2xl mb-8">
            {project.tagline}
          </p>
          {project.href && (
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 text-sm font-bold tracking-widest uppercase border border-accent hover:bg-accent-bright hover:text-night hover:border-accent-bright transition-colors duration-200"
            >
              サービスを見る →
            </a>
          )}
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-20">
        {project.images && project.images.length > 0 ? (
          <>
            {/* パソコン用：3枚並べる */}
            <div className="hidden md:grid md:grid-cols-3 bg-[#141e2e] border-x border-b border-ink/10 p-6 md:p-10 gap-4 justify-items-center items-stretch">
              {project.images.map((img, idx) => (
                <div key={idx} className="flex items-center justify-center w-full bg-[#0d1520] p-2 border border-ink/5 rounded-lg shadow-xl">
                  <Image
                    src={img}
                    alt={`${project.name} screenshot ${idx + 1}`}
                    width={320}
                    height={480}
                    className="w-full h-auto object-contain max-h-[32rem]"
                  />
                </div>
              ))}
            </div>
            {/* スマホ用：既存の1枚を表示 */}
            <div className="md:hidden bg-[#141e2e] border-x border-b border-ink/10 p-6 flex items-center justify-center">
              <Image
                src={project.images[0]}
                alt={project.name}
                width={640}
                height={400}
                className="w-full h-auto object-contain max-h-[28rem]"
              />
            </div>
          </>
        ) : (
          project.image && (
            <div className="bg-[#141e2e] border-x border-b border-ink/10 p-6 md:p-10 flex items-center justify-center">
              <Image
                src={project.image}
                alt={project.name}
                width={960}
                height={600}
                className="w-full h-auto object-contain max-h-[28rem]"
              />
            </div>
          )
        )}

        <p className="text-lg md:text-xl text-ink/75 leading-relaxed py-12 md:py-16">
          {project.summary}
        </p>

        <Block label="課題">
          <p className="text-base md:text-lg text-ink/70 leading-relaxed max-w-3xl">
            {project.challenge}
          </p>
        </Block>

        <Block label="アプローチ">
          <ul className="space-y-4 max-w-3xl">
            {project.approach.map((a) => (
              <li key={a} className="flex items-start gap-4">
                <span className="mt-2 h-1.5 w-1.5 bg-accent-bright shrink-0" />
                <span className="text-base md:text-lg text-ink/80 leading-relaxed">{a}</span>
              </li>
            ))}
          </ul>
        </Block>

        {project.tech && project.tech.length > 0 && (
          <Block label="技術">
            <div className="flex flex-wrap gap-2 font-mono text-xs tracking-widest text-ink/60">
              {project.tech.map((t) => (
                <span key={t} className="border border-ink/15 px-3 py-1.5">{t}</span>
              ))}
            </div>
          </Block>
        )}

        <Block label="成果">
          <ul className="space-y-4 max-w-3xl">
            {project.outcome.map((o) => (
              <li key={o} className="flex items-start gap-4">
                <span className="mt-2 h-1.5 w-1.5 bg-accent-bright shrink-0" />
                <span className="text-base md:text-lg text-ink/80 leading-relaxed">{o}</span>
              </li>
            ))}
          </ul>
        </Block>

        <div className="border-t border-ink/10 py-16">
          <Link
            href="/join/"
            className="font-mono text-sm text-ink/50 hover:text-ink transition-colors"
          >
            $ こういうものを一緒に作る → /join
          </Link>
        </div>
      </div>
    </div>
  );
}
