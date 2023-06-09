import React from 'react'
import { useState } from 'react'
import { BsSpotify, BsYoutube } from 'react-icons/bs'
import { FaBandcamp } from 'react-icons/fa'


function CardDiscos(props) {

  const [isExpanded, setIsExpanded] = useState(false)
  const handleCardClick = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div className={`card ${isExpanded ? "card-expanded" : ""}`} onClick={handleCardClick}>
      <span>{props.subtitle}</span>
      <h3>{props.title}</h3>
      <img src={props.img} alt={props.alt}></img>
      {isExpanded &&
        (
          <div className='datos-description'>
            <p>{props.description}</p>
            <div className='container-discos-icons'>
              <p>ESCUCHAR:</p>
              <div  >
                <a href={props.spotify} target="_blank" rel="noreferrer"><BsSpotify className='disco-icon' /></a>
                <a href={props.youtube} target="_blank" rel="noreferrer"><BsYoutube className='disco-icon' /></a>
                <a href={props.bandcamp} target="_blank" rel="noreferrer"><FaBandcamp className='disco-icon' id={props.id}/></a>
              </div>

            </div>
          </div>
        )
      }
    </div>
  )
}

export default CardDiscos