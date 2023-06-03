import React from 'react'
import CardFechas from './CardFechas'

function Conciertos({ isOpen }) {
  return (
    <main className={`main-section  ${isOpen ? "" : "main-section-no-margin"}`}>
      <h3 className='subtitle'>CONCIERTOS</h3>
      <div className='container-conciertos'>


        <CardFechas
          title="HERNAN CASSIBBA GRUPO"
          description="Presentación del segundo disco."
          integrantes={[<span>Batería: </span>, "Matias Crouzeilles", <br />, <span>Contrabajo:  </span>, "Hernan Cassibba", <br />, <span>Guitarra:</span>, " Nahuel Bracchitta", <br />, <span>Saxo tenor:</span>, "Gonzalo Vicente", <br />, <span>Saxo alto:</span>, "Lucas Goycoechea"]}
          fecha="17/6"
          lugar="BORGES"
          hora="21:30 hs"
          direccion="Borges 1985, Palermo"
          entrada=""
        />
        <CardFechas
          title="BRACCHITTA - SINYASIKI - CAVA"
          description="Standards y originales."
          integrantes={[<span>Batería: </span>, "Juan Cava", <br />, <span>Bajo:  </span>, "Kenshi Sinyasiki", <br />, <span>Guitarra:</span>, " Nahuel Bracchitta", <br />]}
          fecha="21/6"
          lugar="CCNU"
          hora="20 hs"
          direccion="Uriarte 1289, Palermo"
          entrada=""
        />
        <CardFechas
          title="HERNAN CASSIBBA GRUPO"
          description="Presentación del segundo disco."
          integrantes={[<span>Batería: </span>, "Matias Crouzeilles", <br />, <span>Contrabajo:  </span>, "Hernan Cassibba", <br />, <span>Guitarra:</span>, " Nahuel Bracchitta", <br />, <span>Saxo tenor:</span>, "Gonzalo Vicente", <br />, <span>Saxo alto:</span>, "Lucas Goycoechea"]}
          fecha="26/7"
          lugar="BORGES"
          hora="21:30 hs"
          direccion="Borges 1985, Palermo"
          entrada=""
        />
         <CardFechas
          title="HERNAN CASSIBBA GRUPO"
          description="Presentación del segundo disco."
          integrantes={[<span>Batería: </span>, "Matias Crouzeilles", <br />, <span>Contrabajo:  </span>, "Hernan Cassibba", <br />, <span>Guitarra:</span>, " Nahuel Bracchitta", <br />, <span>Saxo tenor:</span>, "Gonzalo Vicente", <br />, <span>Saxo alto:</span>, "Lucas Goycoechea"]}
          fecha="29/7"
          lugar="AFTER JAM"
          hora="24:00 hs"
          direccion="Privado"
          entrada=""
        />
        <CardFechas
          title="BRACCHITTA - FREYTES - CAVA"
          description="Presentación del disco Invitation."
          integrantes={[<span>Batería: </span>, "Juan Cava", <br />, <span>Contrabajo:  </span>, "Esteban Freytes", <br />, <span>Guitarra:</span>, " Nahuel Bracchitta", <br />]}
          fecha="19/8"
          lugar="AFTER JAM"
          hora="24:00 hs"
          direccion="Privado"
          entrada=""
        />
       

      </div>
    </main>
  )
}

export default Conciertos