import React from 'react'
import CardFechas from './CardFechas'

function Conciertos({ isOpen }) {
  return (
    <main className={`main-section  ${isOpen ? "" : "main-section-no-margin"}`}>
      <h3 className='subtitle'>CONCIERTOS</h3>
      <div className='container-conciertos'>


      <CardFechas
          title="Agustin Ocampo Trio"
          description="Standards"
          integrantes={[<span>Voz:</span>, "Agustina Ocampo", <span>Contrabajo:  </span>, "Esteban Freytes", <br />, <span>Guitarra:</span>, " Nahuel Bracchitta", <br />]}
          fecha="21/7"
          lugar="Tecnopolis"
          hora="14 hs"
          direccion=""
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
          title="Bracchitta, Freytes, Cava"
          description="Presentacion del disco Invitation"
          integrantes={[<span>Batería: </span>, "Juan Cava", <br />, <span>Contrabajo:  </span>, "Esteban Freytes", <br />, <span>Guitarra:</span>, " Nahuel Bracchitta", <br />]}
          fecha="11/8"
          lugar="Kowloon"
          hora="22:00 hs"
          direccion="Lavalle 3633"
          entrada=""
        />
        
        <CardFechas
          title="HERNAN CASSIBBA GRUPO"
          description="Presentación del segundo disco."
          integrantes={[<span>Batería: </span>, "Matias Crouzeilles", <br />, <span>Contrabajo:  </span>, "Hernan Cassibba", <br />, <span>Guitarra:</span>, " Nahuel Bracchitta", <br />, <span>Saxo tenor:</span>, "Gonzalo Vicente", <br />, <span>Saxo alto:</span>, "Lucas Goycoechea"]}
          fecha="19/8"
          lugar="Centro cultural Borges"
          hora="19 hs"
          direccion="Viamonte 525"
          entrada="Gratis"
        />
         
        <CardFechas
          title="Nahuel Bracchitta Trio"
          description="Musica orginal"
          integrantes={[<span>Batería: </span>, "Andres Dellacasa", <br />, <span>Contrabajo:  </span>, "Gabriel Balado", <br />, <span>Guitarra:</span>, " Nahuel Bracchitta", <br />]}
          fecha="19/8"
          lugar="AFTER JAM"
          hora="24:00 hs"
          direccion="Privado"
          entrada=""
        />
        <CardFechas
          title="Bracchitta - Scala - Crouzeilles"
          description="Standards"
          integrantes={[<span>Batería: </span>, "Matias Crouzeilles", <br />, <span>Contrabajo:  </span>, "Agustin Scala", <br />, <span>Guitarra:</span>, " Nahuel Bracchitta", <br />]}
          fecha="24/8"
          lugar="Club Tri - Mar del Plata"
          hora="22:00 hs"
          direccion="Calle 20 de Septiembre 2650"
          entrada=""
        />
        <CardFechas
          title="Bracchitta - Scala - Crouzeilles"
          description="Standards"
          integrantes={[<span>Batería: </span>, "Matias Crouzeilles", <br />, <span>Contrabajo:  </span>, "Agustin Scala", <br />, <span>Guitarra:</span>, " Nahuel Bracchitta", <br />]}
          fecha="25/8"
          lugar="ECEM - Mar del Plata"
          hora="22:00 hs"
          direccion="La Rioja 2065"
          entrada=""
        />
       

      </div>
    </main>
  )
}

export default Conciertos