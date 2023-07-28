import React, { useState } from "react";
import "./InicioSesion.css";

export const InicioSesion = () => {
  const [miInicioSesion, setIniciarSesion] = useState("false");
  const [usu, setUsu] = useState("");
  const [pas, setPas] = useState("");

  function InicioSesion(e) {
    e.preventDefault();
    var emailusu = document.getElementById("email").value;
    var passwordpas = document.getElementById("password").value;
    if (emailusu.length === 0 || passwordpas.length === 0) {
      alert("Complete los datos faltantes");
    } else {
      if (usu === "admin" && pas === "123") {
        setIniciarSesion("true");
        document.getElementById("form_login").style.display = "none";
      } else {
        setIniciarSesion("false");
        alert("Error de usuario y/o contraseña");
        document.getElementById("emailusu").value = "";
        document.getElementById("passwordusu").value = "";
        document.getElementById("emailusu").focus();
      }
    }
  }

  return (
    <div className="container-is">
      <h1>Inicio de Sesion</h1>
        <div className="container-lg">
          <div className="row mt-5">
            <div className="col-lg-6">
              <h2>Ingresar</h2>
              <h4>Si ya tienes una cuenta, inicia sesión con tu correo</h4>
              

              <form id="form_login">
                <label For="email">Correo electronico</label>
               
                <input
                  type="text"
                  id="email"
                  onChange={(e) => setUsu(e.target.value)}
                ></input>
                
                <label For="password">Contraseña</label>
               
                <input
                  type="password"
                  id="password"
                  onChange={(e) => setPas(e.target.value)}
                ></input>
                
                <button
                  type="button"
                  className="btn btn-warning"
                  onClick={InicioSesion}
                >
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
                Registrate para poder realizar compras en nuestra tienda online,
                hacer seguimiento de tus compras, revisar nuetras ofertas y
                mucho más.
              </h4>
              
              <button type="button" className="btn btn-warning">
                Crear cuenta
              </button>
            </div>
          </div>
        </div>
      
    </div>
  );
};

export default InicioSesion;
