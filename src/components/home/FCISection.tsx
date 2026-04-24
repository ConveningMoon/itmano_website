'use client'
import { useEffect, useRef } from 'react'
import { Container } from '@/components/ui/Container'

const PHASES = [
  {
    num: 'Fase 01',
    title: 'Atracción con Intención',
    body: 'No anunciamos para todos. Construimos campañas diseñadas para interceptar exactamente al comprador con presupuesto, timeline y motivación real. Cada euro de tu inversión trabaja con criterio — no con esperanza.',
    tags: ['Meta Ads', 'Segmentación ICP', 'Posicionamiento SEO', 'Chatbots', 'Marca Personal'],
  },
  {
    num: 'Fase 02',
    title: 'Filtrado Automático',
    body: 'El 90% de los leads se descalifican antes de tocar tu agenda. Cuestionarios de entrada, scoring automático y barreras de calificación hacen el trabajo que antes hacías tú — sin descanso, sin errores, sin gastos absurdos.',
    tags: ['Scoring automático', 'Formularios de entrada', 'Automatización de procesos'],
  },
  {
    num: 'Fase 03',
    title: 'Nurturing con IA',
    body: 'Un lead que no está listo hoy puede estar listo en 90 días. Activamos workflows de IA que personalizan el seguimiento por etapa, canal y comportamiento para mantener cada oportunidad viva sin trabajo operativo manual.',
    tags: ['IA conversacional', 'Workflows automatizados', 'WhatsApp automation', 'Email marketing'],
  },
  {
    num: 'Fase 04',
    title: 'Pipeline Predecible',
    body: 'Cuando los pilares y las automatizaciones trabajan juntos, el resultado es matemático. Más reuniones con perfil real, menos fricción operativa y un proceso comercial que escala sin depender de improvisación humana.',
    tags: ['Demo call 15–20 min', 'Propuesta estructurada', 'Leads cualificados', 'Seguimiento automático'],
  },
]

export function FCISection() {
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
    <section ref={ref} id="sistema" className="py-12 bg-navy max-[600px]:py-16">
      <Container>
        <div className="text-center mb-16 reveal">
          <div className="text-[11px] font-bold tracking-[0.14em] uppercase mb-[14px]" style={{ color: 'rgba(94,175,223,0.9)' }}>
            Sistema Inmobiliario de nueva generación
          </div>
          <h2 className="font-bold leading-[1.2] tracking-[-0.01em] mb-4 text-white" style={{ fontSize: 'clamp(28px, 3.2vw, 40px)' }}>
            El Sistema FCI no genera leads<br />
            <span className="gradient-text">Genera clientes, seguridad, crecimiento y predictibilidad</span>
          </h2>
          <p className="text-[17px] leading-[1.7] max-w-[580px] mx-auto" style={{ color: 'rgba(255,255,255,0.5)' }}>
            Cuatro fases conectadas por IA, workflows y automatizaciones que convierten tu inversión publicitaria en pipeline real — sin volumen inútil, sin seguimiento manual y sin depender de quién te escriba esta semana o del ánimo del mercado
          </p>
        </div>

        <div className="grid grid-cols-2 gap-5 mb-[52px] max-[900px]:grid-cols-1 reveal">
          {PHASES.map((phase) => (
            <div
              key={phase.num}
              className="rounded-xl p-[30px] border transition-[background,border-color] duration-[250ms] hover:border-purple/35"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <div className="text-[10px] font-bold tracking-[0.14em] uppercase gradient-text mb-3">{phase.num}</div>
              <h3 className="text-[18px] font-bold text-white leading-[1.25] mb-[10px]">{phase.title}</h3>
              <p className="text-[14px] leading-[1.7] mb-4" style={{ color: 'rgba(255,255,255,0.52)' }}>{phase.body}</p>
              <div className="flex flex-wrap gap-[6px]">
                {phase.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-semibold tracking-[0.08em] uppercase px-[10px] py-1 rounded-full"
                    style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.45)' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center reveal">
          <a
            href="#cta"
            className="inline-flex items-center justify-center gap-2 px-10 py-[18px] rounded-lg text-white font-bold text-[13px] tracking-[0.08em] uppercase transition-[filter] duration-200 hover:brightness-110 btn-cta"
            style={{ background: 'var(--grad)' }}
          >
            Click aquí para aplicarlo a tu negocio
          </a>
        </div>
      </Container>
    </section>
  )
}
