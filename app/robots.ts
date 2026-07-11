import { MetadataRoute } from 'next'

const AI_CRAWLERS = [
  'GPTBot', 'ChatGPT-User', 'ClaudeBot', 'anthropic-ai',
  'PerplexityBot', 'Google-Extended', 'cohere-ai', 'Amazonbot',
  'Applebot-Extended', 'Bytespider',
]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: ['/api/', '/pago-completado', '/pago-cancelado'] },
      ...AI_CRAWLERS.map(ua => ({ userAgent: ua, allow: '/' })),
    ],
    sitemap: 'https://estausa.es/sitemap.xml',
  }
}
