import React from 'react'
import CardFechas from './CardFechas'

function Conciertos({ isOpen }) {
  return (
    <main className={`main-section  ${isOpen ? "" : "main-section-no-margin"}`}>
      <h3 className='subtitle'>CONCIERTOS</h3>
      <div className='container-conciertos'>


      <CardFechas
          title="Agustina Ocampo Trio"
          description="Standards"
          integrantes={[<span>Voz:</span>, "Agustina Ocampo", <br />, <span>Contrabajo:  </span>, "Esteban Freytes", <br />, <span>Guitarra:</span>, " Nahuel Bracchitta", <br />]}
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
          title="Bracchitta, Pauta, Botta"
          description="Standards"
          integrantes={[<span>Batería: </span>, "Giulana Botta", <br />, <span>Contrabajo:  </span>, "Gustavo Pauta", <br />, <span>Guitarra:</span>, " Nahuel Bracchitta", <br />]}
          fecha="10/8"
          lugar="Las divines"
          hora="21:30 hs"
          direccion="Araoz 1932"
          entrada=""
        />
          <CardFechas
          title="Duo Passini - Bracchitta"
          description="Standars"
          integrantes={[<span>Guitarra: </span>, "Pablo Passini", <br />, <span>Guitarra:</span>, " Nahuel Bracchitta", <br />]}
          fecha="18/8"
          lugar="Bar de fondo"
          hora="21:00 hs"
          direccion="Julian Alvarez 1200"
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
          description="Musica original"
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
          title="Nahuel Bracchitta Trio"
          description="Música original"
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