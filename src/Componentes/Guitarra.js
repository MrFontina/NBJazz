import React from 'react'

function Guitarra({isOpen}) {
  return (
    <main className={`main-section  ${isOpen ? "" : "main-section-no-margin"}`}>
      <h3 className='subtitle'>CLASES DE GUITARRA</h3>
      <div>
        
      </div>
    </main>
  )
}

export default Guitarra