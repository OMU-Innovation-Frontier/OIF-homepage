import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getAllProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects | OIF メンバー開発プロダクト事例",
  description:
    "OIF（OMU Innovation Frontier）メンバーが開発したプロダクトの事例。課題・アプローチ・技術・成果をまとめています。NOEMA、samurAI など。",
  alternates: { canonical: "https://oif-ai.com/projects/" },
};

export default function ProjectsIndexPage() {
  const projects = getAllProjects();

  return (
    <div className="on-dark bg-night text-white -mt-14 md:-mt-16 pt-14 md:pt-16 min-h-screen">
      <section className="relative overflow-hidden border-b border-white/10">
        <div aria-hidden className="absolute inset-0 dot-grid opacity-40" />
        <div aria-hidden className="absolute -top-32 right-0 h-[28rem] w-[28rem] rounded-full bg-accent/15 blur-[120px]" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-24 md:py-32">
          <p className="font-mono text-xs md:text-sm tracking-[0.3em] text-accent-bright mb-6">// PROJECTS</p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-6">
            つくったもの
          </h1>
          <p className="text-lg text-white/60 max-w-2xl leading-relaxed">
            「面白そう」で終わらせず、実際に動くものへ。
            メンバーが開発したプロダクトを、課題から成果まで紹介します。
          </p>
        </div>
      </section>

      <section className="bg-night">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 section-y">
          <div className="grid gap-px bg-white/10 border border-white/10 md:grid-cols-2">
            {projects.map((p) => (
              <Link
                key={p.slug}
                href={`/projects/${p.slug}/`}
                className="group flex flex-col bg-night-2 hover:bg-night-3 transition-colors"
              >
                {p.image && (
                  <div className="bg-[#141e2e] border-b border-white/10 p-6 flex items-center justify-center min-h-[220px]">
                    <Image
                      src={p.image}
                      alt={p.name}
                      width={640}
                      height={400}
                      className="w-full h-auto object-contain max-h-56"
                    />
                  </div>
                )}
                <div className="p-8 md:p-10 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[11px] tracking-widest text-accent-bright">
                      {p.status}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-black tracking-tighter mb-3 group-hover:text-accent-bright transition-colors">
                    {p.name}
                  </h2>
                  <p className="text-sm md:text-base text-white/60 leading-relaxed mb-6 flex-1">
                    {p.tagline}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-bold tracking-widest uppercase">
                    事例を見る
                    <span className="transition-transform duration-200 group-hover:translate-x-1.5">→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
