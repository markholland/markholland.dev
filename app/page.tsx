import Image from 'next/image'
import { SocialIcon } from 'react-social-icons'

const title = 'Mark Holland'
const subTitle = 'Software Engineer living in Valencia, Spain.'
const footer = '© Mark Holland 2025'

const avatarSize = 200
const socialIconColor = '#7f7f7f'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-neutral-200 px-2 dark:bg-neutral-800">
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
