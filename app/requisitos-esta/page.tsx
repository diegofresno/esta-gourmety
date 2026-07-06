import type { Metadata } from 'next'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import FAQAccordion from '@/components/FAQAccordion'

export const metadata: Metadata = {
  title: 'Requisitos para solicitar el ESTA USA — Lista completa 2026',
  description: 'Conoce todos los requisitos para solicitar el ESTA USA: países del VWP, tipo de pasaporte, restricciones por antecedentes o viajes a países conflictivos.',
  alternates: { canonical: 'https://esta.gourmety.com/requisitos-esta' },
}

const faqs = [
  {
    q: '¿Qué pasaporte necesito para el ESTA?',
    a: 'Necesitas un pasaporte biométrico (con chip electrónico) emitido por uno de los 41 países del Visa Waiver Program. Los pasaportes españoles emitidos desde 2006 son biométricos. El pasaporte debe estar vigente durante todo tu viaje. Si tienes doble nacionalidad, debes usar el pasaporte del país VWP para solicitar el ESTA.',
  },
  {
    q: '¿Pueden los menores solicitar el ESTA?',
    a: 'Sí. Los menores de edad necesitan su propio ESTA individual, aunque viajen con sus padres. Para solicitar el ESTA de un menor se usan los datos de su pasaporte. El formulario puede ser rellenado por uno de los padres o tutores legales en nombre del menor.',
  },
  {
    q: '¿Si me denegaron un visado USA puedo pedir ESTA?',
    a: 'En principio no. Si te han denegado alguna vez una visa para EE.UU., o si alguna vez te han denegado la entrada al país, en teoría no eres elegible para el ESTA y debes solicitar una visa B-1/B-2. Debes declararlo honestamente en el formulario ESTA. La CBP verifica estas respuestas contra sus bases de datos.',
  },
  {
    q: '¿Los países del VWP pueden viajar a EE.UU. sin visa?',
    a: 'Sí, pero con el ESTA obligatorio. Los ciudadanos de países VWP no necesitan visa consular, pero sí deben obtener el ESTA antes de embarcar. No es posible presentarse en la frontera aérea o marítima de EE.UU. sin ESTA si eres ciudadano de un país VWP.',
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

const vwpCountries = [
  'Alemania', 'Andorra', 'Australia', 'Austria', 'Bélgica', 'Brunéi', 'Chile',
  'Chipre', 'Croacia', 'Dinamarca', 'Eslovaquia', 'Eslovenia', 'España',
  'Estonia', 'Finlandia', 'Francia', 'Grecia', 'Hungría', 'Irlanda', 'Islandia',
  'Israel', 'Italia', 'Japón', 'Letonia', 'Liechtenstein', 'Lituania',
  'Luxemburgo', 'Malta', 'Mónaco', 'Noruega', 'Nueva Zelanda', 'Países Bajos',
  'Polonia', 'Portugal', 'República Checa', 'San Marino', 'Singapur', 'Suecia',
  'Suiza', 'Taiwan', 'Reino Unido',
]

export default function RequisitosEstaPage() {
  return (
    <>
      <JsonLd data={faqSchema} />

      {/* Hero breadcrumb */}
      <div className="bg-[#07334d] text-white py-10 px-6">
        <div className="max-w-[1160px] mx-auto">
          <div className="text-[1.35rem] text-white/50 mb-2">
            <Link href="/" className="hover:text-white/80">Inicio</Link> › Requisitos ESTA
          </div>
          <h1 className="font-[Martel_Sans] font-black text-[3.2rem] mb-2">
            Requisitos para solicitar el ESTA
          </h1>
          <p className="text-white/70 text-[1.6rem]">
            Comprueba si cumples todos los requisitos antes de iniciar tu solicitud
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[860px] mx-auto px-6 py-14">

        {/* Requisitos principales */}
        <section className="mb-12">
          <h2 className="font-[Martel_Sans] font-black text-[2.6rem] text-[#07334d] mb-4">
            Requisitos principales del ESTA
          </h2>
          <p className="text-[1.55rem] text-gray-700 leading-relaxed mb-6">
            Para poder solicitar el ESTA y viajar a EE.UU. sin visado debes cumplir <strong>todos</strong> los siguientes requisitos:
          </p>
          <ul className="space-y-5">
            {[
              {
                t: 'Ciudadanía de un país VWP',
                d: 'Debes ser ciudadano de uno de los 41 países del Visa Waiver Program. España, y la mayoría de países de la Unión Europea, están incluidos (ver lista completa más abajo).',
              },
              {
                t: 'Pasaporte biométrico vigente',
                d: 'Tu pasaporte debe ser de tipo electrónico (biométrico, con chip). En España, todos los pasaportes emitidos desde 2006 son biométricos. El pasaporte debe estar vigente en la fecha de entrada a EE.UU.',
              },
              {
                t: 'Propósito de viaje cubierto por el VWP',
                d: 'El viaje debe ser por turismo, visita a familiares o amigos, negocios (reuniones, conferencias, sin percibir salario americano) o tránsito. No permite trabajo remunerado ni estudios reglados.',
              },
              {
                t: 'Estancia máxima de 90 días',
                d: 'Cada entrada a EE.UU. no puede superar los 90 días. No es posible prorrogar la estancia desde EE.UU. con el ESTA.',
              },
              {
                t: 'Sin antecedentes incompatibles con el VWP',
                d: 'No haber sido condenado por ciertos delitos, no haber sido deportado de EE.UU., no tener visados americanos denegados, y no haber viajado a determinados países desde 2011 (ver sección de restricciones).',
              },
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4 list-none">
                <span className="flex-shrink-0 w-8 h-8 bg-[#006b63] text-white rounded-full flex items-center justify-center font-bold text-[1.3rem] mt-0.5">{i + 1}</span>
                <div className="text-[1.55rem] text-gray-700">
                  <span className="font-semibold text-[#07334d]">{item.t}: </span>
                  {item.d}
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Pasaporte */}
        <section className="mb-12">
          <h2 className="font-[Martel_Sans] font-black text-[2.6rem] text-[#07334d] mb-4">
            Requisitos del pasaporte
          </h2>
          <p className="text-[1.55rem] text-gray-700 leading-relaxed mb-4">
            El pasaporte es el documento más importante del proceso. Debe cumplir estas condiciones:
          </p>
          <ul className="space-y-3 mb-6">
            {[
              'Ser biométrico (chip electrónico): identificable por el símbolo de cámara en la portada. En España, todos los pasaportes desde 2006 lo son.',
              'Estar vigente durante todo el viaje (algunos países exigen que no caduque en los 6 meses siguientes a la entrada, aunque EE.UU. no lo exige expresamente con el ESTA).',
              'No estar deteriorado, manipulado ni tener páginas arrancadas.',
              'Los datos del ESTA deben coincidir exactamente con los del pasaporte: nombre, apellidos, número, fecha de nacimiento y fecha de caducidad.',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-[1.55rem] text-gray-700">
                <span className="text-[#006b63] font-black mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
            <p className="text-[1.5rem] text-amber-800">
              <strong>Importante:</strong> si renuevas el pasaporte, tu ESTA anterior queda invalidado aunque siga en vigor. Necesitarás solicitar un nuevo ESTA con los datos del pasaporte nuevo.
            </p>
          </div>
        </section>

        {/* Países VWP */}
        <section className="mb-12">
          <h2 className="font-[Martel_Sans] font-black text-[2.6rem] text-[#07334d] mb-4">
            Los 41 países del Visa Waiver Program
          </h2>
          <p className="text-[1.55rem] text-gray-700 leading-relaxed mb-6">
            Solo los ciudadanos de estos países pueden solicitar el ESTA. Si tu país no está en la lista, debes solicitar una visa B-1/B-2 en el consulado americano.
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-[1.45rem] border-collapse">
              <thead>
                <tr className="bg-[#07334d] text-white">
                  <th className="text-left px-4 py-3 rounded-tl-xl">#</th>
                  <th className="text-left px-4 py-3 rounded-tr-xl">País</th>
                </tr>
              </thead>
              <tbody>
                {vwpCountries.map((country, i) => (
                  <tr key={country} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-4 py-2 text-gray-400">{i + 1}</td>
                    <td className="px-4 py-2 text-gray-700 font-medium">{country}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[1.4rem] text-gray-500">
            Lista actualizada a 2026. El Departamento de Seguridad Nacional de EE.UU. puede modificar el listado.
          </p>
        </section>

        {/* Restricciones */}
        <section className="mb-12">
          <h2 className="font-[Martel_Sans] font-black text-[2.6rem] text-[#07334d] mb-4">
            Restricciones: quién NO puede solicitar el ESTA
          </h2>
          <p className="text-[1.55rem] text-gray-700 leading-relaxed mb-4">
            Aunque seas ciudadano de un país VWP, existen circunstancias que te impiden usar el ESTA y te obligan a solicitar visa:
          </p>

          <h3 className="font-[Martel_Sans] font-bold text-[2rem] text-[#07334d] mb-3 mt-6">
            Viajes a países de la lista restringida desde 2011
          </h3>
          <p className="text-[1.55rem] text-gray-700 leading-relaxed mb-3">
            Si has viajado a los siguientes países a partir del 1 de marzo de 2011 (o en cualquier fecha para Corea del Norte y Cuba), no puedes usar el ESTA:
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {['Irak', 'Siria', 'Irán', 'Libia', 'Somalia', 'Sudan', 'Yemen', 'Corea del Norte', 'Cuba'].map((c) => (
              <span key={c} className="bg-red-50 border border-red-200 text-red-700 text-[1.35rem] px-3 py-1 rounded-full">
                {c}
              </span>
            ))}
          </div>
          <p className="text-[1.45rem] text-gray-500 mb-6">
            Excepción: si viajaste a esos países por razones diplomáticas, humanitarias o militares al servicio de tu gobierno, puedes solicitar una exención.
          </p>

          <h3 className="font-[Martel_Sans] font-bold text-[2rem] text-[#07334d] mb-3">
            Antecedentes penales
          </h3>
          <p className="text-[1.55rem] text-gray-700 leading-relaxed mb-4">
            Ciertas condenas penales inhabilitan para el ESTA. En general, cualquier condena por delito con pena de prisión superior a un año (aunque no hayas cumplido esa pena) o delitos relacionados con drogas, terrorismo, crimen organizado, tráfico de personas o prostitución. Para casos concretos, consulta el texto oficial de las condiciones del VWP o a un abogado de inmigración.
          </p>

          <h3 className="font-[Martel_Sans] font-bold text-[2rem] text-[#07334d] mb-3">
            Visados o entradas denegadas en EE.UU.
          </h3>
          <p className="text-[1.55rem] text-gray-700 leading-relaxed">
            Si alguna vez te han denegado un visado americano o la entrada al país, en principio no puedes usar el ESTA y debes solicitar visa. Declararlo falsamente en el formulario ESTA es un delito federal americano.
          </p>
        </section>

        {/* FAQ */}
        <section className="mb-14">
          <h2 className="font-[Martel_Sans] font-black text-[2.6rem] text-[#07334d] mb-6">
            Preguntas frecuentes sobre requisitos
          </h2>
          <FAQAccordion items={faqs} />
        </section>

        {/* CTA */}
        <div className="bg-[#07334d] text-white rounded-2xl p-8 text-center mt-14">
          <h2 className="font-[Martel_Sans] font-black text-[2.6rem] mb-3">
            ¿Cumples los requisitos?
          </h2>
          <p className="text-white/70 text-[1.55rem] mb-2">
            Tramita tu ESTA ahora con revisión humana y soporte en español.
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
