import H from '../../../components/Header'
import P from '../../../components/Paragraph'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for sub count iOS app',
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

export default function PrivacyPolicy() {
  return (
    <div>
      <main className="m-8">
        <h1 className="my-4 font-sans text-4xl font-bold leading-tight">
          Sub Count
        </h1>
        <h2 className="my-4 font-sans text-2xl font-bold leading-tight">
          Privacy Policy
        </h2>
        <P>
          Mark Holland built the Sub Count app as a Free app. This SERVICE is
          provided by Mark Holland at no cost and is intended for use as is.
        </P>
        <P>
          This page is used to inform visitors regarding my policies with the
          collection, use, and disclosure of Personal Information if anyone
          decided to use my Service.
        </P>
        <P>
          If you choose to use my Service, then you agree to the collection and
          use of information in relation to this policy. The Personal
          Information that I collect is used for providing and improving the
          Service. I will not use or share your information with anyone except
          as described in this Privacy Policy.
        </P>
        <P>
          The terms used in this Privacy Policy have the same meanings as in our
          Terms and Conditions, which is accessible at Sub Count unless
          otherwise defined in this Privacy Policy.
        </P>
        <H>Information Collection and Use</H>
        <P>
          For a better experience, while using our Service, I may require you to
          provide us with certain personally identifiable information. The
          information that I request will be retained on your device and is not
          collected by me in any way.
        </P>
        <P>
          The app does use third party services that may collect information
          used to identify you.
        </P>
        <P>
          Link to privacy policy of third party service providers used by the
          app
        </P>
        <H>Log Data</H>
        <P>
          I want to inform you that whenever you use my Service, in a case of an
          error in the app I collect data and information (through third party
          products) on your phone called Log Data. This Log Data may include
          information such as your device Internet Protocol (“IP”) address,
          device name, operating system version, the configuration of the app
          when utilizing my Service, the time and date of your use of the
          Service, and other statistics.
        </P>
        <H>Cookies</H>
        <P>
          Cookies are files with a small amount of data that are commonly used
          as anonymous unique identifiers. These are sent to your browser from
          the websites that you visit and are stored on your device&apos;s
          internal memory.
        </P>
        <P>
          This Service does not use these “cookies” explicitly. However, the app
          may use third party code and libraries that use “cookies” to collect
          information and improve their services. You have the option to either
          accept or refuse these cookies and know when a cookie is being sent to
          your device. If you choose to refuse our cookies, you may not be able
          to use some portions of this Service.
        </P>
        <H>Service Providers</H>
        <P>
          I may employ third-party companies and individuals due to the
          following reasons:
        </P>
        <ul className="ml-8 list-disc">
          <li>To facilitate our Service;</li>{' '}
          <li>To provide the Service on our behalf;</li>
          <li>To perform Service-related services; or</li>
          <li>To assist us in analyzing how our Service is used.</li>
        </ul>
        <P>
          I want to inform users of this Service that these third parties have
          access to your Personal Information. The reason is to perform the
          tasks assigned to them on our behalf. However, they are obligated not
          to disclose or use the information for any other purpose.
        </P>
        <H>Security</H>
        <P>
          I value your trust in providing us your Personal Information, thus we
          are striving to use commercially acceptable means of protecting it.
          But remember that no method of transmission over the internet, or
          method of electronic storage is 100% secure and reliable, and I cannot
          guarantee its absolute security.
        </P>
        <H>Links to Other Sites</H>
        <P>
          This Service may contain links to other sites. If you click on a
          third-party link, you will be directed to that site. Note that these
          external sites are not operated by me. Therefore, I strongly advise
          you to review the Privacy Policy of these websites. I have no control
          over and assume no responsibility for the content, privacy policies,
          or practices of any third-party sites or services.
        </P>
        <H>Children’s Privacy</H>
        <P>
          These Services do not address anyone under the age of 13. I do not
          knowingly collect personally identifiable information from children
          under 13. In the case I discover that a child under 13 has provided me
          with personal information, I immediately delete this from our servers.
          If you are a parent or guardian and you are aware that your child has
          provided us with personal information, please contact me so that I
          will be able to do necessary actions.
        </P>
        <H>YouTube API Services</H>
        <P>
          This service uses YouTube API Services and you are agreeing to be
          bound by the YouTube Terms of Service.
        </P>
        <ul className="mx-8 list-disc">
          <li className="my-2">
            <a
              className="underline"
              href="https://www.youtube.com/t/terms"
              rel="noreferrer"
              target="_blank"
            >
              YouTube Terms of Service
            </a>
          </li>
          <li>
            <a
              className="underline"
              href="https://policies.google.com/privacy"
              rel="noreferrer"
              target="_blank"
            >
              Google privacy policy
            </a>
          </li>
        </ul>
        <H>Changes to This Privacy Policy</H>
        <P>
          I may update our Privacy Policy from time to time. Thus, you are
          advised to review this page periodically for any changes. I will
          notify you of any changes by posting the new Privacy Policy on this
          page. These changes are effective immediately after they are posted on
          this page.
        </P>
        <H>Contact Us</H>
        <P>
          If you have any questions or suggestions about my Privacy Policy, do
          not hesitate to contact me.
        </P>
      </main>
    </div>
  )
}
