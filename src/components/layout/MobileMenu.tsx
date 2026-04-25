'use client'
import { useState } from 'react'
import { X, Menu } from 'lucide-react'

export function MobileMenu() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setOpen((prev) => !prev)}
        aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        className="text-white/70 hover:text-white transition-colors duration-200"
      >
        <span className="relative block h-[22px] w-[22px]">
          <Menu
            size={22}
            aria-hidden="true"
            className={`absolute inset-0 transition-all duration-300 ease-out ${open ? 'opacity-0 scale-75 rotate-90' : 'opacity-100 scale-100 rotate-0'}`}
			style={{color: 'white'}}
          />
          <X
            size={22}
            aria-hidden="true"
            className={`absolute inset-0 transition-all duration-300 ease-out ${open ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-75 -rotate-90'}`}
			style={{color: 'white'}}
		  />
        </span>
      </button>

      <div
        id="mobile-navigation"
        className={`fixed inset-x-0 top-[68px] z-[190] backdrop-blur-[14px] transition-all duration-300 ease-out ${
          open ? 'pointer-events-auto opacity-100 translate-y-0' : 'pointer-events-none opacity-0 -translate-y-2'
        }`}
		style={{background:'rgba(21,36,60,0.96)'}}
      >
        <div
          className="mx-auto flex h-full max-w-container flex-col border-t border-white/[0.07] px-6"
        >
          <nav className="flex flex-col gap-1 py-8">
            {[
              { href: '#sistema', label: 'Sistema FCI' },
              { href: '#fundador', label: 'Nosotros' },
            //   { href: '/recursos', label: 'Recursos' },
            //   { href: '/newsletter', label: 'Newsletter' },
            ].map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="py-3 text-sm font-semibold text-white hover:text-white/85 border-b border-white/[0.06] uppercase tracking-[0.06em] transition-colors duration-200"
              >
                {label}
              </a>
            ))}
          </nav>
          <div className="mt-auto pb-10">
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
      </div>
    </>
  )
}
