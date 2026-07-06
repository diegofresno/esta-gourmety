import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Pago cancelado — ESTA USA by Gourmety',
  robots: { index: false, follow: false },
}

export default function PagoCancelado() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center py-20 px-6">
      <div className="bg-white border border-gray-200 rounded-2xl p-10 max-w-lg w-full text-center shadow-sm">
        <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg width="32" height="32" fill="none" stroke="#e8533a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </div>
        <h1 className="font-[Martel_Sans] font-black text-[2.8rem] text-[#07334d] mb-4">Pago no completado</h1>
        <p className="text-gray-600 text-[1.6rem] mb-4">Has cancelado el proceso de pago. No se ha realizado ningún cargo.</p>
        <p className="text-gray-400 text-[1.4rem] mb-8">Puedes retomar la solicitud cuando quieras. Si tuviste algún problema, escríbenos.</p>
        <Link href="/solicitar-esta" className="inline-block bg-[#e8533a] hover:bg-[#d4442c] text-white font-bold text-[1.5rem] px-8 py-3.5 rounded-full transition-colors mb-4">
          Reintentar solicitud →
        </Link>
        <br />
        <Link href="/" className="text-gray-400 text-[1.4rem] hover:text-gray-600">← Volver al inicio</Link>
      </div>
    </div>
  )
}
