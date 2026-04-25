import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Analytics } from "@vercel/analytics/next"
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.itmano.com'),
  title: {
    default: 'ITMANO — Growth Partner Inmobiliario | Sistema FCI',
    template: '%s | ITMANO',
  },
  description:
    'Growth Partner premium para real estate. Construimos sistemas de captación, filtrado, nurturing y conversión para agentes y firmas inmobiliarias que quieren escalar con método.',
  keywords: [
    'growth partner inmobiliario',
    'leads cualificados real estate',
    'sistema captación inmobiliaria',
    'marketing inmobiliario',
	'marketing bienes raices',
	'ventas real estate',
    'CRM agentes inmobiliarios',
  ],
  authors: [{ name: 'James Dylan', url: 'https://www.itmano.com' }],
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://www.itmano.com',
    siteName: 'ITMANO',
    images: [{ url: '/assets/og-image.jpg', width: 1200, height: 630, alt: 'ITMANO — Growth Partner Inmobiliario' }],
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'ITMANO',
  url: 'https://www.itmano.com',
  logo: 'https://www.itmano.com/assets/logo-wordmark.png',
  description: 'Growth Partner premium especializado en real estate',
  areaServed: ['US', 'ES', 'AE', 'ID'],
  founder: {
    '@type': 'Person',
    name: 'James Dylan',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={montserrat.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
