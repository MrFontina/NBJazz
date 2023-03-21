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
          Guitarrista de jazz de Buenos Aires. Cuenta con un disco solista y mas de 6 discos grabados en colaboración. Egresado de la Tecnicatura superior en jazz del Conservatorio Superior de Musica Manuel de Falla, luego de haber estudiado en la Escuela de Arte Leopoldo Marechal.</p>
        <img src='../../Images/12.png' alt="grabando en estudio insigno" id="img2" loading="lazy"></img>
        <p id='p2'>Como guitarrista e improvisador, se formó manera particular con Martin Porto, Ricardo Cavalli y Juan Cruz de Urquiza entre otros. También participó de ensambles con Mariano Loiacono, Sergio Verdinelli, Mariano Otero, Tony Malaby y David Kikoski.
        </p>
        <img src='../../Images/3.JPG' alt="guitar" id="img3" loading="lazy"></img>

        <p id='p3'>En el 2014 realiza un viaje a Nueva York donde se perfecciona con Adam Rogers, Ben Monder, Mike Moreno, Steve Cardenas y Nir Felder. En el 2017 realiza un workshop de dos meses con el maestro Wayne Krantz Asistió a clínicas con Ari Hoenig, Jonathan Kreisberg, Miguel Zenon, Peter Bernstein y Mike Moreno.
        </p>




      </div>


    </main>
  )
}

export default About