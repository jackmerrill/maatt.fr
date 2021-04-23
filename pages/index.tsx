import Head from 'next/head'

export default function Home () {
  return (
    <>
      <Head>
        <title>doamatto</title>
      </Head>
      <main className="content py-8 flex flex-col justify-center items-center">
        <section className="w-full align-middle flex items-center justify-center flex-col-reverse md:justify-between md:flex-row">
          <div className="m-2 max-w-prose mx-auto">
            <h1 className="text-4xl font-bold">
              Hi, I&apos;m Matt Ronchetto
            </h1>
            <br/>
            <p className="font-semibold">Note: I'm currently doing some major construciton on this site. So, please try to ignore any issues. If there's something huge, please put it on <a href="https://github.com/doamatto/doamatto.xyz/issues/new">Github</a> or <a href="mailto:hello@doamatto.xyz">email it to me</a>.</p><br/>
            <p>
              I'm a high school student who does product design and software development in sunny California. I'm currently building <a href="/projects/mello">Mello</a> and <a href="/projects/mono">Mono</a>.
            </p>
          </div>
        </section>
      </main>
    </>
  )
}
