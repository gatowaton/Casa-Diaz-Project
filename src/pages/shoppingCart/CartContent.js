import CartElements from "./CartElements";
import CartTotal from "./CartTotal";

import "./CartContent.css"

import { useContext } from "react";
import {MyContext} from "../../Context/MyContext";

import React from 'react'

const CartContent = () => {
    const {cart} = useContext(MyContext);

    // condicion ) "" : "" 



    return cart.length > 0 ?(

    <>
    <CartElements/>
    <CartTotal/>
  
    </>
    ): (
        <h2 className="cart-message-center"> Carrito vacío</h2>
    )
  

}

export default CartContent;