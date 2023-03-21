import React from 'react'
import CardDiscos from './CardDiscos'


function Musica({isOpen}) {
  return (
    <main className={`main-section  ${isOpen ? "" : "main-section-no-margin"}`}>
    <h3>Musica </h3>
    <CardDiscos
    title="Mentes"
    subtitle="Nahuel Bracchitta Trío"
    img="../../Images/Discos/mentes.jpg"
    alt="mentes"
    description="Primer disco solista de Nahuel Bracchitta Trio. Participaron Andres Elstein en batería y Raian Valença João en bajo eléctrico. Grabado en el 2018 en Estudio Insigno."
    spotify="https://open.spotify.com/album/5KoNCO7J1qQstm6I3mv7EJ"
    youtube="https://www.youtube.com/watch?v=6DgUpXQhqmo"
    bandcamp="https://viajeroinmovilrecords.bandcamp.com/album/nahuel-bracchitta-mentes-2019"
    />
    
    
    
    
    
    </main>
  )
}

export default Musica