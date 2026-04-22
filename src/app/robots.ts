import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/privacidad', '/terminos'],
    },
    sitemap: 'https://www.itmano.com/sitemap.xml',
  }
}
