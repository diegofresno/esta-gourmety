import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import JsonLd from '@/components/JsonLd'

export const metadata: Metadata = {
  metadataBase: new URL('https://esta.gourmety.com'),
  title: {
    default: 'ESTA USA — Tramitación asistida en español | ESTA USA by Gourmety',
    template: '%s | ESTA USA by Gourmety',
  },
  description: 'Tramita tu ESTA para Estados Unidos con revisión humana incluida. En español. Aprobación en 72h, 24h o 3h. Desde 62€ con tasa CBP incluida.',
  keywords: ['esta usa', 'solicitar esta', 'esta estados unidos', 'tramitar esta'],
  alternates: { canonical: 'https://esta.gourmety.com' },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    siteName: 'ESTA USA by Gourmety',
    images: [{ url: '/og-default.png', width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
}

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'ESTA USA by Gourmety',
  url: 'https://esta.gourmety.com',
  logo: 'https://esta.gourmety.com/logo-icon.png',
  sameAs: ['https://www.gourmety.com'],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    availableLanguage: 'Spanish',
  },
}

const webSiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'ESTA USA by Gourmety',
  url: 'https://esta.gourmety.com',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://esta.gourmety.com/blog?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="h-full">
      <head>
        <JsonLd data={orgSchema} />
        <JsonLd data={webSiteSchema} />
      </head>
      <body className="min-h-full flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
