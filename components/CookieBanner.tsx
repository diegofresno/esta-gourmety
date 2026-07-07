'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem('cookie_consent')) setVisible(true)
  }, [])

  function accept() {
    localStorage.setItem('cookie_consent', 'accepted')
    setVisible(false)
  }

  function necessary() {
    localStorage.setItem('cookie_consent', 'necessary')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div style={{
      position: 'fixed', bottom: 0, left: 0, right: 0,
      background: 'rgba(3,15,28,0.97)',
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)',
      borderTop: '1px solid rgba(255,255,255,0.1)',
      padding: '1.8rem 4rem',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      gap: '2rem', flexWrap: 'wrap',
      zIndex: 9999,
    }}>
      <div style={{ flex: 1, maxWidth: '720px' }}>
        <p style={{ fontSize: '1.45rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.55, margin: 0 }}>
          Usamos cookies propias y de terceros (Stripe, Google Analytics) para procesar pagos de forma segura y mejorar la experiencia.{' '}
          <Link href="/politica-de-cookies" style={{ color: '#7dd3c8', textDecoration: 'underline', whiteSpace: 'nowrap' }}>
            Política de cookies
          </Link>
        </p>
      </div>
      <div style={{ display: 'flex', gap: '1rem', flexShrink: 0 }}>
        <button
          onClick={necessary}
          style={{
            background: 'transparent', border: '1px solid rgba(255,255,255,0.22)',
            color: 'rgba(255,255,255,0.65)', padding: '.75rem 2rem',
            borderRadius: '8px', fontSize: '1.4rem', fontWeight: 600, cursor: 'pointer',
          }}
        >
          Solo necesarias
        </button>
        <button
          onClick={accept}
          style={{
            background: '#006b63', border: 'none',
            color: '#fff', padding: '.75rem 2rem',
            borderRadius: '8px', fontSize: '1.4rem', fontWeight: 700, cursor: 'pointer',
            boxShadow: '0 2px 12px rgba(0,107,99,0.4)',
          }}
        >
          Aceptar todo
        </button>
      </div>
    </div>
  )
}
