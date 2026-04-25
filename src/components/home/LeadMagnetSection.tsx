'use client'
import { useEffect, useRef, useState } from 'react'
import { Container } from '@/components/ui/Container'
import Image from 'next/image'
import { submitToHubSpotDetailed, HUBSPOT_FORMS } from '@/lib/hubspot'

export function LeadMagnetSection() {
  const ref = useRef<HTMLElement>(null)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

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

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')
    const form = e.currentTarget
    const data = new FormData(form)
    const result = await submitToHubSpotDetailed(HUBSPOT_FORMS.leadMagnet, {
	  firstname: data.get('firstname') as string,
      email: data.get('email') as string,
      ads_budget: data.get('ads_budget') as string,
    })
    if (result.ok) {
      setStatus('success')
      return
    }

    setErrorMessage(result.error ?? 'Error al enviar. Intentalo de nuevo.')
    setStatus('error')
  }

  return (
    <section ref={ref} id="recursos" className="py-24 bg-navy max-[600px]:py-16">
      <Container>
        <div className="grid gap-20 items-center max-[900px]:grid-cols-1 max-[900px]:gap-12" style={{ gridTemplateColumns: '1fr 1fr' }}>
          <div className="reveal-left">
			<Image
				src="/assets/Mockup_LeadMagnet_Home_V3.png"
				alt="Mokcoup LeadMagnet Home"
				width={360}
				height={500}
				// className="w-full rounded-2xl object-cover object-top block max-[900px]:aspect-[3/2]"
				style={{ aspectRatio: '3/4', boxShadow: 'var(--shadow-card-lg)' }}
			/>
          </div>

          <div className="reveal-right">
            <div
              className="text-[11px] font-bold tracking-[0.14em] uppercase mb-[10px]"
              style={{ color: 'rgba(94,175,223,0.9)' }}
            >
              Recurso gratuito
            </div>
            <h3
              className="font-extrabold text-white leading-[1.18] tracking-[-0.015em] mb-[14px]"
              style={{ fontSize: 'clamp(22px, 2.4vw, 30px)', textWrap: 'pretty' } as React.CSSProperties}
            >
              ¿Aún no sabes si estás listo? Empieza aquí
            </h3>
            <p
              className="text-[15px] leading-[1.68] mb-7"
              style={{ color: 'rgba(255,255,255,0.50)' }}
            >
              El sistema exacto que usamos para generar 131.989€ en 10 meses sin publicidad. Sin teoría, sin relleno — solo el proceso paso a paso con plantillas listas para que tú mismo lo puedas implementar hoy mismo
            </p>

            {status === 'success' ? (
              <div
                className="rounded-xl p-6 text-center"
                style={{ background: 'rgba(141,78,202,0.12)', border: '1px solid rgba(141,78,202,0.30)' }}
              >
                <div className="text-[28px] mb-2" style={{ color: 'rgba(94,175,223,0.9)' }}>✓</div>
                <p className="font-bold text-white mb-1">¡Revisa tu email!</p>
                <p className="text-[14px]" style={{ color: 'rgba(255,255,255,0.50)' }}>
                  Hemos enviado el recurso a tu bandeja de entrada.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="lm-firstname" className="sr-only">Tu nombre completo</label>
                  <input
                    id="lm-firstname"
                    name="firstname"
                    type="text"
                    placeholder="Tu nombre completo"
                    required
                    className="w-full px-4 py-[14px] rounded-lg font-medium text-[14px] text-white outline-none transition-[border-color,box-shadow] focus:shadow-[0_0_0_3px_rgba(141,78,202,0.20)] placeholder:text-white/30"
                    style={{
                      background: 'rgba(255,255,255,0.06)',
                      border: '1.5px solid rgba(255,255,255,0.12)',
                    }}
                    onFocus={e => (e.currentTarget.style.borderColor = 'rgba(141,78,202,0.70)')}
                    onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)')}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="lm-email" className="sr-only">Tu email profesional</label>
                  <input
                    id="lm-email"
                    name="email"
                    type="email"
                    placeholder="Tu email profesional"
                    required
                    className="w-full px-4 py-[14px] rounded-lg font-medium text-[14px] text-white outline-none transition-[border-color,box-shadow] focus:shadow-[0_0_0_3px_rgba(141,78,202,0.20)] placeholder:text-white/30"
                    style={{
                      background: 'rgba(255,255,255,0.06)',
                      border: '1.5px solid rgba(255,255,255,0.12)',
                    }}
                    onFocus={e => (e.currentTarget.style.borderColor = 'rgba(141,78,202,0.70)')}
                    onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)')}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="lm-ads_budget" className="sr-only">¿Cuánto podrías invertir en ADS al mes? ($)</label>
                  <input
                    id="lm-ads_budget"
                    name="ads_budget"
                    type="text"
                    placeholder="¿Cuánto podrías invertir en ADS al mes? ($)"
					required
                    className="w-full px-4 py-[14px] rounded-lg font-medium text-[14px] text-white outline-none transition-[border-color,box-shadow] focus:shadow-[0_0_0_3px_rgba(141,78,202,0.20)] placeholder:text-white/30"
                    style={{
                      background: 'rgba(255,255,255,0.06)',
                      border: '1.5px solid rgba(255,255,255,0.12)',
                    }}
                    onFocus={e => (e.currentTarget.style.borderColor = 'rgba(141,78,202,0.70)')}
                    onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)')}
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full mt-1 py-4 rounded-lg text-white font-bold text-[13px] tracking-[0.08em] uppercase transition-[filter] duration-200 hover:brightness-110 disabled:opacity-70 btn-cta"
                  style={{ background: 'var(--grad)' }}
                >
                  {status === 'loading' ? 'Enviando...' : 'Descargar gratis'}
                </button>
                {status === 'error' && (
                  <p className="text-[12px] text-red-400 text-center mt-2">{errorMessage}</p>
                )}
                <p
                  className="text-[11px] text-center mt-[10px] leading-[1.5]"
                  style={{ color: 'rgba(255,255,255,0.28)' }}
                >
                  Sin spam. Sin compromisos. Solo el recurso en tu bandeja de entrada.
                </p>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  )
}
