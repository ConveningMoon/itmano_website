'use client'
import { useEffect } from 'react'

const CALENDLY_URL = 'https://calendly.com/dj-vergara54321/plan-personalizado'

export function CalendlyEmbed() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.head.appendChild(script)
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script)
      }
    }
  }, [])

  return (
    <div
      className="calendly-inline-widget"
      data-url={CALENDLY_URL}
      style={{ minWidth: '320px', height: '630px' }}
    />
  )
}
