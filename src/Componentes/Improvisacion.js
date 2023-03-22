import React from 'react'

function Improvisacion({ isOpen }) {
  return (
    <main className={`main-section  ${isOpen ? "" : "main-section-no-margin"}`}>
      <h3 className='subtitle'>CLASES DE IMPROVISACIÓN</h3>
      <div className='container-improvisacion'>
        <div className='container-grid-top'>
          <img src='../../Images/oink2.jpg' alt='grabacion disco power trio oink' className='img-impro' id='impro-img-1'></img>
        <p id='impro-p1'>
         En las clases de improvisación, <span>todos los instrumentos</span> son bienvenidos. Aunque cubriremos bastante contenido teórico, siempre nos enfocaremos en su aplicación práctica en el estilo del jazz, a través de ejercicios y ejemplos reales. 
        </p>
        </div>
        <div className='container-grid-bottom'>
          <img src='../../Images/barry.png' alt='clase de improvisacion de jazz con barry harris' className='img-impro' id='impro-img-2'></img>
        <p id='impro-p2'>
          Exploraremos diversos <span>recursos melódicos y rítmicos</span>  para enriquecer tu vocabulario musical. Algunos de los recursos melódicos que abordaremos son <span>escalas</span> como la mayor, menor armónica, menor melódica, mayor harmónica, simétricas y pentatónicas. También estudiaremos arpegios y patrones que se pueden descubrir dentro de estas escalas, <span>
            pares de triadas</span> y escalas hexatónicas, <span>estructuras melódicas</span> a partir de una secuencia de intervalos dada, la superposición de arpegios, el uso de cromatismos en las escalas <span>bebop </span>y formas de tocar <span>outside</span>.
        </p>
        
        <p id='impro-p3'>
         En cuanto a los recursos rítmicos, estudiaremos <span>subdivisiones, </span>agrupaciones, polirritmias, desplazamientos y <span>métricas irregulares,</span> todos aplicados a progresiones armónicas de standards del jazz. <br/>
 En resumen, las clases de improvisación te proporcionarán las herramientas necesarias para desarrollar tu creatividad musical y expresarte con soltura en el estilo del jazz, tanto en solos como en acompañamiento. 
        </p>
        <img src='../../Images/oink3.jpg' alt='grabacion disco power trio oink' className='img-impro' id='impro-img-3'></img>
        
        </div>
        
       
      </div>
    </main>
  )
}

export default Improvisacion