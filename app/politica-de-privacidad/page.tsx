import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Política de Privacidad — ESTA USA by Gourmety',
  description: 'Política de privacidad del servicio estausa.es, operado por Gourmety Viajes S.L. Información sobre el tratamiento de tus datos personales.',
  alternates: { canonical: 'https://estausa.es/politica-de-privacidad' },
  robots: { index: false, follow: false },
}

const S = {
  wrap: { maxWidth: '860px', margin: '0 auto', padding: '6rem 2.4rem 8rem' },
  h2: { fontFamily: '"Martel Sans",Georgia,serif', fontSize: '2rem', fontWeight: 700, color: '#07334d', margin: '3.2rem 0 1rem', paddingBottom: '.8rem', borderBottom: '2px solid #e8edf2' },
  h3: { fontFamily: '"Martel Sans",Georgia,serif', fontSize: '1.7rem', fontWeight: 700, color: '#07334d', margin: '2.4rem 0 .8rem' },
  p: { fontSize: '1.55rem', color: '#374151', lineHeight: 1.75, margin: '0 0 1.4rem' },
  ul: { paddingLeft: '2.2rem', margin: '0 0 1.4rem' },
  li: { fontSize: '1.55rem', color: '#374151', lineHeight: 1.7, marginBottom: '.6rem' },
  box: { background: '#f0fdf9', border: '1px solid #a7f3d0', borderRadius: '10px', padding: '1.6rem 2rem', margin: '0 0 1.4rem' },
}

export default function PoliticaPrivacidadPage() {
  return (
    <>
      <PageHero
        breadcrumb={[{ label: 'Inicio', href: '/' }, { label: 'Política de Privacidad' }]}
        title="Política de Privacidad"
        subtitle="Cómo tratamos tus datos personales en estausa.es — RGPD 2016/679"
      />

      <div style={S.wrap}>

        <p style={S.p}>De conformidad con el Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo (RGPD), la presente Política de Privacidad regula el tratamiento de los datos personales recabados a través del sitio web <strong>estausa.es</strong>.</p>

        <h2 style={S.h2}>1. Responsable del tratamiento</h2>
        <ul style={S.ul}>
          <li style={S.li}><strong>Identidad:</strong> Gourmety Viajes S.L.</li>
          <li style={S.li}><strong>NIF:</strong> B52538170</li>
          <li style={S.li}><strong>Dirección:</strong> C/ Gutierrez Herrero 52, Oficina 115.15, Avilés (Asturias)</li>
          <li style={S.li}><strong>Email:</strong> info@gourmety.com</li>
        </ul>

        <h2 style={S.h2}>2. Datos personales que recabamos</h2>
        <p style={S.p}>Para prestar el servicio de tramitación asistida del ESTA, recopilamos los siguientes datos:</p>
        <ul style={S.ul}>
          <li style={S.li}><strong>Datos identificativos:</strong> nombre completo, fecha de nacimiento, género, ciudad y país de nacimiento, nacionalidad.</li>
          <li style={S.li}><strong>Datos del pasaporte:</strong> número de pasaporte, país emisor, fechas de expedición y caducidad.</li>
          <li style={S.li}><strong>Datos de contacto:</strong> dirección de email, teléfono, dirección postal.</li>
          <li style={S.li}><strong>Datos del viaje:</strong> alojamiento en EE.UU., número de vuelo (si está disponible), fecha de llegada prevista.</li>
          <li style={S.li}><strong>Datos de elegibilidad:</strong> respuestas a las preguntas de elegibilidad del formulario ESTA (antecedentes penales, viajes a países restringidos, etc.).</li>
          <li style={S.li}><strong>Datos de pago:</strong> procesados íntegramente por Stripe; Gourmety Viajes S.L. no almacena datos de tarjeta de crédito o débito.</li>
          <li style={S.li}><strong>Datos de navegación:</strong> IP, tipo de dispositivo y comportamiento de navegación, recabados mediante cookies analíticas (con consentimiento previo).</li>
        </ul>

        <h2 style={S.h2}>3. Finalidad del tratamiento y base legitimadora</h2>

        <h3 style={S.h3}>3.1 Tramitación del ESTA</h3>
        <p style={S.p}><strong>Finalidad:</strong> Gestionar la solicitud de autorización ESTA ante la CBP (U.S. Customs and Border Protection) en nombre del usuario.<br/><strong>Base legitimadora:</strong> Ejecución del contrato de servicio.</p>

        <h3 style={S.h3}>3.2 Comunicaciones del servicio</h3>
        <p style={S.p}><strong>Finalidad:</strong> Enviar confirmaciones de pago, actualizaciones del estado del ESTA y el resultado de la tramitación al email facilitado.<br/><strong>Base legitimadora:</strong> Ejecución del contrato.</p>

        <h3 style={S.h3}>3.3 Comunicaciones comerciales</h3>
        <p style={S.p}><strong>Finalidad:</strong> Enviar información sobre ofertas y servicios de Gourmety relacionados con viajes a EE.UU.<br/><strong>Base legitimadora:</strong> Consentimiento expreso del usuario, revocable en cualquier momento.</p>

        <h3 style={S.h3}>3.4 Mejora del servicio y analítica</h3>
        <p style={S.p}><strong>Finalidad:</strong> Análisis estadístico del uso del sitio web para mejorarlo.<br/><strong>Base legitimadora:</strong> Interés legítimo del responsable, con consentimiento previo para cookies analíticas.</p>

        <h2 style={S.h2}>4. Conservación de los datos</h2>
        <p style={S.p}>Los datos personales se conservarán durante el tiempo necesario para prestar el servicio contratado y cumplir con las obligaciones legales (fiscales, mercantiles) aplicables. Con carácter general, se aplicará un período de conservación de <strong>6 años</strong> desde la finalización de la relación comercial, de conformidad con la legislación mercantil y tributaria española.</p>
        <p style={S.p}>Los datos facilitados exclusivamente para comunicaciones comerciales se conservarán hasta que el usuario ejerza su derecho de supresión u oposición.</p>

        <h2 style={S.h2}>5. Comunicación de datos a terceros</h2>
        <p style={S.p}>Sus datos personales podrán ser comunicados a:</p>
        <ul style={S.ul}>
          <li style={S.li}><strong>U.S. Customs and Border Protection (CBP):</strong> estrictamente necesario para tramitar el ESTA. Implica transferencia internacional de datos a EE.UU., amparada en las garantías adecuadas conforme al RGPD.</li>
          <li style={S.li}><strong>Stripe Inc.:</strong> para el procesamiento seguro del pago. Stripe cumple con los estándares PCI DSS y dispone de cláusulas contractuales tipo con la UE.</li>
          <li style={S.li}><strong>Google LLC (Google Analytics):</strong> para análisis estadístico anónimo de la navegación, únicamente si el usuario acepta cookies analíticas.</li>
          <li style={S.li}><strong>Proveedores de servicios IT:</strong> encargados de tratamiento que operan los sistemas tecnológicos, con las garantías contractuales pertinentes.</li>
        </ul>
        <p style={S.p}>Sus datos no serán vendidos ni cedidos con fines publicitarios a terceros sin su consentimiento previo.</p>

        <h2 style={S.h2}>6. Transferencias internacionales de datos</h2>
        <p style={S.p}>La tramitación del ESTA requiere, de forma inherente, la transferencia de sus datos a los sistemas de la CBP, organismo del Gobierno de los EE.UU. Dicha transferencia se realiza en cumplimiento del fin contractual y es imprescindible para prestar el servicio.</p>
        <p style={S.p}>Para el resto de transferencias internacionales (Stripe, Google), Gourmety Viajes S.L. aplica las garantías establecidas en el RGPD (cláusulas contractuales tipo, decisiones de adecuación).</p>

        <h2 style={S.h2}>7. Seguridad de los datos</h2>
        <p style={S.p}>Gourmety Viajes S.L. ha adoptado las medidas técnicas y organizativas necesarias para garantizar la seguridad de sus datos personales, previniendo su alteración, pérdida, tratamiento o acceso no autorizado. El sitio utiliza protocolo HTTPS con cifrado TLS.</p>
        <p style={S.p}>Los datos de pago son procesados directamente por Stripe, que opera con certificación PCI DSS nivel 1. Gourmety Viajes S.L. no almacena en ningún momento los datos completos de la tarjeta de pago.</p>

        <h2 style={S.h2}>8. Derechos del usuario</h2>
        <div style={S.box}>
          <p style={{ ...S.p, margin: 0 }}>En cualquier momento puede ejercer los derechos de <strong>acceso, rectificación, supresión, portabilidad, limitación del tratamiento y oposición</strong> dirigiéndose a:<br/>
          📧 <strong>info@gourmety.com</strong><br/>
          📮 C/ Gutierrez Herrero 52, Oficina 115.15, Avilés (Asturias)</p>
        </div>
        <p style={S.p}>Asimismo, puede presentar una reclamación ante la <strong>Agencia Española de Protección de Datos (AEPD)</strong> en <a href="https://www.aepd.es" style={{ color: '#006b63' }}>www.aepd.es</a> si considera que sus derechos han sido vulnerados.</p>

        <h2 style={S.h2}>9. Menores de edad</h2>
        <p style={S.p}>Si el usuario fuese menor de edad, se requiere el consentimiento previo de sus padres o tutores antes de facilitar datos personales. Gourmety Viajes S.L. no recaba datos de menores de 14 años de forma deliberada.</p>

        <h2 style={S.h2}>10. Cambios en esta política</h2>
        <p style={S.p}>Esta Política de Privacidad puede ser actualizada para adaptarse a cambios normativos o del servicio. Le notificaremos cualquier cambio relevante mediante aviso en el sitio web. La versión vigente siempre estará disponible en <a href="/politica-de-privacidad" style={{ color: '#006b63' }}>estausa.es/politica-de-privacidad</a>.</p>

        <p style={{ ...S.p, marginTop: '4rem', fontSize: '1.35rem', color: '#94a3b8' }}>Última actualización: julio de 2026.</p>
      </div>
    </>
  )
}
