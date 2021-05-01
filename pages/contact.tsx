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
          I'll build this page out a bit more in the future.

          Email: hello [at] doamatto.xyz
        </p>
      </div>
    </>
  )
}
