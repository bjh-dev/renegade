import './globals.css'

import { Metadata } from 'next'
import localFont from 'next/font/local'

const gotham = localFont({
  src: [
    {
      path: '../../public/font/GothamPro-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/font/GothamPro-LightItalic.woff2',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../../public/font/GothamPro-Bold.woff2',
      weight: 'bold',
      style: 'normal',
    },
    {
      path: '../../public/font/GothamPro-Black.woff2',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../../public/font/GothamPro-Italic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../public/font/GothamPro-BoldItalic.woff2',
      weight: 'bold',
      style: 'italic',
    },
    {
      path: '../../public/font/GothamPro.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--gotham',
  display: 'swap',
})

export const metadata: Metadata = {
  generator: 'Next.js',
  applicationName: 'Renegade BJJ Academy | Kensington, Melbourne',
  keywords: [
    'bjj',
    'renegade',
    'kensington',
    'melbourne',
    'mma',
    'renegade mma',
  ],
  authors: [{ name: 'Bryan Hickey', url: 'https://www.bjh.dev/' }],
  creator: 'Bryan Hickey',
  publisher: 'Bryan Hickey',
  themeColor: '#008759',
  manifest: '/manifest.json',
  icons: {
    icon: '/images/favicons/favicon-32x32.png',
    shortcut: '/images/favicons/favicon-32x32.png',
    apple: '/images/favicons/apple-touch-icon.png',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`flex h-screen w-screen flex-col bg-gray-200 ${gotham.variable} font-sans`}
      >
        {children}
      </body>
    </html>
  )
}
