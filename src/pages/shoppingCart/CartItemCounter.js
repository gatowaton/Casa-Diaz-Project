import MyContext from "../../Context/MyContext";
import { useContext } from "react";

const CartItemCounter = ({quanty, product}) => {
  const {cart, setCart, buyProducts } = useContext(MyContext);

  const decrease = () => {
    const productRepeat = cart.find((item) => item._id === product._id);

    productRepeat.quanty !== 1 &&
    setCart(cart.map((item)=> item._id === product._id ? 
    {...product,quanty: productRepeat.quanty - 1} : item));
  };


  return (
    <>
      {/* <div class="product-quantity col-2">
        <input type="number" />
      </div> */}

      <div className="product-quantity col-2">
        <p className="counter-button" onClick={decrease}>-</p>
        <p>{quanty}</p>
        <p className="counter-button" onClick={() => buyProducts(product)}>+</p>
      </div>
    </>
  );
};

export default CartItemCounter;
