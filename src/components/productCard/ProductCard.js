import React from 'react'
import cardimg from "../../img/interruptor.png"
import "./ProductCard.css"

function ProductCard() {
  return (
    <div className='product-card'>
        <img src={cardimg} alt="" />
        <div className='product-card-content'>
            <span>SKU: 544894</span>
            <h2 className='product-card-title'>Product Card Casa Diaz</h2>
            <span>Marca</span><br/>
            <span className='product-card-price'>$54500</span>
        </div>
            <button className='product-card-button'>Add to Cart</button>
    </div>
  )
}

export default ProductCard