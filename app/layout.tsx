import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mark Holland',
  description: 'Mark Holland is a Software Engineer living in Valencia, Spain.',
  openGraph: {
    title: 'Mark Holland',
    description:
      'Mark Holland is a Software Engineer living in Valencia, Spain.',
    url: 'https://markholland.dev',
    type: 'website',
    images: [
      {
        url: 'https://markholland.dev/avatar.jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary',
    site: '@_markholland',
    title: 'Mark Holland',
    images: ['https://markholland.dev/avatar.jpeg'],
  },
  icons: {
    icon: [
      { url: '/favicon.svg' },
      { url: '/favicon.ico', rel: 'alternate icon' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#46248f',
      },
    ],
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-GB" suppressHydrationWarning>
      <head>
        <meta
          content="#f2f3f5"
          media="(prefers-color-scheme: light)"
          name="theme-color"
        />
        <meta
          content="#262626"
          media="(prefers-color-scheme: dark)"
          name="theme-color"
        />
      </head>
      <body>
        <ThemeProvider defaultTheme="system">
          {children}
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  )
}
