import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: ['/api/', '/pago-completado', '/pago-cancelado'] },
    ],
    sitemap: 'https://estausa.es/sitemap.xml',
  }
}
