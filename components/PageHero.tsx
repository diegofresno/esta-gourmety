import Link from 'next/link'

interface PageHeroProps {
  breadcrumb: { label: string; href?: string }[]
  title: string
  subtitle?: string
  pills?: string[]
}

export default function PageHero({ breadcrumb, title, subtitle, pills }: PageHeroProps) {
  return (
    <div style={{
      background: `
        radial-gradient(circle, rgba(255,255,255,0.055) 1px, transparent 1px),
        linear-gradient(135deg, #020f1c 0%, #07334d 52%, #003c37 100%)
      `,
      backgroundSize: '28px 28px, 100% 100%',
      padding: '5.5rem 4rem 5rem',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Decorative rings */}
      <div style={{ position:'absolute', top:'-80px', right:'-50px', width:'380px', height:'380px', borderRadius:'50%', border:'44px solid rgba(255,255,255,0.03)', pointerEvents:'none' }} />
      <div style={{ position:'absolute', top:'20px', right:'80px', width:'200px', height:'200px', borderRadius:'50%', border:'24px solid rgba(255,255,255,0.04)', pointerEvents:'none' }} />
      <div style={{ position:'absolute', bottom:'-40px', right:'200px', width:'120px', height:'120px', borderRadius:'50%', border:'14px solid rgba(0,107,99,0.12)', pointerEvents:'none' }} />

      <div style={{ maxWidth:'1100px', margin:'0 auto', position:'relative', zIndex:1 }}>

        {/* Breadcrumb */}
        <div style={{ display:'flex', alignItems:'center', flexWrap:'wrap', gap:'.4rem', fontSize:'1.3rem', color:'rgba(255,255,255,0.42)', marginBottom:'2.8rem' }}>
          {breadcrumb.map((item, i) => (
            <span key={i} style={{ display:'flex', alignItems:'center', gap:'.4rem' }}>
              {i > 0 && (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"/>
                </svg>
              )}
              {item.href
                ? <Link href={item.href} style={{ color:'rgba(255,255,255,0.42)', textDecoration:'none' }}>{item.label}</Link>
                : <span style={{ color:'rgba(255,255,255,0.78)' }}>{item.label}</span>
              }
            </span>
          ))}
        </div>

        {/* Title */}
        <h1 style={{
          fontFamily:'"Martel Sans",Georgia,serif',
          fontSize:'3.8rem',
          fontWeight:900,
          color:'#fff',
          lineHeight:1.2,
          marginBottom: subtitle ? '1.2rem' : (pills?.length ? '2.4rem' : 0),
          maxWidth:'720px',
        }}>
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p style={{
            fontSize:'1.75rem',
            color:'rgba(255,255,255,0.62)',
            lineHeight:1.55,
            maxWidth:'600px',
            marginBottom: pills?.length ? '2.4rem' : 0,
          }}>
            {subtitle}
          </p>
        )}

        {/* Pills */}
        {pills && pills.length > 0 && (
          <div style={{ display:'flex', flexWrap:'wrap', gap:'.9rem' }}>
            {pills.map(p => (
              <span key={p} style={{
                background:'rgba(255,255,255,0.08)',
                border:'1px solid rgba(255,255,255,0.13)',
                color:'rgba(255,255,255,0.68)',
                padding:'.35rem 1.1rem',
                borderRadius:'20px',
                fontSize:'1.2rem',
                fontWeight:600,
              }}>
                {p}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
