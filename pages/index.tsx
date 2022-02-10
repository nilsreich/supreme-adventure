import React, { useRef } from 'react';

export default function Index() {
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
      <div style={divStyle}>
        <div
          className="aspect-square bg-cover"
          onClick={() => { updateSong('/grueffelo.ogg'); }}
          style={{
            backgroundImage: "url(/grueffelo.webp)"
          }}
        ></div>
        <div
          className="aspect-square bg-cover"
          onClick={() => { updateSong('/heule_eule.ogg'); }}

          style={{
            backgroundImage: "url(/heule_eule.webp)"
          }}
        ></div>
                <div
          className="aspect-square bg-cover"          onClick={() => { updateSong('/grueffelo.ogg'); }}
          onClick={() => { updateSong('/fuer_hund_und_katz.ogg'); }}
          style={{
            backgroundImage: "url(/fuer_hund_und_katz.webp)"
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

