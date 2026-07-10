import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer style={{background:'#031c2b',padding:'4rem',color:'rgba(255,255,255,.5)'}}>
      <div className="footer-main-grid" style={{maxWidth:'1100px',margin:'0 auto'}}>
        <div>
          <div style={{display:'flex',alignItems:'center',gap:'1rem',marginBottom:'1rem'}}>
            <Image src="/logo-icon.png" alt="" width={36} height={36} style={{borderRadius:'8px',display:'block'}} />
            <div style={{color:'#fff',fontFamily:'"Martel Sans",Georgia,serif',fontWeight:700,fontSize:'2rem',lineHeight:1.2}}>
              ESTA USA
              <span style={{color:'rgba(255,255,255,.4)',fontWeight:400,fontSize:'1.3rem',display:'block',lineHeight:1}}>by Gourmety</span>
            </div>
          </div>
          <p style={{fontSize:'1.3rem',color:'rgba(255,255,255,.45)',lineHeight:1.6,maxWidth:'280px'}}>
            Servicio de tramitación ESTA de Gourmety, agencia especializada en viajes a Estados Unidos y Canadá desde 2010.
          </p>
        </div>

        <div>
          <h4 style={{color:'rgba(255,255,255,.7)',fontSize:'1.3rem',fontWeight:700,letterSpacing:'.05em',textTransform:'uppercase',marginBottom:'1.4rem'}}>Servicio</h4>
          <FooterLink href="/que-es-el-esta">Qué es el ESTA</FooterLink>
          <FooterLink href="/como-solicitar-el-esta">Cómo solicitarlo</FooterLink>
          <FooterLink href="/precios">Precios</FooterLink>
          <FooterLink href="/solicitar-esta">Solicitar ESTA</FooterLink>
          <FooterLink href="/verificar-estado-esta">Ver estado solicitud</FooterLink>
        </div>

        <div>
          <h4 style={{color:'rgba(255,255,255,.7)',fontSize:'1.3rem',fontWeight:700,letterSpacing:'.05em',textTransform:'uppercase',marginBottom:'1.4rem'}}>Información</h4>
          <FooterLink href="/requisitos-esta">Requisitos</FooterLink>
          <FooterLink href="/validez-esta">Validez y renovación</FooterLink>
          <FooterLink href="/paises-visa-waiver">Países VWP</FooterLink>
          <FooterLink href="/faq">Preguntas frecuentes</FooterLink>
          <FooterLink href="/blog">Blog</FooterLink>
        </div>

        <div>
          <h4 style={{color:'rgba(255,255,255,.7)',fontSize:'1.3rem',fontWeight:700,letterSpacing:'.05em',textTransform:'uppercase',marginBottom:'1.4rem'}}>Legal</h4>
          <FooterLink href="/aviso-legal">Aviso legal</FooterLink>
          <FooterLink href="/politica-de-privacidad">Política de privacidad</FooterLink>
          <FooterLink href="/politica-de-cookies">Política de cookies</FooterLink>
        </div>
      </div>

      <div className="footer-bottom-bar" style={{maxWidth:'1100px',margin:'3rem auto 0',paddingTop:'2.4rem',borderTop:'1px solid rgba(255,255,255,.08)',fontSize:'1.2rem',color:'rgba(255,255,255,.3)'}}>
        <p style={{maxWidth:'700px',lineHeight:1.5}}>
          <strong style={{color:'rgba(255,255,255,.4)'}}>Aviso importante:</strong> ESTA USA by Gourmety es un servicio privado de asistencia en la tramitación y no está afiliado al Gobierno de los Estados Unidos. Los viajeros pueden solicitar el ESTA directamente y sin coste adicional en{' '}
          <a href="https://esta.cbp.dhs.gov" target="_blank" rel="noopener noreferrer" style={{color:'rgba(255,255,255,.35)',textDecoration:'underline'}}>esta.cbp.dhs.gov</a>.
        </p>
        <p style={{whiteSpace:'nowrap'}}>© 2026 Gourmety</p>
      </div>
    </footer>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} style={{display:'block',fontSize:'1.4rem',color:'rgba(255,255,255,.45)',marginBottom:'.7rem',transition:'color .2s',textDecoration:'none'}} className="footer-link">
      {children}
    </Link>
  )
}
