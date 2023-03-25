import React from 'react'






function Home({ isOpen }) {





  return (
    <main className={`main-section  ${isOpen ? "" : "main-section-no-margin"}`}>

        <div className='home'>

        <div className='section-home' id='section-trumpet'>
          
          <h3>Festival of New Trumpet Music</h3>
          <p>Participamos en el festival con el grupo de la trompetista y compositora <span>Jeanette Nenezian</span>!!</p>
          <iframe width="300" height="169" src="https://www.youtube.com/embed/nj-snV7HNV8?start=1114" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className='video-home'></iframe>

          
        </div>

    <div className='section-home' id='section-cassibba'>

    <h3>Hernan Cassibba Grupo</h3>
    <p>Primer video adelanto del próximo disco</p>
          <iframe width="300" height="169" src="https://www.youtube.com/embed/jzl8EOtYhkY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className='video-home'></iframe>


    </div>

    <h3 id='nb'>NAHUEL BRACCHITTA</h3> 
        <div className='section-home' id='home-bio'>   
           
            <img src='../../Images/12.png' alt='nahuel bracchitta playing jazz guitar' />
            
            <div className='home-p'>
            
              <p>
                ¡Hola! Soy Nahuel Bracchitta, guitarrista de <span>jazz</span>. Participo activamente de la vibrante escena del jazz de la ciudad de <span>Buenos Aires</span>, tanto con mi proyecto personal asi como colaborando con algunos de mis músicos favoritos!<br />

                A lo largo de los años, he adquirido una gran cantidad de conocimientos sobre el arte de tocar la guitarra y la teoría musical. Desde hace 15 años me dedico a dar <span>clases</span> de <span> guitarra</span> e <span>improvisación</span>, tanto <span>presenciales</span> como <span>virtuales para todo el mundo</span>.
                <br />
                Mi objetivo es ayudar a otros músicos a desarrollar sus habilidades y alcanzar sus objetivos artísticos, sin importar su nivel de experiencia.
              </p>
            </div>
        </div>

        </div>


      







    </main>
  )
}

export default Home