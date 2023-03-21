import React from 'react'

function Conciertos({ isOpen }) {
  return (
    <main className={`main-section  ${isOpen ? "" : "main-section-no-margin"}`}>
      <h3 className='subtitle'>CONCIERTOS</h3>
      <div>
        
      </div>
    </main>
  )
}

export default Conciertos