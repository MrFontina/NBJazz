import React from 'react'
import CardDiscos from './CardDiscos'


function Musica({ isOpen }) {
  return (
    <main className={`main-section  ${isOpen ? "" : "main-section-no-margin"}`}>
      <h3 className='subtitle'>MÚSICA</h3>
      <div className='container-discos'>
        <CardDiscos
          title="MENTES"
          subtitle="NAHUEL BRACCHITTA TRÍO"
          img="../../Images/discos/mentes.jpg"
          alt="mentes"
          description="Primer disco solista de Nahuel Bracchitta Trio. Participaron Andres Elstein en batería y Raian Valença João en bajo eléctrico. Grabado en el 2018 en Estudio Insigno."
          spotify="https://open.spotify.com/album/5KoNCO7J1qQstm6I3mv7EJ"
          youtube="https://www.youtube.com/watch?v=6DgUpXQhqmo"
          bandcamp="https://viajeroinmovilrecords.bandcamp.com/album/nahuel-bracchitta-mentes-2019"
        />
        <CardDiscos
          title="ALEPO"
          subtitle="JEANETTE NENEZIAN GRUPO"
          img="../../Images/discos/alepo.jpg"
          alt="alepo"
          description="
        Segundo disco de la trompetista Jeanette Nenezian. Grabado en el 2021 en Estudio Insigno. Partciparon Juana Sallies en voz, Jeanette Nenezian en trompeta, Nahuel Bracchitta en guitarra, Esteban Freytes en bajo eléctrico y Andrés Dellacasa en batería."
          spotify="https://open.spotify.com/album/7zt7yI8oQ5o67BGmypyyLK"
          youtube="https://www.youtube.com/watch?v=Wk37C5jKDPU"
          bandcamp="https://jeanetteneneziangrupo.bandcamp.com/album/alepo"
        />
        <CardDiscos
          title="ASCENDENTE"
          subtitle="JEANETTE NENEZIAN GRUPO"
          img="../../Images/discos/ascendente.jpg"
          alt="ascendente"
          description="   
          Primer disco de la trompetista Jeanette Nenezian. Grabado en el 2018 en Estudio Insigno. Partciparon Jorge Cavero en saxo tenor, Jeanette Nenezian en trompeta, Nahuel Bracchitta en guitarra, Hernán Cassibba en contrabajo y Alejandro Lopez en batería."
          spotify="https://open.spotify.com/album/45kEnZABksT9AbwMWcAshg"
          youtube="https://www.youtube.com/watch?v=rKNGaFd1uaM"
          bandcamp="https://jeanetteneneziangrupo.bandcamp.com/album/ascendente"
        />
        <CardDiscos
          title="HOMENAJE"
          subtitle="HERNAN CASSIBBA GRUPO"
          img="../../Images/discos/homenaje.jpg"
          alt="Homenaje"
          description="   
          Primer disco del contrabajista Hernán Cassibba. Grabado en el 2018 en Estudio Insigno. Partciparon Lucas Goicochea en saxo alto, Gonzalo Rodriguez Vicente en saxo tenor, Nahuel Bracchitta en guitarra, Leonel Duck en piano, Hernán Cassibba en contrabajo y Axel Fillip en batería."
          spotify="https://open.spotify.com/album/5xDuSSo6lzA4djbUSShwpr"
          youtube="https://www.youtube.com/watch?v=uVNDpSrJNNQ&ab_channel=HernanCassibba"
          bandcamp="https://hernancassibba.bandcamp.com/releases"
        />
        <CardDiscos
          title="OINK"
          subtitle="OINK"
          img="../../Images/discos/oink.png"
          alt="oink"
          description="   
          Oink es un power trío instrumental, con composiciones que mezclan el rock, el blues y el jazz. Formado por Raian Valença João en bajo eléctrico, Nahuel Bracchitta en guitarra, y Ariel Invernizzi en batería. Grabado en el 2019 en estudios Del Parral. Mezclado por Tommy Davies."
          spotify="https://open.spotify.com/album/04Jjh0hDK74cVn3g4tz7R1"
          youtube="https://www.youtube.com/watch?v=cacNBZIZ_O0&list=OLAK5uy_lppVLnEXvCkzisNqbIadftCYr4Fj3Accs"
          id='bandcamp-oink'
        />
        <CardDiscos
          title="PLUS ONE LIVE!"
          subtitle="GONZALO ALDAS TRIO"
          img="../../Images/discos/aldasplus.png"
          alt="aldas live"
          description="   
          Segundo disco del bajista Gonzalo Aldas. Grabado en el 2019. Partciparon Gonzalo Rodriguez Vicente en saxo tenor, Nahuel Bracchitta en guitarra, Gonzalo Aldas en bajo acústico y Andrés Dellacasa en batería."
          spotify="https://open.spotify.com/album/0bGPFU9gs3CQq5u85gFAN0"
          youtube="https://www.youtube.com/watch?v=ifyUOEtnCZY"
          bandcamp='https://gonzaloaldas.bandcamp.com/releases'
        />
        <CardDiscos
          title="STANDARDS"
          subtitle="GONZALO ALDAS TRIO"
          img="../../Images/discos/aldasstandards.jpeg"
          alt="aldas standards"
          description="   
          Primer disco del bajista Gonzalo Aldas. Grabado en el 2017 en Ideo estudios. Partciparon Rodrigo Agudelo en guitarra, Nahuel Bracchitta en guitarra, Gonzalo Aldas en bajo acústico y Sebastián Groshaus en batería. Invitados: Ernesto Jodos en piano, Ian Carl en batería y Mariano Loiacono en trompeta"
          spotify="https://open.spotify.com/album/3eA1sGKrasgK834k42Zbgh"
          youtube="https://www.youtube.com/watch?v=W7nVugkS35Y"
          id='bandcamp-aldas'
        />
      </div>






    </main>
  )
}

export default Musica