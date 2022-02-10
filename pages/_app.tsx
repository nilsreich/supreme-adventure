import type { AppProps } from 'next/app'
import '@vercel/examples-ui/globals.css'
import React, { useRef } from 'react';


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
    <>      <Component {...pageProps} />

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

