import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { SpeedInsights } from '@vercel/speed-insights/next'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider defaultTheme="system">
      {/* eslint-disable-next-line react/jsx-props-no-spreading*/}
      <Component {...pageProps} />
      <SpeedInsights />
    </ThemeProvider>
  )
}

export default MyApp
