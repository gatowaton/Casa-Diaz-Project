import React from "react";
import "./DespachoRetiro.css";

function DespachoRetiro() {
   return (
      <div className="container">
         <div className="jumbotron">
            <h1 className="display-4">Despacho y Retiro</h1>
            <p className="lead">
               Lee atentamente los terminos de despacho y retiro de nuestra tienda. Ante cualquier consulta, no dudes en
               contactarnos.
            </p>
            <hr className="my-4"></hr>
            <p className="lead"></p>
         </div>

         <div className="cont-d">
            <h2>Servicio de Despacho</h2>
            <p>
               Los despachos a domicilio solo se realizarán dentro de la comuna de Renca, en un plazo de 24 a 48 horas de
               confirmado el pedido. Una vez que se realice el despachp, se entregará un número de seguimiento.
            </p>
         </div>

         <div className="cont-r">
            <h2>Servicio de Retiro</h2>
            <p>
               El retiro en tienda está disponible las 24 horas hábiles posteriores a la confirmación del pedido. El retiro
               se debe realizar en nuestra tienda ubicada en Av. Balmaceda 4252, local A, Renca. El horario de retiro es de
               lunea a viernes de 10:00 a 17:00 hrs.{" "}
            </p>
         </div>
      </div>
   );
}

export default DespachoRetiro;
