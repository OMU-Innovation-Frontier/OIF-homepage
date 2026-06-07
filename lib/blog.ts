import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export interface PostMeta {
  slug: string;
  title: string;
  date: string; // YYYY-MM-DD
  excerpt: string;
  tags: string[];
  author?: string;
  readingMinutes: number;
}

function readingMinutes(body: string): number {
  // ~500 Japanese chars / min as a rough heuristic.
  const chars = body.replace(/\s/g, "").length;
  return Math.max(1, Math.round(chars / 500));
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf8");
      const { data, content } = matter(raw);
      return {
        slug,
        title: String(data.title ?? slug),
        date: String(data.date ?? ""),
        excerpt: String(data.excerpt ?? ""),
        tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
        author: data.author ? String(data.author) : undefined,
        readingMinutes: readingMinutes(content),
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostSource(slug: string): string {
  return fs.readFileSync(path.join(BLOG_DIR, `${slug}.mdx`), "utf8");
}

/** "2026-05-24" -> "2026.05.24" */
export function formatDate(date: string): string {
  return date.replace(/-/g, ".");
}
