import type { Metadata } from 'next'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import FAQAccordion from '@/components/FAQAccordion'

export const metadata: Metadata = {
  title: 'Países del Visa Waiver Program — Lista completa 2026',
  description: 'Lista de los 41 países del Visa Waiver Program que pueden solicitar el ESTA para viajar a EE.UU. sin visado. España, Alemania, Francia y más.',
  alternates: { canonical: 'https://estausa.es/paises-visa-waiver' },
}

const faqs = [
  {
    q: '¿Qué países pueden solicitar el ESTA?',
    a: 'Solo los ciudadanos de los 41 países del Visa Waiver Program pueden solicitar el ESTA. Entre ellos: España, Alemania, Francia, Italia, Portugal, Reino Unido, Países Bajos, Bélgica, Austria, Suiza, Suecia, Noruega, Dinamarca, Finlandia, Irlanda, Australia, Nueva Zelanda, Japón, Singapur y Chile, entre otros. Si tu país no está en la lista, debes solicitar una visa B-1/B-2.',
  },
  {
    q: '¿España está en el Visa Waiver Program?',
    a: 'Sí. España es miembro del Visa Waiver Program desde 1991. Los ciudadanos españoles con pasaporte biométrico vigente pueden viajar a EE.UU. sin visado hasta 90 días, previa obtención del ESTA. Solo se necesita el pasaporte español (no el DNI) y el ESTA aprobado.',
  },
  {
    q: '¿Cómo sé si mi país está en el VWP?',
    a: 'Puedes consultar la lista oficial en el sitio del Departamento de Seguridad Nacional de EE.UU. (dhs.gov) o en esta misma página. A fecha de 2026 son 41 países, principalmente de Europa Occidental, junto a Australia, Nueva Zelanda, Japón, Singapur, Brunéi, Chile, Israel y Taiwan.',
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
  { country: 'Alemania', since: '1988', region: 'Europa' },
  { country: 'Andorra', since: '1996', region: 'Europa' },
  { country: 'Australia', since: '1996', region: 'Oceanía' },
  { country: 'Austria', since: '1991', region: 'Europa' },
  { country: 'Bélgica', since: '1991', region: 'Europa' },
  { country: 'Brunéi', since: '1993', region: 'Asia' },
  { country: 'Chile', since: '2014', region: 'América' },
  { country: 'Chipre', since: '2023', region: 'Europa' },
  { country: 'Croacia', since: '2021', region: 'Europa' },
  { country: 'Dinamarca', since: '1991', region: 'Europa' },
  { country: 'Eslovaquia', since: '2008', region: 'Europa' },
  { country: 'Eslovenia', since: '1997', region: 'Europa' },
  { country: 'España', since: '1991', region: 'Europa' },
  { country: 'Estonia', since: '2008', region: 'Europa' },
  { country: 'Finlandia', since: '1991', region: 'Europa' },
  { country: 'Francia', since: '1989', region: 'Europa' },
  { country: 'Grecia', since: '2010', region: 'Europa' },
  { country: 'Hungría', since: '2008', region: 'Europa' },
  { country: 'Irlanda', since: '1995', region: 'Europa' },
  { country: 'Islandia', since: '1991', region: 'Europa' },
  { country: 'Israel', since: '2023', region: 'Asia' },
  { country: 'Italia', since: '1989', region: 'Europa' },
  { country: 'Japón', since: '1988', region: 'Asia' },
  { country: 'Letonia', since: '2008', region: 'Europa' },
  { country: 'Liechtenstein', since: '1991', region: 'Europa' },
  { country: 'Lituania', since: '2008', region: 'Europa' },
  { country: 'Luxemburgo', since: '1991', region: 'Europa' },
  { country: 'Malta', since: '2008', region: 'Europa' },
  { country: 'Mónaco', since: '1996', region: 'Europa' },
  { country: 'Noruega', since: '1991', region: 'Europa' },
  { country: 'Nueva Zelanda', since: '1991', region: 'Oceanía' },
  { country: 'Países Bajos', since: '1991', region: 'Europa' },
  { country: 'Polonia', since: '2019', region: 'Europa' },
  { country: 'Portugal', since: '1999', region: 'Europa' },
  { country: 'Reino Unido', since: '1988', region: 'Europa' },
  { country: 'República Checa', since: '2008', region: 'Europa' },
  { country: 'San Marino', since: '1996', region: 'Europa' },
  { country: 'Singapur', since: '1999', region: 'Asia' },
  { country: 'Suecia', since: '1989', region: 'Europa' },
  { country: 'Suiza', since: '1989', region: 'Europa' },
  { country: 'Taiwan', since: '2012', region: 'Asia' },
]

export default function PaisesVisaWaiverPage() {
  return (
    <>
      <JsonLd data={faqSchema} />

      {/* Hero breadcrumb */}
      <div className="bg-[#07334d] text-white py-10 px-6">
        <div className="max-w-[1160px] mx-auto">
          <div className="text-[1.35rem] text-white/50 mb-2">
            <Link href="/" className="hover:text-white/80">Inicio</Link> › Países Visa Waiver
          </div>
          <h1 className="font-[Martel_Sans] font-black text-[3.2rem] mb-2">
            Países del Visa Waiver Program
          </h1>
          <p className="text-white/70 text-[1.6rem]">
            Lista completa de los 41 países cuyos ciudadanos pueden viajar a EE.UU. sin visado con el ESTA
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[860px] mx-auto px-6 py-14">

        {/* Qué es el VWP */}
        <section className="mb-12">
          <h2 className="font-[Martel_Sans] font-black text-[2.6rem] text-[#07334d] mb-4">
            Qué es el Visa Waiver Program
          </h2>
          <p className="text-[1.55rem] text-gray-700 leading-relaxed mb-4">
            El <strong>Visa Waiver Program (VWP)</strong> es un programa del gobierno de los Estados Unidos que permite a ciudadanos de determinados países viajar a EE.UU. para turismo o negocios por un período de hasta 90 días <strong>sin necesidad de obtener una visa consular</strong>.
          </p>
          <p className="text-[1.55rem] text-gray-700 leading-relaxed mb-4">
            A cambio de esta exención de visado, los viajeros del VWP deben:
          </p>
          <ul className="space-y-3 mb-6">
            {[
              'Obtener el ESTA (autorización electrónica de viaje) antes de embarcar',
              'Viajar con pasaporte biométrico del país VWP',
              'No superar los 90 días de estancia por entrada',
              'No trabajar ni estudiar de forma reglada en EE.UU.',
              'Renunciar al derecho de apelar una orden de deportación (una de las condiciones del VWP)',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-[1.55rem] text-gray-700">
                <span className="text-[#006b63] font-black mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-[1.55rem] text-gray-700 leading-relaxed">
            El programa existe desde 1986 y actualmente incluye <strong>41 países</strong>, principalmente de Europa Occidental, junto a Japón, Australia, Nueva Zelanda, Singapur, Brunéi, Chile, Israel y Taiwan.
          </p>
        </section>

        {/* Cómo se accede al VWP */}
        <section className="mb-12">
          <h2 className="font-[Martel_Sans] font-black text-[2.6rem] text-[#07334d] mb-4">
            Cómo accede un país al Visa Waiver Program
          </h2>
          <p className="text-[1.55rem] text-gray-700 leading-relaxed mb-4">
            Para ser admitido en el VWP, un país debe cumplir una serie de criterios establecidos por el DHS:
          </p>
          <ul className="space-y-3 mb-4">
            {[
              'Tasa de denegación de visas de no inmigrante inferior al 3% durante el año fiscal anterior',
              'Pasaportes biométricos electrónicos para todos los ciudadanos',
              'Participación en el programa de intercambio de información criminal con EE.UU.',
              'Cooperación en materia de seguridad y contraterrorismo',
              'Tasa de overstay (personas que superan el plazo permitido) inferior al 2%',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-[1.55rem] text-gray-700">
                <span className="text-[#006b63] font-black mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-[1.55rem] text-gray-700 leading-relaxed">
            Un país puede ser suspendido del VWP si deja de cumplir alguno de estos criterios.
          </p>
        </section>

        {/* Tabla completa */}
        <section className="mb-12">
          <h2 className="font-[Martel_Sans] font-black text-[2.6rem] text-[#07334d] mb-4">
            Lista completa de los 41 países del VWP
          </h2>
          <p className="text-[1.55rem] text-gray-700 leading-relaxed mb-6">
            A continuación, todos los países cuyos ciudadanos pueden solicitar el ESTA y viajar a EE.UU. sin visado:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-[1.45rem] border-collapse">
              <thead>
                <tr className="bg-[#07334d] text-white">
                  <th className="text-left px-4 py-3 rounded-tl-xl">#</th>
                  <th className="text-left px-4 py-3">País</th>
                  <th className="text-left px-4 py-3">Región</th>
                  <th className="text-left px-4 py-3 rounded-tr-xl">Miembro desde</th>
                </tr>
              </thead>
              <tbody>
                {vwpCountries.map((row, i) => (
                  <tr key={row.country} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-4 py-2 text-gray-400">{i + 1}</td>
                    <td className="px-4 py-2 font-medium text-gray-800">
                      {row.country === 'España' ? (
                        <span className="text-[#006b63] font-bold">{row.country}</span>
                      ) : row.country}
                    </td>
                    <td className="px-4 py-2 text-gray-600">{row.region}</td>
                    <td className="px-4 py-2 text-gray-600">{row.since}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[1.4rem] text-gray-500 mt-3">
            Lista actualizada a julio de 2026. Fuente: U.S. Department of Homeland Security (dhs.gov).
          </p>
        </section>

        {/* España en el VWP */}
        <section className="mb-12">
          <h2 className="font-[Martel_Sans] font-black text-[2.6rem] text-[#07334d] mb-4">
            España en el Visa Waiver Program
          </h2>
          <p className="text-[1.55rem] text-gray-700 leading-relaxed mb-4">
            España forma parte del Visa Waiver Program desde <strong>1991</strong>. Los ciudadanos españoles con pasaporte biométrico pueden viajar a EE.UU. sin visado, únicamente con el ESTA aprobado.
          </p>
          <p className="text-[1.55rem] text-gray-700 leading-relaxed mb-4">
            Algunos datos importantes para los viajeros españoles:
          </p>
          <ul className="space-y-3">
            {[
              'El DNI español NO es válido para entrar a EE.UU.: necesitas el pasaporte.',
              'El pasaporte debe ser biométrico (con chip). Todos los pasaportes españoles desde 2006 lo son.',
              'Si tienes doble nacionalidad española y de otro país no VWP, debes viajar con el pasaporte español y solicitar el ESTA con ese pasaporte.',
              'Los residentes en España con pasaporte de un país no VWP deben solicitar visa, no ESTA.',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-[1.55rem] text-gray-700">
                <span className="text-[#006b63] font-black mt-0.5">→</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Países NO incluidos */}
        <section className="mb-14">
          <h2 className="font-[Martel_Sans] font-black text-[2.6rem] text-[#07334d] mb-4">
            Países que NO están en el VWP
          </h2>
          <p className="text-[1.55rem] text-gray-700 leading-relaxed mb-4">
            Si eres ciudadano de un país que no aparece en la lista del VWP (como México, Colombia, Argentina, Brasil, Marruecos, Turquía, Rusia, China o India, entre muchos otros), <strong>no puedes solicitar el ESTA</strong>. Deberás solicitar una visa B-1/B-2 en el consulado o embajada de EE.UU. en tu país de residencia.
          </p>
          <p className="text-[1.55rem] text-gray-700 leading-relaxed">
            El proceso de visa B-1/B-2 incluye rellenar el formulario DS-160, abonar las tasas consulares (~140 USD no reembolsables) y asistir a una entrevista presencial en el consulado. El plazo puede variar entre semanas y meses según el consulado y la demanda.
          </p>
        </section>

        {/* FAQ */}
        <section className="mb-14">
          <h2 className="font-[Martel_Sans] font-black text-[2.6rem] text-[#07334d] mb-6">
            Preguntas frecuentes sobre el Visa Waiver Program
          </h2>
          <FAQAccordion items={faqs} />
        </section>

        {/* CTA */}
        <div className="bg-[#07334d] text-white rounded-2xl p-8 text-center mt-14">
          <h2 className="font-[Martel_Sans] font-black text-[2.6rem] mb-3">
            ¿Listo para tramitar?
          </h2>
          <p className="text-white/70 text-[1.55rem] mb-2">
            Solicita tu ESTA con revisión humana incluida. Desde 62€.
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
