import Image from 'next/image'
import MobileStoreButton from '../../components/MobileStoreButton'

export const metadata = {
  title: 'Sub Count',
  description: 'iOS app for viewing your YouTube subscriber count',
  openGraph: {
    title: 'Sub Count',
    description:
      'Are you a budding YouTuber who incessantly keeps tabs on their rising subscriber count?',
    url: 'https://markholland.dev/sub-count',
    type: 'website',
    images: [
      {
        url: 'https://markholland.dev/sub-count/sub-count.png',
      },
    ],
  },
  twitter: {
    card: 'app' as const,
    site: '@subcountapp',
    description: 'iOS app for viewing your YouTube subscriber count',
    app: {
      name: {
        iphone: 'Sub Count',
      },
      id: {
        iphone: '977966794',
      },
      country: 'US',
    },
  },
  icons: {
    icon: [
      { url: '/sub-count/sub-count-icon.svg' },
      { url: '/sub-count/sub-count-favicon.ico', rel: 'alternate icon' },
      {
        url: '/sub-count/sub-count-favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/sub-count/sub-count-favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
    ],
    apple: '/sub-count/sub-count-apple-touch-icon.png',
    other: [
      {
        rel: 'mask-icon',
        url: '/sub-count/sub-count-mask-icon.svg',
        color: '#b82927',
      },
    ],
  },
  manifest: '/sub-count/sub-count-site.webmanifest',
}

export default function SubCount() {
  const description =
    'Are you a budding YouTuber who incessantly keeps tabs on their rising subscriber count?'
  const footer = '© Mark Holland 2025'

  return (
    <div className="flex min-h-screen flex-col justify-between">
      <main className="m-8 flex flex-1 flex-col justify-between">
        <div className="flex flex-1 flex-row flex-wrap items-center justify-center">
          <div className="xsm:items-end xsm:text-right flex flex-col items-center justify-center text-center">
            <Image
              alt="Sub Count app logo"
              className="rounded-lg"
              height={90}
              loading="eager"
              priority
              src="/sub-count/sub-count.png"
              width={90}
            />
            <p className="my-4 max-w-xs">{description}</p>
            <div>
              <MobileStoreButton
                height={40}
                url="https://itunes.apple.com/us/app/sub-count/id977966794"
                width={130}
              />
            </div>
          </div>
          <div className="mx-2 flex-col justify-center">
            <Image
              alt="Screenshot of Sub Count app"
              height={600}
              loading="eager"
              priority
              src="/sub-count/sub-count-screen.png"
              width={300}
            />
          </div>
        </div>
      </main>
      <footer className="flex w-full items-center justify-center border-t border-gray-300">
        <p className="p-8">{footer}</p>
      </footer>
    </div>
  )
}
