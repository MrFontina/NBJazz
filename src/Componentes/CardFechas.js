import React from 'react'

function CardFechas(props) {
    return (
        <div className='card-fechas'>
            <div className='fecha-top'>
                <h4>{props.title}</h4>
            </div>
            <div className='fecha-middle'>
                <p>{props.description}</p>
                <p>{props.integrantes}</p>
            </div>
            <div className='fecha-bottom'>
                <p><span>Fecha:</span> {props.fecha}</p>
                <p><span>Hora:</span> {props.hora}</p>
                <p><span>Lugar: </span> {props.lugar}</p>
                <p><span>Dirección: </span>{props.direccion}</p>
                <p><span>Valor:  </span>{props.entrada}</p>
            </div>

        </div>
    )
}

export default CardFechas