import React from 'react'
import { useState } from 'react'
import Entrada from './Entrada';

function Canciones() {
  const [canciones, setCanciones] = useState(['Dont let me down', 'First of the year', 'Colbreakz Down Caves']);

  const onAddSong = (song) => {
    setCanciones((canciones) => {
      return ([...canciones, song]);
    })
  }
  return (
    <div>
      <ul>
        {
          canciones.map((cancion, index) => {
            return (
              <li key={index}>{ cancion }</li>
            )
          })
        }
      </ul>
      <Entrada addNewSong={(value) => onAddSong(value)} />
    </div>
  )
}

export default Canciones