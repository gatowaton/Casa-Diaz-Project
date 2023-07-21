import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Mapa = ({ latitud, longitud }) => {
  return (
    <MapContainer center={[latitud, longitud]} zoom={15} style={{ height: '400px' }}>
      {/* Definimos un TileLayer que carga el mapa base */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {/* Agregamos un marcador en la posición indicada por latitud y longitud */}
      <Marker position={[latitud, longitud]}>
        {/* Al hacer clic en el marcador, se muestra un Popup */}
        <Popup>Ubicación de la tienda</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Mapa;
