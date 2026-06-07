import { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/blog'
import { getAllProjects } from '@/lib/projects'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://oif-ai.com'

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: new Date() },
    { url: `${base}/about/`, lastModified: new Date() },
    { url: `${base}/developers/`, lastModified: new Date() },
    { url: `${base}/theory/`, lastModified: new Date() },
    { url: `${base}/activities/`, lastModified: new Date() },
    { url: `${base}/projects/`, lastModified: new Date() },
    { url: `${base}/blog/`, lastModified: new Date() },
    { url: `${base}/faq/`, lastModified: new Date() },
    { url: `${base}/join/`, lastModified: new Date() },
    { url: `${base}/news/`, lastModified: new Date() },
  ]

  const blogRoutes: MetadataRoute.Sitemap = getAllPosts().map((p) => ({
    url: `${base}/blog/${p.slug}/`,
    lastModified: new Date(p.date),
  }))

  const projectRoutes: MetadataRoute.Sitemap = getAllProjects().map((p) => ({
    url: `${base}/projects/${p.slug}/`,
    lastModified: new Date(),
  }))

  return [...staticRoutes, ...blogRoutes, ...projectRoutes]
}
