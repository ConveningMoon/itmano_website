export interface Post {
  slug: string
  title: string
  date: string
  excerpt: string
  tags: string[]
  readingTime: number
  published: boolean
}

export interface Resource {
  slug: string
  title: string
  date: string
  description: string
  format: string
  published: boolean
}
