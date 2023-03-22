import React from 'react'


function Home({ isOpen }) {
  return (
    <main className={`main-section  ${isOpen ? "" : "main-section-no-margin"}`}>
        <div className='home-container'>
         
      <img src='../../Images/12.png' alt='nahuel bracchitta playing jazz guitar'/> 
      <div className='home-p'>
        <p>
         ¡Hola! Soy Nahuel Bracchitta, guitarrista de <span>jazz</span>. Participo activamente de la vibrante escena del jazz de la ciudad de <span>Buenos Aires</span>, tanto con mi proyecto personal asi como colaborando con algunos de mis músicos favoritos!<br/>
         
          A lo largo de los años, he adquirido una gran cantidad de conocimientos sobre el arte de tocar la guitarra y la teoría musical. Desde hace 15 años me dedico a dar <span>clases</span> de <span> guitarra</span> e <span>improvisación</span>, tanto <span>presenciales</span> como <span>virtuales para todo el mundo</span>.       
         <br/>
           Mi objetivo es ayudar a otros músicos a desarrollar sus habilidades y alcanzar sus objetivos artísticos, sin importar su nivel de experiencia.
         </p>
      </div>
         

 
        
        </div>
     
        
      
      
        
        
    </main>
  )
}

export default Home