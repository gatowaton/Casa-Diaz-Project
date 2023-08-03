// VistaProductos.js
import React from "react";
import ProductCard from "../../components/productCard/ProductCard";

const VistaProductos = () => {
   return (
      <div>
         <div className="container">
            <p>Esto son todos los productos</p>

            <ProductCard />
         </div>
      </div>
   );
};

export default VistaProductos;
