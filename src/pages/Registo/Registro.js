import React from 'react'
import Nav from '../../components/nav/Nav'
import "./Registro.css"

function Registro() {
  return (
    <div>
        <Nav/>
        <br/>
        <br/>
        <h5>Home / Registro</h5>
        <br/>

        <div className="jumbotron jumbotron-fluid2">
  <div className="container">
    <h1 className="display-4" style={{color:"white"}}>Regístrate</h1>
    <p className="lead" style={{color:"white"}}>Crea tu cuenta para obtener atención personalizada, ofertas y más.</p>
  </div>
</div>
        
    
    <form className="row g-3">
      <div className="col-lg-6">
        <h2 className='text'>Crea tu cuenta</h2>
        <form className="p-4">
          <div className="col-md-7">
            <label for="inputState" className="form-label">Debes seleccionar si eres persona natural o empresa.</label>
            <label >*Ten en cuenta que el Rut indicado al momento de registarte(persona o empresa) será el empleado para emitir cualquier tipo de documento trubutario que se solicite para las compras y cotizaciones*</label>
            <select id="inputState" className="form-select">
              <option selected>Seleccionar</option>
              <option>Persona natural</option>
              <option>Empresa</option>
            </select>
          </div>
          </form>

        <input type="text" className="form-control form-control-lg mt-3" placeholder="Nombre"></input>
        <input type="text" className="form-control form-control-lg mt-3" placeholder="Rut"></input>
        <input type="text" className="form-control form-control-lg mt-3" placeholder="Celular"></input>
        <input type="text" className="form-control form-control-lg mt-3" placeholder="Correo"></input>
        <input type="password" className="form-control form-control-lg mt-3" placeholder="Contraseña"></input>
        <input type="password" className="form-control form-control-lg mt-3" placeholder="Confirmar Contraseña"></input>
      </div>
        <div className="col-12">
        <div className="form-check">
        <input className="form-check-input" type="checkbox" id="gridCheck"></input>
        <label className="form-check-label" for="gridCheck">Quiero recibir ofertas en mi correo
      </label>
    </div>
  </div>
  <br/>
      <div className="col-12">
        <button type="button" className="btn btn-secondary">Registrarme</button>
        </div>
    </form>
    
    

    
    </div>


    
  )
}

export default Registro