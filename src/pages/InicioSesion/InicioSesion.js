import React, { useState } from "react";
//import "./InicioSesion.css";

const InicioSesion = ({ handleLogin }) => {
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");

   const handleSubmit = (e) => {
      e.preventDefault();
      if (username && password) {
         handleLogin(username);
      }
   };

   return (
      <div className="container-is">
         <h1>Inicio de Sesion</h1>
         <div className="container-lg">
            <div className="row mt-5">
               <div className="col-lg-6">
                  <h2>Ingresar</h2>
                  <h4>Si ya tienes una cuenta, inicia sesión con tu correo</h4>

                  <form onSubmit={handleSubmit}>
                     <label For="email">Correo electronico</label>

                     <input
                        type="text"
                        placeholder="Introduce tu correo"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}></input>

                     <label For="password">Contraseña</label>

                     <input
                        type="password"
                        placeholder="Introduce tu contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}></input>

                     <button type="button" className="btn btn-warning btn-iniciosesion" onClick={InicioSesion}>
                        Iniciar Sesion
                     </button>
                  </form>
               </div>
            </div>
         </div>

         <div className="container-lg">
            <div className="row mt-5">
               <div className="col-lg-6">
                  <h2>Crea tu cuenta de cliente</h2>

                  <h4>
                     Registrate para poder realizar compras en nuestra tienda online, hacer seguimiento de tus compras,
                     revisar nuetras ofertas y mucho más.
                  </h4>

                  <button type="button" className="btn btn-warning btn-iniciosesion">
                     Crear cuenta
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default InicioSesion;
