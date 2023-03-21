import React from 'react'


function Home({ isOpen }) {
  return (
    <main className={`main-section  ${isOpen ? "" : "main-section-no-margin"}`}>
        <div className='home-container'>
             <p>
          ¡Hola! Soy Nahuel Bracchitta, músico y compositor. Mi música se inspira en la fusión de diferentes estilos y culturas, creando una mezcla única de sonidos y emociones. En este sitio encontrarás información sobre mi música, videos, fotos y mucho más. ¡Bienvenido!  
        </p>
      <img src='../../Images/12.png' alt='playing guitar'/>
        </div>
     
        
      
      
        
        
    </main>
  )
}

export default Home