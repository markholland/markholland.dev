import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider defaultTheme="system">
      <Component {...pageProps} />
      <Analytics />
      <SpeedInsights />
    </ThemeProvider>
  )
}

export default MyApp
