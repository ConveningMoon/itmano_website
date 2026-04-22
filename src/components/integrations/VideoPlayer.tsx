'use client'
import { useState } from 'react'

const VIDEO_URL = process.env.NEXT_PUBLIC_VIDEO_URL ?? ''

export function VideoPlayer() {
  const [playing, setPlaying] = useState(false)

  return (
    <div
      className="relative rounded-[14px] overflow-hidden border border-white/10 cursor-pointer"
      style={{
        aspectRatio: '16/9',
        background: 'rgba(255,255,255,0.03)',
        boxShadow: '0 24px 80px rgba(0,0,0,0.35)',
      }}
      onClick={() => !playing && setPlaying(true)}
    >
      {!playing ? (
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-4"
          style={{ background: 'linear-gradient(145deg, rgba(21,36,60,0.88) 0%, rgba(14,20,42,0.72) 100%)' }}
        >
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center transition-[transform,box-shadow] duration-[250ms] hover:scale-110"
            style={{
              background: 'var(--grad)',
              boxShadow: '0 0 56px rgba(141,78,202,0.55)',
            }}
          >
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden="true">
              <path d="M11 7.5L23 15L11 22.5V7.5Z" fill="white" />
            </svg>
          </div>
          <span className="text-[13px] text-white/40 font-medium tracking-[0.05em]">Presentación del Sistema FCI</span>
          <span
            className="inline-flex items-center gap-[6px] text-[11px] text-white/30 font-bold rounded-full px-3 py-1 tracking-[0.08em] uppercase"
            style={{ background: 'rgba(255,255,255,0.05)' }}
          >
            <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <circle cx="6" cy="6" r="5" stroke="rgba(255,255,255,0.35)" strokeWidth="1.2" />
              <path d="M6 3.5V6L7.5 7.5" stroke="rgba(255,255,255,0.35)" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
            12 minutos
          </span>
        </div>
      ) : VIDEO_URL ? (
        <iframe
          src={VIDEO_URL}
          className="absolute inset-0 w-full h-full"
          allow="autoplay; fullscreen"
          allowFullScreen
          title="Presentación del Sistema FCI"
        />
      ) : (
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ background: 'rgba(21,36,60,0.9)' }}
        >
          <p className="text-white/40 text-sm">
            Configura NEXT_PUBLIC_VIDEO_URL para activar el video.
          </p>
        </div>
      )}
    </div>
  )
}
