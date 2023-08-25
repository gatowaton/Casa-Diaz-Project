import MyContext from "../../Context/MyContext";
import { useContext } from "react";

const CartItemCounter = ({quantity, product}) => {
  const {cart, setCart, buyProducts } = useContext(MyContext);

  const decrease = () => {
    const productRepeat = cart.find((item) => item._id === product._id);

    if (productRepeat && productRepeat.quantity !== 1) {
      setCart(
         cart.map((item) =>
            item._id === product._id
               ? {
                    ...product,
                    quantity: productRepeat.quantity
                      ? productRepeat.quantity - 1
                      : 1,
                 }
               : item
         )
    
    
    );
  }
};


  return (
    <>
      {/* <div class="product-quantity col-2">
        <input type="number" />
      </div> */}

      <div className="product-quantity col-2">
        <p className="counter-button" onClick={decrease}>-</p>
        <p>{quantity}</p>
        <p className="counter-button" onClick={() => buyProducts(product)}>+</p>
      </div>
    </>
  );
};

export default CartItemCounter;

