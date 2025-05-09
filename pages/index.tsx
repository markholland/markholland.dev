import Head from 'next/head'
import Image from 'next/image'
import 'tailwindcss/tailwind.css'
import { SocialIcon } from 'react-social-icons'

const title = 'Mark Holland'
const subTitle = 'Software Engineer living in Valencia, Spain.'
const description =
  'Mark Holland is a Software Engineer living in Valencia, Spain.'
const footer = '© Mark Holland 2025'

const avatarSize = 200
const socialIconColor = '#7f7f7f'

declare module 'react' {
  interface MetaHTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    media?: string
  }
}

const Home: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-neutral-200 px-2 dark:bg-neutral-800">
      <Head>
        <title>{title}</title>

        <link href="https://markholland.dev" rel="canonical" />
        {/* Icons */}
        <link href="/favicon.svg" rel="icon" />
        <link href="/apple-touch-icon.png" rel="apple-touch-icon" />
        <link href="/favicon.ico" rel="alternate icon" />
        <link
          href="/favicon-32x32.png"
          rel="icon"
          sizes="32x32"
          type="image/png"
        />
        <link
          href="/favicon-16x16.png"
          rel="icon"
          sizes="16x16"
          type="image/png"
        />
        <link color="#46248f" href="/safari-pinned-tab.svg" rel="mask-icon" />
        <meta content="#ffffff" name="theme-color" />
        <link href="site.webmanifest" rel="manifest" />

        <meta content={description} name="description" />

        {/* Open Graph */}
        <meta content="markholland.dev" property="og:url" />
        <meta content="website" property="og:type" />
        <meta content={title} property="og:title" />
        <meta content={description} property="og:description" />
        <meta
          content="https://markholland.dev/avatar.jpeg"
          property="og:image"
        />

        {/* Twitter */}
        <meta content="summary" name="twitter:card" />
        <meta content="@_markholland" name="twitter:site" />
        <meta content="Mark Holland" name="twitter:title" />
        <meta
          content="https://markholland.dev/avatar.jpeg"
          name="twitter:image"
        />

        {/* Safari 15 */}
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
      </Head>

      <main className="flex flex-1 flex-col items-center justify-center py-20">
        <Image
          alt="Picture of Mark Holland"
          className="rounded-full"
          height={avatarSize}
          loading="eager"
          priority
          src="/avatar.jpeg"
          width={avatarSize}
        />

        <h1 className="mt-8 text-center font-sans text-6xl font-bold leading-tight dark:text-white">
          {title}
        </h1>

        <p className="my-6 text-center text-2xl leading-normal dark:text-white">
          {subTitle}
        </p>

        <div className="flex w-full flex-row justify-center">
          <SocialIcon
            bgColor={socialIconColor}
            className="mx-4"
            url="https://github.com/markholland"
          />
          <SocialIcon
            bgColor={socialIconColor}
            className="mx-4"
            network="bsky.app"
            rel="me"
            url="https://bsky.app/profile/markholland.dev"
          />
          <SocialIcon
            bgColor={socialIconColor}
            className="mx-4"
            url="mailto:mark@markholland.dev"
          />
        </div>
      </main>

      <footer className="flex w-full items-center justify-center border-t border-gray-500 dark:border-gray-300 dark:text-white">
        <p className="p-8">{footer}</p>
      </footer>
    </div>
  )
}

export default Home
