import { useContext } from "react";
import MyContext from "../../Context/MyContext";

const TotalItems = () => {
  const { cart } = useContext(MyContext);

  const itemsQuanty = cart.reduce((acc, el) => acc + el.quantity, 0);

  return <span className="cart-items-total"> {itemsQuanty} </span>
};

export default TotalItems;
