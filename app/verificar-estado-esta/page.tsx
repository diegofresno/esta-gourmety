import type { Metadata } from 'next'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import FAQAccordion from '@/components/FAQAccordion'

export const metadata: Metadata = {
  title: 'Verificar estado de tu ESTA USA — Comprueba tu autorización',
  description: 'Cómo verificar el estado de tu ESTA: Autorizado, Pendiente o No Autorizado. Instrucciones en español y enlace al verificador oficial de la CBP.',
  alternates: { canonical: 'https://estausa.es/verificar-estado-esta' },
}

const faqs = [
  {
    q: '¿Cómo sé si mi ESTA está aprobado?',
    a: 'Puedes verificarlo de dos formas: (1) consultando el email de confirmación que Gourmety te envió cuando tu ESTA fue aprobado, o (2) accediendo al verificador oficial de la CBP en esta.cbp.dhs.gov con el número de pasaporte y el número de solicitud ESTA. Si el estado es "Autorización aprobada", puedes viajar.',
  },
  {
    q: '¿Qué significa ESTA pendiente?',
    a: 'El estado "Autorización pendiente" significa que la CBP está revisando tu solicitud y aún no ha emitido una respuesta definitiva. Este estado puede durar hasta 72 horas. No puedes embarcar a EE.UU. con el ESTA en estado pendiente. Espera a que se resuelva. Si superas las 72h sin respuesta, contacta con la CBP.',
  },
  {
    q: '¿Cuánto tarda en aparecer el ESTA aprobado?',
    a: 'La mayoría de las solicitudes se aprueban en minutos, a veces en segundos. Un porcentaje pequeño pasa a "Pendiente" durante hasta 72 horas. En casos muy raros, puede tardar hasta 72 horas en cambiar de estado. Recomendamos solicitar el ESTA con al menos 72 horas de antelación al vuelo para evitar problemas.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

export default function VerificarEstadoEstaPage() {
  return (
    <>
      <JsonLd data={faqSchema} />

      {/* Hero breadcrumb */}
      <div className="bg-[#07334d] text-white py-10 px-6">
        <div className="max-w-[1160px] mx-auto">
          <div className="text-[1.35rem] text-white/50 mb-2">
            <Link href="/" className="hover:text-white/80">Inicio</Link> › Verificar estado ESTA
          </div>
          <h1 className="font-[Martel_Sans] font-black text-[3.2rem] mb-2">
            Verificar el estado de tu ESTA
          </h1>
          <p className="text-white/70 text-[1.6rem]">
            Comprueba si tu ESTA está aprobado, pendiente o denegado antes de volar
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[860px] mx-auto px-6 py-14">

        {/* Verificador oficial */}
        <section className="mb-12">
          <h2 className="font-[Martel_Sans] font-black text-[2.6rem] text-[#07334d] mb-4">
            Cómo verificar el estado de tu ESTA
          </h2>
          <p className="text-[1.55rem] text-gray-700 leading-relaxed mb-6">
            El estado de tu ESTA puede consultarse en el <strong>verificador oficial de la CBP</strong> (Customs and Border Protection, la agencia de aduanas y fronteras de EE.UU.). El verificador está en inglés, pero aquí te explicamos el proceso paso a paso en español.
          </p>

          <div className="bg-[#f0faf9] border border-[#006b63]/30 rounded-xl p-6 mb-8">
            <h3 className="font-[Martel_Sans] font-bold text-[1.9rem] text-[#07334d] mb-2">
              Verificador oficial de la CBP
            </h3>
            <p className="text-[1.5rem] text-gray-700 mb-4">
              Accede al sistema oficial del Gobierno americano para consultar el estado de cualquier ESTA:
            </p>
            <a
              href="https://esta.cbp.dhs.gov/esta/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#006b63] hover:bg-[#005a54] text-white font-bold text-[1.5rem] px-6 py-3 rounded-xl transition-colors"
            >
              Ir a esta.cbp.dhs.gov →
            </a>
            <p className="text-[1.35rem] text-gray-500 mt-3">
              El sitio está en inglés. Necesitarás el número de pasaporte y el número de solicitud ESTA.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                n: '1',
                t: 'Accede al verificador oficial',
                d: 'Ve a esta.cbp.dhs.gov en tu navegador. Asegúrate de que la URL comienza por "https://" y que el dominio es cbp.dhs.gov (página del Gobierno de EE.UU.).',
              },
              {
                n: '2',
                t: 'Selecciona "Check Existing Application Status"',
                d: 'En la página de inicio del sistema ESTA, busca la opción "Check Existing Application Status" (Consultar el estado de una solicitud existente).',
              },
              {
                n: '3',
                t: 'Introduce los datos del pasaporte',
                d: 'Selecciona tu país de emisión del pasaporte, introduce el número de pasaporte y la fecha de nacimiento tal como figuran en el pasaporte.',
              },
              {
                n: '4',
                t: 'Introduce el número de solicitud ESTA',
                d: 'El número de solicitud ESTA (Application Number) es el código alfanumérico que Gourmety te envió por email cuando tramitamos tu solicitud. Si no lo tienes, también puedes buscar por nombre + número de pasaporte.',
              },
              {
                n: '5',
                t: 'Consulta el resultado',
                d: 'El sistema mostrará el estado actual de tu ESTA: Authorization Approved (aprobado), Authorization Pending (pendiente) o Travel Not Authorized (denegado).',
              },
            ].map((step) => (
              <div key={step.n} className="flex gap-5 items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-[#07334d] text-white font-[Martel_Sans] font-black text-[1.8rem] rounded-full flex items-center justify-center">
                  {step.n}
                </div>
                <div>
                  <h3 className="font-[Martel_Sans] font-bold text-[1.8rem] text-[#07334d] mb-1">{step.t}</h3>
                  <p className="text-[1.5rem] text-gray-700 leading-relaxed">{step.d}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Los 3 estados */}
        <section className="mb-12">
          <h2 className="font-[Martel_Sans] font-black text-[2.6rem] text-[#07334d] mb-6">
            Los 3 estados posibles del ESTA
          </h2>
          <div className="space-y-6">
            {/* Aprobado */}
            <div className="border-2 border-green-200 bg-green-50 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-block bg-green-600 text-white text-[1.3rem] font-bold px-3 py-1 rounded-full">
                  Authorization Approved
                </span>
                <span className="text-green-700 font-bold text-[1.5rem]">✓ Autorización aprobada</span>
              </div>
              <p className="text-[1.5rem] text-gray-700 leading-relaxed mb-3">
                Tu ESTA ha sido aprobado. Puedes embarcar en un vuelo hacia EE.UU. El ESTA aprobado no garantiza la entrada: el oficial de CBP en el aeropuerto americano tiene la autoridad final, pero la aprobación del ESTA es la condición necesaria para poder volar.
              </p>
              <p className="text-[1.5rem] text-green-700 font-semibold">
                Qué hacer: guarda el número de solicitud y el email de confirmación. No necesitas imprimir nada. El ESTA queda vinculado electrónicamente a tu pasaporte.
              </p>
            </div>

            {/* Pendiente */}
            <div className="border-2 border-amber-200 bg-amber-50 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-block bg-amber-500 text-white text-[1.3rem] font-bold px-3 py-1 rounded-full">
                  Authorization Pending
                </span>
                <span className="text-amber-700 font-bold text-[1.5rem]">⏳ Autorización pendiente</span>
              </div>
              <p className="text-[1.5rem] text-gray-700 leading-relaxed mb-3">
                Tu solicitud está siendo revisada por la CBP. La mayoría de solicitudes se aprueban en minutos, pero algunas pasan a estado pendiente durante un período de hasta 72 horas. Es un proceso de revisión adicional, no una denegación.
              </p>
              <p className="text-[1.5rem] text-amber-700 font-semibold">
                Qué hacer: espera hasta 72 horas revisando el estado. No puedes embarcar con el ESTA en estado pendiente. Si tienes un vuelo próximo, contacta con Gourmety para informarte de opciones. Si han pasado más de 72h sin cambio, contacta con la CBP directamente.
              </p>
            </div>

            {/* Denegado */}
            <div className="border-2 border-red-200 bg-red-50 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-block bg-red-600 text-white text-[1.3rem] font-bold px-3 py-1 rounded-full">
                  Travel Not Authorized
                </span>
                <span className="text-red-700 font-bold text-[1.5rem]">✗ Viaje no autorizado</span>
              </div>
              <p className="text-[1.5rem] text-gray-700 leading-relaxed mb-3">
                Tu ESTA ha sido denegado. La CBP no te autoriza a viajar a EE.UU. bajo el Visa Waiver Program. Esto no significa que no puedas entrar a EE.UU., sino que deberás solicitar una visa B-1/B-2 en el consulado americano de tu país.
              </p>
              <p className="text-[1.5rem] text-red-700 font-semibold">
                Qué hacer: no intentes volar a EE.UU. sin resolver tu situación migratoria. Solicita cita en la embajada o consulado de EE.UU. para solicitar una visa B-1/B-2. La tasa de autorización CBP (21 USD) se reembolsa en caso de denegación; la tasa de tramitación (21 USD) no.
              </p>
            </div>
          </div>
        </section>

        {/* Qué necesitas para verificar */}
        <section className="mb-12">
          <h2 className="font-[Martel_Sans] font-black text-[2.6rem] text-[#07334d] mb-4">
            Qué necesitas para verificar el ESTA
          </h2>
          <p className="text-[1.55rem] text-gray-700 leading-relaxed mb-4">
            Para consultar el estado en el verificador de la CBP necesitas:
          </p>
          <ul className="space-y-3">
            {[
              'Número de pasaporte (el mismo con el que solicitaste el ESTA)',
              'Fecha de nacimiento',
              'País de emisión del pasaporte',
              'Número de solicitud ESTA (lo encontrarás en el email de confirmación de Gourmety)',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-[1.55rem] text-gray-700">
                <span className="text-[#006b63] font-black mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* FAQ */}
        <section className="mb-14">
          <h2 className="font-[Martel_Sans] font-black text-[2.6rem] text-[#07334d] mb-6">
            Preguntas frecuentes sobre la verificación
          </h2>
          <FAQAccordion items={faqs} />
        </section>

        {/* CTA */}
        <div className="bg-[#07334d] text-white rounded-2xl p-8 text-center mt-14">
          <h2 className="font-[Martel_Sans] font-black text-[2.6rem] mb-3">
            ¿Todavía no tienes tu ESTA?
          </h2>
          <p className="text-white/70 text-[1.55rem] mb-2">
            Trámitalo ahora con revisión humana y soporte en español. Desde 62€.
          </p>
          <Link
            href="/solicitar-esta"
            className="inline-block bg-[#e8533a] hover:bg-[#d4442c] text-white font-bold text-[1.6rem] px-8 py-4 rounded-full mt-4 transition-colors"
          >
            Solicitar ESTA →
          </Link>
        </div>
      </div>
    </>
  )
}
