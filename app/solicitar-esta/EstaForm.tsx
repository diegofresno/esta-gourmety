'use client'
import { useState } from 'react'

const PLANS = {
  estandar: { name: 'Plan Estándar', total: 62, gestion: 25, time: '72 h', priceId: 'price_1TqCrFEsRS7JswWPxnmAsgvf' },
  express:  { name: 'Plan Express',  total: 77, gestion: 40, time: '24 h', priceId: 'price_1TqCrlEsRS7JswWPmgkqke8e' },
  urgente:  { name: 'Plan Urgente',  total: 92, gestion: 55, time: '3 h',  priceId: 'price_1TqCsJEsRS7JswWPgZtNVPxA' },
} as const

type PlanKey = keyof typeof PLANS

const VWP_COUNTRIES: [string, string][] = [
  ['ES','España'],['FR','Francia'],['DE','Alemania'],['IT','Italia'],['PT','Portugal'],
  ['GB','Reino Unido'],['NL','Países Bajos'],['BE','Bélgica'],['AT','Austria'],['CH','Suiza'],
  ['SE','Suecia'],['NO','Noruega'],['DK','Dinamarca'],['FI','Finlandia'],['IE','Irlanda'],
  ['GR','Grecia'],['CZ','República Checa'],['HU','Hungría'],['PL','Polonia'],['SK','Eslovaquia'],
  ['SI','Eslovenia'],['HR','Croacia'],['EE','Estonia'],['LV','Letonia'],['LT','Lituania'],
  ['LU','Luxemburgo'],['MT','Malta'],['CY','Chipre'],['IS','Islandia'],['LI','Liechtenstein'],
  ['AD','Andorra'],['MC','Mónaco'],['SM','San Marino'],['JP','Japón'],['KR','Corea del Sur'],
  ['AU','Australia'],['NZ','Nueva Zelanda'],['SG','Singapur'],['BN','Brunéi'],['CL','Chile'],['TW','Taiwán'],
]

export default function EstaForm() {
  const [step, setStep] = useState(1)
  const [planKey, setPlanKey] = useState<PlanKey>('estandar')
  const [qty, setQty] = useState(1)
  const [loading, setLoading] = useState(false)

  const plan = PLANS[planKey]
  const total = plan.total * qty

  async function handleCheckout() {
    const emailEl = document.getElementById('email') as HTMLInputElement
    const email = emailEl?.value || ''
    setLoading(true)
    try {
      const res = await fetch('/api/create-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ priceId: plan.priceId, quantity: qty, email }),
      })
      const data = await res.json()
      if (data.url) window.location.href = data.url
      else throw new Error(data.error || 'Error desconocido')
    } catch (err: unknown) {
      setLoading(false)
      alert('No se pudo iniciar el pago: ' + (err instanceof Error ? err.message : 'Error') + '\nPor favor inténtalo de nuevo o contáctanos.')
    }
  }

  const steps = ['Datos personales', 'Pasaporte', 'Viaje', 'Elegibilidad', 'Confirmación']

  return (
    <div className="max-w-[1160px] mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8 items-start">
      {/* Left: form */}
      <div>
        {/* Progress */}
        <div className="flex items-center mb-10">
          {steps.map((s, i) => (
            <div key={s} className="flex items-center flex-1 last:flex-none">
              <div className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-[1.4rem] font-bold transition-colors ${
                  i + 1 < step ? 'bg-[#006b63] text-white' : i + 1 === step ? 'bg-[#07334d] text-white' : 'bg-gray-100 text-gray-400'
                }`}>
                  {i + 1 < step ? '✓' : i + 1}
                </div>
                <span className={`mt-1.5 text-[1.15rem] hidden md:block ${i + 1 === step ? 'text-[#07334d] font-bold' : 'text-gray-400'}`}>{s}</span>
              </div>
              {i < steps.length - 1 && (
                <div className={`h-0.5 flex-1 mx-2 transition-colors ${i + 1 < step ? 'bg-[#006b63]' : 'bg-gray-200'}`} />
              )}
            </div>
          ))}
        </div>

        {/* Step content */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8">
          {step === 1 && <Step1 onNext={() => setStep(2)} />}
          {step === 2 && <Step2 qty={qty} onBack={() => setStep(1)} onNext={() => setStep(3)} />}
          {step === 3 && <Step3 qty={qty} onBack={() => setStep(2)} onNext={() => setStep(4)} />}
          {step === 4 && <Step4 onBack={() => setStep(3)} onNext={() => setStep(5)} />}
          {step === 5 && (
            <Step5
              plan={plan}
              qty={qty}
              loading={loading}
              onBack={() => setStep(4)}
              onPay={handleCheckout}
            />
          )}
        </div>
      </div>

      {/* Right: summary */}
      <div className="sticky top-20">
        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
          <h2 className="font-[Martel_Sans] font-bold text-[1.8rem] text-[#07334d] mb-5">Resumen del pedido</h2>

          {/* Plan selector */}
          <div className="flex flex-col gap-2.5 mb-5">
            {(Object.entries(PLANS) as [PlanKey, typeof PLANS[PlanKey]][]).map(([key, p]) => (
              <button
                key={key}
                onClick={() => setPlanKey(key)}
                className={`flex justify-between items-center p-3.5 rounded-xl border-2 text-left transition-all ${
                  planKey === key ? 'border-[#006b63] bg-[#006b63]/5' : 'border-gray-200 hover:bg-gray-50'
                }`}
              >
                <div>
                  <div className="font-bold text-[1.35rem] text-[#07334d]">{p.name}</div>
                  <div className="text-[1.15rem] text-gray-500">hasta {p.time} hábiles</div>
                </div>
                <div className="font-[Martel_Sans] font-black text-[1.6rem] text-[#006b63]">{p.total}€</div>
              </button>
            ))}
          </div>

          {/* Qty selector */}
          <div className="flex items-center justify-between mb-5 py-3 border-t border-gray-100">
            <span className="font-semibold text-[1.4rem] text-gray-700">Viajeros</span>
            <div className="flex items-center gap-3">
              <button onClick={() => setQty(Math.max(1, qty - 1))} className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-[1.6rem] hover:bg-gray-50">−</button>
              <span className="font-bold text-[1.6rem] w-6 text-center">{qty}</span>
              <button onClick={() => setQty(Math.min(5, qty + 1))} className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-[1.6rem] hover:bg-gray-50">+</button>
            </div>
          </div>

          {/* Price breakdown */}
          <div className="border-t border-gray-100 pt-4 space-y-2.5">
            <div className="flex justify-between text-[1.4rem] text-gray-600">
              <span>Tasa CBP</span><span>37€ × {qty}</span>
            </div>
            <div className="flex justify-between text-[1.4rem] text-gray-600">
              <span>Gestión</span><span>{plan.gestion}€ × {qty}</span>
            </div>
            <div className="flex justify-between font-[Martel_Sans] font-black text-[1.9rem] text-[#07334d] pt-2 border-t border-gray-100">
              <span>Total</span><span>{total}€</span>
            </div>
          </div>

          {/* Trust */}
          <ul className="mt-5 space-y-2 border-t border-gray-100 pt-4">
            {['Pago 100% seguro SSL', 'Revisión humana incluida', 'Soporte en español', 'Respuesta en horario ampliado'].map(t => (
              <li key={t} className="flex items-center gap-2 text-[1.35rem] text-gray-600">
                <span className="text-[#006b63] font-bold">✓</span> {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

/* ── Step components ─────────────────────────────────────── */

function FieldGroup({ children }: { children: React.ReactNode }) {
  return <div className="grid grid-cols-1 md:grid-cols-2 gap-5">{children}</div>
}
function Field({ label, id, type = 'text', placeholder, required, full }: { label: string; id: string; type?: string; placeholder?: string; required?: boolean; full?: boolean }) {
  return (
    <div className={full ? 'md:col-span-2' : ''}>
      <label htmlFor={id} className="block text-[1.35rem] font-semibold text-gray-700 mb-1.5">
        {label}{required && <span className="text-[#e8533a] ml-1">*</span>}
      </label>
      <input
        id={id} name={id} type={type} placeholder={placeholder} required={required}
        className="w-full border border-gray-300 rounded-xl px-4 py-3 text-[1.5rem] focus:outline-none focus:border-[#006b63] focus:ring-2 focus:ring-[#006b63]/20 transition-all"
      />
    </div>
  )
}
function SelectField({ label, id, options, required }: { label: string; id: string; options: [string, string][]; required?: boolean }) {
  return (
    <div>
      <label htmlFor={id} className="block text-[1.35rem] font-semibold text-gray-700 mb-1.5">
        {label}{required && <span className="text-[#e8533a] ml-1">*</span>}
      </label>
      <select id={id} name={id} required={required} className="w-full border border-gray-300 rounded-xl px-4 py-3 text-[1.5rem] focus:outline-none focus:border-[#006b63] bg-white">
        <option value="">Selecciona...</option>
        {options.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
      </select>
    </div>
  )
}

function NavButtons({ onBack, onNext, nextLabel = 'Siguiente →', loading }: { onBack?: () => void; onNext?: () => void; nextLabel?: string; loading?: boolean }) {
  return (
    <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-100">
      {onBack ? (
        <button type="button" onClick={onBack} className="text-[1.45rem] text-gray-500 hover:text-gray-700 font-semibold transition-colors">← Volver</button>
      ) : <span />}
      {onNext && (
        <button type="button" onClick={onNext} disabled={loading} className="bg-[#e8533a] hover:bg-[#d4442c] disabled:opacity-60 text-white font-bold text-[1.5rem] px-8 py-3.5 rounded-full transition-colors">
          {loading ? 'Redirigiendo…' : nextLabel}
        </button>
      )}
    </div>
  )
}

function Step1({ onNext }: { onNext: () => void }) {
  return (
    <div>
      <h2 className="font-[Martel_Sans] font-bold text-[2.2rem] text-[#07334d] mb-1">Paso 1 — Datos personales</h2>
      <p className="text-gray-500 text-[1.45rem] mb-7">Introduce los datos exactamente como aparecen en el pasaporte.</p>
      <FieldGroup>
        <Field label="Nombre(s)" id="nombre" placeholder="Como en el pasaporte" required />
        <Field label="Apellido(s)" id="apellidos" placeholder="Como en el pasaporte" required />
        <SelectField label="Género" id="genero" required options={[['M','Masculino'],['F','Femenino'],['X','No binario / X']]} />
        <Field label="Fecha de nacimiento" id="fecha_nacimiento" type="date" required />
        <Field label="Ciudad de nacimiento" id="ciudad_nacimiento" required />
        <SelectField label="País de nacimiento" id="pais_nacimiento" required options={VWP_COUNTRIES} />
        <SelectField label="Nacionalidad" id="nacionalidad" required options={VWP_COUNTRIES} />
        <Field label="Email de contacto" id="email" type="email" required placeholder="Para enviarte el ESTA aprobado" />
        <Field label="Teléfono" id="telefono" type="tel" placeholder="+34 600 000 000" />
        <Field label="Dirección" id="direccion" required placeholder="Calle y número" />
        <Field label="Ciudad de residencia" id="ciudad_res" required />
        <Field label="Código postal" id="cp" required />
        <SelectField label="País de residencia" id="pais_residencia" required options={VWP_COUNTRIES} />
      </FieldGroup>
      <NavButtons onNext={onNext} nextLabel="Siguiente: Datos del pasaporte →" />
    </div>
  )
}

function Step2({ qty, onBack, onNext }: { qty: number; onBack: () => void; onNext: () => void }) {
  return (
    <div>
      <h2 className="font-[Martel_Sans] font-bold text-[2.2rem] text-[#07334d] mb-1">Paso 2 — Datos del pasaporte</h2>
      <p className="text-gray-500 text-[1.45rem] mb-7">Asegúrate de que el pasaporte tiene chip electrónico (símbolo 📷).</p>
      {Array.from({ length: qty }, (_, i) => (
        <div key={i} className={i > 0 ? 'mt-8 pt-8 border-t border-gray-100' : ''}>
          {qty > 1 && <div className="font-bold text-[1.5rem] text-[#07334d] mb-4">Viajero {i + 1}</div>}
          <FieldGroup>
            <Field label="Número de pasaporte" id={`pp_num_${i + 1}`} required placeholder="Ej: AAA000000" />
            <SelectField label="País emisor" id={`pp_pais_${i + 1}`} required options={VWP_COUNTRIES} />
            <Field label="Fecha de expedición" id={`pp_exp_${i + 1}`} type="date" required />
            <Field label="Fecha de caducidad" id={`pp_cad_${i + 1}`} type="date" required />
          </FieldGroup>
        </div>
      ))}
      <NavButtons onBack={onBack} onNext={onNext} nextLabel="Siguiente: Información del viaje →" />
    </div>
  )
}

function Step3({ qty, onBack, onNext }: { qty: number; onBack: () => void; onNext: () => void }) {
  return (
    <div>
      <h2 className="font-[Martel_Sans] font-bold text-[2.2rem] text-[#07334d] mb-1">Paso 3 — Información del viaje</h2>
      <p className="text-gray-500 text-[1.45rem] mb-7">Si no sabes el alojamiento exacto, puedes indicar la ciudad o un hotel provisional.</p>
      <FieldGroup>
        <Field label="Dirección de alojamiento en EE.UU." id="alojamiento_dir" placeholder="Calle, número" required />
        <Field label="Ciudad (EE.UU.)" id="alojamiento_ciudad" required />
        <Field label="Estado (EE.UU.)" id="alojamiento_estado" placeholder="Ej: New York, Florida…" required />
        <Field label="Código postal (EE.UU.)" id="alojamiento_cp" placeholder="Ej: 10001" />
        <Field label="Número de vuelo (ida)" id="vuelo_num" placeholder="Ej: IB6251" />
        <Field label="Fecha de llegada a EE.UU." id="fecha_llegada" type="date" />
      </FieldGroup>
      {qty > 1 && (
        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-4 text-[1.4rem] text-blue-700">
          Los datos de viaje son los mismos para todos los viajeros del grupo.
        </div>
      )}
      <NavButtons onBack={onBack} onNext={onNext} nextLabel="Siguiente: Preguntas de elegibilidad →" />
    </div>
  )
}

const ELIG_QUESTIONS = [
  '¿Tienes alguna enfermedad o trastorno físico o mental, eres adicto a drogas o has cometido algún delito penal que pudiera representar un peligro para la propiedad, la seguridad o el bienestar de los Estados Unidos o de sus ciudadanos?',
  '¿Has sido arrestado, acusado, condenado o has cumplido condena en un tribunal penal de cualquier país por algún delito que resultara en daños graves a la propiedad, o serios daños a otras personas?',
  '¿Has infringido o intentado infringir cualquier ley relacionada con sustancias controladas (drogas)?',
  '¿Estás buscando empleo en los Estados Unidos, o has venido a los Estados Unidos anteriormente como trabajador inmigrante?',
  '¿Has viajado a Irak, Siria, Irán, Libia, Corea del Norte, Somalia, Sudán o Yemen desde el 1 de marzo de 2011 o eres ciudadano de alguno de estos países?',
]

function Step4({ onBack, onNext }: { onBack: () => void; onNext: () => void }) {
  return (
    <div>
      <h2 className="font-[Martel_Sans] font-bold text-[2.2rem] text-[#07334d] mb-1">Paso 4 — Preguntas de elegibilidad</h2>
      <p className="text-gray-500 text-[1.45rem] mb-2">Son las mismas preguntas del formulario oficial de la CBP.</p>
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-[1.4rem] text-amber-800 mb-7">
        La mayoría de viajeros españoles responde <strong>No</strong> a todas. Responder <strong>Sí</strong> no implica automáticamente el rechazo.
      </div>
      <div className="space-y-5">
        {ELIG_QUESTIONS.map((q, i) => (
          <div key={i} className="flex gap-4 p-4 bg-gray-50 rounded-xl">
            <div className="text-[#006b63] font-bold text-[1.5rem] flex-shrink-0">{i + 1}.</div>
            <div className="flex-1">
              <p className="text-[1.45rem] text-gray-700 mb-3">{q}</p>
              <div className="flex gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name={`elig_${i}`} value="no" defaultChecked className="accent-[#006b63] w-4 h-4" />
                  <span className="font-semibold text-[1.4rem]">No</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name={`elig_${i}`} value="si" className="accent-[#e8533a] w-4 h-4" />
                  <span className="font-semibold text-[1.4rem] text-[#e8533a]">Sí</span>
                </label>
              </div>
            </div>
          </div>
        ))}
      </div>
      <NavButtons onBack={onBack} onNext={onNext} nextLabel="Siguiente: Confirmación y pago →" />
    </div>
  )
}

function Step5({ plan, qty, loading, onBack, onPay }: {
  plan: typeof PLANS[PlanKey]; qty: number; loading: boolean; onBack: () => void; onPay: () => void
}) {
  return (
    <div>
      <h2 className="font-[Martel_Sans] font-bold text-[2.2rem] text-[#07334d] mb-1">Paso 5 — Confirmación y pago</h2>
      <p className="text-gray-500 text-[1.45rem] mb-7">Revisa el resumen. Serás redirigido a la pasarela segura de Stripe.</p>

      <div className="bg-[#f9fafb] border border-gray-200 rounded-xl p-6 mb-6">
        <div className="flex justify-between items-baseline mb-4">
          <div className="font-[Martel_Sans] font-bold text-[1.7rem] text-[#07334d]">{plan.name} · {qty} viajero{qty > 1 ? 's' : ''}</div>
          <div className="text-gray-500 text-[1.4rem]">hasta {plan.time}</div>
        </div>
        <div className="flex justify-between font-[Martel_Sans] font-black text-[2rem] text-[#07334d] pt-4 border-t border-gray-200">
          <span>Total</span><span>{plan.total * qty}€</span>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-[1.4rem] text-blue-700 mb-6">
        La confirmación y el ESTA aprobado se enviarán al email introducido en el paso 1.
      </div>

      <div className="flex items-center gap-3 text-[1.35rem] text-gray-500 mb-6">
        <svg width="18" height="18" fill="none" stroke="#006b63" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
        Pago procesado de forma segura por Stripe · SSL 256 bits · PCI DSS
      </div>

      <NavButtons onBack={onBack} onNext={onPay} nextLabel="Confirmar y pagar →" loading={loading} />
    </div>
  )
}
