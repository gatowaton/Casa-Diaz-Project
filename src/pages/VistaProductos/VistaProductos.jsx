import React, { useContext } from "react";
import ProductCard from "../../components/productCard/ProductCard";
import MyContext from "../../Context/MyContext";

const VistaProductos = () => {
   const { searchQuery } = useContext(MyContext);

   return (
      <div>
         <div className="container">
            <p>El resultado de la búsqueda es:</p>
            {searchQuery !== "" ? <ProductCard products={searchQuery} /> : <p>No se ha especificado una búsqueda.</p>}
         </div>
      </div>
   );
};

export default VistaProductos;
