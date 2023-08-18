import React from 'react'

// esta parte deberia ser la tarjeta, hay que pasar esto a el productCard 

const ProductItem = ({ data, addToCart }) => {
    console.log("carga de componente ")
    console.log("Datos del producto:", data); // Asegúrate de que "data" contenga los datos
  
    return (
      <div>
        <h4>{data.Titulo}</h4>
        <p>{data.PrecioVentaNeto}</p>
        <img src={data.Foto} alt={data.Titulo} />
  
        {/* ...otros elementos... */}
      </div>
    );
  };
  
  

export default ProductItem;