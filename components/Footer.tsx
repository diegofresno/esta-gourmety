import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-[#07334d] text-white mt-20">
      <div className="max-w-[1160px] mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2.5 mb-4">
            <Image src="/logo-icon.png" alt="" width={30} height={30} className="rounded-sm" />
            <span className="font-[Martel_Sans] font-black text-[1.5rem]">
              ESTA USA <span className="font-normal text-white/40 text-[1.3rem]">by Gourmety</span>
            </span>
          </div>
          <p className="text-white/60 text-[1.35rem] leading-relaxed">
            Servicio de tramitación ESTA de Gourmety, agencia especializada en viajes a Estados Unidos y Canadá desde 2010.
          </p>
        </div>

        <div>
          <h4 className="font-[Martel_Sans] font-bold text-[1.45rem] mb-4 text-white">Servicio</h4>
          <div className="flex flex-col gap-2.5">
            <FooterLink href="/que-es-el-esta">Qué es el ESTA</FooterLink>
            <FooterLink href="/como-solicitar-el-esta">Cómo solicitarlo</FooterLink>
            <FooterLink href="/precios">Precios</FooterLink>
            <FooterLink href="/solicitar-esta">Solicitar ESTA</FooterLink>
            <FooterLink href="/verificar-estado-esta">Ver estado solicitud</FooterLink>
          </div>
        </div>

        <div>
          <h4 className="font-[Martel_Sans] font-bold text-[1.45rem] mb-4 text-white">Información</h4>
          <div className="flex flex-col gap-2.5">
            <FooterLink href="/requisitos-esta">Requisitos</FooterLink>
            <FooterLink href="/validez-esta">Validez y renovación</FooterLink>
            <FooterLink href="/paises-visa-waiver">Países VWP</FooterLink>
            <FooterLink href="/faq">Preguntas frecuentes</FooterLink>
            <FooterLink href="/blog">Blog</FooterLink>
          </div>
        </div>

        <div>
          <h4 className="font-[Martel_Sans] font-bold text-[1.45rem] mb-4 text-white">Legal</h4>
          <div className="flex flex-col gap-2.5">
            <FooterLink href="/aviso-legal">Aviso legal</FooterLink>
            <FooterLink href="/privacidad">Política de privacidad</FooterLink>
            <FooterLink href="/condiciones">Condiciones de servicio</FooterLink>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-[1160px] mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-[1.3rem] text-white/40 max-w-2xl">
            <strong className="text-white/40">Aviso importante:</strong> ESTA USA by Gourmety es un servicio privado de asistencia en la tramitación y no está afiliado al Gobierno de los Estados Unidos. Los viajeros pueden solicitar el ESTA directamente y sin coste adicional en{' '}
            <a href="https://esta.cbp.dhs.gov" target="_blank" rel="noopener noreferrer" className="underline text-white/30">esta.cbp.dhs.gov</a>.
          </p>
          <p className="text-white/30 text-[1.3rem] whitespace-nowrap">© 2026 Gourmety</p>
        </div>
      </div>
    </footer>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-white/60 hover:text-white text-[1.35rem] transition-colors">
      {children}
    </Link>
  )
}
