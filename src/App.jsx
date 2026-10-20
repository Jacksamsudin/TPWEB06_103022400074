import { useState } from 'react'
import './components/KartuMenu.jsx'
import './components/LabelHarga.jsx'
import './components/Panel.jsx'

const NAMA_PANGGILAN ='Tegar'
const N = 74
const gayaJudul = {
  color : '#1f3a5f', fontsize : '28px', fontwide : 700, letterspacing : '0,5px'
}

function App(){
  const jam = 9
  return(
    <>
      <h1 className="judul" style={gayaJudul}>Kanti {NAMA_PANGGILAN} </h1> 
      <p>{jam < 12 ? "Selamat Pagi" : "Selamat Siang"}</p>
      <p>Saldo awal kartu Kantin : RP {(N*1000).toLocaleString('id-ID')}</p> 
      <button disabled>Bayar</button>
    </>
  )
  
}

export default App
