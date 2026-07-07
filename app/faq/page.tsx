import type { Metadata } from 'next'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import FAQAccordion from '@/components/FAQAccordion'

export const metadata: Metadata = {
  title: 'Preguntas frecuentes sobre el ESTA USA — FAQ completo 2026',
  description: 'Resuelve todas tus dudas sobre el ESTA: qué es, requisitos, solicitud, precios, validez, estados y más. Respuestas en español por expertos.',
  alternates: { canonical: 'https://estausa.es/faq' },
}

const faqsQueEs = [
  {
    q: '¿Qué es el ESTA?',
    a: 'El ESTA (Electronic System for Travel Authorization) es la autorización electrónica de viaje obligatoria para ciudadanos de los 41 países del Visa Waiver Program (VWP) que quieran viajar a EE.UU. por turismo o negocios. Se tramita online, sin citas ni entrevistas, y queda vinculado electrónicamente al pasaporte.',
  },
  {
    q: '¿El ESTA es un visado?',
    a: 'No. El ESTA no es un visado. Es una pre-autorización electrónica que determina si el viajero es elegible para entrar a EE.UU. sin visa consular. No requiere entrevista presencial, ni sello en el pasaporte, ni cita en el consulado. A diferencia de la visa, el ESTA se tramita completamente online en minutos.',
  },
  {
    q: '¿Para qué sirve el ESTA?',
    a: 'El ESTA permite viajar a EE.UU. por turismo, visitas a familiares, negocios (reuniones, conferencias, sin percibir salario americano) o tránsito, por un período máximo de 90 días por estancia. No permite trabajar, estudiar de forma reglada ni residir en EE.UU.',
  },
  {
    q: '¿Es obligatorio el ESTA para ir a EE.UU.?',
    a: 'Sí, si eres ciudadano de un país VWP y viajas por vía aérea o marítima. Las aerolíneas están obligadas a verificar que tienes un ESTA válido antes de dejarte embarcar. Sin ESTA, la aerolínea no te permitirá subir al avión.',
  },
]

const faqsRequisitos = [
  {
    q: '¿Quién puede solicitar el ESTA?',
    a: 'Los ciudadanos de los 41 países del Visa Waiver Program con pasaporte biométrico vigente, siempre que su viaje sea por turismo, negocios o tránsito, la estancia no supere 90 días, y no tengan antecedentes que les excluyan del VWP (visados denegados, viajes a países restringidos, condenas penales incompatibles).',
  },
  {
    q: '¿Qué pasaporte necesito para el ESTA?',
    a: 'Un pasaporte biométrico (con chip electrónico) emitido por un país VWP. En España, todos los pasaportes desde 2006 son biométricos. El pasaporte debe estar vigente en el momento del viaje. El DNI español no es válido para entrar a EE.UU.',
  },
  {
    q: '¿Pueden los menores solicitar el ESTA?',
    a: 'Sí. Los menores necesitan su propio ESTA individual. El formulario puede ser rellenado por los padres o tutores en nombre del menor, usando los datos del pasaporte del menor.',
  },
  {
    q: '¿Puedo solicitar el ESTA si tengo doble nacionalidad?',
    a: 'Sí, si una de tus nacionalidades es de un país VWP. Debes solicitar el ESTA con el pasaporte del país VWP que vas a usar para viajar. Si tienes pasaporte español y de un país no VWP, usa el español para solicitar el ESTA.',
  },
  {
    q: '¿Si me denegaron un visado USA puedo pedir ESTA?',
    a: 'En principio no. Si alguna vez te han denegado una visa americana o la entrada al país, debes declararlo en el formulario. En ese caso, en general no eres elegible para el ESTA y necesitarás solicitar visa B-1/B-2.',
  },
]

const faqsSolicitud = [
  {
    q: '¿Cuánto tarda en aprobarse el ESTA?',
    a: 'La mayoría de las solicitudes se aprueban en minutos. Oficialmente la CBP puede tardar hasta 72 horas. Un pequeño porcentaje pasa a estado "Pendiente" durante ese período. Recomendamos solicitar el ESTA con al menos 72 horas de antelación al vuelo.',
  },
  {
    q: '¿Cuánto tiempo antes hay que solicitar el ESTA?',
    a: 'La CBP recomienda solicitarlo al menos 72 horas antes del vuelo. Nuestra recomendación es hacerlo con 1-2 semanas de antelación o incluso antes, en cuanto confirmes el viaje. El ESTA es válido 2 años, así que no hay ningún inconveniente en tenerlo con mucha antelación.',
  },
  {
    q: '¿Puedo solicitar el ESTA en el aeropuerto?',
    a: 'No te lo recomendamos. Si tu ESTA queda en estado "Pendiente" (hasta 72 horas) no podrás embarcar. Solicítalo siempre con antelación suficiente.',
  },
  {
    q: '¿Puedo solicitar el ESTA para varias personas a la vez?',
    a: 'Sí. Con Gourmety puedes tramitar el ESTA de varios viajeros en un mismo pedido. Cada persona necesita su propio ESTA individual, pero puedes gestionarlos todos en una sola solicitud.',
  },
  {
    q: '¿Qué pasa si me deniegan el ESTA?',
    a: 'Si el ESTA es denegado ("Travel Not Authorized"), deberás solicitar una visa B-1/B-2 en el consulado americano. La tasa de autorización CBP (21 USD) se reembolsa en caso de denegación; la tasa de tramitación (21 USD) no.',
  },
  {
    q: '¿Se puede renovar el ESTA?',
    a: 'El ESTA no se renueva: cuando caduca, simplemente solicitas uno nuevo con el mismo proceso. No hay descuento ni proceso simplificado por haber tenido un ESTA anterior.',
  },
]

const faqsPrecios = [
  {
    q: '¿Cuánto cuesta el ESTA en 2026?',
    a: 'El precio total incluye la tasa CBP oficial (~37€, equivalente a ~42 USD) más los honorarios de gestión asistida de Gourmety. Los planes son: Estándar 62€ (hasta 72h), Express 77€ (hasta 24h) y Urgente 92€ (hasta 3h).',
  },
  {
    q: '¿Por qué ha subido el precio del ESTA?',
    a: 'En octubre de 2025 el Gobierno de EE.UU. triplicó la tasa del ESTA, pasando de 14 USD a 42 USD (21 USD de tramitación + 21 USD de autorización). Este cambio fue decidido unilateralmente por el DHS y afecta a cualquier servicio de tramitación.',
  },
  {
    q: '¿La tasa CBP se devuelve si me deniegan?',
    a: 'Parcialmente: los 21 USD de la tasa de autorización se reembolsan. Los 21 USD de tramitación no. Los honorarios de gestión de Gourmety tampoco son reembolsables si la tramitación fue correcta.',
  },
]

const faqsValidez = [
  {
    q: '¿Cuánto dura el ESTA?',
    a: 'El ESTA es válido durante 2 años desde la fecha de aprobación, o hasta que caduque el pasaporte vinculado (lo que ocurra antes). Permite entradas múltiples durante ese período, con estancias individuales de hasta 90 días.',
  },
  {
    q: '¿El ESTA caduca con el pasaporte?',
    a: 'Sí. El ESTA está vinculado al número de pasaporte. Si renuevas el pasaporte, el ESTA anterior queda invalidado automáticamente aunque siga teniendo meses de validez.',
  },
  {
    q: '¿Cuántas veces puedo entrar a EE.UU. con el ESTA?',
    a: 'No hay límite de entradas durante los 2 años de validez. Puedes entrar cuantas veces quieras, siempre que cada estancia no supere 90 días y que el oficial de CBP te admita en cada entrada.',
  },
  {
    q: '¿El ESTA garantiza la entrada a EE.UU.?',
    a: 'No. El ESTA es una pre-autorización que te permite embarcar y llegar al control migratorio americano. La decisión final de admisión la toma el oficial de CBP en el puerto de entrada. Un ESTA aprobado es necesario pero no suficiente para garantizar la entrada.',
  },
]

const allFaqs = [
  ...faqsQueEs,
  ...faqsRequisitos,
  ...faqsSolicitud,
  ...faqsPrecios,
  ...faqsValidez,
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: allFaqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqSchema} />

      {/* Hero breadcrumb */}
      <div className="bg-[#07334d] text-white py-10 px-6">
        <div className="max-w-[1160px] mx-auto">
          <div className="text-[1.35rem] text-white/50 mb-2">
            <Link href="/" className="hover:text-white/80">Inicio</Link> › FAQ
          </div>
          <h1 className="font-[Martel_Sans] font-black text-[3.2rem] mb-2">
            Preguntas frecuentes sobre el ESTA
          </h1>
          <p className="text-white/70 text-[1.6rem]">
            Respuestas claras a todas tus dudas sobre el ESTA USA, organizadas por categoría
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[860px] mx-auto px-6 py-14">

        {/* Navegación rápida */}
        <section className="mb-10">
          <div className="bg-[#f9fafb] rounded-xl p-6">
            <p className="font-[Martel_Sans] font-bold text-[1.7rem] text-[#07334d] mb-3">
              Ir directamente a:
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                ['#que-es', 'Qué es el ESTA'],
                ['#requisitos', 'Requisitos'],
                ['#solicitud', 'Solicitud'],
                ['#precios', 'Precios'],
                ['#validez', 'Validez'],
              ].map(([href, label]) => (
                <a
                  key={href}
                  href={href}
                  className="bg-white border border-[#006b63]/30 text-[#006b63] font-semibold text-[1.35rem] px-4 py-2 rounded-full hover:bg-[#006b63] hover:text-white transition-colors"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Qué es */}
        <section className="mb-12" id="que-es">
          <h2 className="font-[Martel_Sans] font-black text-[2.6rem] text-[#07334d] mb-2">
            Qué es el ESTA
          </h2>
          <p className="text-[1.45rem] text-gray-500 mb-6">
            Dudas básicas sobre la naturaleza del ESTA y para qué sirve
          </p>
          <FAQAccordion items={faqsQueEs} />
          <div className="mt-4">
            <Link href="/que-es-el-esta" className="text-[#006b63] font-bold text-[1.4rem] hover:underline">
              Guía completa: qué es el ESTA →
            </Link>
          </div>
        </section>

        {/* Requisitos */}
        <section className="mb-12" id="requisitos">
          <h2 className="font-[Martel_Sans] font-black text-[2.6rem] text-[#07334d] mb-2">
            Requisitos del ESTA
          </h2>
          <p className="text-[1.45rem] text-gray-500 mb-6">
            Quién puede solicitar el ESTA y qué documentos necesita
          </p>
          <FAQAccordion items={faqsRequisitos} />
          <div className="mt-4">
            <Link href="/requisitos-esta" className="text-[#006b63] font-bold text-[1.4rem] hover:underline">
              Guía completa: requisitos del ESTA →
            </Link>
          </div>
        </section>

        {/* Solicitud */}
        <section className="mb-12" id="solicitud">
          <h2 className="font-[Martel_Sans] font-black text-[2.6rem] text-[#07334d] mb-2">
            Solicitud y tramitación
          </h2>
          <p className="text-[1.45rem] text-gray-500 mb-6">
            Cómo se solicita, cuánto tarda y qué pasa si lo deniegan
          </p>
          <FAQAccordion items={faqsSolicitud} />
          <div className="mt-4">
            <Link href="/como-solicitar-el-esta" className="text-[#006b63] font-bold text-[1.4rem] hover:underline">
              Guía completa: cómo solicitar el ESTA →
            </Link>
          </div>
        </section>

        {/* Precios */}
        <section className="mb-12" id="precios">
          <h2 className="font-[Martel_Sans] font-black text-[2.6rem] text-[#07334d] mb-2">
            Precios y tasas
          </h2>
          <p className="text-[1.45rem] text-gray-500 mb-6">
            Cuánto cuesta el ESTA, qué incluye y si se devuelve si lo deniegan
          </p>
          <FAQAccordion items={faqsPrecios} />
          <div className="mt-4">
            <Link href="/precios" className="text-[#006b63] font-bold text-[1.4rem] hover:underline">
              Ver todos los planes y precios →
            </Link>
          </div>
        </section>

        {/* Validez */}
        <section className="mb-14" id="validez">
          <h2 className="font-[Martel_Sans] font-black text-[2.6rem] text-[#07334d] mb-2">
            Validez y renovación
          </h2>
          <p className="text-[1.45rem] text-gray-500 mb-6">
            Cuánto dura el ESTA, cuándo hay que renovarlo y cuántas veces se puede entrar
          </p>
          <FAQAccordion items={faqsValidez} />
          <div className="mt-4">
            <Link href="/validez-esta" className="text-[#006b63] font-bold text-[1.4rem] hover:underline">
              Guía completa: validez y renovación del ESTA →
            </Link>
          </div>
        </section>

        {/* Más info */}
        <section className="mb-14">
          <h2 className="font-[Martel_Sans] font-black text-[2.6rem] text-[#07334d] mb-4">
            ¿No encuentras la respuesta que buscas?
          </h2>
          <p className="text-[1.55rem] text-gray-700 leading-relaxed mb-6">
            Nuestro equipo habla español y está disponible para resolver cualquier duda antes, durante y después de tramitar tu ESTA.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { href: '/que-es-el-esta', label: 'Qué es el ESTA', desc: 'Definición, diferencias con la visa y para qué sirve' },
              { href: '/como-solicitar-el-esta', label: 'Cómo solicitarlo', desc: 'Guía paso a paso con los documentos necesarios' },
              { href: '/requisitos-esta', label: 'Requisitos', desc: 'Países VWP, pasaporte y restricciones' },
              { href: '/validez-esta', label: 'Validez y renovación', desc: 'Cuánto dura y cuándo hay que renovarlo' },
              { href: '/paises-visa-waiver', label: 'Países del VWP', desc: 'Lista completa de los 41 países' },
              { href: '/verificar-estado-esta', label: 'Verificar estado', desc: 'Cómo comprobar si tu ESTA está aprobado' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="border border-gray-200 rounded-xl p-5 hover:border-[#006b63] hover:bg-[#f0faf9] transition-colors group"
              >
                <div className="font-[Martel_Sans] font-bold text-[1.7rem] text-[#07334d] group-hover:text-[#006b63] mb-1">
                  {link.label} →
                </div>
                <div className="text-[1.4rem] text-gray-500">{link.desc}</div>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="bg-[#07334d] text-white rounded-2xl p-8 text-center mt-14">
          <h2 className="font-[Martel_Sans] font-black text-[2.6rem] mb-3">
            ¿Listo para tramitar?
          </h2>
          <p className="text-white/70 text-[1.55rem] mb-2">
            Solicita tu ESTA con revisión humana y soporte en español. Desde 62€.
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
