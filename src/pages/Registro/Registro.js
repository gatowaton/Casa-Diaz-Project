import React from "react";
import "./Registro.css";

function Registro() {
   return (
      <div className="container pb-4">
         <h1 className="py-3">Registrate</h1>

         <form className="row g-3">
            <div className="col-md-4">
               <label for="validationDefault01" className="form-label">
                  Nombre
               </label>
               <input type="text" className="form-control" id="validationDefault01"></input>
            </div>

            <div className="col-md-4">
               <label for="validationDefaultUsername" className="form-label">
                  Mail
               </label>
               <div className="input-group">
                  <span className="input-group-text" id="inputGroupPrepend2">
                     @
                  </span>
                  <input
                     type="email"
                     className="form-control"
                     id="validationDefaultUsername"
                     aria-describedby="inputGroupPrepend2"></input>
               </div>
            </div>

            <div className="col-md-4">
               <label for="validationDefault03" className="form-label">
                  Contraseña
               </label>
               <input type="password" className="form-control" id="validationDefault03"></input>
            </div>

            <div className="col-12">
               <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="invalidCheck2"></input>
                  <label className="form-check-label" for="invalidCheck2">
                     Deseo recibir ofertas en mi correo
                  </label>
               </div>
            </div>
            <div className="col-12">
               <button className="btn btn-warning" type="submit">
                  Registrarse
               </button>
            </div>
         </form>
      </div>
   );
}

export default Registro;
