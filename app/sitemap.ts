import { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/blog'

const BASE = 'https://estausa.es'

const staticPages = [
  { url: '/', priority: 1.0, changeFrequency: 'weekly' as const },
  { url: '/solicitar-esta', priority: 0.95, changeFrequency: 'monthly' as const },
  { url: '/precios', priority: 0.9, changeFrequency: 'monthly' as const },
  { url: '/que-es-el-esta', priority: 0.85, changeFrequency: 'monthly' as const },
  { url: '/como-solicitar-el-esta', priority: 0.85, changeFrequency: 'monthly' as const },
  { url: '/requisitos-esta', priority: 0.8, changeFrequency: 'monthly' as const },
  { url: '/validez-esta', priority: 0.8, changeFrequency: 'monthly' as const },
  { url: '/paises-visa-waiver', priority: 0.75, changeFrequency: 'monthly' as const },
  { url: '/verificar-estado-esta', priority: 0.75, changeFrequency: 'monthly' as const },
  { url: '/faq', priority: 0.75, changeFrequency: 'monthly' as const },
  { url: '/blog', priority: 0.7, changeFrequency: 'weekly' as const },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts().map(p => ({
    url: `${BASE}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: 'monthly' as const,
    priority: 0.65,
  }))

  return [
    ...staticPages.map(p => ({
      url: `${BASE}${p.url}`,
      lastModified: new Date(),
      changeFrequency: p.changeFrequency,
      priority: p.priority,
    })),
    ...posts,
  ]
}
