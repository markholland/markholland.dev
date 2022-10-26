import Head from 'next/head';
import Image from 'next/image';
import MobileStoreButton from 'react-mobile-store-button';

import 'tailwindcss/tailwind.css';

const SubCount: React.FC = () => {
  const title = 'sub count';
  const metaDescription = 'iOS app for viewing your YouTube subscriber count';

  const description =
    'Are you a budding YouTuber who incessantly keeps tabs on their rising subscriber count?';
  const footer = '© Mark Holland 2022';

  return (
    <div className="flex min-h-screen flex-col justify-between ">
      <Head>
        <title>{title}</title>

        <link href="https://markholland.dev/sub-count" rel="canonical" />
        {/* Icons */}
        <link href="/sub-count/sub-count-icon.svg" rel="icon" />
        <link
          href="/sub-count/sub-count-apple-touch-icon.png"
          rel="apple-touch-icon"
        />
        <link href="/sub-count/sub-count-favicon.ico" rel="alternate icon" />
        <link
          href="/sub-count/sub-count-favicon-32x32.png"
          rel="icon"
          sizes="32x32"
          type="image/png"
        />
        <link
          href="/sub-count/sub-count-favicon-16x16.png"
          rel="icon"
          sizes="16x16"
          type="image/png"
        />
        <link
          color="#b82927"
          href="/sub-count/sub-count-mask-icon.svg"
          rel="mask-icon"
        />
        <meta content="#ffffff" name="theme-color" />
        <link href="/sub-count/sub-count-site.webmanifest" rel="manifest" />

        <meta content={metaDescription} name="description" />

        {/* Open Graph */}
        <meta content="markholland.dev/sub-count" property="og:url" />
        <meta content="website" property="og:type" />
        <meta content={title} property="og:title" />
        <meta content={description} property="og:description" />
        <meta
          content="https://markholland.dev/sub-count/sub-count.png"
          property="og:image"
        />

        {/* Twitter */}
        <meta content="app" name="twitter:card" />
        <meta content="@subcountapp" name="twitter:site" />
        <meta content={metaDescription} name="twitter:description" />
        <meta content="US" name="twitter:app:country" />
        <meta content={title} name="twitter:app:name:iphone" />
        <meta content="977966794" name="twitter:app:id:iphone" />
      </Head>

      <main className="m-8 flex flex-1 flex-col justify-between">
        <div className="flex flex-1 flex-row flex-wrap items-center justify-center">
          <div className="xsm:items-end xsm:text-right flex flex-col items-center justify-center text-center">
            <Image
              alt="sub count app logo"
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
                linkProps={{ title: 'iOS Store Button' }}
                store="ios"
                url="https://itunes.apple.com/us/app/sub-count/id977966794"
                width={130}
              />
            </div>
          </div>
          <div className="mx-2 flex-col justify-center">
            <Image
              alt="Screenshot of sub count app"
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
  );
};

export default SubCount;
