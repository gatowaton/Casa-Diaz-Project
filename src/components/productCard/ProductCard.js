import React from "react";
import cardimg from "../../img/interruptor.png";
import "./ProductCard.css";

function ProductCard() {
   return (
      <div className="product-card pb-3">
         <img src={cardimg} alt="" />
         <div className="product-card-content">
            <span className="sku_marca">SKU 999999999</span>
            <h2 className="product-card-title">Cable solarflex H1Z2Z2-K 4mm Rojo Libre De Halogeno 1800 VDC</h2>
            <span className="sku_marca">Marca</span>
            <br />
            <span className="product-card-price">
               $54500 <span className="iva_color">IVA INCLUIDO</span>
            </span>
         </div>
         <button className="product-card-button">Agregar al Carrito</button>
      </div>
   );
}

export default ProductCard;
