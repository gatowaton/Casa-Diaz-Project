import { useContext } from "react";
import {MyContext} from "../../Context/MyContext";



// esta deberia ser el shoppingCart -adaptar

import React from 'react'

const CartElements = () => {
    const {cart} = useContext(MyContext);
    return cart.map((product)=>{
        return (
            <div className="cartContent" key={product._id}>
                <img src={product.Foto} alt="product-card"/>
                <h3 className="name">{product.Titulo}</h3>
                <h4 className="price">{product.PrecioVentaBruto}$</h4>
            </div>
        )
    })
}

export default CartElements;
