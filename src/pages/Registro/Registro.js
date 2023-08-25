import React from 'react'
//import './Registro.css'

function Registro() {
  return (

    <div className="cont-gg">

      <h1>Registrate</h1>
      <div className='container-oo'>

      <form>
  <div className="tik-mf">
    <input type="text" placeholder='Nombre'></input>
  </div>
 
  <div className="tik-mf">
      <input type="email" placeholder="Email"></input>
  </div>

  <div className="tik-mf">
    <input type="password" placeholder='Contraseña'></input>
  </div>
  
    <button className="button-res" type="submit">Registrarse</button>
  
</form>
    </div>
    </div>
  )
}

export default Registro