import { getAllPosts, getAllResources } from '@/lib/mdx'
import type { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPosts()
  const resources = await getAllResources()

  return [
    { url: 'https://www.itmano.com', lastModified: new Date(), priority: 1.0 },
    { url: 'https://www.itmano.com/recursos', lastModified: new Date(), priority: 0.8 },
    { url: 'https://www.itmano.com/newsletter', lastModified: new Date(), priority: 0.8 },
    ...resources.map((r) => ({
      url: `https://www.itmano.com/recursos/${r.slug}`,
      lastModified: new Date(r.date),
      priority: 0.7,
    })),
    ...posts.map((p) => ({
      url: `https://www.itmano.com/newsletter/${p.slug}`,
      lastModified: new Date(p.date),
      priority: 0.6,
    })),
  ]
}
