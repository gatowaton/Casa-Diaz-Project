import React from "react";
import "./sucursales.css";
import fotolocal from '../../img/fotolocal.png';
import Mapa from '../../components/mapa/Mapa';

function Sucursal() {
  const sucursal = {
    nombre: 'Sucursal Principal',
    direccion: 'José Manuel Balmaceda 4252',
    horario: 'Lunes a viernes de 9:00 a 18:00hrs, sábados de 9:00 a 14:hrs',
    latitud: -33.40362541837431,
    longitud: -70.70725471783501,
  };

  return (
    <div className="Contenedor">
      <div className="Sucursal">
        <p className="Ruta">inicio/Sucursales</p>
        <h1 className="Titulo">Sucursales de la Tienda</h1>
        <div className="Contenedor-imagen">
          <img className="Img-sucursal" src={fotolocal} alt="imagen de la tienda" />
        </div>
        <div className="Inf-tienda">
          <div className="Cuadro-mapa">
            <div className="Mapa-tienda">
            <Mapa className="mapa" latitud={sucursal.latitud} longitud={sucursal.longitud} />
            </div>
          </div>
          <div className="Lista-datos">
            <ul>
              <li><strong>Nombre:</strong> {sucursal.nombre}</li>
              <li><strong>Dirección:</strong> {sucursal.direccion}</li>
              <li><strong>Horario:</strong> {sucursal.horario}</li>
            </ul>
          </div>
        </div>  
      </div>
    </div>
  );
}

export default Sucursal;
