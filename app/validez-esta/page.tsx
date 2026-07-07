import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import JsonLd from '@/components/JsonLd'
import FAQAccordion from '@/components/FAQAccordion'

export const metadata: Metadata = {
  title: 'Validez del ESTA USA — Cuánto dura y cuándo renovarlo 2026',
  description: 'El ESTA es válido durante 2 años o hasta que caduca el pasaporte. Descubre cuánto dura, cuándo renovarlo y cuántas veces puedes entrar a EE.UU.',
  alternates: { canonical: 'https://estausa.es/validez-esta' },
}

const faqs = [
  {
    q: '¿Cuánto dura el ESTA?',
    a: 'El ESTA tiene una validez de 2 años desde la fecha de aprobación, o hasta la fecha de caducidad del pasaporte vinculado al ESTA (lo que ocurra antes). Durante ese período puedes realizar múltiples entradas a EE.UU., siempre que cada estancia individual no supere los 90 días.',
  },
  {
    q: '¿El ESTA caduca con el pasaporte?',
    a: 'Sí. El ESTA está vinculado al número de pasaporte. Si renuevas tu pasaporte antes de que caduque el ESTA, el ESTA anterior queda automáticamente invalidado. Necesitarás solicitar un nuevo ESTA con los datos del nuevo pasaporte, aunque el ESTA anterior siguiera teniendo meses de validez.',
  },
  {
    q: '¿Cuándo hay que renovar el ESTA?',
    a: 'Debes renovar (solicitar uno nuevo) el ESTA cuando: (1) hayan pasado 2 años desde la fecha de aprobación; (2) hayas renovado el pasaporte; (3) hayas cambiado el nombre o adquirido una nueva ciudadanía; (4) hayas viajado a un país de la lista restringida del VWP; o (5) hayas respondido "sí" a una de las preguntas de elegibilidad cuando antes respondiste "no".',
  },
  {
    q: '¿Cuántas veces puedo entrar a EE.UU. con el ESTA?',
    a: 'No hay límite de entradas durante los 2 años de validez del ESTA. Puedes entrar cuantas veces quieras, siempre que cada estancia individual no supere los 90 días y que el oficial de inmigración en el puerto de entrada te admita. Un ESTA aprobado no garantiza la entrada: el oficial de CBP tiene la autoridad final.',
  },
  {
    q: '¿El ESTA permite estancias de más de 90 días?',
    a: 'No. Independientemente de que el ESTA tenga 2 años de validez, cada estancia individual en EE.UU. no puede superar los 90 días. Si necesitas quedarte más tiempo, deberás salir y, en su caso, volver a entrar (aunque esto puede levantar sospechas si el patrón es repetido), o solicitar una visa B-1/B-2 antes de viajar.',
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

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Cómo renovar el ESTA cuando caduca',
  description: 'Pasos para renovar el ESTA una vez que ha caducado o se ha renovado el pasaporte',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Comprueba si tu ESTA sigue vigente',
      text: 'Accede al verificador oficial de la CBP en esta.cbp.dhs.gov con el número de pasaporte y el número de solicitud ESTA.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Si ha caducado o has cambiado de pasaporte, inicia la solicitud',
      text: 'Accede a estausa.es/solicitar-esta y rellena el formulario con los datos del pasaporte nuevo (o el mismo si lo que ha caducado es el ESTA).',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Completa el proceso de pago y tramitación',
      text: 'El proceso es idéntico a la primera solicitud. No hay descuento por renovación ni proceso simplificado.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Recibe el nuevo ESTA aprobado',
      text: 'Una vez aprobado por la CBP, recibirás el nuevo ESTA vinculado al pasaporte actual. Válido durante 2 años o hasta que caduque el pasaporte.',
    },
  ],
}

export default function ValidezEstaPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <JsonLd data={howToSchema} />

      <PageHero
        breadcrumb={[{ label:'Inicio', href:'/' }, { label:'Validez del ESTA' }]}
        title="Validez y renovación del ESTA"
        subtitle="Cuánto dura el ESTA, cuándo caduca y cómo gestionarlo para múltiples viajes"
        pills={['2 años de vigencia', 'Entradas múltiples']}
      />

      {/* Content */}
      <div className="max-w-[860px] mx-auto px-6 py-14">

        {/* Validez 2 años */}
        <section className="mb-12">
          <h2 className="font-[Martel_Sans] font-black text-[2.6rem] text-[#07334d] mb-4">
            El ESTA es válido durante 2 años
          </h2>
          <p className="text-[1.55rem] text-gray-700 leading-relaxed mb-4">
            Una vez que la CBP aprueba tu ESTA, tiene una <strong>validez de 2 años</strong> desde la fecha de aprobación. Durante ese período puedes usar el ESTA para viajar a EE.UU. tantas veces como quieras, siempre que cada estancia individual no supere los 90 días.
          </p>
          <p className="text-[1.55rem] text-gray-700 leading-relaxed mb-4">
            Hay un matiz importante: el ESTA tiene como fecha de caducidad <strong>la menor entre estas dos</strong>:
          </p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3 text-[1.55rem] text-gray-700">
              <span className="text-[#006b63] font-black mt-0.5">1</span>
              <span>2 años desde la fecha de aprobación del ESTA</span>
            </li>
            <li className="flex items-start gap-3 text-[1.55rem] text-gray-700">
              <span className="text-[#006b63] font-black mt-0.5">2</span>
              <span>La fecha de caducidad del pasaporte vinculado al ESTA</span>
            </li>
          </ul>
          <p className="text-[1.55rem] text-gray-700 leading-relaxed">
            Si tu pasaporte caduca en 14 meses, tu ESTA también caducará en 14 meses aunque el plazo de 2 años no haya vencido.
          </p>
        </section>

        {/* Entradas múltiples */}
        <section className="mb-12">
          <h2 className="font-[Martel_Sans] font-black text-[2.6rem] text-[#07334d] mb-4">
            Entradas múltiples: cuántas veces puedes ir a EE.UU.
          </h2>
          <p className="text-[1.55rem] text-gray-700 leading-relaxed mb-4">
            El ESTA permite <strong>entradas múltiples</strong> sin límite durante su período de validez. Si viajas a EE.UU. con frecuencia (por negocios, ocio o familia), un único ESTA te cubre todos esos viajes durante 2 años.
          </p>
          <p className="text-[1.55rem] text-gray-700 leading-relaxed mb-4">
            Sin embargo, debes tener en cuenta:
          </p>
          <ul className="space-y-3 mb-6">
            {[
              'Cada estancia individual no puede superar los 90 días, independientemente de cuántas entradas hayas hecho antes.',
              'El oficial de inmigración de CBP en el puerto de entrada tiene la potestad de denegarte la entrada aunque tengas el ESTA aprobado.',
              'Hacer múltiples viajes cortos seguidos (por ejemplo, salir cada 89 días para "resetear" los 90) puede levantar sospechas de residencia de facto y causar problemas en la frontera.',
              'El ESTA no garantiza la entrada: es una pre-autorización que permite embarcar y llegar al control migratorio de EE.UU.',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-[1.55rem] text-gray-700">
                <span className="text-[#006b63] font-black mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Cuándo caduca antes */}
        <section className="mb-12">
          <h2 className="font-[Martel_Sans] font-black text-[2.6rem] text-[#07334d] mb-4">
            Cuándo el ESTA caduca antes de los 2 años
          </h2>
          <p className="text-[1.55rem] text-gray-700 leading-relaxed mb-4">
            Aunque el ESTA tenga validez de 2 años, existen situaciones que lo invalidan antes de tiempo y obligan a solicitar uno nuevo:
          </p>
          <div className="space-y-5">
            {[
              {
                t: 'Renovación del pasaporte',
                d: 'Es el caso más frecuente. El ESTA está vinculado al número del pasaporte. Al cambiar de pasaporte, el número cambia y el ESTA anterior queda invalidado automáticamente. Debes solicitar un nuevo ESTA con el número del nuevo pasaporte antes del siguiente viaje.',
              },
              {
                t: 'Cambio de nombre o apellidos',
                d: 'Si has cambiado legalmente de nombre (por matrimonio, divorcio u otro trámite) y has renovado el pasaporte con el nuevo nombre, necesitas un nuevo ESTA. Los datos del ESTA deben coincidir exactamente con los del pasaporte que presentarás en el aeropuerto.',
              },
              {
                t: 'Adquisición de nueva ciudadanía',
                d: 'Si adquieres la ciudadanía de un nuevo país, debes solicitar el ESTA con el pasaporte del país VWP que usarás para viajar.',
              },
              {
                t: 'Viaje a un país de la lista restringida',
                d: 'Si después de obtener el ESTA viajas a Irak, Siria, Irán, Libia, Somalia, Sudán, Yemen, Corea del Norte o Cuba, tu elegibilidad para el VWP queda comprometida y deberás solicitar visa.',
              },
              {
                t: 'Cambio en las respuestas a las preguntas de elegibilidad',
                d: 'Si respondiste "no" a alguna pregunta (antecedentes, enfermedades, etc.) pero posteriormente la situación cambia (por ejemplo, eres condenado por un delito), el ESTA deja de ser válido para ti aunque no haya caducado.',
              },
            ].map((item, i) => (
              <div key={i} className="border-l-4 border-[#006b63] pl-5">
                <h3 className="font-[Martel_Sans] font-bold text-[1.8rem] text-[#07334d] mb-1">{item.t}</h3>
                <p className="text-[1.5rem] text-gray-700 leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Cómo renovar */}
        <section className="mb-12">
          <h2 className="font-[Martel_Sans] font-black text-[2.6rem] text-[#07334d] mb-4">
            Cómo renovar el ESTA cuando caduca
          </h2>
          <p className="text-[1.55rem] text-gray-700 leading-relaxed mb-6">
            El ESTA no tiene un proceso de "renovación" propiamente dicho: simplemente solicitas uno nuevo exactamente igual que la primera vez. No hay descuento, ni proceso abreviado, ni historial que se transfiera. El proceso completo:
          </p>
          <div className="space-y-6">
            {[
              {
                n: '1',
                t: 'Verifica el estado del ESTA actual',
                d: 'Accede al verificador de la CBP (esta.cbp.dhs.gov) o usa nuestro servicio de verificación para comprobar si tu ESTA sigue vigente o ha caducado.',
              },
              {
                n: '2',
                t: 'Inicia la nueva solicitud',
                d: 'Accede al formulario con los datos del pasaporte vigente (el que usarás para viajar). Si has renovado el pasaporte, usa los datos del nuevo pasaporte.',
              },
              {
                n: '3',
                t: 'Completa el formulario y el pago',
                d: 'El proceso es idéntico a la primera solicitud. Tasa CBP + honorarios de gestión de Gourmety. Revisión humana incluida.',
              },
              {
                n: '4',
                t: 'Recibe el nuevo ESTA aprobado',
                d: 'Nuevo ESTA válido 2 años vinculado al pasaporte actual.',
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

        {/* Resumen */}
        <section className="mb-14">
          <div className="bg-[#f0faf9] border border-[#006b63]/20 rounded-xl p-6">
            <h2 className="font-[Martel_Sans] font-bold text-[2rem] text-[#07334d] mb-3">
              Resumen: validez del ESTA
            </h2>
            <ul className="space-y-2">
              {[
                'Validez: 2 años desde la aprobación (o hasta que caduca el pasaporte, lo que ocurra antes)',
                'Estancia máxima por entrada: 90 días',
                'Número de entradas: ilimitadas durante los 2 años de validez',
                'Se invalida si: renuevas el pasaporte, cambias de nombre, viajas a países restringidos',
                'Renovación: mismo proceso que la primera solicitud, sin descuento',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-[1.5rem] text-[#07334d]">
                  <span className="text-[#006b63] font-black">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-14">
          <h2 className="font-[Martel_Sans] font-black text-[2.6rem] text-[#07334d] mb-6">
            Preguntas frecuentes sobre la validez del ESTA
          </h2>
          <FAQAccordion items={faqs} />
        </section>

        {/* CTA */}
        <div className="bg-[#07334d] text-white rounded-2xl p-8 text-center mt-14">
          <h2 className="font-[Martel_Sans] font-black text-[2.6rem] mb-3">
            ¿Listo para tramitar?
          </h2>
          <p className="text-white/70 text-[1.55rem] mb-2">
            Solicita o renueva tu ESTA con revisión humana y soporte en español.
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
