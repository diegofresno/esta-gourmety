import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import JsonLd from '@/components/JsonLd'
import CookieBanner from '@/components/CookieBanner'

export const metadata: Metadata = {
  metadataBase: new URL('https://estausa.es'),
  title: {
    default: 'ESTA USA — Tramitación asistida en español | ESTA USA by Gourmety',
    template: '%s | ESTA USA by Gourmety',
  },
  description: 'Tramita tu ESTA para Estados Unidos con revisión humana incluida. En español. Aprobación en 72h, 24h o 3h. Desde 62€ con tasa CBP incluida.',
  keywords: ['esta usa', 'solicitar esta', 'esta estados unidos', 'tramitar esta'],
  alternates: { canonical: 'https://estausa.es' },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    siteName: 'ESTA USA by Gourmety',
    images: [{ url: '/og-default.png', width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
  verification: { google: '4BoHWErEkXJ07C9TguGDUeaqpgjOYPWux8HofO161nE' },
}

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'ESTA USA by Gourmety',
  url: 'https://estausa.es',
  logo: 'https://estausa.es/logo-icon.png',
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
  url: 'https://estausa.es',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://estausa.es/blog?q={search_term_string}',
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
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-YK09K99VJW" strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-YK09K99VJW');
        `}</Script>
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
}
