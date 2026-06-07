import { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, formatDate } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | OIF 技術ブログ・輪読ノート",
  description:
    "OIF（OMU Innovation Frontier）の技術ブログ。ハンズオンレポート、論文輪読ノート、AI・機械学習の学びのアウトプットを発信しています。",
  alternates: { canonical: "https://oif-ai.com/blog/" },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <div className="on-dark bg-night text-white -mt-14 md:-mt-16 pt-14 md:pt-16 min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div aria-hidden className="absolute inset-0 dot-grid opacity-40" />
        <div aria-hidden className="absolute -top-32 right-0 h-[28rem] w-[28rem] rounded-full bg-accent/15 blur-[120px]" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-24 md:py-32">
          <p className="font-mono text-xs md:text-sm tracking-[0.3em] text-accent-bright mb-6">// BLOG</p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-6">
            技術ブログ・ノート
          </h1>
          <p className="text-lg text-white/60 max-w-2xl leading-relaxed">
            ハンズオンレポート、論文輪読ノート、学びのアウトプット。
            手を動かした記録を残していきます。
          </p>
        </div>
      </section>

      {/* List */}
      <section className="bg-night">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 section-y">
          {posts.length === 0 ? (
            <p className="font-mono text-sm text-white/40">// no posts yet</p>
          ) : (
            <div className="border-t border-white/10">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}/`}
                  className="group block border-b border-white/10 py-8 md:py-10 transition-colors hover:bg-white/[0.02]"
                >
                  <div className="grid md:grid-cols-[180px_1fr] gap-4 md:gap-10">
                    <div className="font-mono text-xs tracking-widest text-white/40 pt-1">
                      {formatDate(post.date)}
                      <span className="block mt-2 text-white/25">{post.readingMinutes} min read</span>
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3 group-hover:text-accent-bright transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-base text-white/60 leading-relaxed mb-5 max-w-2xl">
                        {post.excerpt}
                      </p>
                      <div className="flex flex-wrap gap-2 font-mono text-[11px] tracking-widest text-white/45">
                        {post.tags.map((t) => (
                          <span key={t} className="border border-white/15 px-2.5 py-1">{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
