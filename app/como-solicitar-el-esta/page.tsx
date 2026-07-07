import type { Metadata } from 'next'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import FAQAccordion from '@/components/FAQAccordion'

export const metadata: Metadata = {
  title: 'Cómo solicitar el ESTA USA paso a paso 2026',
  description: 'Guía completa para solicitar el ESTA USA: documentos necesarios, pasos del formulario, tiempos de aprobación y qué hacer si te lo deniegan.',
  alternates: { canonical: 'https://estausa.es/como-solicitar-el-esta' },
}

const faqs = [
  {
    q: '¿Cuánto tiempo antes hay que solicitar el ESTA?',
    a: 'La CBP recomienda solicitarlo al menos 72 horas antes de embarcar. Sin embargo, te recomendamos pedirlo en cuanto tengas el billete de avión confirmado, idealmente con 1-2 semanas de antelación. Aunque la mayoría se aprueban en minutos, existe una pequeña probabilidad de que quede en estado "Pendiente" durante hasta 72 horas.',
  },
  {
    q: '¿Puedo solicitar el ESTA en el aeropuerto?',
    a: 'No te lo recomendamos. Técnicamente puedes solicitarlo justo antes de embarcar, pero las aerolíneas están obligadas a verificar que tienes un ESTA válido antes de dejarte subir al avión. Si tu ESTA queda "Pendiente" (puede tardar hasta 72h) te quedarás en tierra. Solicítalo siempre con antelación.',
  },
  {
    q: '¿Cuánto tarda en aprobarse el ESTA?',
    a: 'La gran mayoría de las solicitudes se aprueban en minutos. Oficialmente, la CBP puede tardar hasta 72 horas en dar una respuesta. Un pequeño porcentaje pasa a estado "Pendiente de revisión" durante ese período. Si transcurridas 72 horas no hay respuesta, contacta con la CBP.',
  },
  {
    q: '¿Se puede renovar el ESTA?',
    a: 'El ESTA no se "renueva" como tal: cuando caduca (a los 2 años o al renovar el pasaporte), simplemente solicitas uno nuevo como si fuera la primera vez. El proceso es idéntico. No hay descuento ni proceso simplificado por haber tenido un ESTA anterior.',
  },
  {
    q: '¿Qué pasa si me deniegan el ESTA?',
    a: 'Si tu ESTA es denegado (estado "No autorizado"), deberás solicitar una visa B-1/B-2 en el consulado o embajada de EE.UU. de tu país. La tasa gubernamental de 21 USD (la parte de autorización) no se devuelve. La denegación del ESTA no implica automáticamente que te denieguen la visa, pero sí deberás explicar las circunstancias en la entrevista consular.',
  },
]

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Cómo solicitar el ESTA USA paso a paso',
  description: 'Guía paso a paso para solicitar el ESTA USA online',
  url: 'https://estausa.es/como-solicitar-el-esta',
  totalTime: 'PT15M',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Reúne los documentos necesarios',
      text: 'Ten a mano tu pasaporte biométrico vigente, una tarjeta de crédito o débito para el pago y los datos del vuelo (si ya los tienes).',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Elige tu plan y rellena el formulario',
      text: 'Accede al formulario en estausa.es/solicitar-esta, elige el plan (Estándar, Express o Urgente) e introduce los datos del pasaporte exactamente como aparecen.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Revisión humana por nuestro equipo',
      text: 'Nuestro equipo revisa tu solicitud antes de enviarla para detectar errores tipográficos o inconsistencias que podrían causar una denegación.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Tramitación ante la CBP',
      text: 'Enviamos tu solicitud al sistema oficial esta.cbp.dhs.gov. La CBP evalúa tu elegibilidad y emite una respuesta (normalmente en minutos).',
    },
    {
      '@type': 'HowToStep',
      position: 5,
      name: 'Recibes el ESTA aprobado por email',
      text: 'Te enviamos la confirmación del ESTA aprobado por email. Guarda el número de solicitud. No necesitas imprimir nada: el ESTA queda vinculado a tu pasaporte.',
    },
  ],
}

export default function ComoSolicitarEstaPage() {
  return (
    <>
      <JsonLd data={howToSchema} />

      {/* Hero breadcrumb */}
      <div className="bg-[#07334d] text-white py-10 px-6">
        <div className="max-w-[1160px] mx-auto">
          <div className="text-[1.35rem] text-white/50 mb-2">
            <Link href="/" className="hover:text-white/80">Inicio</Link> › Cómo solicitar el ESTA
          </div>
          <h1 className="font-[Martel_Sans] font-black text-[3.2rem] mb-2">
            Cómo solicitar el ESTA USA
          </h1>
          <p className="text-white/70 text-[1.6rem]">
            Guía paso a paso para tramitar tu autorización electrónica sin errores
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[860px] mx-auto px-6 py-14">

        {/* Documentos necesarios */}
        <section className="mb-12">
          <h2 className="font-[Martel_Sans] font-black text-[2.6rem] text-[#07334d] mb-4">
            Documentos que necesitas antes de empezar
          </h2>
          <p className="text-[1.55rem] text-gray-700 leading-relaxed mb-6">
            El proceso de solicitud del ESTA es sencillo si tienes todo preparado antes de abrir el formulario. Necesitarás:
          </p>
          <ul className="space-y-4 mb-6">
            {[
              {
                t: 'Pasaporte biométrico vigente',
                d: 'Debe ser el pasaporte que usarás para entrar a EE.UU., estar en vigor durante todo el viaje y ser de tipo biométrico (chip electrónico, marcado con el símbolo de cámara en la portada). Los pasaportes emitidos en España desde 2006 son biométricos.',
              },
              {
                t: 'Datos del pasaporte a mano',
                d: 'Número de pasaporte, fecha de emisión, fecha de caducidad, nombre completo exactamente como aparece en el pasaporte, fecha y lugar de nacimiento.',
              },
              {
                t: 'Datos de contacto y dirección',
                d: 'Email donde recibirás la confirmación, número de teléfono y dirección de alojamiento en EE.UU. (si ya la tienes; puedes poner el nombre de un hotel si aún no tienes reserva confirmada).',
              },
              {
                t: 'Tarjeta de crédito o débito',
                d: 'Para abonar los honorarios de tramitación y la tasa oficial de la CBP. Aceptamos Visa, Mastercard y American Express.',
              },
              {
                t: 'Información sobre el viaje (opcional)',
                d: 'Si ya tienes billete de avión, ten el número de vuelo a mano. No es obligatorio en el momento de la solicitud.',
              },
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4 text-[1.55rem] text-gray-700 list-none">
                <span className="flex-shrink-0 w-8 h-8 bg-[#006b63] text-white rounded-full flex items-center justify-center font-bold text-[1.3rem] mt-0.5">{i + 1}</span>
                <div>
                  <span className="font-semibold text-[#07334d]">{item.t}:</span>{' '}
                  <span>{item.d}</span>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Pasos */}
        <section className="mb-12">
          <h2 className="font-[Martel_Sans] font-black text-[2.6rem] text-[#07334d] mb-6">
            Pasos para solicitar el ESTA con Gourmety
          </h2>

          <div className="space-y-8">
            {[
              {
                n: '1',
                t: 'Accede al formulario de solicitud',
                d: 'Visita estausa.es/solicitar-esta. Elige el número de viajeros (puedes tramitar varios en una misma solicitud) y selecciona el plan que se ajusta a tus plazos: Estándar (hasta 72h), Express (hasta 24h) o Urgente (hasta 3h).',
              },
              {
                n: '2',
                t: 'Introduce los datos del pasaporte',
                d: 'Rellena el formulario con los datos exactamente como aparecen en tu pasaporte. Cualquier discrepancia (tilde omitida, inversión de apellidos) puede causar que el ESTA sea denegado. Nuestro equipo revisará los datos antes de enviarlos, pero cuanto más precisos sean desde el inicio, mejor.',
              },
              {
                n: '3',
                t: 'Responde las preguntas de elegibilidad',
                d: 'El formulario incluye preguntas sobre antecedentes penales, enfermedades contagiosas, participación en actividades terroristas, visados denegados anteriores y viajes a países de la lista de restricciones del VWP. Responde con total honestidad: la CBP verifica estas respuestas contra bases de datos internacionales.',
              },
              {
                n: '4',
                t: 'Realiza el pago',
                d: 'El precio incluye la tasa oficial de la CBP (21 USD no reembolsables + 17 USD de autorización, equivalente a ~37€) más los honorarios de tramitación asistida de Gourmety. El pago se procesa de forma segura a través de Stripe (cifrado PCI DSS).',
              },
              {
                n: '5',
                t: 'Revisión humana y envío a la CBP',
                d: 'Nuestro equipo revisa tu solicitud: comprueba que los datos del pasaporte sean correctos, que las respuestas sean coherentes y que no haya errores tipográficos. Solo cuando está todo correcto, enviamos la solicitud al sistema oficial esta.cbp.dhs.gov.',
              },
              {
                n: '6',
                t: 'Recibe tu ESTA aprobado',
                d: 'La CBP emite su respuesta, normalmente en minutos. Te enviamos por email la confirmación del ESTA aprobado con tu número de solicitud. No necesitas imprimir nada: el ESTA queda vinculado electrónicamente a tu pasaporte y las aerolíneas lo verifican automáticamente al hacer el check-in.',
              },
            ].map((step) => (
              <div key={step.n} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-[#07334d] text-white font-[Martel_Sans] font-black text-[2rem] rounded-full flex items-center justify-center">
                  {step.n}
                </div>
                <div>
                  <h3 className="font-[Martel_Sans] font-bold text-[1.9rem] text-[#07334d] mb-2">
                    {step.t}
                  </h3>
                  <p className="text-[1.55rem] text-gray-700 leading-relaxed">{step.d}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Cuándo solicitar */}
        <section className="mb-12">
          <h2 className="font-[Martel_Sans] font-black text-[2.6rem] text-[#07334d] mb-4">
            ¿Cuándo solicitar el ESTA?
          </h2>
          <p className="text-[1.55rem] text-gray-700 leading-relaxed mb-4">
            La CBP recomienda solicitar el ESTA <strong>al menos 72 horas antes del vuelo</strong>. Aunque la mayoría de las solicitudes se aprueban en minutos, una pequeña parte queda en estado "Pendiente" durante hasta 72 horas.
          </p>
          <p className="text-[1.55rem] text-gray-700 leading-relaxed mb-4">
            Nuestra recomendación es solicitarlo en cuanto confirmes el viaje, idealmente con <strong>1 o 2 semanas de antelación</strong>. Esto te da margen para resolver cualquier incidencia sin presión de tiempo.
          </p>
          <div className="bg-[#f0faf9] border border-[#006b63]/20 rounded-xl p-6">
            <p className="text-[1.5rem] text-[#006b63] font-semibold">
              💡 Consejo: el ESTA es válido durante 2 años. Si viajas a EE.UU. con frecuencia, solicítalo aunque no tengas un viaje inmediato confirmado.
            </p>
          </div>
        </section>

        {/* Errores comunes */}
        <section className="mb-14">
          <h2 className="font-[Martel_Sans] font-black text-[2.6rem] text-[#07334d] mb-4">
            Errores más comunes al solicitar el ESTA
          </h2>
          <p className="text-[1.55rem] text-gray-700 leading-relaxed mb-4">
            Estos son los errores que con más frecuencia causan denegaciones o retrasos:
          </p>
          <ul className="space-y-3">
            {[
              'Introducir el número de pasaporte con errores tipográficos o transposición de dígitos',
              'No responder correctamente a las preguntas sobre viajes anteriores a países de la lista restringida',
              'Usar un pasaporte no biométrico (sin chip electrónico)',
              'Olvidar declarar una solicitud de visa americana anterior aunque fuera denegada',
              'Introducir el nombre con tildes distintas a las del pasaporte (algunos pasaportes suprimen tildes en el campo de nombre)',
              'No actualizar el ESTA tras renovar el pasaporte (el ESTA antiguo queda invalidado automáticamente)',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-[1.55rem] text-gray-700">
                <span className="text-[#e8533a] font-black mt-0.5 flex-shrink-0">✗</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* FAQ */}
        <section className="mb-14">
          <h2 className="font-[Martel_Sans] font-black text-[2.6rem] text-[#07334d] mb-6">
            Preguntas frecuentes sobre la solicitud
          </h2>
          <FAQAccordion items={faqs} />
        </section>

        {/* CTA */}
        <div className="bg-[#07334d] text-white rounded-2xl p-8 text-center mt-14">
          <h2 className="font-[Martel_Sans] font-black text-[2.6rem] mb-3">
            ¿Listo para tramitar?
          </h2>
          <p className="text-white/70 text-[1.55rem] mb-2">
            Empieza ahora. El proceso completo lleva menos de 15 minutos.
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
