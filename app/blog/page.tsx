import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts } from '@/lib/blog'
import JsonLd from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'Blog ESTA USA — Guías y consejos para viajar a Estados Unidos',
  description: 'Artículos, guías y consejos sobre el ESTA, el Visa Waiver Program y los trámites para viajar a EE.UU. desde España y Europa.',
  alternates: { canonical: 'https://esta.gourmety.com/blog' },
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <>
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'Blog',
        name: 'Blog ESTA USA by Gourmety',
        url: 'https://esta.gourmety.com/blog',
        description: 'Guías y artículos sobre el ESTA y viajes a Estados Unidos',
      }} />

      <div className="bg-[#07334d] text-white py-10 px-6">
        <div className="max-w-[1160px] mx-auto">
          <div className="text-[1.35rem] text-white/50 mb-2">
            <Link href="/" className="hover:text-white/80">Inicio</Link> › Blog
          </div>
          <h1 className="font-[Martel_Sans] font-black text-[3.2rem] mb-2">Blog ESTA USA</h1>
          <p className="text-white/70 text-[1.6rem]">Guías, consejos y novedades sobre el ESTA y los viajes a Estados Unidos.</p>
        </div>
      </div>

      <div className="max-w-[1160px] mx-auto px-6 py-14">
        {posts.length === 0 ? (
          <div className="text-center py-20 text-gray-400 text-[1.6rem]">
            <p>Próximamente publicaremos artículos aquí.</p>
            <Link href="/solicitar-esta" className="mt-6 inline-block text-[#006b63] font-bold hover:underline">
              Tramitar ESTA →
            </Link>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map(post => (
              <article key={post.slug} className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-md transition-shadow">
                <div className="p-6">
                  <time className="text-[1.25rem] text-gray-400 mb-3 block">
                    {new Date(post.date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </time>
                  <h2 className="font-[Martel_Sans] font-bold text-[1.8rem] text-[#07334d] mb-3 line-clamp-2">
                    <Link href={`/blog/${post.slug}`} className="hover:text-[#006b63] transition-colors">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-gray-500 text-[1.4rem] leading-relaxed mb-4 line-clamp-3">{post.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[1.25rem] text-gray-400">{post.readingTime} min lectura</span>
                    <Link href={`/blog/${post.slug}`} className="text-[#006b63] font-bold text-[1.4rem] hover:underline">
                      Leer →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </>
  )
}
