'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav style={{background:'#07334d',height:'68px',position:'sticky',top:0,zIndex:100,boxShadow:'0 2px 12px rgba(0,0,0,.25)',display:'flex',alignItems:'center',justifyContent:'space-between',padding:'0 4rem'}}>
      <Link href="/" style={{display:'flex',alignItems:'center',gap:'1rem',textDecoration:'none'}}>
        <Image src="/logo-icon.png" alt="" width={36} height={36} style={{borderRadius:'8px',display:'block'}} />
        <div style={{color:'#fff',fontFamily:'"Martel Sans",Georgia,serif',fontWeight:700,fontSize:'1.9rem',letterSpacing:'-.3px',lineHeight:1.2}}>
          ESTA USA
          <span style={{color:'#b0cad8',fontWeight:400,fontSize:'1.3rem',display:'block',lineHeight:1}}>by Gourmety</span>
        </div>
      </Link>

      {/* Desktop */}
      <div className="nav-desktop" style={{display:'flex',gap:'3rem',alignItems:'center'}}>
        <div className="nav-dropdown">
          <span className="nav-dropdown-trigger" style={{color:'rgba(255,255,255,.8)',fontSize:'1.4rem',fontWeight:600,display:'flex',alignItems:'center',gap:'.4rem',cursor:'default'}}>
            Información
            <svg className="nav-caret" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
          </span>
          <div className="nav-dropdown-menu">
            <Link href="/que-es-el-esta">Qué es el ESTA</Link>
            <Link href="/como-solicitar-el-esta">Cómo solicitarlo</Link>
            <Link href="/requisitos-esta">Requisitos</Link>
            <Link href="/validez-esta">Validez y renovación</Link>
            <Link href="/paises-visa-waiver">Países elegibles (VWP)</Link>
          </div>
        </div>
        <Link href="/precios" style={{color:'rgba(255,255,255,.8)',fontSize:'1.4rem',fontWeight:600,transition:'color .2s'}} className="nav-link">Precios</Link>
        <Link href="/verificar-estado-esta" style={{color:'rgba(255,255,255,.8)',fontSize:'1.4rem',fontWeight:600}} className="nav-link">Verificar estado</Link>
        <Link href="/faq" style={{color:'rgba(255,255,255,.8)',fontSize:'1.4rem',fontWeight:600}} className="nav-link">FAQ</Link>
        <Link href="/blog" style={{color:'rgba(255,255,255,.8)',fontSize:'1.4rem',fontWeight:600}} className="nav-link">Blog</Link>
        <Link href="/solicitar-esta" className="nav-cta" style={{background:'#c63622',color:'#fff',padding:'.6rem 1.8rem',borderRadius:'8px',fontWeight:700,fontSize:'1.4rem',transition:'background .2s',textDecoration:'none'}}>
          Tramitar mi ESTA
        </Link>
      </div>

      {/* Mobile toggle */}
      <button
        className="nav-mobile-toggle"
        onClick={() => setOpen(!open)}
        aria-label="Menú"
        style={{display:'none',color:'white',background:'none',border:'none',cursor:'pointer',padding:'8px'}}
      >
        <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          {open ? (
            <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
          ) : (
            <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>
          )}
        </svg>
      </button>

      {open && (
        <div className="nav-mobile-menu">
          <Link href="/que-es-el-esta" onClick={() => setOpen(false)}>Qué es el ESTA</Link>
          <Link href="/como-solicitar-el-esta" onClick={() => setOpen(false)}>Cómo solicitarlo</Link>
          <Link href="/requisitos-esta" onClick={() => setOpen(false)}>Requisitos</Link>
          <Link href="/precios" onClick={() => setOpen(false)}>Precios</Link>
          <Link href="/verificar-estado-esta" onClick={() => setOpen(false)}>Verificar estado</Link>
          <Link href="/faq" onClick={() => setOpen(false)}>FAQ</Link>
          <Link href="/blog" onClick={() => setOpen(false)}>Blog</Link>
          <Link href="/solicitar-esta" onClick={() => setOpen(false)} className="nav-mobile-cta">Tramitar mi ESTA →</Link>
        </div>
      )}
    </nav>
  )
}
