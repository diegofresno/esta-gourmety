import { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/blog'

const BASE = 'https://estausa.es'

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts()

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE, priority: 1.0, changeFrequency: 'weekly' },
    { url: `${BASE}/solicitar-esta`, priority: 0.9, changeFrequency: 'monthly' },
    { url: `${BASE}/precios`, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${BASE}/que-es-el-esta`, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${BASE}/como-solicitar-el-esta`, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${BASE}/blog`, priority: 0.8, changeFrequency: 'weekly' },
    { url: `${BASE}/requisitos-esta`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${BASE}/validez-esta`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${BASE}/paises-visa-waiver`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${BASE}/faq`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${BASE}/verificar-estado-esta`, priority: 0.6, changeFrequency: 'monthly' },
  ]

  const blogPages: MetadataRoute.Sitemap = posts.map(post => ({
    url: `${BASE}/blog/${post.slug}`,
    lastModified: post.date ? new Date(post.date) : undefined,
    priority: 0.7,
    changeFrequency: 'monthly' as const,
  }))

  return [...staticPages, ...blogPages]
}
