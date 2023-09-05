import React from "react";
import "./Company.css";
import fotolocal from "../../img/fotolocal.png";
import { Link } from "react-router-dom";

const Company = () => {
   return (
      <div>
         <div className="container">
            <p className="pt-2">
               {" "}
               <Link to={`/`} style={{ color: "black", textDecoration: "none" }}>
                  Inicio
               </Link>{" "}
               / Nuestra Empresa
            </p>
            <h2>Nuestra empresa</h2>
            <img src={fotolocal} className="rounded mx-auto img-fluid d-block p-4" alt="..."></img>
            <div className="fs-4 my-5">
               <p>
                  <b>Casa Díaz SPA</b>
               </p>
               <p>
                  Con una experiencia previa de mas de 6 años en la industria, nuestro compromiso es brindar soluciones
                  eléctricas de calidad, uniendo la excelencia y seguridad al mejor precio. Desde nuestro inicio, nos hemos
                  destacado por nuestro enfoque en el servicio al cliente, y hoy continuamos fortaleciendo ese compromiso.
               </p>
               <p>
                  Nuestros clientes finales abarcan un amplio espectro, desde instaladores eléctricos hasta pequeños
                  emprendedores con las ganas de crear. Nos esforzamos por convertirnos en su aliado estratégico,
                  brindándoles productos y servicios de alta calidad en un ambiente laboral responsable y profesional.
               </p>
               <p>
                  En Casa Díaz Spa, valoramos a cada cliente y esperamos contar con su preferencia. Nuestro equipo está listo
                  para atender sus necesidades. ¡Contacte con nosotros y permítanos ser su socio confiable en soluciones
                  eléctricas!
               </p>
            </div>
         </div>
      </div>
   );
};

export default Company;
