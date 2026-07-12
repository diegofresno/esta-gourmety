import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import JsonLd from '@/components/JsonLd'
import FAQAccordion from '@/components/FAQAccordion'

export const metadata: Metadata = {
  title: 'Precios ESTA USA 2026 — Cuánto cuesta tramitarlo con Gourmety',
  description: 'Precios actualizados del ESTA USA en 2026: tasa CBP oficial + gestión. Planes Estándar 62€, Express 77€ y Urgente 92€ con revisión humana incluida.',
  alternates: { canonical: 'https://estausa.es/precios' },
}

const faqs = [
  {
    q: '¿Cuánto cuesta el ESTA oficial?',
    a: 'El Gobierno de EE.UU. (CBP) cobra una tasa total de 21 USD por la parte de tramitación y otros 21 USD por la autorización en sí. A tipos de cambio actuales (2026) esto equivale aproximadamente a 37-38€ en total. Gourmety añade sus honorarios de gestión asistida por encima de esa tasa: 25€ en el plan Estándar, 40€ en Express y 55€ en Urgente.',
  },
  {
    q: '¿Por qué ha subido el precio del ESTA?',
    a: 'En octubre de 2025, el Gobierno de EE.UU. actualizó la estructura de tasas del ESTA. La CBP ahora cobra una tasa diferenciada por tramitación (21 USD) más la tasa de autorización (21 USD), sumando un total de 42 USD por solicitud, frente a los 14 USD anteriores. Esta es la razón principal del aumento del precio total desde 2025.',
  },
  {
    q: '¿La tasa CBP se devuelve si me deniegan?',
    a: 'Parcialmente. La CBP devuelve 21 USD (la parte de autorización) si el ESTA es denegado. Los otros 21 USD (tasa de tramitación) no son reembolsables en ningún caso. Los honorarios de gestión de Gourmety tampoco son reembolsables si la denegación se debe a causas ajenas a Gourmety (datos del pasaporte correctamente tramitados pero elegibilidad denegada por la CBP).',
  },
  {
    q: '¿Qué incluye el precio?',
    a: 'El precio de Gourmety incluye: (1) la tasa oficial completa de la CBP (~37€), (2) revisión humana de la solicitud antes de enviarla, (3) tramitación ante el sistema oficial esta.cbp.dhs.gov, (4) notificación por email del resultado, y (5) soporte en español por WhatsApp y email durante el proceso. El plan Express y Urgente añaden tiempos de gestión garantizados.',
  },
]

const plans = [
  {
    name: 'Estándar',
    price: 62,
    time: 'hasta 72 horas',
    cbp: '~37€ incluidos',
    gestion: '25€',
    featured: false,
    features: [
      'Tasa CBP oficial incluida',
      'Revisión humana',
      'Soporte por email',
      'Tramitación hasta 72h',
    ],
  },
  {
    name: 'Express',
    price: 77,
    time: 'hasta 24 horas',
    cbp: '~37€ incluidos',
    gestion: '40€',
    featured: true,
    features: [
      'Tasa CBP oficial incluida',
      'Revisión humana prioritaria',
      'Soporte por WhatsApp',
      'Tramitación hasta 24h',
    ],
  },
  {
    name: 'Urgente',
    price: 92,
    time: 'hasta 3 horas',
    cbp: '~37€ incluidos',
    gestion: '55€',
    featured: false,
    features: [
      'Tasa CBP oficial incluida',
      'Revisión humana urgente',
      'Soporte prioritario WhatsApp',
      'Tramitación hasta 3h',
    ],
  },
]

const productSchemas = plans.filter(p => p.name === 'Estándar').map((plan) => ({
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: `ESTA USA — Plan ${plan.name}`,
  description: `Tramitación asistida del ESTA con revisión humana y soporte en español. Plazo: ${plan.time}.`,
  url: 'https://estausa.es/precios',
  brand: { '@type': 'Brand', name: 'ESTA USA by Gourmety' },
  offers: {
    '@type': 'Offer',
    price: plan.price,
    priceCurrency: 'EUR',
    availability: 'https://schema.org/InStock',
    url: 'https://estausa.es/solicitar-esta',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    bestRating: '5',
    worstRating: '1',
    reviewCount: '3',
  },
  review: [
    {
      '@type': 'Review',
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      author: { '@type': 'Person', name: 'María C.' },
      reviewBody: 'Nunca había tramitado el ESTA y tenía miedo de hacerlo en inglés directamente en la web del gobierno. Aquí lo hice en 10 minutos y al día siguiente lo tenía aprobado. Muy recomendable.',
    },
    {
      '@type': 'Review',
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      author: { '@type': 'Person', name: 'Jorge P.' },
      reviewBody: 'Lo solicité un jueves por la tarde y el viernes por la mañana ya lo tenía aprobado. El proceso fue muy claro, en español y sin complicaciones. Repetiré sin duda.',
    },
    {
      '@type': 'Review',
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      author: { '@type': 'Person', name: 'Ana R.' },
      reviewBody: 'Lo contraté para toda la familia, 4 personas. Me dijeron que uno de los pasaportes tenía un dato que podría causar problemas y me avisaron antes de enviarlo. Eso no lo hace la web oficial.',
    },
  ],
}))

export default function PreciosPage() {
  return (
    <>
      {productSchemas.map((schema, i) => (
        <JsonLd key={i} data={schema} />
      ))}

      <PageHero
        breadcrumb={[{ label:'Inicio', href:'/' }, { label:'Precios' }]}
        title="Precios del ESTA USA 2026"
        subtitle="Tasa CBP oficial incluida en todos los planes. Sin costes ocultos."
        pills={['Tasa CBP incluida', 'Sin costes ocultos', 'Pago seguro SSL']}
      />

      {/* Content */}
      <div className="max-w-[860px] mx-auto px-6 py-14">

        {/* Tabla de precios */}
        <section className="mb-14">
          <h2 className="font-[Martel_Sans] font-black text-[2.6rem] text-[#07334d] mb-4">
            Elige tu plan
          </h2>
          <p className="text-[1.55rem] text-gray-700 leading-relaxed mb-8">
            Todos los planes incluyen la <strong>tasa gubernamental completa de la CBP</strong> (~37€), revisión humana de la solicitud y tramitación ante el sistema oficial de EE.UU. La diferencia entre planes es el tiempo de gestión garantizado.
          </p>
          <div className="flex justify-center">
            {plans.filter(p => p.name === 'Estándar').map((plan) => (
              <div
                key={plan.name}
                className="rounded-2xl p-8 border-2 flex flex-col relative border-[#006b63] bg-white shadow-xl w-full max-w-sm"
              >
                <div className="font-[Martel_Sans] font-bold text-[1.8rem] text-[#07334d] mb-1">
                  {plan.name}
                </div>
                <div className="text-[3.8rem] font-[Martel_Sans] font-black text-[#07334d] leading-none mb-1">
                  {plan.price}€
                </div>
                <div className="text-[#006b63] font-semibold text-[1.4rem] mb-5">{plan.time}</div>
                <ul className="space-y-2 mb-6 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-[1.4rem] text-gray-700">
                      <span className="text-[#006b63] font-black mt-0.5">✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/solicitar-esta"
                  className="block text-center font-bold text-[1.5rem] py-3 rounded-xl transition-colors bg-[#e8533a] hover:bg-[#d4442c] text-white"
                >
                  Elegir {plan.name} →
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Desglose de la tasa */}
        <section className="mb-12">
          <h2 className="font-[Martel_Sans] font-black text-[2.6rem] text-[#07334d] mb-4">
            Desglose del precio: tasa CBP + gestión
          </h2>
          <p className="text-[1.55rem] text-gray-700 leading-relaxed mb-6">
            El precio total del ESTA tiene dos componentes bien diferenciados:
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-[1.45rem] border-collapse">
              <thead>
                <tr className="bg-[#07334d] text-white">
                  <th className="text-left px-4 py-3 rounded-tl-xl">Concepto</th>
                  <th className="text-left px-4 py-3">Importe</th>
                  <th className="text-left px-4 py-3 rounded-tr-xl">Reembolsable</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Tasa de tramitación CBP (Processing Fee)', '~11€ (~12 USD)', 'No'],
                  ['Tasa de autorización CBP (Authorization Fee)', '~19€ (~21 USD)', 'Solo si deniegan'],
                  ['Total tasa CBP', '~37€ (~42 USD en total)', '—'],
                  ['Honorarios Gourmety — Estándar', '25€', 'No'],
                ].map(([c, i, r], idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-4 py-3 text-gray-700">{c}</td>
                    <td className="px-4 py-3 font-semibold text-[#07334d]">{i}</td>
                    <td className="px-4 py-3 text-gray-600">{r}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[1.45rem] text-gray-500">
            El tipo de cambio USD/EUR puede variar. El importe exacto en euros se calcula en el momento del pago.
          </p>
        </section>

        {/* Subida de precio 2025 */}
        <section className="mb-12">
          <h2 className="font-[Martel_Sans] font-black text-[2.6rem] text-[#07334d] mb-4">
            Por qué subió el precio del ESTA en octubre de 2025
          </h2>
          <p className="text-[1.55rem] text-gray-700 leading-relaxed mb-4">
            En octubre de 2025, el Departamento de Seguridad Nacional de EE.UU. (DHS) <strong>actualizó la estructura de tasas del ESTA</strong> por primera vez desde 2010. El cambio fue significativo:
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-[1.45rem] border-collapse">
              <thead>
                <tr className="bg-[#07334d] text-white">
                  <th className="text-left px-4 py-3 rounded-tl-xl">Período</th>
                  <th className="text-left px-4 py-3">Tasa CBP total</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 text-gray-700">Hasta septiembre 2025</td>
                  <td className="px-4 py-3 text-gray-700">14 USD (~13€)</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 text-gray-700 font-semibold">Desde octubre 2025</td>
                  <td className="px-4 py-3 font-semibold text-[#07334d]">42 USD (~37€) — triplicada</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-[1.55rem] text-gray-700 leading-relaxed mb-4">
            El DHS justificó el aumento como necesario para cubrir los costes operativos del programa VWP y financiar mejoras en el sistema de seguridad ESTA. Este incremento es ajeno a Gourmety: los honorarios de gestión no han cambiado.
          </p>
          <p className="text-[1.55rem] text-gray-700 leading-relaxed">
            Es importante notar que estos precios son los mismos independientemente de dónde tramites el ESTA: lo que varía entre diferentes gestores es la calidad del servicio, el soporte y los tiempos de gestión, no la tasa oficial que va directamente al Gobierno americano.
          </p>
        </section>

        {/* Qué NO se paga */}
        <section className="mb-14">
          <h2 className="font-[Martel_Sans] font-black text-[2.6rem] text-[#07334d] mb-4">
            Lo que NO pagas con el ESTA (vs visa consular)
          </h2>
          <p className="text-[1.55rem] text-gray-700 leading-relaxed mb-4">
            Comparado con solicitar una visa B-1/B-2 en el consulado americano, el ESTA te ahorra:
          </p>
          <ul className="space-y-3">
            {[
              'Tasa consular de 185 USD (no reembolsable aunque te denieguen)',
              'Desplazamiento a la embajada o consulado americano (Madrid, Barcelona, Bilbao)',
              'Tiempo de espera para cita (actualmente varios meses en España)',
              'Día de trabajo perdido para la entrevista presencial',
              'Posibles gastos de traducción de documentos',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-[1.55rem] text-gray-700">
                <span className="text-[#006b63] font-black mt-0.5">✓</span>
                <span>No pagas: {item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* FAQ */}
        <section className="mb-14">
          <h2 className="font-[Martel_Sans] font-black text-[2.6rem] text-[#07334d] mb-6">
            Preguntas frecuentes sobre los precios
          </h2>
          <FAQAccordion items={faqs} />
        </section>

        {/* CTA */}
        <div className="bg-[#07334d] text-white rounded-2xl p-8 text-center mt-14">
          <h2 className="font-[Martel_Sans] font-black text-[2.6rem] mb-3">
            ¿Listo para tramitar?
          </h2>
          <p className="text-white/70 text-[1.55rem] mb-2">
            Tasa CBP incluida. Sin sorpresas. Desde 62€.
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
