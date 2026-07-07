import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import JsonLd from '@/components/JsonLd'
import FAQAccordion from '@/components/FAQAccordion'

export const metadata: Metadata = {
  title: 'Qué es el ESTA USA — Guía completa 2026',
  description: 'El ESTA es la autorización electrónica de viaje para entrar a EE.UU. sin visado. Descubre qué es, quién lo necesita y cómo funciona.',
  alternates: { canonical: 'https://estausa.es/que-es-el-esta' },
}

const faqs = [
  {
    q: '¿El ESTA es un visado?',
    a: 'No. El ESTA es una autorización electrónica de viaje, no un visado. No requiere cita consular, entrevista ni sello en el pasaporte. Se tramita completamente online y se asocia de forma electrónica a tu pasaporte biométrico. La diferencia clave es que con el ESTA viajas acogido al Programa de Exención de Visado (VWP), que permite estancias de turismo o negocios de hasta 90 días.',
  },
  {
    q: '¿Cuánto tiempo puedo estar en EE.UU. con el ESTA?',
    a: 'Con el ESTA puedes permanecer en Estados Unidos un máximo de 90 días por estancia. Este plazo es fijo y no se puede ampliar desde EE.UU. Si necesitas quedarte más tiempo, deberás solicitar una visa B-1/B-2 antes de viajar.',
  },
  {
    q: '¿Para qué sirve el ESTA?',
    a: 'El ESTA autoriza la entrada a Estados Unidos por vía aérea o marítima para turismo, viajes de negocios, tránsito o visitas familiares. No permite trabajar, estudiar de forma reglada ni residir en EE.UU. También es válido para entrar a México y Canadá como paso previo a un viaje a EE.UU.',
  },
  {
    q: '¿Es lo mismo ESTA que VISA?',
    a: 'No son lo mismo. La visa requiere solicitud en el consulado americano, pago de tasas consulares (140 USD), entrevista presencial y puede tardar semanas. El ESTA se tramita online en minutos, sin entrevista ni visita al consulado, y está disponible solo para ciudadanos de los 41 países del Visa Waiver Program (entre ellos España).',
  },
  {
    q: '¿El ESTA permite trabajar en EE.UU.?',
    a: 'No. El ESTA únicamente cubre turismo, viajes de negocios (reuniones, conferencias, negociaciones, pero sin percibir salario americano) y tránsito. Trabajar de forma remunerada en EE.UU. con ESTA es ilegal. Para trabajar necesitas una visa de trabajo (H-1B, O-1, L-1, etc.).',
  },
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Qué es el ESTA USA — Guía completa 2026',
  description: 'El ESTA es la autorización electrónica de viaje para entrar a EE.UU. sin visado. Descubre qué es, quién lo necesita y cómo funciona.',
  url: 'https://estausa.es/que-es-el-esta',
  publisher: {
    '@type': 'Organization',
    name: 'ESTA USA by Gourmety',
    url: 'https://estausa.es',
  },
  datePublished: '2026-01-01',
  dateModified: '2026-07-01',
}

export default function QueEsElEstaPage() {
  return (
    <>
      <JsonLd data={articleSchema} />

      <PageHero
        breadcrumb={[{ label:'Inicio', href:'/' }, { label:'Qué es el ESTA' }]}
        title="Qué es el ESTA USA"
        subtitle="Todo lo que necesitas saber sobre la autorización electrónica de viaje a Estados Unidos"
        pills={['Guía completa', 'Actualizado 2026']}
      />

      {/* Content */}
      <div className="max-w-[860px] mx-auto px-6 py-14">

        {/* Definición */}
        <section className="mb-12">
          <h2 className="font-[Martel_Sans] font-black text-[2.6rem] text-[#07334d] mb-4">
            Definición: qué es el ESTA
          </h2>
          <p className="text-[1.55rem] text-gray-700 leading-relaxed mb-4">
            El <strong>ESTA</strong> (Electronic System for Travel Authorization, o Sistema Electrónico para la Autorización de Viaje) es la autorización obligatoria que deben obtener los ciudadanos de los países del <strong>Programa de Exención de Visado (VWP)</strong> antes de viajar a Estados Unidos por vía aérea o marítima.
          </p>
          <p className="text-[1.55rem] text-gray-700 leading-relaxed mb-4">
            El ESTA <strong>no es un visado</strong>. Es una verificación electrónica previa que determina si un viajero es elegible para entrar en EE.UU. sin necesidad de pasar por el proceso consular de solicitud de visado. Se tramita completamente online, sin citas ni entrevistas, y queda vinculado electrónicamente al número de pasaporte del solicitante.
          </p>
          <p className="text-[1.55rem] text-gray-700 leading-relaxed">
            Fue creado por el Departamento de Seguridad Nacional de EE.UU. (DHS) en 2008 como parte del Programa de Exención de Visado, y desde entonces es obligatorio para todos los ciudadanos del VWP que deseen viajar a territorio estadounidense.
          </p>
        </section>

        {/* No es una visa — diferencias */}
        <section className="mb-12">
          <h2 className="font-[Martel_Sans] font-black text-[2.6rem] text-[#07334d] mb-4">
            ESTA vs Visa B-1/B-2: diferencias clave
          </h2>
          <p className="text-[1.55rem] text-gray-700 leading-relaxed mb-6">
            Aunque ambos documentos permiten entrar a EE.UU., tienen diferencias fundamentales que conviene conocer antes de decidir cuál solicitar:
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-[1.45rem] border-collapse">
              <thead>
                <tr className="bg-[#07334d] text-white">
                  <th className="text-left px-4 py-3 rounded-tl-xl">Característica</th>
                  <th className="text-left px-4 py-3">ESTA</th>
                  <th className="text-left px-4 py-3 rounded-tr-xl">Visa B-1/B-2</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Tramitación', 'Online, en minutos', 'Consulado, semanas'],
                  ['Entrevista', 'No', 'Sí, presencial'],
                  ['Coste', '~37€ tasa oficial', '~140 USD tasa consular'],
                  ['Estancia máxima', '90 días por entrada', 'Hasta 6 meses (decide CBP)'],
                  ['Validez', '2 años', 'Hasta 10 años'],
                  ['Entradas', 'Múltiples', 'Múltiples'],
                  ['Elegibilidad', 'Solo 41 países VWP', 'Cualquier país'],
                ].map(([c, e, v], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-4 py-3 font-semibold text-[#07334d]">{c}</td>
                    <td className="px-4 py-3 text-gray-700">{e}</td>
                    <td className="px-4 py-3 text-gray-700">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[1.55rem] text-gray-700 leading-relaxed">
            Para la mayoría de los ciudadanos españoles y europeos que viajan a EE.UU. de turismo o por negocios cortos, el ESTA es la opción correcta. La visa solo es necesaria si el ESTA es denegado, si planeas quedarte más de 90 días, o si el propósito del viaje no está cubierto por el VWP (estudios reglados, trabajo remunerado, etc.).
          </p>
        </section>

        {/* Quién lo necesita */}
        <section className="mb-12">
          <h2 className="font-[Martel_Sans] font-black text-[2.6rem] text-[#07334d] mb-4">
            Quién necesita el ESTA
          </h2>
          <p className="text-[1.55rem] text-gray-700 leading-relaxed mb-4">
            Necesitas solicitar el ESTA si cumples <strong>todas estas condiciones</strong>:
          </p>
          <ul className="space-y-3 mb-6">
            {[
              'Eres ciudadano de uno de los 41 países del Visa Waiver Program (entre ellos España, Alemania, Francia, Italia, Portugal, etc.)',
              'Viajas a EE.UU. por vía aérea o marítima (si entras por tierra desde Canadá o México no necesitas ESTA, sino I-94)',
              'Tu viaje es por turismo, visita a familiares o amigos, negocios (sin percibir salario americano) o tránsito por EE.UU.',
              'La estancia prevista no supera los 90 días consecutivos',
              'No tienes antecedentes que te excluyan del VWP (visados denegados, viajes a países restringidos, condenas penales)',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-[1.55rem] text-gray-700">
                <span className="text-[#006b63] font-black mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-[1.55rem] text-gray-700 leading-relaxed">
            Si no eres ciudadano de un país VWP, debes solicitar una visa B-1/B-2 en el consulado americano de tu país.
          </p>
        </section>

        {/* Qué permite */}
        <section className="mb-12">
          <h2 className="font-[Martel_Sans] font-black text-[2.6rem] text-[#07334d] mb-4">
            Qué permite hacer el ESTA
          </h2>
          <p className="text-[1.55rem] text-gray-700 leading-relaxed mb-4">
            Con un ESTA aprobado y vigente puedes:
          </p>
          <ul className="space-y-3 mb-6">
            {[
              'Viajar a EE.UU. por turismo: visitar ciudades, parques nacionales, familiares y amigos',
              'Realizar viajes de negocios: reuniones, conferencias, ferias, negociaciones (sin cobrar salario americano)',
              'Hacer tránsito por EE.UU. hacia un tercer país',
              'Entrar múltiples veces durante los 2 años de validez del ESTA, siempre que cada estancia no supere 90 días',
              'Viajar también a México, Canadá y el Caribe si el viaje tiene origen o destino en EE.UU.',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-[1.55rem] text-gray-700">
                <span className="text-[#006b63] font-black mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-[1.55rem] text-gray-700 leading-relaxed mb-4">
            El ESTA <strong>no permite</strong>:
          </p>
          <ul className="space-y-3">
            {[
              'Trabajar de forma remunerada en EE.UU.',
              'Estudiar en programas académicos reglados (sí permite cursos cortos no creditados)',
              'Permanecer más de 90 días por estancia (aunque el ESTA tenga 2 años de validez)',
              'Cambiar de estatus migratorio dentro de EE.UU.',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-[1.55rem] text-gray-700">
                <span className="text-[#e8533a] font-black mt-0.5">✗</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Vigencia */}
        <section className="mb-14">
          <h2 className="font-[Martel_Sans] font-black text-[2.6rem] text-[#07334d] mb-4">
            Vigencia y entradas múltiples
          </h2>
          <p className="text-[1.55rem] text-gray-700 leading-relaxed mb-4">
            Una vez aprobado, el ESTA es válido durante <strong>2 años</strong> desde la fecha de aprobación, o hasta que caduque tu pasaporte (lo que ocurra primero). Durante ese período puedes hacer <strong>múltiples entradas</strong> a EE.UU., siempre que cada estancia individual no supere los 90 días.
          </p>
          <p className="text-[1.55rem] text-gray-700 leading-relaxed">
            Si renuevas tu pasaporte antes de que expire el ESTA, necesitarás solicitar un nuevo ESTA vinculado al nuevo número de pasaporte. El ESTA está ligado al número de pasaporte, no a la persona.
          </p>
        </section>

        {/* FAQ */}
        <section className="mb-14">
          <h2 className="font-[Martel_Sans] font-black text-[2.6rem] text-[#07334d] mb-6">
            Preguntas frecuentes sobre el ESTA
          </h2>
          <FAQAccordion items={faqs} />
        </section>

        {/* CTA */}
        <div className="bg-[#07334d] text-white rounded-2xl p-8 text-center mt-14">
          <h2 className="font-[Martel_Sans] font-black text-[2.6rem] mb-3">
            ¿Listo para tramitar tu ESTA?
          </h2>
          <p className="text-white/70 text-[1.55rem] mb-2">
            Revisión humana incluida. Soporte en español. Desde 62€.
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
