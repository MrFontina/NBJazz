import React from 'react'

function Guitarra({ isOpen }) {
  return (
    <main className={`main-section  ${isOpen ? "" : "main-section-no-margin"}`}>
      <h3 className='subtitle'>CLASES DE GUITARRA</h3>
      <h4 className='h4-online'>ONLINE</h4>
      <div className='container-guitarra'>
        <img src='../../Images/guitarracontrapedales.jpg' className='guitarra-pic'   alt='guitarra y contrabajo' id='guitarra-title'></img>
        <p id='guit-p-1'>
          En mis clases de guitarra, me enfoco en diseñar un plan de estudio personalizado para cada estudiante, adaptado a sus intereses musicales, su disponibilidad horaria y sus objetivos. Este enfoque permite que las clases sean más efectivas y que los estudiantes puedan avanzar de manera más rápida y consistente.</p>
        <img src='../../Images/ukelele.jpg' className='guitarra-pic' alt='Nahuel Bracchitta y Hernan Cassibba en un show' id='guitarra-vertical'></img>
    <div id='guit-grid-medio'>
      <p > Entre los temas que podemos trabajar juntos, se incluyen: </p>
        <ul >
          <li><p className='p-title'>Conocimiento integral del <strong>diapasón</strong>: </p>
            <p>Aprenderás a visualizar el diapasón completo de la guitarra y a entender cómo se relacionan las diferentes notas y acordes.
            </p></li>
          <li><p className='p-title'> <strong>Armonía </strong> y construcción de <strong>acordes </strong>: </p>
            <p>Exploraremos diferentes tipos de acordes y su función dentro de la música. También aprenderás a construir tus propios acordes y a utilizarlos en tus composiciones e improvisaciones.
            </p></li>
          <li><p className='p-title'><strong>Escalas</strong>:</p>
            <p>Abarcando desde las escalas básicas hasta las más avanzadas, incluyendo la mayor, menor melódica, menor armónica, mayor armónica, disminuida, tonal, cromática y pentatónicas, con sus respectivos arpegios. También te enseñaré formas creativas de pensar arpegios o patterns nuevos. </p> </li>
          <li><p className='p-title'><strong>Intervalos</strong>:</p>
            <p>Entenderás cómo se relacionan las diferentes notas entre sí y cómo puedes utilizar esta información para crear solos más interesantes y melodías más complejas.
            </p></li>
          <li><p className='p-title'><strong>Sonido</strong>:</p>
            <p>Trabajaremos en mejorar la calidad de tu sonido y en encontrar tu propia voz como guitarrista.
            </p></li>
          <li>
            <p className='p-title'><strong>Técnicas de púa</strong>:
            </p>
            <p>Exploraremos diferentes técnicas de púa y cómo aplicarlas en diferentes contextos musicales.
            </p></li>
        </ul>
    </div>
        
        <img src='../../Images/riendo.jpg' className='guitarra-pic' alt='nahuel bracchitta y hernan cassibba' id='riendo'></img>
        <p id='guit-p-3'>
          Además, las clases de guitarra también incluyen todo el contenido de las clases de improvisación, para que puedas aplicar todo lo que aprendas en contextos musicales reales y desarrollar tus habilidades como <strong>improvisador</strong>.
        </p>
      </div>
    </main>
  )
}

export default Guitarra