import React from 'react'
import casaLogo from "../../img/casadiazlogoblanco.png"
import "./Payments.css"
import { Link } from 'react-router-dom'


function Success() {
  return (
    <div className='success-page' >
      <div className='success-box'>
        <h1>Gracias por su compra</h1>
        <img src={casaLogo} alt={casaLogo} />
        <Link to="./">
          <button className="button-40">Volver al Home</button>
        </Link>
      </div>
    </div>
  )
}

export default Success