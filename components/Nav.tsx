'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-[#07334d] shadow-md">
      <div className="max-w-[1160px] mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 no-underline">
          <Image src="/logo-icon.png" alt="" width={32} height={32} className="rounded-sm" />
          <span className="font-[Martel_Sans] font-black text-white text-[1.6rem] leading-none">
            ESTA USA <span className="font-normal text-white/50 text-[1.4rem]">by Gourmety</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          <NavDropdown label="Información">
            <DropItem href="/que-es-el-esta">Qué es el ESTA</DropItem>
            <DropItem href="/como-solicitar-el-esta">Cómo solicitarlo</DropItem>
            <DropItem href="/requisitos-esta">Requisitos</DropItem>
            <DropItem href="/validez-esta">Validez y renovación</DropItem>
            <DropItem href="/paises-visa-waiver">Países VWP</DropItem>
          </NavDropdown>
          <NavLink href="/precios">Precios</NavLink>
          <NavLink href="/verificar-estado-esta">Verificar estado</NavLink>
          <NavLink href="/faq">FAQ</NavLink>
          <NavLink href="/blog">Blog</NavLink>
          <Link
            href="/solicitar-esta"
            className="ml-2 bg-[#e8533a] hover:bg-[#d4442c] text-white font-bold text-[1.45rem] px-5 py-2.5 rounded-full transition-colors"
          >
            Tramitar mi ESTA
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            {open ? (
              <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
            ) : (
              <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#072d44] border-t border-white/10 px-6 py-4 flex flex-col gap-3">
          <MobileLink href="/que-es-el-esta" onClick={() => setOpen(false)}>Qué es el ESTA</MobileLink>
          <MobileLink href="/como-solicitar-el-esta" onClick={() => setOpen(false)}>Cómo solicitarlo</MobileLink>
          <MobileLink href="/requisitos-esta" onClick={() => setOpen(false)}>Requisitos</MobileLink>
          <MobileLink href="/precios" onClick={() => setOpen(false)}>Precios</MobileLink>
          <MobileLink href="/verificar-estado-esta" onClick={() => setOpen(false)}>Verificar estado</MobileLink>
          <MobileLink href="/faq" onClick={() => setOpen(false)}>FAQ</MobileLink>
          <MobileLink href="/blog" onClick={() => setOpen(false)}>Blog</MobileLink>
          <Link
            href="/solicitar-esta"
            onClick={() => setOpen(false)}
            className="mt-2 bg-[#e8533a] text-white font-bold text-[1.45rem] px-5 py-3 rounded-full text-center"
          >
            Tramitar mi ESTA →
          </Link>
        </div>
      )}
    </header>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-white/80 hover:text-white text-[1.45rem] font-semibold transition-colors">
      {children}
    </Link>
  )
}

function NavDropdown({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="relative group">
      <button className="text-white/80 hover:text-white text-[1.45rem] font-semibold transition-colors flex items-center gap-1">
        {label}
        <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="4 6 8 10 12 6"/>
        </svg>
      </button>
      <div className="absolute top-full left-0 pt-2 hidden group-hover:block">
        <div className="bg-white border border-gray-200 rounded-xl shadow-xl py-2 min-w-[220px]">
          {children}
        </div>
      </div>
    </div>
  )
}

function DropItem({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="block px-4 py-2.5 text-[1.4rem] text-gray-700 hover:bg-gray-50 hover:text-[#006b63] transition-colors">
      {children}
    </Link>
  )
}

function MobileLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void }) {
  return (
    <Link href={href} onClick={onClick} className="text-white/80 text-[1.5rem] font-semibold py-1 border-b border-white/10">
      {children}
    </Link>
  )
}
