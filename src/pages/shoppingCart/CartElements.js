import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import axios from "axios";
import MyContext from "../../Context/MyContext";
import "./ShoppingCart.css";

const ShoppingCart = () => {
  const { cart, setCart, total } = useContext(MyContext);
  const [preferenceId, setPreferenceId] = useState(null);

  useEffect(() => {
    initMercadoPago(process.env.REACT_APP_MERCADO_FRONT);
  }, []);

  const createPreference = async () => {
   try {
     const productTitles = cart.map((product) => product.Titulo);
     await axios.post(
       `${process.env.REACT_APP_BACKEND_URL}/api/create-preference`,
       {
         products: cart,
         total: Number(total),
         quantity: 1,
         productTitles: productTitles,
       }
     );
 
     const items = cart.map((product) => ({
       title: product.Titulo,
       unit_price: Number(product.PrecioVentaBruto),
       quantity: product.quantity,
       currency_id: "CLP",
     }));
 
     const preferenceResponse = await axios.post(
       `${process.env.REACT_APP_BACKEND_URL}/api/create-preference`,
       {
         items: items,
       }
     );
 
     const { id } = preferenceResponse.data;
     return id;
   } catch (error) {
     console.log(error);
   }
 };

  const handleBuy = async () => {
    const id = await createPreference();
    if (id) {
      setPreferenceId(id);
    }
  };

  const deleteProduct = (id) => {
    const newCart = cart.filter((element) => element._id !== id);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const iva = (total * 0.19).toFixed(0);
  const totalSinIva = total - iva;

  return (
    <div className="container">
      <div className="pt-2">
        <Link to="/" style={{ color: "black", textDecoration: "none" }}>
          Inicio
        </Link>{" "}
        / Carro de compras
      </div>
      <h2>Carro de compras</h2>
      <div className="row pb-5">
        <div className="col-8">
          <div className="box-cart">
            <div>{cart.length} Productos en el carro de compras</div>
            <div className="tabla-cart">
              <div className="product-list">
                {cart.map((product) => (
                  <div className="product-item" key={product._id}>
                    <div>{product.Titulo}</div>
                    <div>${product.PrecioVentaBruto}</div>
                    <button onClick={() => deleteProduct(product._id)}>
                      Eliminar
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="col-4 text-center">
          <div className="box-cart-result p-3">
            <h5 className="p-2">RESUMEN DE COMPRA</h5>
            <div className="d-flex justify-content-between">
              <div className="">Impuestos</div>
              <div className="">${iva}</div>
            </div>
            <hr />
            <div className="d-flex justify-content-between">
              <div className="">Total sin IVA</div>
              <div className="">${totalSinIva}</div>
            </div>
            <hr />
            <div className="d-flex justify-content-between">
              <div className="">Total con IVA</div>
              <div className="">${total}</div>
            </div>
            <button onClick={handleBuy}>Continuar al pago</button>
            {preferenceId && <Wallet initialization={{ preferenceId }} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;