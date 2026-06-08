import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import { getAllPosts, getPostSource, formatDate } from "@/lib/blog";

export const dynamicParams = false;

interface Frontmatter {
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  author?: string;
}

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getAllPosts().find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | OIF Blog`,
    description: post.excerpt,
    alternates: { canonical: `https://oif-ai.com/blog/${slug}/` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: `https://oif-ai.com/blog/${slug}/`,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const exists = getAllPosts().some((p) => p.slug === slug);
  if (!exists) notFound();

  const source = getPostSource(slug);
  const { content, frontmatter } = await compileMDX<Frontmatter>({
    source,
    options: { parseFrontmatter: true },
  });

  return (
    <div className="on-dark bg-night text-white -mt-14 md:-mt-16 pt-14 md:pt-16 min-h-screen">
      <article className="max-w-3xl mx-auto px-6 md:px-12 lg:px-8 py-20 md:py-28">
        <Link
          href="/blog/"
          className="inline-flex items-center gap-1 font-mono text-xs tracking-widest text-white/60 hover:text-accent-bright transition-colors mb-12"
        >
          ← back to blog
        </Link>

        <div className="flex flex-wrap items-center gap-4 font-mono text-xs tracking-widest text-white/60 mb-6">
          <time>{formatDate(frontmatter.date)}</time>
          {frontmatter.author && (
            <>
              <span className="text-white/20">/</span>
              <span>{frontmatter.author}</span>
            </>
          )}
        </div>

        <h1 className="text-3xl md:text-5xl font-black tracking-tighter leading-[1.05] mb-6">
          {frontmatter.title}
        </h1>

        <div className="flex flex-wrap gap-2 font-mono text-[11px] tracking-widest text-white/60 mb-12 pb-12 border-b border-white/10">
          {frontmatter.tags?.map((t) => (
            <span key={t} className="border border-white/15 px-2.5 py-1">{t}</span>
          ))}
        </div>

        <div className="prose prose-invert max-w-none prose-headings:tracking-tight prose-headings:font-bold prose-a:text-accent-bright prose-a:no-underline hover:prose-a:underline prose-strong:text-white prose-blockquote:border-l-accent prose-code:text-accent-bright prose-code:before:content-none prose-code:after:content-none prose-li:marker:text-accent-bright">
          {content}
        </div>

        <div className="mt-16 pt-10 border-t border-white/10">
          <Link
            href="/join/"
            className="font-mono text-sm text-white/50 hover:text-accent-bright transition-colors"
          >
            $ こうした活動に参加する → /join
          </Link>
        </div>
      </article>
    </div>
  );
}
