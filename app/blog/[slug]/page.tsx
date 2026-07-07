import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import { getPost, getAllPosts } from '@/lib/blog'
import JsonLd from '@/components/JsonLd'

export async function generateStaticParams() {
  return getAllPosts().map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: `https://estausa.es/blog/${slug}` },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.description,
      url: `https://estausa.es/blog/${slug}`,
      publishedTime: post.date,
    },
  }
}

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?w=1200&auto=format&fit=crop&q=80'

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: { '@type': 'Organization', name: 'ESTA USA by Gourmety' },
    publisher: {
      '@type': 'Organization',
      name: 'ESTA USA by Gourmety',
      logo: { '@type': 'ImageObject', url: 'https://estausa.es/logo-icon.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://estausa.es/blog/${slug}` },
  }

  return (
    <>
      <JsonLd data={articleSchema} />

      {/* Page hero */}
      <div style={{
        background: 'linear-gradient(155deg,rgba(2,15,28,.92) 0%,rgba(7,51,77,.82) 55%,rgba(0,60,55,.72) 100%)',
        backgroundColor: '#07334d',
        padding: '5rem 4rem 4.5rem',
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '.6rem', fontSize: '1.3rem', color: 'rgba(255,255,255,.5)', marginBottom: '2rem' }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,.5)', textDecoration: 'none' }}>Inicio</Link>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
            <Link href="/blog" style={{ color: 'rgba(255,255,255,.5)', textDecoration: 'none' }}>Blog</Link>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
            <span style={{ color: 'rgba(255,255,255,.8)' }}>{post.category ?? 'Guías'}</span>
          </div>
          <h1 style={{ fontFamily: '"Martel Sans",Georgia,serif', fontSize: '3.4rem', fontWeight: 900, color: '#fff', lineHeight: 1.2, marginBottom: '1.6rem', maxWidth: '760px' }}>
            {post.title}
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', color: 'rgba(255,255,255,.5)', fontSize: '1.35rem' }}>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
            </time>
            <span>·</span>
            <span>{post.readingTime} min lectura</span>
          </div>
        </div>
      </div>

      {/* Content + sidebar grid */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '5.5rem 2.4rem 7rem', display: 'grid', gridTemplateColumns: '1fr 300px', gap: '4.8rem', alignItems: 'start' }}>

        {/* Left: article */}
        <div>
          {/* Featured image */}
          <div style={{ position: 'relative', width: '100%', height: '360px', borderRadius: '12px', overflow: 'hidden', marginBottom: '3.2rem' }}>
            <Image
              src={post.image ?? DEFAULT_IMAGE}
              alt={post.title}
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width:900px) 100vw, 720px"
              priority
            />
          </div>

          {/* Prose content */}
          <article className="prose">
            <MDXRemote source={post.content} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />
          </article>

          {/* Back link */}
          <div style={{ marginTop: '4rem', paddingTop: '2.8rem', borderTop: '1px solid #e2e8f0' }}>
            <Link href="/blog" style={{ color: '#006b63', fontWeight: 700, fontSize: '1.5rem', textDecoration: 'none' }}>
              ← Volver al blog
            </Link>
          </div>
        </div>

        {/* Right: sticky sidebar */}
        <aside>
          <div style={{ background: '#fff', border: '1.5px solid #e2e8f0', borderRadius: '16px', padding: '2.8rem', position: 'sticky', top: '88px', boxShadow: '0 4px 24px rgba(7,51,77,.07)' }}>
            <div style={{ width: '48px', height: '48px', background: 'linear-gradient(135deg,#07334d,#006b63)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.6rem' }}>
              <svg width="22" height="22" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            </div>
            <h3 style={{ fontFamily: '"Martel Sans",Georgia,serif', fontSize: '1.9rem', fontWeight: 700, color: '#07334d', margin: '0 0 .8rem' }}>
              ¿Necesitas el ESTA?
            </h3>
            <p style={{ fontSize: '1.45rem', color: '#4a5568', lineHeight: 1.6, margin: '0 0 1.8rem' }}>
              Tramita tu solicitud con revisión humana incluida. Respuesta en hasta 72 horas.
            </p>

            {/* Trust items */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '2rem', paddingBottom: '2rem', borderBottom: '1px solid #edf0f5' }}>
              {['Revisión humana incluida','Soporte en español','Pago seguro SSL','Respuesta hasta 72 h'].map(t => (
                <div key={t} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1.4rem', color: '#4a5568' }}>
                  <svg width="16" height="16" fill="none" stroke="#006b63" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
                  {t}
                </div>
              ))}
            </div>

            {/* Price */}
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <div style={{ fontSize: '1.2rem', color: '#94a3b8', marginBottom: '.4rem' }}>desde</div>
              <div style={{ fontFamily: '"Martel Sans",Georgia,serif', fontSize: '4.4rem', fontWeight: 900, color: '#07334d', lineHeight: 1 }}>62€</div>
              <div style={{ fontSize: '1.2rem', color: '#94a3b8', marginTop: '.4rem' }}>tasa CBP incluida</div>
            </div>

            <Link href="/solicitar-esta" style={{
              display: 'block', textAlign: 'center', background: '#c63622', color: '#fff',
              fontFamily: '"Martel Sans",Georgia,serif', fontWeight: 700, fontSize: '1.6rem',
              padding: '1.3rem', borderRadius: '10px', textDecoration: 'none',
              boxShadow: '0 4px 12px rgba(198,54,34,.3)',
            }}>
              Tramitar mi ESTA →
            </Link>
          </div>
        </aside>
      </div>
    </>
  )
}
