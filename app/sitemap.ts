import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://oif-ai.com/',
      lastModified: new Date(),
    },
    {
      url: 'https://oif-ai.com/about/',
      lastModified: new Date(),
    },
    {
      url: 'https://oif-ai.com/activities/',
      lastModified: new Date(),
    },
    {
      url: 'https://oif-ai.com/faq/',
      lastModified: new Date(),
    },
    {
      url: 'https://oif-ai.com/join/',
      lastModified: new Date(),
    },
    {
      url: 'https://oif-ai.com/news/',
      lastModified: new Date(),
    },
  ]
}
