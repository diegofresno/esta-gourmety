import type { Metadata } from 'next'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import FAQAccordion from '@/components/FAQAccordion'

export const metadata: Metadata = {
  title: 'ESTA USA — Tramitación asistida en español',
  description: 'Solicita tu ESTA para viajar a Estados Unidos con revisión humana y soporte en español. Aprobación en 72h. Desde 62€ con tasa CBP incluida.',
  alternates: { canonical: 'https://esta.gourmety.com' },
}

const faqs = [
  { q: '¿Qué es el ESTA?', a: 'El ESTA (Electronic System for Travel Authorization) es la autorización electrónica obligatoria para ciudadanos de países del Programa de Exención de Visado que quieran viajar a EE.UU. España está incluida en el VWP.' },
  { q: '¿Cuánto tarda en aprobarse?', a: 'La CBP suele aprobar el ESTA en minutos o pocas horas. Oficialmente puede tardar hasta 72 horas. Recomendamos solicitarlo con al menos 72h de antelación al vuelo.' },
  { q: '¿Cuánto cuesta con Gourmety?', a: 'Desde 62€ con la tasa gubernamental CBP (≈37€) incluida. Eso incluye revisión humana, tramitación asistida en español y soporte por WhatsApp.' },
  { q: '¿Puedo tramitar para varias personas?', a: 'Sí. El formulario permite indicar el número de viajeros y recoger los datos del pasaporte de cada uno.' },
  { q: '¿Es seguro dar mis datos de pasaporte?', a: 'Completamente. Cifrado SSL/TLS, cumplimiento RGPD y eliminación de datos una vez procesada la solicitud.' },
]

export default function HomePage() {
  return (
    <>
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map(f => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      }} />

      {/* Hero */}
      <section className="bg-[#07334d] text-white">
        <div className="max-w-[1160px] mx-auto px-6 py-24 md:py-32">
          <div className="max-w-2xl">
            <span className="inline-block bg-[#e8533a] text-white text-[1.2rem] font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-6">
              Tramitación asistida · En español
            </span>
            <h1 className="font-[Martel_Sans] font-black text-[4rem] md:text-[5rem] leading-tight mb-6">
              Solicita tu ESTA para <span className="text-[#e8533a]">Estados Unidos</span>
            </h1>
            <p className="text-[1.8rem] text-white/80 mb-8 leading-relaxed">
              Rellena tus datos, nosotros nos encargamos del resto. Revisión humana incluida.
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              {['Aprobación en 72h', 'En español', 'Válido 2 años'].map(b => (
                <span key={b} className="bg-white/10 border border-white/20 text-white/90 text-[1.35rem] px-4 py-2 rounded-full">
                  ✓ {b}
                </span>
              ))}
            </div>
            <Link href="/solicitar-esta" className="inline-block bg-[#e8533a] hover:bg-[#d4442c] text-white font-bold text-[1.7rem] px-8 py-4 rounded-full transition-colors shadow-lg">
              Comenzar solicitud →
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-white">
        <div className="max-w-[1160px] mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[#006b63] font-bold text-[1.3rem] uppercase tracking-wider">Proceso</span>
            <h2 className="font-[Martel_Sans] font-black text-[3.2rem] mt-2">Cómo funciona</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { n: '1', t: 'Rellena el formulario', d: 'Introduce los datos del pasaporte y elige tu plan.' },
              { n: '2', t: 'Revisión humana', d: 'Nuestro equipo revisa la solicitud antes de enviarla a la CBP.' },
              { n: '3', t: 'Tramitación CBP', d: 'Enviamos tu solicitud al sistema oficial esta.cbp.dhs.gov.' },
              { n: '4', t: 'ESTA aprobado', d: 'Te enviamos el ESTA aprobado por email en plazo garantizado.' },
            ].map(s => (
              <div key={s.n} className="text-center">
                <div className="w-14 h-14 bg-[#006b63] text-white font-[Martel_Sans] font-black text-[2rem] rounded-full flex items-center justify-center mx-auto mb-4">{s.n}</div>
                <h3 className="font-[Martel_Sans] font-bold text-[1.6rem] mb-2">{s.t}</h3>
                <p className="text-gray-500 text-[1.45rem]">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-[#f9fafb]">
        <div className="max-w-[1160px] mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[#006b63] font-bold text-[1.3rem] uppercase tracking-wider">Precios</span>
            <h2 className="font-[Martel_Sans] font-black text-[3.2rem] mt-2">Elige tu plan</h2>
            <p className="text-gray-500 text-[1.55rem] mt-3">Tasa gubernamental CBP (≈37€) incluida en todos los planes</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { name: 'Estándar', price: 62, time: '72 horas', featured: false },
              { name: 'Express',  price: 77, time: '24 horas', featured: true },
              { name: 'Urgente',  price: 92, time: '3 horas',  featured: false },
            ].map(p => (
              <div key={p.name} className={`rounded-2xl p-8 border-2 flex flex-col relative ${p.featured ? 'border-[#006b63] bg-white shadow-xl' : 'border-gray-200 bg-white'}`}>
                {p.featured && <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#006b63] text-white text-[1.2rem] font-bold px-4 py-1 rounded-full whitespace-nowrap">Más popular</div>}
                <div className="font-[Martel_Sans] font-bold text-[1.7rem] text-[#07334d] mb-1">{p.name}</div>
                <div className="text-[3.6rem] font-[Martel_Sans] font-black text-[#07334d] leading-none mb-1">{p.price}€</div>
                <div className="text-[#006b63] font-semibold text-[1.4rem] mb-6">hasta {p.time}</div>
                <Link href="/solicitar-esta" className="mt-auto block text-center bg-[#e8533a] hover:bg-[#d4442c] text-white font-bold text-[1.5rem] py-3 rounded-xl transition-colors">
                  Solicitar →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="py-20 bg-white">
        <div className="max-w-[1160px] mx-auto px-6 grid md:grid-cols-3 gap-10">
          {[
            { t: '🔒 Pago 100% seguro', d: 'Procesamos los pagos con cifrado SSL de 256 bits vía Stripe (PCI DSS). Tus datos bancarios nunca llegan a nuestros servidores.' },
            { t: '✅ Revisión por expertos', d: 'Cada solicitud es revisada manualmente por nuestro equipo antes de enviarla a la CBP. Detectamos y corregimos errores.' },
            { t: '💬 Soporte en español', d: 'Te acompañamos en todo el proceso. Resolvemos dudas por WhatsApp, email y teléfono. Horario ampliado.' },
          ].map(c => (
            <div key={c.t}>
              <h3 className="font-[Martel_Sans] font-bold text-[1.8rem] mb-3">{c.t}</h3>
              <p className="text-gray-500 text-[1.45rem] leading-relaxed">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#f9fafb]">
        <div className="max-w-[760px] mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[#006b63] font-bold text-[1.3rem] uppercase tracking-wider">Dudas frecuentes</span>
            <h2 className="font-[Martel_Sans] font-black text-[3.2rem] mt-2">Preguntas frecuentes</h2>
          </div>
          <FAQAccordion items={faqs} />
          <div className="text-center mt-10">
            <Link href="/faq" className="text-[#006b63] font-bold text-[1.5rem] hover:underline">Ver todas las preguntas →</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#07334d] py-20 text-center text-white">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-[Martel_Sans] font-black text-[3.4rem] mb-4">¿Listo para viajar a EE.UU.?</h2>
          <p className="text-white/70 text-[1.65rem] mb-8">Tramita tu ESTA en minutos con revisión humana y soporte en español.</p>
          <Link href="/solicitar-esta" className="inline-block bg-[#e8533a] hover:bg-[#d4442c] text-white font-bold text-[1.7rem] px-10 py-4 rounded-full transition-colors">
            Comenzar solicitud →
          </Link>
        </div>
      </section>
    </>
  )
}
