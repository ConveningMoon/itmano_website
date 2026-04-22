'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { Container } from '@/components/ui/Container'

const STATS = [
  { num: '+6', label: 'Años en ventas B2B' },
  { num: '3', label: 'Mercados activos' },
  { num: '3', label: 'Idiomas operativos' },
]

export function FounderSection() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    async function init() {
      if (!ref.current) return
      const gsapMod = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      const gsap = gsapMod.gsap
      gsap.registerPlugin(ScrollTrigger)
      ;['.reveal-left', '.reveal-right'].forEach((sel) => {
        ref.current!.querySelectorAll(sel).forEach((el) => {
          gsap.to(el, {
            opacity: 1, x: 0, duration: 0.7, ease: 'power2.out',
            scrollTrigger: { trigger: el, start: 'top 88%' },
          })
        })
      })
    }
    init()
  }, [])

  return (
    <section ref={ref} id="fundador" className="py-24 bg-white max-[600px]:py-16">
      <Container>
        <div className="grid gap-[72px] items-center max-[900px]:grid-cols-1 max-[900px]:gap-12" style={{ gridTemplateColumns: '360px 1fr' }}>
          {/* Photo */}
          <div className="reveal-left relative">
            <Image
              src="/assets/founder-photo.jpg"
              alt="James Dylan — Fundador ITMANO"
              width={360}
              height={480}
              className="w-full rounded-2xl object-cover object-top block max-[900px]:aspect-[3/2]"
              style={{ aspectRatio: '3/4', boxShadow: 'var(--shadow-card-lg)' }}
            />
            <div
              className="absolute -bottom-5 -right-5 bg-white rounded-xl px-5 py-4 max-[900px]:hidden"
              style={{ boxShadow: 'var(--shadow-card-lg)' }}
            >
              <div className="text-[26px] font-black leading-none mb-[3px] gradient-text">3</div>
              <div className="text-[11px] text-gray-text font-medium max-w-[80px] leading-[1.4]">mercados activos</div>
            </div>
          </div>

          {/* Content */}
          <div className="reveal-right">
            <div className="text-[11px] font-bold tracking-[0.14em] uppercase text-purple mb-[14px]">El fundador</div>
            <h2 className="font-black text-navy leading-[1.05] tracking-[-0.025em] mb-2" style={{ fontSize: 'clamp(30px, 3.5vw, 44px)' }}>
              James Dylan
            </h2>
            <div className="text-[13px] font-bold tracking-[0.10em] uppercase text-purple mb-5">Fundador · ITMANO</div>
            <div className="w-10 h-[2px] rounded-sm mb-6" style={{ background: 'var(--grad)' }} aria-hidden="true" />
            <p className="text-[16px] text-gray-text leading-[1.78] mb-4">
              Construí ITMANO porque vi que los mejores agentes del mercado seguían perdiendo oportunidades por un motivo concreto: nadie les había dado el sistema para captarlas con criterio. No el mercado. No la suerte. El sistema.
            </p>
            <p className="text-[16px] text-gray-text leading-[1.78] mb-7">
              Con operaciones en Estados Unidos, España y Emiratos Árabes, trabajamos exclusivamente con profesionales que ya tienen tracción real y quieren escalar con estructura — no con volumen. Si llegas aquí buscando atajos, no somos tu opción.
            </p>

            <div className="flex border border-gray-mid rounded-xl overflow-hidden mb-7 max-[600px]:flex-col">
              {STATS.map((stat, i) => (
                <div
                  key={stat.label}
                  className="flex-1 text-center py-[18px] px-4 max-[600px]:border-b max-[600px]:border-b-gray-mid max-[600px]:last:border-b-0"
                  style={{ borderRight: i < STATS.length - 1 ? '1px solid var(--gray-mid)' : undefined }}
                >
                  <div className="text-[24px] font-black leading-none mb-1 gradient-text">{stat.num}</div>
                  <div className="text-[11px] text-gray-text font-medium leading-[1.4]">{stat.label}</div>
                </div>
              ))}
            </div>

            <a
              href="#cta"
              className="inline-flex items-center justify-center gap-2 px-10 py-[18px] rounded-lg text-white font-bold text-[13px] tracking-[0.08em] uppercase transition-[filter,box-shadow] duration-200 hover:brightness-110"
              style={{ background: 'var(--grad)', boxShadow: 'var(--shadow-btn)' }}
            >
              Habla con James
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}
