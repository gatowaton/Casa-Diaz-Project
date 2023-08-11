import MyContext from "../../Context/MyContext";
import { useContext } from "react";

import "./ProductCard.css";

function ProductCard({ numToShow }) {
   const { products, searchQuery } = useContext(MyContext);

   const filteredProducts =
      searchQuery !== ""
         ? products.filter((product) => product.Titulo.toLowerCase().includes(searchQuery.toLowerCase()))
         : products;

   return (
      <div className="product-card-container">
         {filteredProducts.slice(0, numToShow).map((product) => (
            <div className="product-card" key={product.CodigoProducto}>
               <img src={product.Foto} alt="" />
               <div className="product-card-content">
                  <span className="sku_marca">SKU {product.CodigoProducto}</span>
                  <h2 className="product-card-title">{product.Titulo}</h2>
                  <span className="sku_marca">Marca</span>
                  <span className="product-card-price">
                     ${product.PrecioVentaBruto}
                     <span className="iva_color ps-1">IVA INCLUIDO</span>
                  </span>
               </div>
               <div className="btn-agregar pt-3">
                  <button className="product-card-button">Agregar al Carrito</button>
               </div>
            </div>
         ))}
      </div>
   );
}

export default ProductCard;
