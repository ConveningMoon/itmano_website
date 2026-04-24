'use client'
import { useEffect, useRef } from 'react'
import { Badge } from '@/components/ui/Badge'
import { Container } from '@/components/ui/Container'
import dynamic from 'next/dynamic'

const VideoPlayer = dynamic(
  () => import('@/components/integrations/VideoPlayer').then((m) => m.VideoPlayer),
  { ssr: false },
)

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    async function init() {
      if (!heroRef.current) return
      const gsapMod = await import('gsap')
      const gsap = gsapMod.gsap
      const reveals = heroRef.current.querySelectorAll('.reveal')
      gsap.timeline({ delay: 0.2 }).to(reveals, {
        opacity: 1, y: 0, duration: 0.7, stagger: 0.13, ease: 'power2.out',
      })
    }
    init()
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden text-center"
      style={{ background: 'var(--navy)', padding: '50px 0 50px' }}
    >
      {/* Glows */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '-200px', left: '50%', transform: 'translateX(-50%)',
          width: '900px', height: '600px',
          background: 'radial-gradient(ellipse, rgba(141,78,202,0.18) 0%, transparent 65%)',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: '-100px', right: '-80px',
          width: '500px', height: '500px',
          background: 'radial-gradient(ellipse, rgba(94,175,223,0.10) 0%, transparent 65%)',
        }}
        aria-hidden="true"
      />

      <Container className="relative z-10 max-w-[860px]">
        {/* Badge */}
        <div className="mb-7 reveal">
          <Badge>Growth Partner · Solo profesionales con tracción</Badge>
        </div>

        {/* H1 */}
        <h1
          className="reveal text-white font-black leading-[1.05] tracking-[-0.03em] mb-5"
          style={{ fontSize: 'clamp(36px, 5vw, 68px)', textWrap: 'pretty' } as React.CSSProperties}
        >
          El sistema con el que las
          <span className="gradient-text"> firmas inmobiliarias de 7 cifras </span>
          generan 5+ cierres mensuales
        </h1>

        {/* Sub */}
        <p
          className="reveal font-normal text-white/[0.58] leading-[1.72] max-w-[640px] mx-auto mb-11"
          style={{ fontSize: 'clamp(16px, 1.7vw, 19px)' }}
        >
          Construimos sistemas de IA que automatizan captación, filtrado y seguimiento para que solo lleguen a tu agenda conversaciones con intención real de compra o venta
        </p>

        {/* VSL */}
        <div className="reveal max-w-[780px] mx-auto mb-8">
          <VideoPlayer />

          <div className="mt-7">
            <p className="text-[17px] font-bold text-white mb-[6px]">
              Descubre el Sistema FCI en 3 minutos
            </p>
            <p className="text-[14px] text-white/45 mb-7 leading-[1.6]">
              El framework que implementamos con agentes y firmas en US, España, EAU e Indonesia<br className="hidden md:block" />
              para activar workflows de IA y automatizaciones que convierten inversión en pipeline predecible y cualificado
            </p>
            <a
              href="#cta"
              className="inline-flex items-center justify-center gap-2 px-10 py-[18px] rounded-lg text-white font-bold text-[13px] tracking-[0.08em] uppercase transition-[filter] duration-200 hover:brightness-110 btn-cta"
              style={{ background: 'var(--grad)' }}
            >
              Agendar llamada demo gratuita
            </a>
          </div>
        </div>

        {/* Credibility */}
        <div className="reveal flex gap-7 justify-center mt-6 flex-wrap max-[600px]:flex-col max-[600px]:gap-2 max-[600px]:items-center">
          {['US · ES · EAU · ID', 'Sin más anuncios genéricos', 'Solo leads cualificados', 'Sin más seguimiento manual'].map((item) => (
            <div key={item} className="flex items-center gap-[7px] text-[12px] text-white/[0.35] font-semibold tracking-[0.04em]">
              <span className="w-[4px] h-[4px] rounded-full flex-shrink-0" style={{ background: 'var(--blue)', opacity: 0.5 }} aria-hidden="true" />
              {item}
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
