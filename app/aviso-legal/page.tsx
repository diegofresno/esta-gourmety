import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Aviso Legal — ESTA USA by Gourmety',
  description: 'Aviso legal de estausa.es, servicio de tramitación del ESTA operado por Gourmety Viajes S.L.',
  alternates: { canonical: 'https://estausa.es/aviso-legal' },
  robots: { index: false, follow: false },
}

const S = {
  wrap: { maxWidth: '860px', margin: '0 auto', padding: '6rem 2.4rem 8rem' },
  h2: { fontFamily: '"Martel Sans",Georgia,serif', fontSize: '2rem', fontWeight: 700, color: '#07334d', margin: '3.2rem 0 1rem', paddingBottom: '.8rem', borderBottom: '2px solid #e8edf2' },
  p: { fontSize: '1.55rem', color: '#374151', lineHeight: 1.75, margin: '0 0 1.4rem' },
  ul: { paddingLeft: '2.2rem', margin: '0 0 1.4rem' },
  li: { fontSize: '1.55rem', color: '#374151', lineHeight: 1.7, marginBottom: '.6rem' },
}

export default function AvisoLegalPage() {
  return (
    <>
      <PageHero
        breadcrumb={[{ label: 'Inicio', href: '/' }, { label: 'Aviso Legal' }]}
        title="Aviso Legal"
        subtitle="Información legal de estausa.es, servicio operado por Gourmety Viajes S.L."
      />

      <div style={S.wrap}>

        <h2 style={S.h2}>1. Información legal del titular</h2>
        <p style={S.p}>En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico, se facilitan los siguientes datos identificativos:</p>
        <ul style={S.ul}>
          <li style={S.li}><strong>Razón social:</strong> Gourmety Viajes S.L.</li>
          <li style={S.li}><strong>NIF:</strong> B52538170</li>
          <li style={S.li}><strong>Domicilio social:</strong> C/ Gutierrez Herrero 52, Centro de Empresas La Curtidora, Oficina 115.15, Avilés (Asturias)</li>
          <li style={S.li}><strong>Oficinas centrales:</strong> C/ Cabrales 31, Entro F, 33201, Gijón, Asturias</li>
          <li style={S.li}><strong>Correo electrónico:</strong> info@gourmety.com</li>
          <li style={S.li}><strong>Datos registrales:</strong> T 4175, F 195, S 8, H AS 49230, I/A 1</li>
          <li style={S.li}><strong>Licencia de Viajes:</strong> AV243AS</li>
          <li style={S.li}><strong>Código IATA:</strong> 78000145</li>
        </ul>
        <p style={S.p}>El sitio web <strong>estausa.es</strong> es un servicio de tramitación asistida del ESTA (Electronic System for Travel Authorization) para viajeros hispanohablantes, operado bajo la marca <em>ESTA USA by Gourmety</em>.</p>

        <h2 style={S.h2}>2. Usuarios</h2>
        <p style={S.p}>El acceso y/o uso de este portal atribuye la condición de USUARIO, que acepta desde dicho acceso los presentes términos y condiciones. Los citados términos serán de aplicación independientemente de las Condiciones Generales de Contratación que en su caso resulten de obligado cumplimiento.</p>

        <h2 style={S.h2}>3. Uso del portal</h2>
        <p style={S.p}>El USUARIO asume la responsabilidad del uso del portal. Esta responsabilidad se extiende al registro necesario para acceder a determinados servicios o contenidos, siendo el USUARIO responsable de aportar información veraz y lícita.</p>
        <p style={S.p}>El USUARIO se compromete a hacer un uso adecuado de los contenidos y servicios, y en particular a no utilizarlos para:</p>
        <ul style={S.ul}>
          <li style={S.li}>Actividades ilícitas, ilegales o contrarias a la buena fe y al orden público.</li>
          <li style={S.li}>Difundir contenidos racistas, xenófobos, pornográficos ilegales o contrarios a los derechos humanos.</li>
          <li style={S.li}>Introducir o difundir virus informáticos o sistemas que puedan provocar daños.</li>
          <li style={S.li}>Intentar acceder o manipular cuentas de otros usuarios.</li>
        </ul>

        <h2 style={S.h2}>4. Propiedad intelectual e industrial</h2>
        <p style={S.p}>Gourmety Viajes S.L., por sí o como cesionaria, es titular de todos los derechos de propiedad intelectual e industrial del sitio web, así como de los elementos contenidos en él (imágenes, textos, marcas, logotipos, software, etc.). Todos los derechos reservados.</p>
        <p style={S.p}>Quedan expresamente prohibidas la reproducción, distribución y comunicación pública de la totalidad o parte de los contenidos de este sitio con fines comerciales, sin autorización previa y por escrito de Gourmety Viajes S.L.</p>
        <p style={S.p}>El USUARIO podrá visualizar, imprimir, copiar y almacenar los contenidos exclusivamente para uso personal y privado.</p>

        <h2 style={S.h2}>5. Exclusión de garantías y responsabilidad</h2>
        <p style={S.p}>Gourmety Viajes S.L. se reserva el derecho a interrumpir el acceso a los servicios en cualquier momento y sin previo aviso, por motivos técnicos, de seguridad, mantenimiento o cualquier otra causa justificada.</p>
        <p style={S.p}>Gourmety Viajes S.L. no asume responsabilidad derivada, entre otros, de:</p>
        <ul style={S.ul}>
          <li style={S.li}>La utilización que los usuarios hagan de los materiales del sitio web en infracción de la propiedad intelectual.</li>
          <li style={S.li}>Los daños causados por un funcionamiento normal o anormal de las herramientas de búsqueda o acceso a los servicios.</li>
          <li style={S.li}>Los contenidos de páginas enlazadas desde el sitio.</li>
          <li style={S.li}>Los actos u omisiones de terceros.</li>
        </ul>
        <p style={S.p}><strong>Nota importante:</strong> estausa.es es un servicio de tramitación asistida independiente. No somos el Gobierno de los Estados Unidos ni la U.S. Customs and Border Protection (CBP). La decisión de aprobación o denegación del ESTA corresponde exclusivamente a la CBP.</p>

        <h2 style={S.h2}>6. Legislación aplicable y jurisdicción</h2>
        <p style={S.p}>Para la resolución de todas las controversias o cuestiones relacionadas con el presente sitio web o de las actividades en él desarrolladas, será de aplicación la legislación española, a la que se someten expresamente las partes, siendo competentes para la resolución de todos los conflictos derivados o relacionados con su uso los Juzgados y Tribunales de Gijón (Asturias).</p>

        <p style={{ ...S.p, marginTop: '4rem', fontSize: '1.35rem', color: '#94a3b8' }}>Última actualización: julio de 2026.</p>
      </div>
    </>
  )
}
