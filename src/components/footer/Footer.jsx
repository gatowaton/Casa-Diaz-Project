import React from "react";
import logofooter from "../../img/casadiazlogoblanco.png";
import "./Footer.css";

const Footer = () => {
   return (
      <footer>
         <div className="section_footer">
            <div className="container">
               <div className="row pt-5">
                  <div className="col-4">
                     <p className="text-center fs-5  text-light">
                        <b>Casa Matríz y Salón de Venta</b> <br></br>Avenida Balmaceda 4252, local A.
                     </p>
                     <img src={logofooter} className="rounded mx-auto d-block pb-4" alt="..."></img>
                  </div>
                  <div className="col-4">
                     <p className="text-center fs-4 fw-bold text-light ">Clientes</p>
                     <ul>
                        <li className="fs-5 text-light">Registrate</li>
                        <li className="fs-5 text-light">Cambios y devoluciones</li>
                        <li className="fs-5 text-light">Despacho y retiro</li>
                        <li className="fs-5 text-light">Terminos y condiciones</li>
                     </ul>
                  </div>
                  <div className="col-4">
                     <p className="text-center fs-4 fw-bold text-light">Empresa</p>
                     <ul>
                        <li className="fs-5 text-light">Nuestra empresa</li>
                        <li className="fs-5 text-light">Contactanos</li>
                     </ul>
                  </div>
               </div>
            </div>
            <hr className="text-light"></hr>
            <div className="container">
               <div className="row pt-3">
                  <div className="col-6">
                     <p className="fs-5 ps-5 text-light">
                        <b>SUSCRIBETE A NUESTRO NEWSLETTER</b> <br></br>Recibe nuestras ofertas, novedades y promociones
                        directo en tu inbox.
                     </p>
                  </div>
                  <div className="col-6">
                     <div className="p-4">
                        <input className="form-control" placeholder="name@example.com"></input>
                     </div>
                  </div>
               </div>
            </div>
            <hr className="text-light"></hr>
            <p className="text-center text-light">Copyright © 2023, Todos los Derechos Reservados.</p>
         </div>
      </footer>
   );
};

export default Footer;
