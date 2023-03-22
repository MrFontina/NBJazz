import React from 'react'
import CardFechas from './CardFechas'

function Conciertos({ isOpen }) {
  return (
    <main className={`main-section  ${isOpen ? "" : "main-section-no-margin"}`}>
      <h3 className='subtitle'>CONCIERTOS</h3>
      <div className='container-conciertos'>
        <CardFechas
        title="Omar Menendez Trio"
        description="El trio interpreta standards de jazz."
        integrantes={[<span>Batería: </span>, "Omar Menendez", <br/>, <span>Bajo:  </span>,"Gonzalo Aldas", <br/>,<span>Guitarra:</span>, " Nahuel Bracchitta"]}
        fecha="24/3"
        lugar="Bar de Fondo"
        hora="21:30 hs"
        direccion="Julian Alvarez 1200, Palermo"
        entrada="Al sobre"
        />
        <CardFechas
        title="Jeanette Nenezian Grupo"
        description="Presentación del disco Alepo"
        integrantes={[<span>Batería: </span>, "Andres Dellacasa", <br/>, <span>Bajo:  </span>,"Estaban Freytes", <br/>,<span>Guitarra:</span>, " Nahuel Bracchitta", <br/>, <span>Trompeta:</span>, "Jeanette Nenezian", <br/>, <span>Voz: </span>, "Juana Sallies"]}
        fecha="30/3"
        lugar="Sheikob Bagels"
        hora="20 hs"
        direccion="Uriarte 1386, Palermo"
        entrada="Al sobre"
        />
        <CardFechas
        title="HERNAN CASSIBBA GRUPO"
        description="Presentación del segundo disco."
        integrantes={[<span>Batería: </span>, "Matias Crouzeilles", <br/>, <span>Contrabajo:  </span>,"Hernan Cassibba", <br/>,<span>Guitarra:</span>, " Nahuel Bracchitta", <br/>, <span>Saxo tenor:</span>, "Gonzalo Vicente", <br/>, <span>Saxo alto:</span>, "Lucas Goycoechea" ]}
        fecha="25/5"
        lugar="Virasoro Bar"
        hora="21:30 hs"
        direccion="Guatemala 4328, Palermo"
        entrada=""
        />

      </div>
    </main>
  )
}

export default Conciertos