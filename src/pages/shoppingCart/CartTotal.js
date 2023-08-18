
// Calculo total de la compra del usuario
import { useContext } from "react";
import MyContext from "../../Context/MyContext";
import React from 'react'



export const CartTotal = () => {
    const { cart } = useContext(MyContext);

    const total = cart.reduce((acc, el) => acc + el.PrecioVentaBruto,0);
  return (
    <div className="cartTotal">
        <h3> total a pagar: {total} $</h3>
    </div>
  )
}

export default CartTotal