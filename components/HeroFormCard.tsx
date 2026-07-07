'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function HeroFormCard() {
  const [qty, setQty] = useState(1)
  const router = useRouter()

  const govFee = 37 * qty
  const total = 62 * qty

  return (
    <div style={{background:'#fff',borderRadius:'16px',padding:'3rem',boxShadow:'0 12px 48px rgba(3,28,43,.18)',position:'relative',zIndex:2}}>
      <div style={{fontFamily:'"Martel Sans",Georgia,serif',fontSize:'2rem',fontWeight:700,color:'#473f4b',marginBottom:'.4rem'}}>Solicitar ESTA ahora</div>
      <div style={{color:'#919caa',fontSize:'1.4rem',marginBottom:'2.4rem'}}>Completar en menos de 5 minutos</div>

      <div style={{marginBottom:'1.6rem'}}>
        <label style={{display:'block',fontSize:'1.3rem',fontWeight:700,color:'#473f4b',marginBottom:'.5rem'}}>Nacionalidad del pasaporte</label>
        <select
          defaultValue="ES"
          style={{width:'100%',padding:'1.1rem 1.4rem',border:'1.5px solid #d8d9eb',borderRadius:'8px',fontFamily:'"Nunito Sans",sans-serif',fontSize:'1.5rem',color:'#473f4b',background:'#fff',outline:'none',appearance:'none',backgroundImage:"url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' fill='none'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23919caa' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E\")",backgroundRepeat:'no-repeat',backgroundPosition:'right 1.4rem center',paddingRight:'3.5rem'}}
        >
          <option value="ES">🇪🇸 España</option>
          <option value="DE">🇩🇪 Alemania</option>
          <option value="FR">🇫🇷 Francia</option>
          <option value="IT">🇮🇹 Italia</option>
          <option value="PT">🇵🇹 Portugal</option>
          <option value="NL">🇳🇱 Países Bajos</option>
        </select>
      </div>

      <div style={{marginBottom:'1.6rem'}}>
        <label style={{display:'block',fontSize:'1.3rem',fontWeight:700,color:'#473f4b',marginBottom:'.5rem'}}>Número de viajeros</label>
        <div style={{display:'flex',alignItems:'center',border:'1.5px solid #d8d9eb',borderRadius:'8px',overflow:'hidden'}}>
          <button
            onClick={() => setQty(q => Math.max(1, q - 1))}
            style={{width:'44px',height:'44px',border:'none',background:'#eff2f7',fontSize:'2rem',color:'#07334d',cursor:'pointer',fontWeight:700,flexShrink:0}}
          >−</button>
          <div style={{flex:1,textAlign:'center',fontSize:'1.6rem',fontWeight:700,color:'#473f4b',background:'#fff',padding:'1rem'}}>{qty}</div>
          <button
            onClick={() => setQty(q => Math.min(10, q + 1))}
            style={{width:'44px',height:'44px',border:'none',background:'#eff2f7',fontSize:'2rem',color:'#07334d',cursor:'pointer',fontWeight:700,flexShrink:0}}
          >+</button>
        </div>
      </div>

      <div style={{marginBottom:'1.6rem'}}>
        <label style={{display:'block',fontSize:'1.3rem',fontWeight:700,color:'#473f4b',marginBottom:'.5rem'}}>Plan de tramitación</label>
        <div style={{background:'#fafbfc',border:'1.5px solid #d8d9eb',borderRadius:'8px',padding:'1.1rem 1.4rem',display:'flex',alignItems:'center',gap:'.8rem',fontSize:'1.5rem',fontWeight:600,color:'#473f4b'}}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#006b63" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          Estándar — aprobación en hasta 72 h
        </div>
      </div>

      <div style={{background:'#fafbfc',borderRadius:'8px',padding:'1.4rem 1.6rem',margin:'1.6rem 0'}}>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',fontSize:'1.4rem',color:'#445462',marginBottom:'.6rem'}}>
          <span>Tasa gubernamental (CBP) <small style={{color:'#919caa',fontSize:'1.1rem'}}>≈$40.27 USD</small></span>
          <span style={{fontWeight:700,color:'#07334d'}}>{govFee} €</span>
        </div>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',fontSize:'1.4rem',color:'#445462',marginBottom:'.6rem'}}>
          <span>Gestión y tramitación</span>
          <span style={{fontWeight:700,color:'#07334d'}}>25 €</span>
        </div>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',fontSize:'1.6rem',fontWeight:700,color:'#473f4b',borderTop:'1px solid #d8d9eb',paddingTop:'.8rem',marginTop:'.8rem'}}>
          <span>Total ({qty === 1 ? '1 viajero' : `${qty} viajeros`})</span>
          <span style={{color:'#c63622'}}>{total} €</span>
        </div>
      </div>

      <button
        onClick={() => router.push('/solicitar-esta')}
        style={{width:'100%',padding:'1.5rem',background:'#c63622',color:'#fff',border:'none',borderRadius:'10px',fontFamily:'"Martel Sans",Georgia,serif',fontSize:'1.7rem',fontWeight:700,cursor:'pointer',transition:'background .2s',display:'flex',alignItems:'center',justifyContent:'center',gap:'.8rem'}}
        onMouseEnter={e => (e.currentTarget.style.background='#a82c1b')}
        onMouseLeave={e => (e.currentTarget.style.background='#c63622')}
      >
        <span>Comenzar solicitud</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
      </button>
      <p style={{textAlign:'center',fontSize:'1.15rem',color:'#919caa',marginTop:'1.2rem',lineHeight:1.4}}>
        Servicio privado de asistencia. Puedes tramitarlo gratis en{' '}
        <a href="https://esta.cbp.dhs.gov" target="_blank" rel="noopener noreferrer" style={{color:'#919caa',textDecoration:'underline'}}>esta.cbp.dhs.gov</a>
      </p>
    </div>
  )
}
