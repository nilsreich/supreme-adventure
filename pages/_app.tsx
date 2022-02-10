import type { AppProps } from 'next/app'
import '@vercel/examples-ui/globals.css'
import Head from 'next/head'

export default function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />
        <title>Next.js PWA Example</title>

        <link rel="manifest" href="/manifest.json" crossOrigin="use-credentials" />
        <link
        crossOrigin="use-credentials"
          href="/icons/icon-128x128.png"
          rel="icon"
          type="image/png"
          sizes="128x128"
        />
        <meta name="theme-color" content="#317EFB" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

