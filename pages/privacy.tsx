import Head from 'next/head'
import { NextSeo } from 'next-seo'

import dynamic from 'next/dynamic'
const Header = dynamic(() => import('@/components/header'))

export default function privacy () {
  return (
    <>
      <NextSeo
        title="Privacy - doamatto"
        description="Your privacy is just as important (if not more) than my privacy. Here's how I protect yours."
      />
      <Head>
        <title>Privacy - doamatto</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header title="Privacy Policy" />
      <div className="antialised prose prose-sm sm:prose lg:prose-lg   mx-auto dark:prose-dark">
        <p>
            Your privacy is just as important (if not more) than my privacy. For that reason, I make it a commitment to ensure my site isn&apos;t privacy-friendly, but private-by-default.
        </p>
        <h3>What data is collected?</h3>
              <p> I collect the following information via a self-hosted Plausible Analytics server: </p>
              <ul>
                <li>
                  <b>Page URL</b>
                  - I use this to see how many times a page has been viewed
                </li>
                <li>
                  <b>HTTP referer</b>
                  - I use this to see how many people are coming from certain websites
                </li>
                <li>
                  <b>Browser</b>
                  - I use this to see what browsers and browser versions are being used
                </li>
                <li>
                  <b>Operating system</b>
                  - I use this to see what operating systems are being used
                </li>
                <li>
                  <b>Device type</b>
                  - I use this to see what kinds of devices are being used (desktop, laptop, mobile)
                </li>
                <li>
                  <b>Vistor country</b>
                  - I use this to get a general idea of where users are from. This is found using the visitor's IP address, which is only used to find said country and then is discarded. It is never stored in our database or logs.
                </li>
              </ul>
              <p>None of this data can be linked back to you by me.</p>
        <h3>Why is this data collected/used?</h3>
        <p>
                This data allows us to properly fix bugs and issues with the website, as well as better adjust the site in the future for more people to be able to use it properly.
        </p>
        <h3>What data is shared, sold, or transfered?</h3>
        <p>
                We do not share, sell, or transfer any data collected with any third-parties. Data is stored on Google's Cloud Platform in Oregon, and uses keys provided by us, not Google.
        </p>
        <h3>Who has access to this data?</h3>
        <p>
                Governments or law enforcement may request data from Google, to which we have no control over. However, because they do not have access to the decryption keys for the data on our server, they cannot pass any data forward. We do not respond to government requests as we do not collect any information that could be tracked back to a certain individual that could prove to be relevant in a legal scenario.
        </p>
        <h3>Who processes this data?</h3>
        <p>
            The data is processed by the following parties:
            <ul>
                <li>
                  <b>Vercel and their subprocessors:</b>
                  {' '}
                  They host this site. They do not mention, as of writing, who powers their services.
                </li>
                <li>
                  <b>Google Cloud Platform and their subprocessors:</b>
                  {' '}
                  They host the Plausible Analytics server. The servers we use are located in the United States, specifically in Oregon.
                </li>
                <li>
                  <b>Myself:</b>
                  {' '}
                  I maintain the Plausible Analytics, and therefore have access to all data on the server. I also posses the keys to decrypt data on the server.
                </li>
                <li>
                  <b>You:</b>
                  {' '}
                  You can access all the data collected by this site at any time <a href="https://alpine.gcp.doamatto.xyz/doamatto.xyz" className="font-bold transition-colors duration-200 hover:text-brandBlue focus:text-brandBlue focus:no-outline">via the Plausible public dashboard.</a>
                </li>
              </ul>
        </p>
        <h3>What if there&apos;s a data breach?</h3>
        <p>
            In the event of a data breach at Vercel or Google, I cannot do anything to notify users as I do not collect identifiable data. I will leave a banner on the website to still spread awareness of such, however.
        </p>
        <h3>Where can I find past versions of this policy?</h3>
        <p>
            This site&apos;s codebase is hosted publicly on GitHub. You can check the list of changes to this policy <a href="https://git.io/JLnah">here.</a>
        </p>
        <h3>Contact</h3>
        <p>
            You can write to <a href="mailto:hello@doamatto.xyz>">hello [at] doamatto.xyz</a> to get help as swiftly as possible on amending and fixing this document, as well as get answers to questions regarding this policy.
        </p>
      </div>
    </>
  )
}
