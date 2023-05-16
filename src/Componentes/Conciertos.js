import React from 'react'
import CardFechas from './CardFechas'

function Conciertos({ isOpen }) {
  return (
    <main className={`main-section  ${isOpen ? "" : "main-section-no-margin"}`}>
      <h3 className='subtitle'>CONCIERTOS</h3>
      <div className='container-conciertos'>
      <CardFechas
        title="CAROLINA SANTOS TRIO"
        description="Jazz standards."
        integrantes={[<span>Voz: </span>, "Carolina Santos", <br/>, <span>Guitarra:  </span>,"Germán Damianich", <br/>,<span>Guitarra:</span>, " Nahuel Bracchitta"]}
        fecha="19/5"
        lugar="Museo fotográfico Simik"
        hora="21 hs"
        direccion=" LACROZE, FEDERICO AV. 3901"
        entrada=""
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

<CardFechas
        title="HERNAN CASSIBBA GRUPO"
        description="Presentación del segundo disco."
        integrantes={[<span>Batería: </span>, "Matias Crouzeilles", <br/>, <span>Contrabajo:  </span>,"Hernan Cassibba", <br/>,<span>Guitarra:</span>, " Nahuel Bracchitta", <br/>, <span>Saxo tenor:</span>, "Gonzalo Vicente", <br/>, <span>Saxo alto:</span>, "Lucas Goycoechea" ]}
        fecha="17/6"
        lugar="BORGES"
        hora="21:30 hs"
        direccion="Borges 1985, Palermo"
        entrada=""
        />
        <CardFechas
        title="HERNAN CASSIBBA GRUPO"
        description="Presentación del segundo disco."
        integrantes={[<span>Batería: </span>, "Matias Crouzeilles", <br/>, <span>Contrabajo:  </span>,"Hernan Cassibba", <br/>,<span>Guitarra:</span>, " Nahuel Bracchitta", <br/>, <span>Saxo tenor:</span>, "Gonzalo Vicente", <br/>, <span>Saxo alto:</span>, "Lucas Goycoechea" ]}
        fecha="26/7"
        lugar="BORGES"
        hora="21:30 hs"
        direccion="Borges 1985, Palermo"
        entrada=""
        />

      </div>
    </main>
  )
}

export default Conciertos