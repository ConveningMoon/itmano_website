'use client'
import { useEffect, useRef } from 'react'
import { Container } from '@/components/ui/Container'

const NO_ITEMS = [
  'Estás comenzando y todavía no tienes historial de cierres reales',
  'Buscas leads baratos o resultados milagrosos en dos semanas',
  'No cuentas con $500/mes mínimo de inversión en publicidad',
  'Quieres más volumen de contactos sin cambiar nada de tu proceso',
  'No estás dispuesto a hacer algo que nunca hiciste para obtener algo que nunca tuviste',
]

const YES_ITEMS = [
  'Ya tienes operación, tracción y transacciones cerradas en real estate',
  'Puedes invertir mínimo $500/mes en publicidad digital de forma sostenida',
  'Quieres un sistema predecible, no otro proveedor de trucos de marketing',
  'Priorizas la calidad del lead sobre el volumen de contactos',
  'Estás dispuesto a implementar procesos, automatización y disciplina',
]

const CrossIcon = () => (
  <svg className="w-5 h-5 flex-shrink-0 mt-[1px]" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <line x1="5" y1="5" x2="15" y2="15" stroke="#D0D7E8" strokeWidth="1.8" strokeLinecap="round" />
    <line x1="15" y1="5" x2="5" y2="15" stroke="#D0D7E8" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
)

const CheckIcon = ({ id }: { id: string }) => {
  return (
    <svg className="w-5 h-5 flex-shrink-0 mt-[1px]" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="9" fill={`url(#${id})`} />
      <path d="M6.5 10l2.5 2.5 4.5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <defs>
        <linearGradient id={id} x1="1" y1="1" x2="19" y2="19">
          <stop stopColor="#8D4ECA" /><stop offset="1" stopColor="#5EAFDF" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export function FilterSection() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    async function init() {
      if (!ref.current) return
      const gsapMod = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      const gsap = gsapMod.gsap
      gsap.registerPlugin(ScrollTrigger)
      ref.current.querySelectorAll('.reveal').forEach((el) => {
        gsap.to(el, {
          opacity: 1, y: 0, duration: 0.65, ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 88%' },
        })
      })
    }
    init()
  }, [])

  return (
    <section ref={ref} className="py-12 bg-white max-[600px]:py-16">
      <Container>
        <div className="text-center mb-14 reveal">
          <div className="text-[11px] font-bold tracking-[0.14em] uppercase text-purple mb-[14px]">¿Es esto para tí?</div>
          <h2 className="font-bold leading-[1.2] tracking-[-0.01em] mb-4" style={{ fontSize: 'clamp(28px, 3.2vw, 40px)' }}>
            Somos selectivos<br />Cada plan es personalizado
          </h2>
          <p className="text-[17px] text-gray-text leading-[1.7] max-w-[520px] mx-auto">
            Trabajamos con un número limitado de clientes simultáneamente. No por exclusividad artificial — porque trabajamos mano a mano con nuestros clientes en cada paso
          </p>
        </div>

        <div className="grid grid-cols-2 gap-5 max-w-[900px] mx-auto max-[900px]:grid-cols-1">
          {/* No column */}
          <div className="reveal rounded-[14px] p-8 bg-gray-light border border-gray-mid">
            <div className="flex items-center gap-2 text-[11px] font-bold tracking-[0.12em] uppercase text-gray-text mb-5 pb-[14px] border-b border-gray-mid">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <circle cx="8" cy="8" r="7" stroke="#C8CEDC" strokeWidth="1.4" />
                <path d="M5.5 5.5l5 5M10.5 5.5l-5 5" stroke="#C8CEDC" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
              No es para ti si...
            </div>
            {NO_ITEMS.map((item) => (
              <div key={item} className="flex gap-3 items-start py-[9px] border-t border-black/[0.04] first:border-t-0">
                <CrossIcon />
                <span className="text-[14px] leading-[1.58] font-medium text-gray-text">{item}</span>
              </div>
            ))}
          </div>

          {/* Yes column */}
          <div className="reveal rounded-[14px] p-8 bg-navy border border-white/[0.08]">
            <div className="flex items-center gap-2 text-[11px] font-bold tracking-[0.12em] uppercase text-white/40 mb-5 pb-[14px] border-b border-white/[0.08]">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <circle cx="8" cy="8" r="7" fill="url(#fg_label)" />
                <path d="M5 8l2 2 4-4" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                <defs>
                  <linearGradient id="fg_label" x1="1" y1="1" x2="15" y2="15">
                    <stop stopColor="#8D4ECA" /><stop offset="1" stopColor="#5EAFDF" />
                  </linearGradient>
                </defs>
              </svg>
              Es para ti si...
            </div>
            {YES_ITEMS.map((item, index) => (
              <div key={item} className="flex gap-3 items-start py-[9px] border-t border-white/[0.04] first:border-t-0">
                <CheckIcon id={`fg_yes_${index}`} />
                <span className="text-[14px] leading-[1.58] font-medium text-white/80">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
