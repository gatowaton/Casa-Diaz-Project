import React from 'react';
import "./mapa.css";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import { Icon } from 'leaflet';

const customIcon= new Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/2776/2776067.png",
  iconSize: [38,38],
});
const Mapa = ({ latitud, longitud }) => {
  return (
    <MapContainer className='Mapa' center={[latitud, longitud]} zoom={17}>
      {/* Definimos un TileLayer que carga el mapa base */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      <Marker position={[latitud, longitud]} icon={customIcon}>
        <Popup>Casa matriz</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Mapa;
