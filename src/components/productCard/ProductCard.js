import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ProductCard.css";

function ProductCard() {
   const [products, setProducts] = useState([]);

   useEffect(() => {
      fetchProducts();
   }, []);

   const fetchProducts = async () => {
      try {
         const response = await axios.get("http://localhost:4000/api/product/");
         setProducts(response.data);
      } catch (error) {
         console.error(error);
      }
   };

   return (
      <div className="product-card-container">
         {products.map((product) => (
            <div className="product-card">
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
