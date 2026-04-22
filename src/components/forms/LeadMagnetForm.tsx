'use client'
import { useState } from 'react'
import { submitToHubSpot, HUBSPOT_FORMS } from '@/lib/hubspot'

export function LeadMagnetForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    const data = new FormData(e.currentTarget)
    const ok = await submitToHubSpot(HUBSPOT_FORMS.leadMagnet, {
      firstname: data.get('firstname') as string,
      email: data.get('email') as string,
      jobtitle: (data.get('jobtitle') as string) ?? '',
    })
    setStatus(ok ? 'success' : 'error')
  }

  if (status === 'success') {
    return (
      <div className="text-center py-6">
        <div className="text-[32px] mb-3">✓</div>
        <p className="font-bold text-navy mb-1">¡Revisa tu email!</p>
        <p className="text-[14px] text-gray-text">Hemos enviado el recurso a tu bandeja de entrada.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div>
        <label htmlFor="lm2-name" className="sr-only">Tu nombre</label>
        <input
          id="lm2-name"
          name="firstname"
          type="text"
          placeholder="Tu nombre"
          required
          className="w-full px-4 py-[14px] rounded-lg border-[1.5px] border-gray-mid font-medium text-[14px] text-navy bg-white outline-none transition-[border-color,box-shadow] focus:border-purple focus:shadow-[0_0_0_3px_rgba(141,78,202,0.10)] placeholder:text-gray-text/55"
        />
      </div>
      <div>
        <label htmlFor="lm2-email" className="sr-only">Tu email profesional</label>
        <input
          id="lm2-email"
          name="email"
          type="email"
          placeholder="Tu email profesional"
          required
          className="w-full px-4 py-[14px] rounded-lg border-[1.5px] border-gray-mid font-medium text-[14px] text-navy bg-white outline-none transition-[border-color,box-shadow] focus:border-purple focus:shadow-[0_0_0_3px_rgba(141,78,202,0.10)] placeholder:text-gray-text/55"
        />
      </div>
      <div>
        <label htmlFor="lm2-role" className="sr-only">¿A qué te dedicas en real estate?</label>
        <input
          id="lm2-role"
          name="jobtitle"
          type="text"
          placeholder="¿A qué te dedicas en real estate?"
          className="w-full px-4 py-[14px] rounded-lg border-[1.5px] border-gray-mid font-medium text-[14px] text-navy bg-white outline-none transition-[border-color,box-shadow] focus:border-purple focus:shadow-[0_0_0_3px_rgba(141,78,202,0.10)] placeholder:text-gray-text/55"
        />
      </div>
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full py-4 rounded-lg text-white font-bold text-[13px] tracking-[0.08em] uppercase transition-[filter,box-shadow] duration-200 hover:brightness-110 disabled:opacity-70"
        style={{ background: 'var(--grad)', boxShadow: 'var(--shadow-btn)' }}
      >
        {status === 'loading' ? 'Enviando...' : 'Descargar gratis'}
      </button>
      {status === 'error' && (
        <p className="text-[12px] text-red-500 text-center">Error al enviar. Inténtalo de nuevo.</p>
      )}
      <p className="text-[11px] text-gray-text text-center leading-[1.5]">
        Sin spam. Sin compromisos. Solo el recurso en tu bandeja de entrada.
      </p>
    </form>
  )
}
