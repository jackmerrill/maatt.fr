import Head from 'next/head'
import { NextSeo } from 'next-seo'
import dynamic from 'next/dynamic'

const Header = dynamic(() => import('@/components/header'))

export default function Contact () {
  return (
    <>
      <NextSeo
        title="Contact - doamatto"
        description="Reach out to me for a gig, hiring, or if you just want to talk."
      />
      <Head>
        <title>Contact - doamatto</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header
        title="Contact"
        subtitle="Reach out to me for a gig, hiring, or if you just want to talk." />
      <div className="antialised prose prose-sm sm:prose lg:prose-lg   mx-auto dark:prose-dark">
        <p>
          There are a few ways you can reach out to me, be it for a gig, questions about my past works or if you just want to chat. If you want to encrypt or check want me to certify a message of mine, my PGP key is on <a href="https://keybase.io/doamatto">Keybase</a>.
        </p>
        <ul>
          <li>Discord: doamatto#1337</li>
          <li>Email: <a href="mailto:hello@doamatto.xyz">hello [at] doamatto.xyz</a></li>
          <li>Linkedin: <a href="https://linkedin.com/in/matthewronchetto">/in/matthewronchetto</a></li>
          <li>Instagram: <a href="https://instagram.com/thetruedoormat">@thetruedoormat</a></li>
          <li>Twitter: <a href="https://twitter.com/doamatto">@doamatto</a></li>
        </ul>
        <p>Some other places around the internet that I'm at are:</p>
        <ul>
          <li>Bandcamp (solo): <a href="https://doamatto.bandcamp.com">doamatto</a></li>
          <li>Bandcamp (group): <a href=""></a></li>
          <li>Behance: <a href="https://be.net/doamatto">@doamatto</a></li>
          <li>Dev.to: <a href="https://dev.to/doamatto">@doamatto</a></li>
          <li>Dribbble: <a href="https://dribbble.com/doamatto">@doamatto</a></li>
          <li>GitHub: <a href="https://github.com/doamatto">@doamatto</a></li>
          <li>Itch: <a href="https://doamatto.itch.io">doamatto</a></li>
          <li>Studio9: <a href="https://watch.studioneuf.net/c/doamatto">doamatto</a></li>
          <li>Unsplash: <a href="https://unsplash.com/@doamatto">@doamatto</a></li>
          <li>YouTube: <a href="https://overto.doamatto.xyz/youtube">doamatto</a></li>
        </ul>
        <p>
          Although there are other places I lurk, I don't want to make the lists longer than they already are. Hope to hear from you soon :)
        </p>
      </div>
    </>
  )
}
