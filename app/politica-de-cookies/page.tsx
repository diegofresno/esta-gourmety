import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Política de Cookies — ESTA USA by Gourmety',
  description: 'Información sobre las cookies utilizadas en estausa.es: qué son, qué tipos usamos y cómo puedes gestionarlas.',
  alternates: { canonical: 'https://estausa.es/politica-de-cookies' },
  robots: { index: false, follow: false },
}

const S = {
  wrap: { maxWidth: '860px', margin: '0 auto', padding: '6rem 2.4rem 8rem' },
  h2: { fontFamily: '"Martel Sans",Georgia,serif', fontSize: '2rem', fontWeight: 700, color: '#07334d', margin: '3.2rem 0 1rem', paddingBottom: '.8rem', borderBottom: '2px solid #e8edf2' },
  p: { fontSize: '1.55rem', color: '#374151', lineHeight: 1.75, margin: '0 0 1.4rem' },
  ul: { paddingLeft: '2.2rem', margin: '0 0 1.4rem' },
  li: { fontSize: '1.55rem', color: '#374151', lineHeight: 1.7, marginBottom: '.6rem' },
  table: { width: '100%', borderCollapse: 'collapse' as const, margin: '0 0 2rem', fontSize: '1.4rem' },
  th: { background: '#07334d', color: '#fff', textAlign: 'left' as const, padding: '.9rem 1.2rem', fontFamily: '"Martel Sans",Georgia,serif', fontWeight: 700 },
  td: { padding: '.85rem 1.2rem', borderBottom: '1px solid #e2e8f0', color: '#374151', verticalAlign: 'top' as const },
  tdalt: { padding: '.85rem 1.2rem', borderBottom: '1px solid #e2e8f0', color: '#374151', verticalAlign: 'top' as const, background: '#f8fafc' },
}

export default function PoliticaCookiesPage() {
  return (
    <>
      <PageHero
        breadcrumb={[{ label: 'Inicio', href: '/' }, { label: 'Política de Cookies' }]}
        title="Política de Cookies"
        subtitle="Información sobre las cookies utilizadas en estausa.es y cómo gestionarlas"
      />

      <div style={S.wrap}>

        <h2 style={S.h2}>1. ¿Qué son las cookies?</h2>
        <p style={S.p}>Las cookies son pequeños archivos de texto que un sitio web almacena en tu dispositivo cuando lo visitas. Sirven para recordar tus preferencias, analizar el uso del sitio y facilitar determinadas funcionalidades técnicas.</p>
        <p style={S.p}>De acuerdo con la Ley 34/2002 (LSSI) y el Reglamento (UE) 2016/679 (RGPD), te informamos del uso de cookies en estausa.es y solicitamos tu consentimiento para las que no sean estrictamente necesarias.</p>

        <h2 style={S.h2}>2. Tipos de cookies que utilizamos</h2>

        <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
          <table style={S.table}>
            <thead>
              <tr>
                <th style={S.th}>Cookie</th>
                <th style={S.th}>Proveedor</th>
                <th style={S.th}>Tipo</th>
                <th style={S.th}>Finalidad</th>
                <th style={S.th}>Duración</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={S.td}><code style={{ background:'#f1f5f9',padding:'2px 6px',borderRadius:'4px',fontSize:'1.3rem' }}>cookie_consent</code></td>
                <td style={S.td}>estausa.es</td>
                <td style={S.td}>Necesaria</td>
                <td style={S.td}>Almacena tu elección sobre el uso de cookies para no volver a mostrarte el banner</td>
                <td style={S.td}>1 año</td>
              </tr>
              <tr>
                <td style={S.tdalt}><code style={{ background:'#f1f5f9',padding:'2px 6px',borderRadius:'4px',fontSize:'1.3rem' }}>__stripe_*</code></td>
                <td style={S.tdalt}>Stripe Inc.</td>
                <td style={S.tdalt}>Necesaria</td>
                <td style={S.tdalt}>Necesaria para el procesamiento seguro del pago mediante tarjeta. Prevención de fraude.</td>
                <td style={S.tdalt}>Sesión / 1 año</td>
              </tr>
              <tr>
                <td style={S.td}><code style={{ background:'#f1f5f9',padding:'2px 6px',borderRadius:'4px',fontSize:'1.3rem' }}>_ga, _gid</code></td>
                <td style={S.td}>Google Analytics</td>
                <td style={S.td}>Analítica</td>
                <td style={S.td}>Analiza el comportamiento de los usuarios en el sitio de forma anónima para mejorar el servicio</td>
                <td style={S.td}>2 años / 24 h</td>
              </tr>
              <tr>
                <td style={S.tdalt}><code style={{ background:'#f1f5f9',padding:'2px 6px',borderRadius:'4px',fontSize:'1.3rem' }}>_ga_*</code></td>
                <td style={S.tdalt}>Google Analytics</td>
                <td style={S.tdalt}>Analítica</td>
                <td style={S.tdalt}>Almacena el estado de la sesión para Google Analytics 4</td>
                <td style={S.tdalt}>2 años</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 style={S.h2}>3. Cookies necesarias</h2>
        <p style={S.p}>Las cookies estrictamente necesarias son imprescindibles para el funcionamiento del sitio y la prestación del servicio. No requieren consentimiento previo.</p>
        <p style={S.p}><strong>Stripe:</strong> El procesador de pagos utiliza cookies propias para garantizar la seguridad de las transacciones y prevenir el fraude. Si deshabilitas estas cookies no podrás completar el proceso de pago.</p>

        <h2 style={S.h2}>4. Cookies analíticas</h2>
        <p style={S.p}>Utilizamos Google Analytics 4 para obtener estadísticas anónimas sobre el uso del sitio: páginas visitadas, tiempo de permanencia, procedencia del tráfico, etc. Estos datos nos ayudan a mejorar el servicio.</p>
        <p style={S.p}>Las cookies analíticas solo se instalan si has dado tu consentimiento mediante el banner de cookies. Puedes revocar este consentimiento en cualquier momento.</p>

        <h2 style={S.h2}>5. Cómo gestionar las cookies</h2>
        <p style={S.p}>Puedes gestionar el uso de cookies de las siguientes formas:</p>
        <ul style={S.ul}>
          <li style={S.li}><strong>Banner de cookies:</strong> Al acceder al sitio por primera vez, puedes aceptar todas las cookies o seleccionar solo las necesarias.</li>
          <li style={S.li}><strong>Tu navegador:</strong> La mayoría de navegadores permiten configurar, bloquear o eliminar cookies. Ten en cuenta que bloquear todas las cookies puede afectar al funcionamiento del sitio.</li>
          <li style={S.li}><strong>Google Analytics opt-out:</strong> Puedes desactivar el seguimiento de Google Analytics instalando la <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" style={{ color: '#006b63' }}>extensión de inhabilitación de Google Analytics</a>.</li>
        </ul>

        <p style={S.p}><strong>Instrucciones por navegador:</strong></p>
        <ul style={S.ul}>
          <li style={S.li}><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" style={{ color: '#006b63' }}>Google Chrome</a></li>
          <li style={S.li}><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer" style={{ color: '#006b63' }}>Mozilla Firefox</a></li>
          <li style={S.li}><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" style={{ color: '#006b63' }}>Safari</a></li>
          <li style={S.li}><a href="https://support.microsoft.com/es-es/windows/eliminar-y-administrar-cookies-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" rel="noopener noreferrer" style={{ color: '#006b63' }}>Microsoft Edge</a></li>
        </ul>

        <h2 style={S.h2}>6. Más información</h2>
        <p style={S.p}>Para cualquier consulta sobre esta política de cookies puedes contactarnos en <a href="mailto:info@gourmety.com" style={{ color: '#006b63' }}>info@gourmety.com</a>.</p>
        <p style={S.p}>Puedes consultar también nuestra <a href="/politica-de-privacidad" style={{ color: '#006b63' }}>Política de Privacidad</a> y nuestro <a href="/aviso-legal" style={{ color: '#006b63' }}>Aviso Legal</a>.</p>

        <p style={{ ...S.p, marginTop: '4rem', fontSize: '1.35rem', color: '#94a3b8' }}>Última actualización: julio de 2026.</p>
      </div>
    </>
  )
}
