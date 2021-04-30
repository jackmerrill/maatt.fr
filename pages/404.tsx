import Head from 'next/head'
import { NextSeo } from 'next-seo'
import Button from '@/components/button'

export default function notFound () {
  return (
    <>
      <NextSeo
        title="404 - doamatto"
        description="404 - Horiffic, no good, very bad error has occured."
      />
      <Head>
        <title>404 - doamatto</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="content" className="flex flex-col justify-center align-center text-center">
        <img src="/assets/404.svg" alt="" />
        <div>
          <h1>This page is dead!</h1>
          <p>
            Oh god! Holy sh*t! You just found a dead page. It's possible there was someone else who killed the page. It's also possible we're having a misunderstanding and someone spelt the address wrong. Regardless, we might want to investigate this dead page.
          </p>
          <div className="w-full text-center justify-center">
            <Button
              url="https://git.doamatto.xyz/404-investigation"
              title="Investigate the Dead Page."
            />
          </div>
        </div>
      </div>
    </>
  )
}
