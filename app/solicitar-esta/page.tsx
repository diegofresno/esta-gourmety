import type { Metadata } from 'next'
import EstaForm from './EstaForm'
import JsonLd from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'Solicitar ESTA USA — Tramitación asistida en español',
  description: 'Solicita tu ESTA para Estados Unidos online con revisión humana. Formulario en español. Aprobación en 72h, 24h o 3h. Desde 62€ con tasa CBP incluida.',
  alternates: { canonical: 'https://esta.gourmety.com/solicitar-esta' },
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Cómo solicitar el ESTA USA con Gourmety',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Datos personales', text: 'Introduce tu nombre, fecha de nacimiento y dirección tal como aparecen en el pasaporte.' },
    { '@type': 'HowToStep', position: 2, name: 'Datos del pasaporte', text: 'Introduce el número, fecha de expedición y caducidad de tu pasaporte.' },
    { '@type': 'HowToStep', position: 3, name: 'Información del viaje', text: 'Indica la dirección de alojamiento en EE.UU. y datos del vuelo.' },
    { '@type': 'HowToStep', position: 4, name: 'Preguntas de elegibilidad', text: 'Responde las preguntas de elegibilidad de la CBP.' },
    { '@type': 'HowToStep', position: 5, name: 'Confirmación y pago', text: 'Elige el plan y realiza el pago. Recibirás el ESTA aprobado por email.' },
  ],
}

export default function SolicitarEstaPage() {
  return (
    <>
      <JsonLd data={howToSchema} />
      <div className="bg-[#07334d] text-white py-10 px-6">
        <div className="max-w-[1160px] mx-auto">
          <div className="text-[1.35rem] text-white/50 mb-2">
            <a href="/" className="hover:text-white/80">Inicio</a> › Solicitar ESTA
          </div>
          <h1 className="font-[Martel_Sans] font-black text-[3.2rem] mb-2">
            Solicita tu ESTA para Estados Unidos
          </h1>
          <p className="text-white/70 text-[1.6rem]">
            Rellena tus datos, nosotros nos encargamos del resto. Revisión humana incluida.
          </p>
        </div>
      </div>
      <EstaForm />
    </>
  )
}
