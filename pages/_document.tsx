import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext
} from 'next/document'

export default class _document extends Document {
  static async getInitialProps (ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render () {
    return (
      <Html className="p-0 m-0 text-black dark:text-white bg-white dark:bg-black w-full h-full">
        <Head>
          <link rel="stylesheet"
                href="https://cdn.doamatto.xyz/inter.min.css"
                type="text/css" />
          <link rel="preload"
                href="https://rsms.me/inter/font-files/Inter-roman.var.woff2?3.13"
                as="font"
                type="font/woff2"
                crossOrigin="true" />
          <meta name="ocs-site-verification" content="93595f861998e6fd066083de16af45e1"></meta>
          <meta name="wot-verification" content="5140a65b9981fa17e2f8"></meta>

          <link rel="icon" href="/assets/logo.svg"/>
          <link rel="shortcut icon" href="/assets/logo.svg"/>
          <link rel="apple-touch-icon" href="/assets/logo-bg.svg"/>

          <link rel="author" href="humans.txt"/>
        </Head>
        <body className="p-0 m-0 text-black dark:text-white w-full h-full bg-white dark:bg-black ">
          <div className="flex align-middle mx-auto max-w-3xl lg:max-w-4xl xl:max-w-6xl" id="mainContent">
            <Main />
            <NextScript />
          </div>
        </body>
      </Html>
    )
  }
}
