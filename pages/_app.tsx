import type { AppProps } from 'next/app'
import '@vercel/examples-ui/globals.css'
import React, { useRef } from 'react';
import Head from 'next/head'


export default function MyApp({ Component, pageProps }: AppProps) {
  const audioRef = useRef()

  const divStyle = {
    display: 'grid',
    gap: '4px',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))'
  };

  const updateSong = (source) => {
    // @ts-ignore
    audioRef.current.src = source
  }

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

        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#317EFB" />
      </Head>
      <div style={divStyle}>
        <div
          className="aspect-square bg-cover"
          onClick={() => { updateSong('/blabla.mp3'); }}
          style={{
            backgroundImage: "url('https://www.benjaminbluemchen.de/sites/default/files/styles/teaser_episode_image/public/episode/cd-150.PNG?itok=03nb9dmP')"
          }}
        ></div>
        <div
          className="aspect-square bg-cover"
          style={{
            backgroundImage: "url('https://www.benjaminbluemchen.de/sites/default/files/styles/teaser_episode_image/public/episode/cd-150.PNG?itok=03nb9dmP')"
          }}
        ></div>
      </div>

      <audio
        ref={audioRef}
        controls
        src=''
        autoPlay
        className="fixed bottom-0 border-t border-black w-full bg-slate-100 h-12"
      ></audio>
    </>
  )
}

