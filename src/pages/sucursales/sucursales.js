import React from "react";
import Nav from "../../components/nav/Nav";
import Footer from "../../components/footer/Footer";

function Sucursales(){
        // objetoInfo sucursal
        const sucursal = {
          nombre: 'Sucursal Principal',
          direccion: 'José Manuel Balmaceda 4252',
          horario: 'Lunes a viernes de 9:00 a 18:00hrs, sábados de 9:00 a 14:hrs',
          latitud: -33.4015008, //latitud de la tienda
          longitud: -70.7154977, //longitud de la tienda
        };
      
        return (
          <div>
            <h1>Sucursales de la Tienda</h1>
            <sucursal
              nombre={sucursal.nombre}
              direccion={sucursal.direccion}
              horario={sucursal.horario}
            />
            
          </div>
        );
      };
      
      export default Sucursales;

