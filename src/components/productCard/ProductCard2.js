import React from 'react'
import "./ProductCard2.css"
import Bobina from "../../img/bobina.jpg"

function ProductCard2() {
  return (
    <div className='product-card-2'>
        <img src={Bobina} alt="" />
        <div className='product-card-2-content'>
            <div>
                <h2>Bobina de disparo para automático LEXO 10kA, 110-220V AC</h2>
                <span>$ 10000</span>
            </div>
            <button>Add to Cart</button>
        </div>
    </div>
  )
}

export default ProductCard2