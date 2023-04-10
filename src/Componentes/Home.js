import React from 'react'






function Home({ isOpen }) {





  return (
    <main className={`main-section  ${isOpen ? "" : "main-section-no-margin"}`}>

        <div className='home'>

          <div className='section-home'>
          <h3>Rhythm Changes</h3>
          <p className='p-home'>Trabajando algunas ideas de improvisación sobre la progresion de <span>rhythm changes</span>. </p>
          <iframe width="300" height="169" src="https://www.youtube.com/embed/LWSB0dD5ZV4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className='video-home'></iframe>
          </div>

          <div className='section-home'>
          <h3>Frases para un II V I</h3>
          <p className='p-home'>Estas tres frases son de el genial guitarrista <span>Charles Altura</span> fueron transcriptas de su solo en el Blues de Charlie Parker: Cheryl. Y se pueden aplicar sobre un II V I</p>
          <iframe width="300" height="169" src="https://www.youtube.com/embed/TuZK0UbmaXM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className='video-home'></iframe>
          </div>

        <div className='section-home' id='section-trumpet'>
          
          <h3>Festival of New Trumpet Music</h3>
          <p className='p-home'>Participamos en el festival internacional New Trumpet Fest, dirigido por Dave Douglas, con el grupo de la trompetista y compositora <span>Jeanette Nenezian</span>!!</p>
          <iframe width="300" height="169" src="https://www.youtube.com/embed/nj-snV7HNV8?start=1114" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className='video-home'></iframe>

          
        </div>

    <div className='section-home' id='section-cassibba'>

    <h3>Hernan Cassibba Grupo</h3>
    <p className='p-home'>Primer video adelanto del próximo disco, que saldra en abril en todas las plataformas</p>
          <iframe width="300" height="169" src="https://www.youtube.com/embed/jzl8EOtYhkY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className='video-home'></iframe>


    </div>

    <h3 id='nb'>NAHUEL BRACCHITTA</h3> 
        <div className='section-home' id='home-bio'>   
           
            <img src='../../Images/12.png' alt='nahuel bracchitta playing jazz guitar' />
            
            <div className='home-p'>
            
              <p>
                ¡Hola! Soy Nahuel Bracchitta, guitarrista de <strong>jazz</strong>. Participo activamente de la vibrante escena del jazz de la ciudad de <strong>Buenos Aires</strong>, tanto con mi proyecto personal asi como colaborando con algunos de mis músicos favoritos!<br />

                A lo largo de los años, he adquirido una gran cantidad de conocimientos sobre el arte de tocar la guitarra y la teoría musical. Desde hace 15 años me dedico a dar <strong>clases</strong> de <strong> guitarra</strong> e <strong>improvisación</strong>, tanto <strong>presenciales</strong> como <strong>virtuales para todo el mundo</strong>.
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