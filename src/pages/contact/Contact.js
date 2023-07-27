import React from "react";
import "./Contact.css";


function Contact() {
   return (
      <div>
         <div className="container container-contact">
            <br />
            <h1>Contáctanos</h1>
            <div className="row row-contact">
               <div className="col-6 columna-izq-contact">
                  <h1>Formulario de Contacto</h1>
                  <form className="form-contact">
                     <div className="mb-3">
                        <label htmlFor="tipo-de-solicitud" className="form-label form-contact-label">
                           Tipo de solicitud
                        </label>
                        <select
                           className="form-select form-contact-select"
                           aria-label="Default select example"
                           id="tipo-de-solicitud"
                           defaultValue="">
                           <option disabled value="">
                              Seleccione el tipo de solicitud
                           </option>
                           <option value="1">Cotizacion de productos</option>
                           <option value="2">Consulta sobre un pedido vía web</option>
                           <option value="3">Consulta sobre un pedido vía presencial</option>
                           <option value="4">Problemas con un pedido entregado</option>
                        </select>
                     </div>

                     <div className="mb-3">
                        <label htmlFor="nombre" className="form-label form-contact-label-nombre">
                           Nombre
                        </label>
                        <input type="text" className="form-control form-contact-control-nombre" id="nombre" />
                     </div>

                     <div className="mb-3">
                        <label htmlFor="apellido" className="form-label form-contact-label-apellido">
                           Apellido
                        </label>
                        <input type="text" className="form-control form-contact-control-apellido" id="apellido" />
                     </div>

                     <div className="mb-3">
                        <label htmlFor="correo-usuario" className="form-label form-contact-label-correo">
                           Correo Electrónico
                        </label>
                        <input type="email" className="form-control form-contact-control-correo" id="correo-usuario" />
                     </div>
                     <div className="mb-3 row contact-number">
                        <label htmlFor="numero-usuario" className="col-sm-12 col-form-label">
                           Número de contacto
                        </label>
                        <div className="col-sm-2">
                           <input type="tel" className="form-control" id="numero-usuario1" placeholder="+569 ..." />
                        </div>
                        <div className="col-sm-5">
                           <input type="tel" className="form-control" id="numero-usuario2" placeholder="88888888" />
                        </div>
                     </div>

                     <div className="mb-3 form-check">
                        <input
                           type="radio"
                           className="form-check-input"
                           id="tipo-usuario-natural"
                           name="tipo-usuario"
                           value="natural"
                        />
                        <label className="form-check-label" htmlFor="tipo-usuario-natural">
                           Persona Natural
                        </label>
                        <br />
                        <input
                           type="radio"
                           className="form-check-input"
                           id="tipo-usuario-empresa"
                           name="tipo-usuario"
                           value="empresa"
                        />
                        <label className="form-check-label" htmlFor="tipo-usuario-empresa">
                           Empresa
                        </label>
                     </div>

                     <div className="mb-3">
                        <label htmlFor="rut-usuario" className="form-label">
                           Rut
                        </label>
                        <input type="text" className="form-control" id="rut-usuario" placeholder="12.345.678-9" />
                     </div>

                     <div className="mb-3">
                        <label htmlFor="solicitud-usuario" className="form-label">
                           ¿En qué podemos ayudarlo?
                        </label>
                        <textarea className="form-control" id="solicitud-usuario" rows="3"></textarea>
                     </div>

                     <button type="submit" className="btn btn-primary btn-enviar-contact">
                        Enviar
                     </button>
                  </form>
               </div>
               <div className="col-6 columna-derecha-contact">
                  <h1>Ubícanos en</h1>
                  <h4>Casa Matriz y Salón de ventas</h4>
                  <p>Avenida Balmaceda 4252, local A</p>
                  <h4>Contáctanos al:</h4>
                  <p>
                     Tel:(+56) 99999 9999 <br></br>
                     casadiaz@casadiaz.com
                  </p>
               </div>
            </div>
         </div>

         <br />
         <br />
      </div>
   );
}

export default Contact;
