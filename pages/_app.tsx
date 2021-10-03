import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider defaultTheme="system">
      {/* eslint-disable-next-line react/jsx-props-no-spreading*/}
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
