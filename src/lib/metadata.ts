import type { Metadata } from 'next'

export function generatePageMetadata(
  title: string,
  description: string,
  path: string = '/',
): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://www.itmano.com${path}`,
    },
  }
}
