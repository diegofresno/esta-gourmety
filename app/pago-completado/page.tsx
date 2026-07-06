import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Pago completado — ESTA USA by Gourmety',
  robots: { index: false, follow: false },
}

export default function PagoCompletado() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center py-20 px-6">
      <div className="bg-white border border-gray-200 rounded-2xl p-10 max-w-lg w-full text-center shadow-sm">
        <div className="w-16 h-16 bg-[#006b63]/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg width="32" height="32" fill="none" stroke="#006b63" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
        </div>
        <h1 className="font-[Martel_Sans] font-black text-[2.8rem] text-[#07334d] mb-4">¡Pago completado!</h1>
        <p className="text-gray-600 text-[1.6rem] mb-4 leading-relaxed">
          Tu solicitud de ESTA ha sido recibida. Recibirás un email de confirmación en los próximos minutos.
        </p>
        <div className="bg-[#f9fafb] rounded-xl p-5 text-left mb-8">
          <h3 className="font-bold text-[1.45rem] text-[#07334d] mb-3">¿Qué ocurre ahora?</h3>
          {[
            'Nuestro equipo revisa tus datos según el plan elegido.',
            'Enviamos tu solicitud al sistema oficial de la CBP.',
            'Te enviamos el ESTA aprobado por email en cuanto lo recibamos.',
          ].map((s, i) => (
            <div key={i} className="flex gap-3 items-start mb-2.5 last:mb-0 text-[1.4rem] text-gray-600">
              <span className="bg-[#006b63] text-white w-6 h-6 rounded-full flex items-center justify-center text-[1.1rem] font-bold flex-shrink-0 mt-0.5">{i + 1}</span>
              <span>{s}</span>
            </div>
          ))}
        </div>
        <Link href="/" className="text-[#006b63] font-bold text-[1.5rem] hover:underline">← Volver al inicio</Link>
      </div>
    </div>
  )
}
