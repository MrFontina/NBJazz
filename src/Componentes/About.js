import React from 'react'

function About({ isOpen }) {
  return (
    <main className={`main-section  ${isOpen ? "" : "main-section-no-margin"}`}>
      <h3 className='subtitle'>SOBRE MI:</h3>
      <div className='about-container'>
       <div  className='container-video' id="img1">
        <iframe width="300" height="169" src="https://www.youtube.com/embed/jTeEGbeWz9w?start=204&autoplay=1&mute=1" title="YouTube video player" frameborder="0" autoplay="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen id='video1'></iframe>
       </div>
      
        {/* <img src='../../Images/2.JPG' alt='mi'id="img1"></img> */}
        <p id='p1'>
        Soy un guitarrista de jazz de Buenos Aires. Tengo un disco solista y he grabado más de 6 discos en colaboración con otros músicos. Me gradué de la Tecnicatura Superior en Jazz del Conservatorio Superior de Música Manuel de Falla, después de haber estudiado en la Escuela de Arte Leopoldo Marechal..</p>
        <img src='../../Images/12.png' alt="grabando en estudio insigno" id="img2" loading="lazy"></img>
        <p id='p2'>Como guitarrista e improvisador, me formé de manera particular con grandes músicos como Martin Porto, Ricardo Cavalli y Juan Cruz de Urquiza, entre otros. También he participado en ensambles con Mariano Loiacono, Sergio Verdinelli, Mariano Otero, Tony Malaby y David Kikoski.
        </p>
        <img src='../../Images/3.JPG' alt="guitar" id="img3" loading="lazy"></img>

        <p id='p3'>En 2014, tuve la oportunidad de viajar a Nueva York para perfeccionarme con Adam Rogers, Ben Monder, Mike Moreno, Steve Cardenas y Nir Felder. En 2017, realicé un workshop de dos meses con el maestro Wayne Krantz, y también asistí a clínicas con Ari Hoenig, Jonathan Kreisberg, Miguel Zenon, Peter Bernstein y Mike Moreno.
        </p>
       




      </div>


    </main>
  )
}

export default About