import React from "react";
import PropTypes from "prop-types";
import "./ProductCard.css";

function ProductCard({ title, price, sku, brand, imageUrl }) {
  return (
    <div className="product-card pb-3">
      <img src={imageUrl} alt="" />
      <div className="product-card-content">
        <span className="sku_marca">SKU {sku}</span>
        <h2 className="product-card-title">{title}</h2>
        <span className="sku_marca">Marca: {brand}</span>
        <br />
        <span className="product-card-price">
          ${price} <span className="iva_color">IVA INCLUIDO</span>
        </span>
      </div>
      <button className="product-card-button">Agregar al Carrito</button>
    </div>
  );
}

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  sku: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default ProductCard;
