'use client'
import { useState } from 'react'
import { submitToHubSpot, HUBSPOT_FORMS } from '@/lib/hubspot'

export function NewsletterForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    const data = new FormData(e.currentTarget)
    const ok = await submitToHubSpot(HUBSPOT_FORMS.newsletter, {
      email: data.get('email') as string,
    })
    setStatus(ok ? 'success' : 'error')
  }

  if (status === 'success') {
    return (
      <p className="text-[14px] font-semibold" style={{ color: 'rgba(94,175,223,0.9)' }}>
        ✓ Suscrito. Te llegará el próximo número.
      </p>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-3 flex-wrap">
      <label htmlFor="nl-email" className="sr-only">Tu email</label>
      <input
        id="nl-email"
        name="email"
        type="email"
        placeholder="Tu email profesional"
        required
        className="flex-1 min-w-[220px] px-4 py-3 rounded-lg border-[1.5px] border-white/20 bg-white/10 text-white placeholder:text-white/40 text-[14px] font-medium outline-none focus:border-white/50 transition-colors"
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="px-6 py-3 rounded-lg text-white font-bold text-[12px] tracking-[0.08em] uppercase transition-[filter] duration-200 hover:brightness-110 disabled:opacity-70"
        style={{ background: 'var(--grad)', boxShadow: 'var(--shadow-btn)' }}
      >
        {status === 'loading' ? 'Enviando...' : 'Suscribirme'}
      </button>
      {status === 'error' && (
        <p className="w-full text-[12px] text-red-400">Error al enviar. Inténtalo de nuevo.</p>
      )}
    </form>
  )
}
