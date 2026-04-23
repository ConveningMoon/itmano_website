'use client'
import { useEffect, useRef } from 'react'
import { Container } from '@/components/ui/Container'

const LOGOS = ['Jana Real Estate', 'Lombok Properties', 'Azul Inversiones', 'Masha Group']

const TESTIMONIALS = [
  {
    text: '"Pasamos de depender 100% de referidos a tener un pipeline constante de prospectos cualificados. El sistema de filtrado fue el mayor cambio estructural que hemos implementado en la agencia."',
    name: 'Ana Martínez',
    role: 'Directora · Jana Real Estate · Miami',
  },
  {
    text: '"En tres meses, el porcentaje de leads que llegaba a reunión con perfil real de compra pasó del 15% al 62%. Ahora invierto mi tiempo donde tiene sentido económico — y se nota en el P&L."',
    name: 'Carlos Ruiz',
    role: 'Broker · Azul Inversiones · Madrid',
  },
]

export function ProofSection() {
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
    <section ref={ref} className="py-24 bg-gray-light max-[600px]:py-16">
      <Container>
        <div className="text-center mb-12 reveal">
          <div className="text-[11px] font-bold tracking-[0.14em] uppercase text-purple mb-[14px]">Resultados reales</div>
          <h2 className="font-bold leading-[1.2] tracking-[-0.01em] mb-4" style={{ fontSize: 'clamp(28px, 3.2vw, 40px)' }}>
            Resultados que no necesitan adjetivos
          </h2>
          <p className="text-[17px] text-gray-text leading-[1.7] max-w-[500px] mx-auto">
            Agentes y firmas que decidieron dejar de improvisar y construir un sistema.
          </p>
        </div>

        {/* Logos */}
        <div className="flex items-center justify-center gap-6 mb-14 flex-wrap reveal">
          {LOGOS.map((logo) => (
            <div
              key={logo}
              className="px-6 py-[14px] bg-white rounded-[10px] border border-gray-mid"
              style={{ boxShadow: 'var(--shadow-card)' }}
            >
              <span className="text-[13px] font-bold text-gray-text tracking-[0.06em] uppercase">{logo}</span>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-2 gap-5 max-[900px]:grid-cols-1">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="reveal bg-white rounded-xl p-[30px] border border-gray-mid relative"
              style={{ boxShadow: 'var(--shadow-card)' }}
            >
              <span
                className="absolute top-[10px] right-5 text-[72px] font-black leading-none select-none pointer-events-none"
                style={{ color: 'rgba(141,78,202,0.10)', fontFamily: 'Georgia, serif' }}
                aria-hidden="true"
              >
                &#x201C;
              </span>
              <p className="text-[15px] text-navy leading-[1.72] mb-[22px] font-medium italic">{t.text}</p>
              <div className="flex items-center gap-3">
                <div
                  className="w-[42px] h-[42px] rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: 'var(--grad-135)' }}
                >
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                    <circle cx="11" cy="7.5" r="4" fill="white" />
                    <path d="M2 21c0-4.97 4.03-9 9-9s9 4.03 9 9" fill="white" />
                  </svg>
                </div>
                <div>
                  <div className="text-[13px] font-bold text-navy mb-0.5">{t.name}</div>
                  <div className="text-[12px] text-gray-text font-medium">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
