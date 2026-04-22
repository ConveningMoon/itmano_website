import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#15243C',
        purple: {
          DEFAULT: '#8D4ECA',
          light: 'rgba(141,78,202,0.10)',
          glow: 'rgba(141,78,202,0.18)',
        },
        blue: {
          DEFAULT: '#5EAFDF',
          glow: 'rgba(94,175,223,0.10)',
        },
        gray: {
          light: '#F8F9FC',
          text: '#6B7A99',
          mid: '#E8EBF2',
        },
      },
      fontFamily: {
        sans: ['var(--font-montserrat)', 'Montserrat', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        container: '1100px',
      },
      boxShadow: {
        card: '0 2px 16px rgba(21,36,60,0.08)',
        'card-lg': '0 8px 40px rgba(21,36,60,0.12)',
        btn: '0 4px 20px rgba(94,175,223,0.30)',
        'btn-lg': '0 8px 32px rgba(141,78,202,0.25)',
      },
      letterSpacing: {
        eyebrow: '0.14em',
        badge: '0.10em',
      },
    },
  },
  plugins: [],
}
export default config
