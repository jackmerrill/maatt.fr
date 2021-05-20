import Head from 'next/head'
import { NextSeo } from 'next-seo'
import dynamic from 'next/dynamic'

const Header = dynamic(() => import('@/components/header'))

export default function Cinema () {
  return (
    <>
      <NextSeo
        title="Ideas - doamatto"
        description="Oh, I have an idea. What if I made a page full of ideas I have over time? I should write that down."
      />
      <Head>
        <title>Ideas - doamatto</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header
        title="Ideas"
        subtitle="Oh, I have an idea. What if I made a page full of ideas I have over time? I should write that down." />
      <div className="antialised prose prose-sm sm:prose lg:prose-lg mx-auto dark:prose-dark">
        <ul>
          <li>Steal Danny's idea about making an ideas page at <a href="https://cyckl.net/idea">cyckl.net/idea</a> about logging ideas over time</li>
        </ul>
      </div>
    </>
  )
}
