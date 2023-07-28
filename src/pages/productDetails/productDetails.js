import React, { useState } from 'react';
import './productDetails.css';
import FotoProducto from "../../img/bobina.jpg";

const ProductCard = () => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value));
  };
  
  return (
    <div className="product-container">
      <div className='product-box'>
        <div className="product-image-container">
          <img className="product-image" src={FotoProducto} alt="Producto" />
        </div>
        <div className="product-details">
          <p className="product-brand">Nombre de la marca</p>
          <p className="product-sku">SKU: ABC123</p>
          <p className="product-price">$29.99</p>
          <div className="quantity-container">
            <label htmlFor="quantity">Cantidad:</label>
            <input
              type="number"
              id="quantity"
              value={quantity}
              onChange={handleQuantityChange}
              min="1"
            />
          </div>
          <button className="add-to-cart-btn">Añadir al carrito</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
