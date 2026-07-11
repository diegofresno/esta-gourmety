import type { Metadata } from 'next'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import HeroFormCard from '@/components/HeroFormCard'
import FAQAccordion from '@/components/FAQAccordion'

export const metadata: Metadata = {
  title: 'ESTA USA · Gourmety — Tramita tu autorización de viaje a EE.UU.',
  description: 'Tramita tu ESTA para viajar a Estados Unidos en español. Revisión humana incluida. Aprobación en hasta 72 horas. Tasa CBP incluida.',
  alternates: { canonical: 'https://estausa.es' },
}

const faqItems = [
  { q: '¿Qué es el ESTA y para qué sirve?', a: 'El ESTA (Electronic System for Travel Authorization) es la autorización electrónica obligatoria que necesitan los ciudadanos de países del Programa de Exención de Visado (como España) para viajar a EE.UU. por turismo, negocios o tránsito por hasta 90 días. No es un visado: es una pre-autorización que se obtiene online antes de embarcar.' },
  { q: '¿Cuánto tarda en aprobarse?', a: 'La CBP (Aduanas de EE.UU.) responde habitualmente en minutos, aunque puede tardar hasta 72 horas. Siempre recomendamos solicitarlo al menos 72 h antes del vuelo para tener margen de sobra.' },
  { q: '¿Cuánto tiempo es válido y cuántas veces puedo entrar?', a: 'El ESTA es válido 2 años desde su aprobación y permite entradas múltiples a EE.UU. En cada visita puedes permanecer un máximo de 90 días consecutivos. Si tu pasaporte caduca antes de los 2 años, el ESTA deja de ser válido cuando caduque el pasaporte.' },
  { q: '¿Puedo tramitarlo yo mismo gratis en la web oficial?', a: 'Sí, puedes hacerlo directamente en esta.cbp.dhs.gov pagando solo la tasa gubernamental. Nuestro servicio es para quienes prefieren hacerlo en español con revisión humana, soporte y la tranquilidad de que alguien experto verifica la solicitud antes de enviarla.' },
  { q: '¿Qué pasa si me rechazan el ESTA?', a: 'Si la CBP rechaza la solicitud, te informamos de inmediato y evaluamos si existen causas subsanables. El rechazo del ESTA significa que deberás solicitar un visado de turista en la Embajada de EE.UU. La tasa gubernamental no es reembolsable por ningún proveedor.' },
  { q: '¿Es seguro dar mis datos de pasaporte?', a: 'Sí. Todos los datos se transmiten bajo cifrado TLS y solo se utilizan para tramitar la solicitud ante la CBP. Cumplimos con el RGPD. No guardamos copias de tu pasaporte tras la tramitación y nunca cedemos datos a terceros.' },
]

const steps = [
  {
    title: 'Rellena el formulario',
    desc: 'Introduce los datos del pasaporte y responde las preguntas de elegibilidad en español.',
    color: '#07334d',
    iconBg: 'linear-gradient(145deg,#dde8f3 0%,#c4d6e8 100%)',
    iconShadow: '0 6px 22px rgba(7,51,77,.16),inset 0 1px 0 rgba(255,255,255,.88)',
    icon: '<path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="1"/><line x1="9" y1="12" x2="15" y2="12"/><line x1="9" y1="16" x2="13" y2="16"/>',
  },
  {
    title: 'Revisamos tu solicitud',
    desc: 'Nuestro equipo verifica que todo es correcto antes de enviarla. Sin errores que puedan retrasar la aprobación.',
    color: '#006b63',
    iconBg: 'linear-gradient(145deg,#d4eeeb 0%,#b3e0db 100%)',
    iconShadow: '0 6px 22px rgba(0,107,99,.18),inset 0 1px 0 rgba(255,255,255,.88)',
    icon: '<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><polyline points="8.5 11 10.2 12.8 14 8.5"/>',
  },
  {
    title: 'Enviamos a la CBP',
    desc: 'Tramitamos la solicitud ante el Departamento de Seguridad Nacional de EE.UU. en tu nombre.',
    color: '#c63622',
    iconBg: 'linear-gradient(145deg,#fce9e6 0%,#f5cfc9 100%)',
    iconShadow: '0 6px 22px rgba(198,54,34,.18),inset 0 1px 0 rgba(255,255,255,.88)',
    icon: '<line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>',
  },
  {
    title: 'Recibe tu autorización',
    desc: 'Te enviamos el ESTA aprobado por email. Válido 2 años y entradas múltiples de hasta 90 días.',
    color: '#2563eb',
    iconBg: 'linear-gradient(145deg,#dce8fc 0%,#c0d5f8 100%)',
    iconShadow: '0 6px 22px rgba(37,99,235,.18),inset 0 1px 0 rgba(255,255,255,.88)',
    icon: '<path d="M17.8 19.2L16 11l3.5-3.5C21 6 21 4 19 4c-.7 0-1.5.3-2.1.9L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>',
  },
]

const whyFeatures = [
  {
    title: 'Sin riesgo de rechazo por errores',
    desc: 'El 80% de los rechazos son por errores evitables en el formulario. Nuestra revisión los detecta antes de enviar.',
    iconBg: 'linear-gradient(145deg,rgba(198,54,34,.42) 0%,rgba(198,54,34,.22) 100%)',
    iconShadow: '0 4px 18px rgba(198,54,34,.28),inset 0 1px 0 rgba(255,255,255,.12)',
    iconColor: '#ff8f80',
    fill: 'none',
    icon: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/>',
  },
  {
    title: 'Todo en español, sin sorpresas',
    desc: 'El formulario oficial de la CBP está en inglés. Nosotros lo traducimos y guiamos en cada paso.',
    iconBg: 'linear-gradient(145deg,rgba(0,107,99,.52) 0%,rgba(0,107,99,.28) 100%)',
    iconShadow: '0 4px 18px rgba(0,107,99,.32),inset 0 1px 0 rgba(255,255,255,.12)',
    iconColor: '#6ee8e0',
    fill: 'none',
    icon: '<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',
  },
  {
    title: 'Conocemos el destino',
    desc: 'Organizamos viajes a la Ruta 66, Costa Oeste y Canadá. El ESTA es solo el primer paso de un viaje que conocemos de principio a fin.',
    iconBg: 'linear-gradient(145deg,rgba(37,99,235,.42) 0%,rgba(37,99,235,.22) 100%)',
    iconShadow: '0 4px 18px rgba(37,99,235,.28),inset 0 1px 0 rgba(255,255,255,.1)',
    iconColor: '#93c5fd',
    fill: 'none',
    icon: '<path d="M17.8 19.2L16 11l3.5-3.5C21 6 21 4 19 4c-.7 0-1.5.3-2.1.9L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>',
  },
  {
    title: 'Calificación de 4.9/5 en Google',
    desc: 'Más de 1.200 viajeros españoles han viajado a EE.UU. con nosotros. La confianza está demostrada.',
    iconBg: 'linear-gradient(145deg,rgba(234,179,8,.38) 0%,rgba(234,179,8,.18) 100%)',
    iconShadow: '0 4px 18px rgba(234,179,8,.22),inset 0 1px 0 rgba(255,255,255,.1)',
    iconColor: '#fde047',
    fill: 'currentColor',
    icon: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
  },
]

const stats = [
  { num: '+15', suffix: 'K', label: 'viajeros tramitados' },
  { num: '99',  suffix: '%', label: 'tasa de aprobación' },
  { num: '4.9', suffix: '★', label: 'valoración media' },
  { num: '15',  suffix: '+', label: 'años especializados en EE.UU.' },
]

const reviews = [
  { text: 'Nunca había tramitado el ESTA y tenía miedo de hacerlo en inglés directamente en la web del gobierno. Aquí lo hice en 10 minutos y al día siguiente lo tenía aprobado. Muy recomendable.', initials: 'MC', name: 'María C.', meta: 'Madrid · Viaje a Nueva York', color: '#07334d' },
  { text: 'Lo solicité un jueves por la tarde y el viernes por la mañana ya lo tenía aprobado. El proceso fue muy claro, en español y sin complicaciones. Repetiré sin duda.', initials: 'JP', name: 'Jorge P.', meta: 'Barcelona · Ruta 66', color: '#006b63' },
  { text: 'Lo contraté para toda la familia, 4 personas. Me dijeron que uno de los pasaportes tenía un dato que podría causar problemas y me avisaron antes de enviarlo. Eso no lo hace la web oficial.', initials: 'AR', name: 'Ana R.', meta: 'Valencia · Costa Oeste EEUU', color: '#c63622' },
]

export default function HomePage() {
  return (
    <>
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqItems.map(f => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      }} />

      {/* ── HERO ─────────────────────────────────── */}
      <div style={{position:'relative',overflow:'hidden'}}>
        <div className="hero-slide" style={{backgroundImage:"url('https://cdn.travelwebmanager.com/tws-own-product/tours/464/1627370422.6623/golden%20gate.jpg')",backgroundPosition:'center 60%'}}></div>
        <div className="hero-slide" style={{backgroundImage:"url('https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?w=1920&q=85&fit=crop')",backgroundPosition:'center center'}}></div>
        <div className="hero-slide" style={{backgroundImage:"url('https://cdn.travelwebmanager.com/tws-own-product/tours/464/1627370422.6623/las%20vegas.jpg')",backgroundPosition:'center 40%'}}></div>
        <div style={{position:'absolute',inset:0,background:'linear-gradient(105deg,rgba(3,28,43,.95) 0%,rgba(3,28,43,.88) 30%,rgba(7,51,77,.72) 55%,rgba(7,51,77,.38) 100%)',zIndex:1}}></div>
        <div className="hero-grid">
          <div>
            <div style={{display:'inline-flex',alignItems:'center',gap:'.7rem',background:'rgba(198,54,34,.18)',border:'1px solid rgba(198,54,34,.4)',color:'#f5a898',padding:'.5rem 1.2rem',borderRadius:'20px',fontSize:'1.3rem',fontWeight:600,marginBottom:'2rem'}}>
              ✈ Especialistas en viajes a EE.UU. desde 2010
            </div>
            <h1 style={{fontFamily:'"Martel Sans",Georgia,serif',fontSize:'4.2rem',fontWeight:900,color:'#fff',lineHeight:1.15,marginBottom:'1.8rem'}}>
              Tu ESTA para<br/>Estados Unidos,<br/><em style={{color:'#f5a898',fontStyle:'normal'}}>sin complicaciones</em>
            </h1>
            <p style={{color:'rgba(255,255,255,.75)',fontSize:'1.8rem',marginBottom:'2.4rem',lineHeight:1.5}}>
              Nos encargamos de toda la gestión. Tú solo nos das los datos y nosotros tramitamos la autorización ESTA ante la CBP en tu nombre.
            </p>
            <div style={{display:'flex',flexWrap:'wrap',gap:'1.5rem'}}>
              {['Aprobación en 72 h','Revisión humana','Válida 2 años','Soporte en español'].map(t => (
                <div key={t} style={{display:'flex',alignItems:'center',gap:'.6rem',color:'rgba(255,255,255,.85)',fontSize:'1.4rem'}}>
                  <div style={{width:'22px',height:'22px',background:'rgba(0,107,99,.3)',border:'1px solid rgba(0,107,99,.6)',borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  {t}
                </div>
              ))}
            </div>
            <Link href="/solicitar-esta" className="hero-mobile-cta">
              Tramitar mi ESTA →
            </Link>
          </div>
          <div className="hero-form-col">
            <HeroFormCard />
          </div>
        </div>
      </div>

      {/* ── CÓMO FUNCIONA ────────────────────────── */}
      <section className="sec" style={{background:'#fafbfc',padding:'8rem 4rem'}} id="como-funciona">
        <div style={{maxWidth:'1100px',margin:'0 auto'}}>
          <div style={{textAlign:'center',marginBottom:'5rem'}}>
            <div style={{display:'inline-block',background:'rgba(198,54,34,.1)',color:'#c63622',fontSize:'1.2rem',fontWeight:700,letterSpacing:'.08em',textTransform:'uppercase',padding:'.4rem 1rem',borderRadius:'20px',marginBottom:'1.2rem'}}>Proceso</div>
            <h2 style={{fontFamily:'"Martel Sans",Georgia,serif',fontSize:'3.2rem',fontWeight:800,color:'#473f4b',lineHeight:1.2,marginBottom:'1.2rem'}}>Cuatro pasos, sin sorpresas</h2>
            <p style={{fontSize:'1.7rem',color:'#445462',maxWidth:'580px',lineHeight:1.6,margin:'0 auto'}}>Nosotros hacemos el trabajo. Tú solo necesitas tu pasaporte y unos minutos.</p>
          </div>
          <div className="steps-grid">
            {steps.map((s, i) => (
              <div key={i} style={{background:'#fff',borderRadius:'12px',padding:'2.6rem 2rem',textAlign:'center',boxShadow:'0 4px 24px rgba(3,28,43,.12)',position:'relative'}}>
                <div style={{position:'absolute',top:'1.4rem',left:'1.4rem',width:'26px',height:'26px',borderRadius:'50%',background:s.color,color:'#fff',fontFamily:'"Martel Sans",Georgia,serif',fontSize:'1.2rem',fontWeight:800,display:'flex',alignItems:'center',justifyContent:'center'}}>{i+1}</div>
                <div style={{width:'74px',height:'74px',borderRadius:'22px',display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 2rem',background:s.iconBg,boxShadow:s.iconShadow,color:s.color}}>
                  <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" dangerouslySetInnerHTML={{__html:s.icon}}/>
                </div>
                <div style={{fontFamily:'"Martel Sans",Georgia,serif',fontSize:'1.7rem',fontWeight:700,color:'#473f4b',marginBottom:'.8rem'}}>{s.title}</div>
                <p style={{fontSize:'1.4rem',color:'#445462',lineHeight:1.5}}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING (solo plan Estándar) ─────────── */}
      <section className="sec" style={{background:'#fff',padding:'8rem 4rem'}} id="precios">
        <div style={{maxWidth:'1100px',margin:'0 auto'}}>
          <div style={{textAlign:'center',marginBottom:'4rem'}}>
            <div style={{display:'inline-block',background:'rgba(198,54,34,.1)',color:'#c63622',fontSize:'1.2rem',fontWeight:700,letterSpacing:'.08em',textTransform:'uppercase',padding:'.4rem 1rem',borderRadius:'20px',marginBottom:'1.2rem'}}>Tarifas</div>
            <h2 style={{fontFamily:'"Martel Sans",Georgia,serif',fontSize:'3.2rem',fontWeight:800,color:'#473f4b',lineHeight:1.2,marginBottom:'1.2rem'}}>Sin letra pequeña</h2>
            <p style={{fontSize:'1.7rem',color:'#445462',maxWidth:'580px',lineHeight:1.6,margin:'0 auto'}}>Precio fijo por viajero, tasa gubernamental incluida. Pagas una vez y nosotros nos encargamos de todo.</p>
          </div>
          <div style={{maxWidth:'480px',margin:'0 auto 4rem'}}>
            <div style={{border:'2px solid #07334d',borderRadius:'16px',padding:'3rem 2.4rem',textAlign:'center',boxShadow:'0 12px 48px rgba(3,28,43,.18)'}}>
              <div style={{fontSize:'1.3rem',fontWeight:700,color:'#919caa',textTransform:'uppercase',letterSpacing:'.08em',marginBottom:'.8rem'}}>Estándar</div>
              <div style={{fontFamily:'"Martel Sans",Georgia,serif',fontSize:'4.8rem',fontWeight:900,color:'#473f4b',lineHeight:1,marginBottom:'.4rem'}}>
                <sup style={{fontSize:'2.4rem',verticalAlign:'super'}}>€</sup>62
              </div>
              <div style={{fontSize:'1.3rem',color:'#919caa',marginBottom:'1.6rem'}}>por viajero, todo incluido</div>
              <div style={{background:'#eff2f7',borderRadius:'8px',padding:'.6rem 1.2rem',fontSize:'1.3rem',fontWeight:600,color:'#445462',marginBottom:'2rem',display:'flex',alignItems:'center',justifyContent:'center',gap:'.6rem'}}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                Aprobación en hasta 72 h
              </div>
              <ul style={{listStyle:'none',textAlign:'left',marginBottom:'2.4rem',padding:0}}>
                {['Tasa gubernamental CBP incluida (≈37 €)','Revisión humana de la solicitud','Notificación por email al aprobar','Soporte en español por email','Válido 2 años / múltiples entradas'].map(f => (
                  <li key={f} style={{display:'flex',alignItems:'flex-start',gap:'.8rem',fontSize:'1.4rem',color:'#445462',marginBottom:'.9rem'}}>
                    <span style={{color:'#006b63',fontWeight:700,flexShrink:0}}>✓</span>{f}
                  </li>
                ))}
              </ul>
              <Link href="/solicitar-esta" style={{display:'block',width:'100%',padding:'1.2rem',border:'2px solid #07334d',borderRadius:'8px',fontFamily:'"Martel Sans",Georgia,serif',fontSize:'1.5rem',fontWeight:700,color:'#fff',background:'#07334d',cursor:'pointer',textAlign:'center',textDecoration:'none'}}>
                Tramitar ahora
              </Link>
            </div>
          </div>
          <p style={{textAlign:'center',fontSize:'1.3rem',color:'#919caa'}}>* Tasa oficial CBP: $40.27 USD por solicitante (vigente desde sep. 2025). El equivalente en euros varía con el tipo de cambio EUR/USD.</p>
        </div>
      </section>

      {/* ── POR QUÉ ELEGIRNOS ────────────────────── */}
      <section className="sec" style={{background:'#031c2b',padding:'8rem 4rem'}}>
        <div style={{maxWidth:'1100px',margin:'0 auto'}}>
          <div style={{marginBottom:'4rem'}}>
            <div style={{display:'inline-block',background:'rgba(255,255,255,.1)',color:'rgba(255,255,255,.7)',fontSize:'1.2rem',fontWeight:700,letterSpacing:'.08em',textTransform:'uppercase',padding:'.4rem 1rem',borderRadius:'20px',marginBottom:'1.2rem'}}>Por qué elegirnos</div>
            <h2 style={{fontFamily:'"Martel Sans",Georgia,serif',fontSize:'3.2rem',fontWeight:800,color:'#fff',lineHeight:1.2,marginBottom:'1.2rem'}}>Expertos en viajes a EE.UU.<br/>desde hace más de 15 años</h2>
            <p style={{fontSize:'1.7rem',color:'rgba(255,255,255,.65)',maxWidth:'580px',lineHeight:1.6}}>No somos una agencia genérica de trámites. Somos la agencia española especializada en viajes americanos y sabemos lo que el viajero español necesita.</p>
          </div>
          <div className="why-grid">
            <div style={{display:'grid',gap:'2rem'}}>
              {whyFeatures.map((f,i) => (
                <div key={i} style={{display:'flex',gap:'1.8rem',alignItems:'flex-start'}}>
                  <div style={{width:'52px',height:'52px',borderRadius:'14px',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0,background:f.iconBg,boxShadow:f.iconShadow,color:f.iconColor}}>
                    <svg viewBox="0 0 24 24" width="24" height="24" fill={f.fill} stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" dangerouslySetInnerHTML={{__html:f.icon}}/>
                  </div>
                  <div>
                    <h3 style={{fontFamily:'"Martel Sans",Georgia,serif',fontSize:'1.7rem',fontWeight:700,color:'#fff',marginBottom:'.5rem'}}>{f.title}</h3>
                    <p style={{fontSize:'1.4rem',color:'rgba(255,255,255,.6)',lineHeight:1.5}}>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="stats-grid">
              {stats.map((s,i) => (
                <div key={i} style={{background:'rgba(255,255,255,.05)',border:'1px solid rgba(255,255,255,.1)',borderRadius:'12px',padding:'2.4rem',textAlign:'center'}}>
                  <div style={{fontFamily:'"Martel Sans",Georgia,serif',fontSize:'4rem',fontWeight:900,color:'#fff',lineHeight:1,marginBottom:'.4rem'}}>
                    {s.num}<span style={{color:'#c63622'}}>{s.suffix}</span>
                  </div>
                  <div style={{fontSize:'1.3rem',color:'rgba(255,255,255,.55)',lineHeight:1.4}}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── REVIEWS ──────────────────────────────── */}
      <section className="sec" style={{background:'#fafbfc',padding:'8rem 4rem'}}>
        <div style={{maxWidth:'1100px',margin:'0 auto'}}>
          <div style={{textAlign:'center',marginBottom:'4rem'}}>
            <div style={{display:'inline-block',background:'rgba(198,54,34,.1)',color:'#c63622',fontSize:'1.2rem',fontWeight:700,letterSpacing:'.08em',textTransform:'uppercase',padding:'.4rem 1rem',borderRadius:'20px',marginBottom:'1.2rem'}}>Valoraciones</div>
            <h2 style={{fontFamily:'"Martel Sans",Georgia,serif',fontSize:'3.2rem',fontWeight:800,color:'#473f4b',lineHeight:1.2}}>Lo que dicen nuestros viajeros</h2>
          </div>
          <div className="reviews-grid">
            {reviews.map((r,i) => (
              <div key={i} style={{background:'#fff',borderRadius:'12px',padding:'2.4rem',boxShadow:'0 4px 24px rgba(3,28,43,.12)'}}>
                <div style={{color:'#f59e0b',fontSize:'1.8rem',marginBottom:'1.2rem',letterSpacing:'.1em'}}>★★★★★</div>
                <p style={{fontSize:'1.5rem',color:'#445462',lineHeight:1.6,marginBottom:'1.6rem',fontStyle:'italic'}}>&#34;{r.text}&#34;</p>
                <div style={{display:'flex',alignItems:'center',gap:'1.2rem'}}>
                  <div style={{width:'42px',height:'42px',borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:700,fontSize:'1.5rem',color:'#fff',background:r.color,flexShrink:0}}>{r.initials}</div>
                  <div>
                    <div style={{fontSize:'1.4rem',fontWeight:700,color:'#473f4b'}}>{r.name}</div>
                    <div style={{fontSize:'1.2rem',color:'#919caa'}}>{r.meta}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:'2rem',marginTop:'3.5rem',padding:'2rem',background:'#fff',borderRadius:'12px',boxShadow:'0 4px 24px rgba(3,28,43,.12)',maxWidth:'500px',marginLeft:'auto',marginRight:'auto'}}>
            <div style={{fontFamily:'"Martel Sans",Georgia,serif',fontSize:'5rem',fontWeight:900,color:'#473f4b',lineHeight:1}}>4.9</div>
            <div>
              <div style={{color:'#f59e0b',fontSize:'2rem'}}>★★★★★</div>
              <div style={{fontSize:'1.3rem',color:'#919caa',marginTop:'.2rem'}}>Basado en +1.200 valoraciones<br/>en Google y Trustpilot</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────── */}
      <section className="sec" style={{background:'#fff',padding:'8rem 4rem'}} id="faq">
        <div style={{maxWidth:'1100px',margin:'0 auto'}}>
          <div style={{textAlign:'center',marginBottom:'4rem'}}>
            <div style={{display:'inline-block',background:'rgba(198,54,34,.1)',color:'#c63622',fontSize:'1.2rem',fontWeight:700,letterSpacing:'.08em',textTransform:'uppercase',padding:'.4rem 1rem',borderRadius:'20px',marginBottom:'1.2rem'}}>Preguntas frecuentes</div>
            <h2 style={{fontFamily:'"Martel Sans",Georgia,serif',fontSize:'3.2rem',fontWeight:800,color:'#473f4b',lineHeight:1.2}}>Todo lo que necesitas saber</h2>
          </div>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────── */}
      <section className="sec" style={{background:'linear-gradient(135deg,#a82c1b 0%,#c63622 100%)',padding:'6rem 4rem',textAlign:'center'}}>
        <h2 style={{fontFamily:'"Martel Sans",Georgia,serif',fontSize:'3.6rem',fontWeight:900,color:'#fff',marginBottom:'1.2rem'}}>¿Listo para viajar a EE.UU.?</h2>
        <p style={{color:'rgba(255,255,255,.8)',fontSize:'1.8rem',marginBottom:'3rem'}}>Tramita tu ESTA ahora y ten la autorización lista en hasta 72 horas</p>
        <Link href="/solicitar-esta" style={{display:'inline-flex',alignItems:'center',gap:'.8rem',background:'#fff',color:'#c63622',padding:'1.4rem 3.2rem',borderRadius:'10px',fontFamily:'"Martel Sans",Georgia,serif',fontSize:'1.7rem',fontWeight:700,boxShadow:'0 4px 20px rgba(0,0,0,.2)',textDecoration:'none'}}>
          Comenzar solicitud
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </Link>
      </section>
    </>
  )
}
