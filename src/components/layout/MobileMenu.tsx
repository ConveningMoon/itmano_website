'use client'
import { useState } from 'react'
import { X, Menu } from 'lucide-react'

export function MobileMenu() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Abrir menú"
        className="text-white/70 hover:text-white transition-colors"
      >
        <Menu size={22} aria-hidden="true" />
      </button>

      {open && (
        <div className="fixed inset-0 z-[300] flex flex-col bg-navy/[0.98] backdrop-blur-md">
          <div className="flex items-center justify-between h-[68px] px-6 border-b border-white/[0.07]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/logo-wordmark.png" alt="ITMANO" className="h-7 w-auto brightness-0 invert opacity-90" width={120} height={28} />
            <button
              onClick={() => setOpen(false)}
              aria-label="Cerrar menú"
              className="text-white/70 hover:text-white transition-colors"
            >
              <X size={22} aria-hidden="true" />
            </button>
          </div>
          <nav className="flex flex-col gap-1 px-6 py-8">
            {[
              { href: '#sistema', label: 'Sistema FCI' },
              { href: '#fundador', label: 'Nosotros' },
              { href: '/recursos', label: 'Recursos' },
              { href: '/newsletter', label: 'Newsletter' },
            ].map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="py-3 text-sm font-semibold text-white/60 hover:text-white border-b border-white/[0.06] uppercase tracking-[0.06em] transition-colors"
              >
                {label}
              </a>
            ))}
          </nav>
          <div className="px-6 mt-auto pb-10">
            <a
              href="#cta"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center w-full py-[18px] px-10 rounded-lg text-white font-bold text-[13px] tracking-[0.08em] uppercase"
              style={{ background: 'var(--grad)', boxShadow: 'var(--shadow-btn)' }}
            >
              Agenda tu Sesión
            </a>
          </div>
        </div>
      )}
    </>
  )
}
