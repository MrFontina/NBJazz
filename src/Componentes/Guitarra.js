import React from 'react'

function Guitarra({isOpen}) {
  return (
    <main className={`main-section  ${isOpen ? "" : "main-section-no-margin"}`}>
      <h3 className='subtitle'>CLASES DE GUITARRA</h3>
      <div>
        <p>
        En mis clases de guitarra, me enfoco en diseñar un plan de estudio personalizado para cada estudiante, adaptado a sus intereses musicales, su disponibilidad horaria y sus objetivos. Este enfoque permite que las clases sean más efectivas y que los estudiantes puedan avanzar de manera más rápida y consistente.</p>

<p> Entre los temas que podemos trabajar juntos, se incluyen: </p>
<ul>
  <li>Conocimiento integral del diapasón: aprenderás a visualizar el diapasón completo de la guitarra y a entender cómo se relacionan las diferentes notas y acordes.</li>
  <li>Armonía y construcción de acordes: exploraremos diferentes tipos de acordes y su función dentro de la música. También aprenderás a construir tus propios acordes y a utilizarlos en tus composiciones e improvisaciones.</li>
  <li>Escalas: abarcando desde las escalas básicas hasta las más avanzadas, incluyendo la mayor, menor melódica, menor armónica, mayor armónica, disminuida, tonal, cromática y pentatónicas, con sus respectivos arpegios. También te enseñaré formas creativas de pensar arpegios o patterns nuevos.</li>
  <li>Intervalos: entenderás cómo se relacionan las diferentes notas entre sí y cómo puedes utilizar esta información para crear solos más interesantes y melodías más complejas.</li>
  <li>Sonido: trabajaremos en mejorar la calidad de tu sonido y en encontrar tu propia voz como guitarrista.</li>
  <li>Técnicas de púa: exploraremos diferentes técnicas de púa y cómo aplicarlas en diferentes contextos musicales.</li>
</ul>
<p>
  Además, las clases de guitarra también incluyen todo el contenido de las clases de improvisación, para que puedas aplicar todo lo que aprendas en contextos musicales reales y desarrollar tus habilidades como improvisador.
</p>
<p>
  No dudes en contactarme para más información o para programar una clase de prueba. ¡Estoy ansioso por ayudarte a alcanzar tus metas como guitarrista y músico de jazz!
</p>       
      </div>
    </main>
  )
}

export default Guitarra