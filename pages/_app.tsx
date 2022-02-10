import type { AppProps } from 'next/app'
import '@vercel/examples-ui/globals.css'
import React, { useRef, useEffect } from 'react';
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

  const storeCode = '';
useEffect(() => {
  if (storeCode) {
    const manifestElement = document.getElementById("manifest");
    const manifestString = JSON.stringify({
      start_url: `\\`,
    });
    manifestElement?.setAttribute(
      "href",
      "data:application/json;charset=utf-8," + encodeURIComponent(manifestString),
    );
  }
}, [storeCode]);

  return (
    <>
<link rel="manifest" href="/manifest.json" id="manifest"  />
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

