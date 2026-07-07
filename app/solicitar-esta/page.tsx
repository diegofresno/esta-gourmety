import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import EstaForm from './EstaForm'
import JsonLd from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'Solicitar ESTA USA — Tramitación asistida en español',
  description: 'Solicita tu ESTA para Estados Unidos online con revisión humana. Formulario en español. Aprobación en 72h, 24h o 3h. Desde 62€ con tasa CBP incluida.',
  alternates: { canonical: 'https://estausa.es/solicitar-esta' },
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
      <PageHero
        breadcrumb={[{ label:'Inicio', href:'/' }, { label:'Solicitar ESTA' }]}
        title="Solicita tu ESTA para Estados Unidos"
        subtitle="Rellena tus datos, nosotros nos encargamos del resto. Revisión humana incluida."
        pills={['Desde 62€', 'Revisión humana incluida', 'Respuesta hasta 72 h']}
      />
      <EstaForm />
    </>
  )
}
