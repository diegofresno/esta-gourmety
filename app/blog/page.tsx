import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { getAllPosts, PostMeta } from '@/lib/blog'
import JsonLd from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'Blog ESTA: Guías y consejos para viajar a EE.UU. 2026 | ESTA USA by Gourmety',
  description: 'Artículos y guías sobre el ESTA, el Visa Waiver Program y los trámites de entrada a Estados Unidos. Todo lo que necesitas saber antes de viajar.',
  alternates: { canonical: 'https://estausa.es/blog' },
}

const CAT_COLORS: Record<string, { bg: string; color: string }> = {
  'Guías':        { bg: '#e8f0f8', color: '#07334d' },
  'Trámites':     { bg: '#e6f4f3', color: '#006b63' },
  'Precios':      { bg: '#fceae7', color: '#c63622' },
  'Destinos':     { bg: '#fef9ec', color: '#92400e' },
  'Información':  { bg: '#f1f5f9', color: '#475569' },
}

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?w=800&auto=format&fit=crop&q=80'

function catStyle(cat?: string) {
  return CAT_COLORS[cat ?? ''] ?? { bg: '#f1f5f9', color: '#475569' }
}

function formatDate(d: string) {
  return new Date(d).toLocaleDateString('es-ES', { day: 'numeric', month: 'short', year: 'numeric' })
}

export default function BlogPage() {
  const posts = getAllPosts()
  const featured = posts[0] ?? null
  const rest = posts.slice(1)

  return (
    <>
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'Blog',
        name: 'Blog ESTA USA by Gourmety',
        url: 'https://estausa.es/blog',
        description: 'Guías y artículos sobre el ESTA y viajes a Estados Unidos',
      }} />

      {/* Breadcrumb */}
      <div style={{background:'#f8fafc',borderBottom:'1px solid #e2e8f0',padding:'.8rem 4rem'}}>
        <div style={{maxWidth:'1100px',margin:'0 auto',display:'flex',alignItems:'center',gap:'.6rem',fontSize:'1.3rem',color:'#64748b'}}>
          <Link href="/" style={{color:'#64748b',textDecoration:'none'}}>Inicio</Link>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
          <span style={{color:'#07334d',fontWeight:600}}>Blog</span>
        </div>
      </div>

      {/* Hero */}
      <section style={{
        background: "linear-gradient(155deg,rgba(2,15,28,.92) 0%,rgba(7,51,77,.82) 55%,rgba(0,60,55,.72) 100%),url('https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?w=1600&auto=format&fit=crop&q=80') center 55%/cover no-repeat",
        padding:'6.5rem 4rem 5.5rem',
      }}>
        <div style={{maxWidth:'1100px',margin:'0 auto'}}>
          <div style={{display:'inline-flex',alignItems:'center',gap:'.6rem',background:'rgba(255,255,255,.1)',border:'1px solid rgba(255,255,255,.15)',color:'rgba(255,255,255,.8)',padding:'.4rem 1.2rem',borderRadius:'20px',fontSize:'1.25rem',fontWeight:600,marginBottom:'2rem'}}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
            Blog
          </div>
          <h1 style={{fontFamily:'"Martel Sans",Georgia,serif',fontSize:'4rem',fontWeight:900,color:'#fff',lineHeight:1.15,marginBottom:'1.6rem'}}>
            Guías y consejos para <em style={{color:'#f5a898',fontStyle:'normal'}}>viajar a EE.UU.</em>
          </h1>
          <p style={{color:'rgba(255,255,255,.72)',fontSize:'1.8rem',maxWidth:'580px',lineHeight:1.5,marginBottom:'2.4rem'}}>
            Todo lo que necesitas saber sobre el ESTA, el Visa Waiver Program y los trámites de entrada a Estados Unidos.
          </p>
          <div style={{display:'flex',flexWrap:'wrap',gap:'1rem'}}>
            {['Actualizado 2026','Redactado por expertos','Lectura en 5 min'].map(p => (
              <span key={p} style={{background:'rgba(255,255,255,.1)',border:'1px solid rgba(255,255,255,.15)',color:'rgba(255,255,255,.75)',padding:'.4rem 1.2rem',borderRadius:'20px',fontSize:'1.25rem',fontWeight:600}}>{p}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <div style={{maxWidth:'1100px',margin:'0 auto',padding:'6rem 4rem 8rem'}}>

        {posts.length === 0 && (
          <div style={{textAlign:'center',padding:'8rem 0',color:'#94a3b8',fontSize:'1.6rem'}}>
            <p>Próximamente publicaremos artículos aquí.</p>
            <Link href="/solicitar-esta" style={{marginTop:'2rem',display:'inline-block',color:'#006b63',fontWeight:700,textDecoration:'none'}}>
              Tramitar ESTA →
            </Link>
          </div>
        )}

        {/* Featured post */}
        {featured && (
          <article style={{display:'grid',gridTemplateColumns:'42% 1fr',gap:0,borderRadius:'16px',overflow:'hidden',border:'1.5px solid #e2e8f0',boxShadow:'0 4px 24px rgba(7,51,77,.07)',marginBottom:'5.5rem',background:'#fff'}}>
            <div style={{position:'relative',minHeight:'300px'}}>
              <Image
                src={featured.image ?? DEFAULT_IMAGE}
                alt={featured.title}
                fill
                style={{objectFit:'cover'}}
                sizes="(max-width:768px) 100vw, 42vw"
              />
            </div>
            <div style={{padding:'3.6rem',display:'flex',flexDirection:'column',justifyContent:'center'}}>
              <div style={{fontSize:'1.1rem',fontWeight:700,textTransform:'uppercase',letterSpacing:'.08em',color:'#006b63',marginBottom:'1.4rem'}}>
                Guías &nbsp;·&nbsp; Artículo destacado
              </div>
              <h2 style={{fontFamily:'"Martel Sans",Georgia,serif',fontSize:'2.6rem',fontWeight:700,color:'#07334d',lineHeight:1.28,marginBottom:'1.6rem'}}>
                {featured.title}
              </h2>
              <p style={{fontSize:'1.52rem',color:'#4a5568',lineHeight:1.65,marginBottom:'2.4rem'}}>
                {featured.description}
              </p>
              <Link href={`/blog/${featured.slug}`} style={{display:'inline-flex',alignItems:'center',gap:'6px',fontSize:'1.5rem',fontWeight:700,color:'#c63622',textDecoration:'none'}}>
                Leer artículo
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </Link>
            </div>
          </article>
        )}

        {/* Articles grid */}
        {rest.length > 0 && (
          <>
            <h2 style={{fontFamily:'"Martel Sans",Georgia,serif',fontSize:'2rem',fontWeight:700,color:'#07334d',margin:'0 0 2.8rem',paddingBottom:'1.4rem',borderBottom:'2px solid #e8edf2'}}>
              Todos los artículos
            </h2>
            <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'2.8rem'}}>
              {rest.map(post => <ArticleCard key={post.slug} post={post} />)}
            </div>
          </>
        )}

      </div>

      {/* CTA */}
      <section style={{background:'linear-gradient(135deg,#a82c1b 0%,#c63622 100%)',padding:'6rem 4rem',textAlign:'center'}}>
        <h2 style={{fontFamily:'"Martel Sans",Georgia,serif',fontSize:'3.6rem',fontWeight:900,color:'#fff',marginBottom:'1.2rem'}}>¿Listo para viajar a EE.UU.?</h2>
        <p style={{color:'rgba(255,255,255,.8)',fontSize:'1.8rem',marginBottom:'3rem'}}>Tramita tu ESTA ahora y ten la autorización lista en hasta 72 horas</p>
        <Link href="/solicitar-esta" style={{display:'inline-flex',alignItems:'center',gap:'.8rem',background:'#fff',color:'#c63622',padding:'1.4rem 3.2rem',borderRadius:'10px',fontFamily:'"Martel Sans",Georgia,serif',fontSize:'1.7rem',fontWeight:700,textDecoration:'none',boxShadow:'0 4px 20px rgba(0,0,0,.2)'}}>
          Comenzar solicitud
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </Link>
      </section>
    </>
  )
}

function ArticleCard({ post }: { post: PostMeta }) {
  const cat = catStyle(post.category)
  return (
    <article style={{background:'#fff',border:'1.5px solid #e2e8f0',borderRadius:'12px',overflow:'hidden',boxShadow:'0 2px 12px rgba(7,51,77,.05)',display:'flex',flexDirection:'column'}}>
      <Link href={`/blog/${post.slug}`} style={{textDecoration:'none',color:'inherit',display:'flex',flexDirection:'column',flex:1}}>
        <div style={{position:'relative',height:'200px',flexShrink:0}}>
          <Image
            src={post.image ?? DEFAULT_IMAGE}
            alt={post.title}
            fill
            style={{objectFit:'cover',borderRadius:'10px 10px 0 0'}}
            sizes="(max-width:560px) 100vw, (max-width:900px) 50vw, 33vw"
          />
        </div>
        <div style={{padding:'2rem 2.2rem 2.4rem',flex:1,display:'flex',flexDirection:'column'}}>
          <span style={{display:'inline-block',fontSize:'1.1rem',fontWeight:700,textTransform:'uppercase',letterSpacing:'.07em',padding:'3px 10px',borderRadius:'20px',marginBottom:'1.2rem',background:cat.bg,color:cat.color}}>
            {post.category ?? 'Guías'}
          </span>
          <h3 style={{fontFamily:'"Martel Sans",Georgia,serif',fontSize:'1.8rem',fontWeight:700,color:'#07334d',lineHeight:1.3,margin:'0 0 1rem',flex:1}}>
            {post.title}
          </h3>
          <p style={{fontSize:'1.4rem',color:'#64748b',lineHeight:1.6,margin:'0 0 1.8rem'}}>
            {post.description}
          </p>
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',paddingTop:'1.4rem',borderTop:'1px solid #f1f5f9',fontSize:'1.2rem',color:'#94a3b8'}}>
            <span>{formatDate(post.date)}</span>
            <span>{post.readingTime} min</span>
          </div>
        </div>
      </Link>
    </article>
  )
}
