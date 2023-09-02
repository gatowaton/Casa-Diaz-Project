import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import MyContext from "../../Context/MyContext";
import "./ShoppingCart.css";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import axios from "axios";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import "./CartElements.css";

const ShoppingCart = () => {
  const { cart, setCart, total} = useContext(MyContext);

  const [preferenceId, setPreferenceId] = useState(null);

  useEffect(() => {
    initMercadoPago(process.env.REACT_APP_MERCADO_FRONT);
  }, []);

  const createPreference = async () => {
    try {
      const productTitles = cart.map((product) => product.Titulo);
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/create-order`,
        {
          products: cart,
          total: Number(total),
          quantity: 1,
          productTitles: productTitles,
        }
      );
      const { id } = response.data;
      return id;
    } catch (error) {
      console.log(error);
    }
  };

  console.log("res:", cart);
  const handleBuy = async (product) => {
    const id = await createPreference(product);
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
    <div className="cart-page">
      <div className="pt-2">
        <Link to="/" style={{ color: "black", textDecoration: "none" }}>
          Inicio
        </Link>{" "}
        / Carro de compras
      </div>
      <h2>Carro de compras</h2>
      <div className="box-cart-desc">
            <h4>{cart.length}</h4>
            <h4>Productos en el carro de compras</h4>
          </div>
      <div className="cart-container">
        <div className="box-cart">
          <div className="product-list">
            {/* Lista de productos en el carrito */}
            {cart.map((product) => (
              <div className="product-item-container" key={product._id}>
                <div className="product-item-container-block-1">
                  <div className="product-item-img">
                    <img src={product.Foto} alt="" />
                  </div>
                  <div className="product-item-desc">
                    <h4>{product.Titulo}</h4>
                    <strong>${product.PrecioVentaBruto}</strong>
                  </div>
                </div>
                <button
                  className="delete-product-btn"
                  onClick={() => deleteProduct(product._id)}
                >
                  <DeleteForeverIcon fontSize="large" />
                </button>
              </div>
            ))}
          </div>

        </div>
        <div className="box-cart-result">
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
            {/* Botón de pago */}
            <button className="button-40" onClick={() => handleBuy()}>Continuar al pago <AttachMoneyIcon/></button>
            {preferenceId && (
              <div>
                <Wallet initialization={{ preferenceId }} />
              </div>
            )}
          </div>
      </div>
    </div>
  );
};

export default ShoppingCart;

// const ShoppingCart = () => {
//   const { cart, setCart, total } = useContext(MyContext);
//   const [preferenceId, setPreferenceId] = useState(null);

//   useEffect(() => {
//     initMercadoPago(process.env.REACT_APP_MERCADO_FRONT);
//   }, []);

//   const createPreference = async () => {
//     try {
//       const productTitles = cart.map((product) => product.Titulo);
//       const response = await axios.post(
//         `${process.env.REACT_APP_BACKEND_URL}/api/create-order`,
//         {
//           products: cart,
//           total: Number(total),
//           quantity: 1,
//           productTitles: productTitles,
//         }
//       );
//       const { id } = response.data;
//       return id;
//     } catch (error) {
//       console.error("Error creating preference:", error);
//     }
//   };

//   const handleBuy = async () => {
//     const id = await createPreference();
//     if (id !== null) {
//       setPreferenceId(id);
//     }
//   };

//   const deleteProduct = (id) => {
//     const newCart = cart.filter((element) => element._id !== id);
//     setCart(newCart);
//     localStorage.setItem("cart", JSON.stringify(newCart));
//   };

//   const iva = (total * 0.19).toFixed(0);
//   const totalSinIva = total - iva;

//   return (
//     <div className="container">
//       <div className="pt-2">
//         <Link to="/" style={{ color: "black", textDecoration: "none" }}>
//           Inicio
//         </Link>{" "}
//         / Carro de compras
//       </div>
//       <h2>Carro de compras</h2>
//       <div className="row pb-5">
//         <div className="col-8">
//           <div className="box-cart">
//             <div>{cart.length} Productos en el carro de compras</div>
//             <div className="tabla-cart">
//               <div className="product-list">
//                 {cart.map((product) => (
//                   <div className="product-item" key={product._id}>
//                     <div>{product.Titulo}</div>
//                     <div>${product.PrecioVentaBruto}</div>
//                     <button onClick={() => deleteProduct(product._id)}>
//                       Eliminar
//                     </button>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="col-4 text-center">
//           <div className="box-cart-result p-3">
//             <h5 className="p-2">RESUMEN DE COMPRA</h5>
//             <div className="d-flex justify-content-between">
//               <div className="">Impuestos</div>
//               <div className="">${iva}</div>
//             </div>
//             <hr />
//             <div className="d-flex justify-content-between">
//               <div className="">Total sin IVA</div>
//               <div className="">${totalSinIva}</div>
//             </div>
//             <hr />
//             <div className="d-flex justify-content-between">
//               <div className="">Total con IVA</div>
//               <div className="">${total}</div>
//             </div>
//             <button onClick={handleBuy}>Continuar al pago</button>
//             {preferenceId && (
//               <div>
//                 <h4>Productos en la compra:</h4>
//                 <p>{productTitles.join(", ")}</p>
//                 <Wallet initialization={{ preferenceId }} />
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ShoppingCart;
