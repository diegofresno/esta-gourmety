import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
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
    alternates: { canonical: `https://esta.gourmety.com/blog/${slug}` },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.description,
      url: `https://esta.gourmety.com/blog/${slug}`,
      publishedTime: post.date,
    },
  }
}

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
      logo: { '@type': 'ImageObject', url: 'https://esta.gourmety.com/logo-icon.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://esta.gourmety.com/blog/${slug}` },
  }

  return (
    <>
      <JsonLd data={articleSchema} />

      <div className="bg-[#07334d] text-white py-10 px-6">
        <div className="max-w-[860px] mx-auto">
          <div className="text-[1.35rem] text-white/50 mb-3">
            <Link href="/" className="hover:text-white/80">Inicio</Link> ›{' '}
            <Link href="/blog" className="hover:text-white/80">Blog</Link> › {post.title}
          </div>
          <h1 className="font-[Martel_Sans] font-black text-[3.4rem] leading-tight mb-4">{post.title}</h1>
          <div className="flex items-center gap-4 text-white/50 text-[1.35rem]">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
            </time>
            <span>·</span>
            <span>{post.readingTime} min lectura</span>
          </div>
        </div>
      </div>

      <div className="max-w-[860px] mx-auto px-6 py-14">
        <article className="prose prose-lg max-w-none
          prose-headings:font-[Martel_Sans] prose-headings:text-[#07334d]
          prose-a:text-[#006b63] prose-strong:text-[#07334d]
          prose-li:text-[1.55rem] prose-p:text-[1.55rem] prose-p:text-gray-600
          prose-h2:text-[2.8rem] prose-h3:text-[2.2rem]
        ">
          <MDXRemote source={post.content} />
        </article>

        {/* CTA */}
        <div className="bg-[#07334d] text-white rounded-2xl p-8 text-center mt-14">
          <h2 className="font-[Martel_Sans] font-black text-[2.6rem] mb-3">¿Listo para tramitar tu ESTA?</h2>
          <p className="text-white/70 text-[1.55rem] mb-6">Revisión humana, en español, desde 62€.</p>
          <Link href="/solicitar-esta" className="inline-block bg-[#e8533a] hover:bg-[#d4442c] text-white font-bold text-[1.6rem] px-8 py-4 rounded-full transition-colors">
            Solicitar ESTA →
          </Link>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-100">
          <Link href="/blog" className="text-[#006b63] font-bold text-[1.5rem] hover:underline">← Volver al blog</Link>
        </div>
      </div>
    </>
  )
}
