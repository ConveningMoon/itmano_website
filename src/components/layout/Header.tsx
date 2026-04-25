import Image from 'next/image'
import { MobileMenu } from './MobileMenu'

export function Header() {
  return (
    <header
      className="sticky top-0 z-[200] border-b border-white/[0.07]"
      style={{ background: 'rgba(21,36,60,0.96)', backdropFilter: 'blur(14px)' }}
    >
      <div className="max-w-container mx-auto px-6">
        <div className="flex items-center justify-between h-[68px]">
          {/* Logo */}
          <a href="/" aria-label="ITMANO — Inicio">
            <Image
              src="/assets/Logo_Light.png"
              alt="ITMANO"
              width={120}
              height={28}
              className="h-6 w-auto"
              priority
            />
          </a>

          {/* Desktop nav */}
          <nav className="flex items-center gap-7" style={{ display: 'var(--nav-display, flex)' }} aria-label="Navegación principal">
            <a href="#sistema" className="text-[12px] font-semibold text-white/55 no-underline tracking-[0.06em] uppercase hover:text-white/90 transition-colors">
              Sistema FCI
            </a>
            <a href="#fundador" className="text-[12px] font-semibold text-white/55 no-underline tracking-[0.06em] uppercase hover:text-white/90 transition-colors">
              Nosotros
            </a>
            {/* <a href="/recursos" className="text-[12px] font-semibold text-white/55 no-underline tracking-[0.06em] uppercase hover:text-white/90 transition-colors">
              Recursos
            </a> */}
          </nav>

          {/* Desktop CTA */}
          <div className="flex items-center gap-4">
            <a
              href="#cta"
              className="inline-flex items-center justify-center px-[22px] py-[10px] rounded-lg text-white font-bold text-[12px] tracking-[0.08em] uppercase transition-[filter,box-shadow] duration-200 hover:brightness-110 max-[900px]:hidden"
              style={{ background: 'var(--grad)', boxShadow: 'var(--shadow-btn)' }}
            >
              Agenda tu Sesión
            </a>

            {/* Mobile hamburger */}
            <div className="hidden max-[900px]:block">
              <MobileMenu />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          nav[aria-label="Navegación principal"] { display: none !important; }
        }
      `}</style>
    </header>
  )
}
