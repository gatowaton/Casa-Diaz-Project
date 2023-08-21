import React from "react";
import "./User_info.css";

function UserInfo() {
   return (
      <div>
         <br />

         <div className="container container-info-usuario">
            <div className="row row-info-usuario">
               <div className="col-3 columna-izq-info-usuario">
                  <h2>Mi cuenta</h2>
                  <div className="nav-panel-info-usuario">
                     <ul className="nav flex-column links-panel-info-usuario">
                        <li className="nav-item mi-cuenta">
<<<<<<< HEAD
                           <a className="nav-link link-mi-cuenta-usuario" href="www.google.com">
=======
                           <a className="nav-link link-mi-cuenta-usuario" href="https://www.google.cl/">
>>>>>>> deployrail
                              <h6 className="texto-panel-izq-cuenta">Mi cuenta</h6>
                           </a>
                        </li>
                        <li className="nav-item panel">
<<<<<<< HEAD
                           <a className="nav-link link-panel-usuario" href="www.google.com">
=======
                           <a className="nav-link link-panel-usuario" href="https://www.google.cl/">
>>>>>>> deployrail
                              <h6 className="texto-panel-izq-cuenta">Panel</h6>
                           </a>
                        </li>
                        <li className="nav-item informacion">
<<<<<<< HEAD
                           <a className="nav-link link-informacion-usuario" href="www.google.com">
=======
                           <a className="nav-link link-informacion-usuario" href="https://www.google.cl/">
>>>>>>> deployrail
                              <h6 className="texto-panel-izq-cuenta">Información</h6>
                           </a>
                        </li>
                        <li className="nav-item mis-pedidos-usuario">
<<<<<<< HEAD
                           <a className="nav-link link-mis-pedidos-usuario" href="www.google.com">
=======
                           <a className="nav-link link-mis-pedidos-usuario" href="https://www.google.cl/">
>>>>>>> deployrail
                              <h6 className="texto-panel-izq-cuenta">Mis pedidos</h6>
                           </a>
                        </li>
                     </ul>
                  </div>
               </div>

               <div className="col-9">
                  <h2>Información de la cuenta</h2>
                  <form className="form-info-cuenta">
                     <div className="mb-3 text-label-form-user">
                        <label htmlFor="nombre" className="form-label text-label">
                           Nombre
                        </label>
                        <input
                           type="text"
                           className="form-control casilla-form-user-info"
                           id="nombre"
                           defaultValue="Rodrigo"
                        />
                     </div>
                     <div className="mb-3 text-label-form-user">
                        <label htmlFor="apellido" className="form-label text-label">
                           Apellido
                        </label>
                        <input
                           type="text"
                           className="form-control casilla-form-user-info"
                           id="apellido"
                           defaultValue="Perez"
                        />
                     </div>
                     <div className="mb-3 text-label-form-user">
                        <label htmlFor="rut" className="form-label text-label">
                           Rut
                        </label>
                        <input
                           type="text"
                           className="form-control casilla-form-user-info"
                           id="rut"
                           defaultValue="20.425.791-4"
                        />
                     </div>
                     <div className="mb-3 text-label-form-user">
                        <label htmlFor="contraseña" className="form-label text-label">
                           Contraseña
                        </label>
                        <input
                           type="password"
                           className="form-control casilla-form-user-info"
                           id="contraseña"
                           defaultValue="contraseña"
                        />
                     </div>
                     <div className="mb-3 text-label-form-user">
                        <label htmlFor="correo" className="form-label text-label">
                           Correo
                        </label>
                        <input
                           type="text"
                           className="form-control casilla-form-user-info"
                           id="correo"
                           defaultValue="correo@gmail.com"
                        />
                     </div>
                     <div className="botones-info-usuario">
                        <button type="button" className="btn btn-editar-1">
                           Editar
                        </button>
                        <button type="button" className="btn btn-guardar-1">
                           Guardar
                        </button>
                     </div>
                  </form>

                  <h2>Direccion de facturación</h2>
                  <form className="form-direccion-facturacion-usuario">
                     <div className="mb-3 text-label-form-user">
                        <label htmlFor="direccion-facturacion-usuario" className="form-label text-label">
                           Direccion
                        </label>
                        <input
                           type="text"
                           className="form-control casilla-form-user-info"
                           id="direccion-facturacion-usuario"
                           defaultValue="calle 123"
                        />
                     </div>

                     <div className="mb-3 text-label-form-user">
                        <label htmlFor="dato-direccion-facturacion-2" className="form-label text-label">
                           Dato
                        </label>
                        <input
                           type="text"
                           className="form-control casilla-form-user-info"
                           id="dato-direccion-facturacion-2"
                           defaultValue="dato"
                        />
                     </div>
                     <div className="mb-3 text-label-form-user">
                        <label htmlFor="dato-direccion-facturacion-3" className="form-label text-label">
                           Dato
                        </label>
                        <input
                           type="text"
                           className="form-control casilla-form-user-info"
                           id="dato-direccion-facturacion-3"
                           defaultValue="Dato 2"
                        />
                     </div>
                     <div className="botones-direccion-facturacion-usuario">
                        <button type="button" className="btn btn-editar-2">
                           Editar
                        </button>
                        <button type="button" className="btn btn-guardar-2">
                           Guardar
                        </button>
                     </div>
                  </form>

                  <h2>Direccion de envio predeterminada</h2>
                  <form className="form-direccion-envio-usuario">
                     <div className="mb-3 text-label-form-user">
                        <label htmlFor="direccion-envio-usuario" className="form-label text-label">
                           Dirección
                        </label>
                        <input
                           type="text"
                           className="form-control casilla-form-user-info"
                           id="direccion-envio-usuario"
                           defaultValue="calle 123"
                        />
                     </div>

                     <div className="mb-3 text-label-form-user">
                        <label htmlFor="dato-direccion-envio-usuario-1" className="form-label text-label">
                           Dato
                        </label>
                        <input
                           type="text"
                           className="form-control casilla-form-user-info"
                           id="dato-direccion-envio-usuario-1"
                           defaultValue="Dato"
                        />
                     </div>
                     <div className="mb-3 text-label-form-user">
                        <label htmlFor="dato-direccion-envio-usuario-2" className="form-label text-label">
                           Dato 2
                        </label>
                        <input
                           type="text"
                           className="form-control casilla-form-user-info"
                           id="dato-direccion-envio-usuario-2"
                           defaultValue="Dato 2"
                        />
                     </div>
                     <div className="botones-direccion-envio-usuario">
                        <button type="button" className="btn btn-editar-3">
                           Editar
                        </button>
                        <button type="button" className="btn btn-guardar-3">
                           Guardar
                        </button>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
   );
}

export default UserInfo;
