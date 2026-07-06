import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const BLOG_DIR = path.join(process.cwd(), 'content/blog')

export interface PostMeta {
  slug: string
  title: string
  description: string
  date: string
  keywords?: string[]
  image?: string
  readingTime?: number
}

export interface Post extends PostMeta {
  content: string
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(BLOG_DIR)) return []
  const files = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith('.mdx') || f.endsWith('.md'))
  return files
    .map(file => {
      const slug = file.replace(/\.mdx?$/, '')
      const raw = fs.readFileSync(path.join(BLOG_DIR, file), 'utf8')
      const { data } = matter(raw)
      const words = raw.split(/\s+/).length
      return {
        slug,
        title: data.title ?? '',
        description: data.description ?? '',
        date: data.date ?? '',
        keywords: data.keywords ?? [],
        image: data.image ?? null,
        readingTime: Math.ceil(words / 200),
      } as PostMeta
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPost(slug: string): Post | null {
  const candidates = [`${slug}.mdx`, `${slug}.md`]
  for (const c of candidates) {
    const p = path.join(BLOG_DIR, c)
    if (fs.existsSync(p)) {
      const raw = fs.readFileSync(p, 'utf8')
      const { data, content } = matter(raw)
      const words = raw.split(/\s+/).length
      return {
        slug,
        title: data.title ?? '',
        description: data.description ?? '',
        date: data.date ?? '',
        keywords: data.keywords ?? [],
        image: data.image ?? null,
        readingTime: Math.ceil(words / 200),
        content,
      }
    }
  }
  return null
}
