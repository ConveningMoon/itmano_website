import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import type { Post, Resource } from '@/types'

const NEWSLETTER_DIR = path.join(process.cwd(), 'src/content/newsletter')
const RECURSOS_DIR = path.join(process.cwd(), 'src/content/recursos')

function readMdxFiles(dir: string): string[] {
  if (!fs.existsSync(dir)) return []
  return fs.readdirSync(dir).filter((f) => f.endsWith('.mdx'))
}

export async function getAllPosts(): Promise<Post[]> {
  const files = readMdxFiles(NEWSLETTER_DIR)
  const posts = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, '')
    const raw = fs.readFileSync(path.join(NEWSLETTER_DIR, filename), 'utf8')
    const { data } = matter(raw)
    return {
      slug,
      title: data.title as string,
      date: data.date as string,
      excerpt: data.excerpt as string,
      tags: (data.tags as string[]) ?? [],
      readingTime: (data.readingTime as number) ?? 5,
      published: (data.published as boolean) ?? true,
    }
  })
  return posts
    .filter((p) => p.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export async function getPostBySlug(slug: string): Promise<{ frontmatter: Post; content: string } | null> {
  const filePath = path.join(NEWSLETTER_DIR, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null
  const raw = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(raw)
  return {
    frontmatter: {
      slug,
      title: data.title as string,
      date: data.date as string,
      excerpt: data.excerpt as string,
      tags: (data.tags as string[]) ?? [],
      readingTime: (data.readingTime as number) ?? 5,
      published: (data.published as boolean) ?? true,
    },
    content,
  }
}

export async function getAllResources(): Promise<Resource[]> {
  const files = readMdxFiles(RECURSOS_DIR)
  const resources = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, '')
    const raw = fs.readFileSync(path.join(RECURSOS_DIR, filename), 'utf8')
    const { data } = matter(raw)
    return {
      slug,
      title: data.title as string,
      date: data.date as string,
      description: data.description as string,
      format: (data.format as string) ?? 'PDF',
      published: (data.published as boolean) ?? true,
    }
  })
  return resources.filter((r) => r.published)
}

export async function getResourceBySlug(slug: string): Promise<{ frontmatter: Resource; content: string } | null> {
  const filePath = path.join(RECURSOS_DIR, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null
  const raw = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(raw)
  return {
    frontmatter: {
      slug,
      title: data.title as string,
      date: data.date as string,
      description: data.description as string,
      format: (data.format as string) ?? 'PDF',
      published: (data.published as boolean) ?? true,
    },
    content,
  }
}
