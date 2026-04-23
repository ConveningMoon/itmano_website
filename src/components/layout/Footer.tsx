import Image from 'next/image'

export function Footer() {
  return (
    <footer className="bg-navy border-t border-white/[0.06] py-10">
      <div className="max-w-container mx-auto px-6">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-6 max-[900px]:grid-cols-1 max-[900px]:justify-items-center max-[900px]:gap-3">
          <div>
            <Image
              src="/assets/logo-wordmark.png"
              alt="ITMANO"
              width={100}
              height={24}
              className="h-6 w-auto brightness-0 invert opacity-45"
            />
          </div>
          <div>
            <p className="text-[12px] text-white/[0.22] text-center">
              © 2026 ITMANO Technology Services. Todos los derechos reservados.
            </p>
            <p className="text-[12px] text-white/[0.22] text-center mt-1">
              Growth Partner · Real Estate · US · ES · EAU · ID
            </p>
          </div>
          <div>
            <div className="flex gap-5 justify-end max-[900px]:justify-center">
              <a href="/privacidad" className="text-[12px] text-white/[0.32] no-underline font-medium hover:text-white/70 transition-colors">Privacidad</a>
              <a href="/terminos" className="text-[12px] text-white/[0.32] no-underline font-medium hover:text-white/70 transition-colors">Términos</a>
              <a href="/recursos" className="text-[12px] text-white/[0.32] no-underline font-medium hover:text-white/70 transition-colors">Recursos</a>
              <a href="/newsletter" className="text-[12px] text-white/[0.32] no-underline font-medium hover:text-white/70 transition-colors">Newsletter</a>
            </div>
            <div className="flex gap-3 justify-end mt-2 max-[900px]:justify-center">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[11px] text-white/[0.28] no-underline font-semibold tracking-[0.06em] uppercase hover:text-white/65 transition-colors">LinkedIn</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[11px] text-white/[0.28] no-underline font-semibold tracking-[0.06em] uppercase hover:text-white/65 transition-colors">Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
