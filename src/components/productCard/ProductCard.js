import MyContext from "../../Context/MyContext";
import { useContext } from "react";
import React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";

function ProductCard({ numToShow }) {
   const { products, searchQuery, buyProducts } = useContext(MyContext);

   const filteredProducts =
      searchQuery !== ""
         ? products.filter((product) => product.Titulo.toLowerCase().includes(searchQuery.toLowerCase()))
         : products;

   const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
   };

   return (
      <div className="product-card-container">
         {filteredProducts.length === 0 ? (
            <p>No se consigue ese producto</p>
         ) : (
            filteredProducts.slice(0, numToShow).map((product) => (
               <div className="product-card" key={product._id}>
                  <img className="card-img-size" src={product.Foto} alt="" />
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
                     <button onClick={() => buyProducts(product)} className="product-card-button">
                        Agregar al Carrito
                     </button>
                     <Link to={`/productDetails/${product._id}`} onClick={scrollToTop}>
                        <button className="product-card-button">Detalles</button>
                     </Link>
                  </div>
               </div>
            ))
         )}
      </div>
   );
}

export default ProductCard;
