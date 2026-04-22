'use client'
import { useEffect, useRef } from 'react'
import dynamic from 'next/dynamic'
import { Badge } from '@/components/ui/Badge'
import { Container } from '@/components/ui/Container'

const CalendlyEmbed = dynamic(
  () => import('@/components/integrations/CalendlyEmbed').then((m) => m.CalendlyEmbed),
  {
    ssr: false,
    loading: () => (
      <div
        className="rounded-[10px] border border-dashed border-white/[0.12] h-[220px] flex items-center justify-center flex-col gap-[10px]"
        style={{ background: 'rgba(255,255,255,0.03)' }}
      >
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" opacity={0.25} aria-hidden="true">
          <rect x="3" y="5" width="26" height="24" rx="3" stroke="white" strokeWidth="1.8" />
          <path d="M10 3v4M22 3v4M3 13h26" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
          <rect x="9" y="18" width="4" height="4" rx="1" fill="white" />
          <rect x="14" y="18" width="4" height="4" rx="1" fill="white" />
          <rect x="19" y="18" width="4" height="4" rx="1" fill="white" />
        </svg>
        <span className="text-[13px] text-white/25 font-medium">Cargando calendario...</span>
      </div>
    ),
  },
)

const STEPS = [
  'Elige tu horario',
  'Responde 3 preguntas de calificación',
  'Recibe la confirmación y el acceso',
]

export function CTASection() {
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
    <section ref={ref} id="cta" className="py-24 bg-navy text-center max-[600px]:py-16">
      <Container>
        <div className="reveal mb-7">
          <Badge dark>Sesión Estratégica · Gratuita</Badge>
        </div>

        <h2
          className="reveal font-bold text-white leading-[1.2] tracking-[-0.01em] max-w-[660px] mx-auto mb-4"
          style={{ fontSize: 'clamp(28px, 3.2vw, 40px)' }}
        >
          30 minutos que pueden cambiar la estructura de tu negocio
        </h2>

        <p
          className="reveal text-[17px] leading-[1.7] max-w-[540px] mx-auto mb-[52px]"
          style={{ color: 'rgba(255,255,255,0.48)' }}
        >
          No es una llamada de ventas. Es un diagnóstico real. Analizamos tu captación actual, identificamos exactamente dónde se rompe el pipeline y te mostramos el plan — lo decidas trabajar con nosotros o no.
        </p>

        <div
          className="reveal max-w-[820px] mx-auto mb-8 rounded-[14px] p-[40px_32px]"
          style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.10)' }}
        >
          {/* Steps */}
          <div className="flex gap-0 mb-8 max-[600px]:flex-col max-[600px]:gap-3">
            {STEPS.map((step, i) => (
              <div
                key={step}
                className="flex-1 text-center px-4 relative"
                style={i > 0 ? { borderLeft: '1px solid rgba(255,255,255,0.1)' } : undefined}
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-[13px] font-bold text-white mx-auto mb-[10px]"
                  style={{ background: 'var(--grad)' }}
                >
                  {i + 1}
                </div>
                <div className="text-[12px] font-semibold leading-[1.4]" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  {step}
                </div>
              </div>
            ))}
          </div>

          <CalendlyEmbed />
        </div>

        <p className="reveal text-[13px] font-medium" style={{ color: 'rgba(255,255,255,0.3)' }}>
          Solo para agentes y firmas con operación establecida y $1,000+/mes de inversión publicitaria
        </p>
      </Container>
    </section>
  )
}
