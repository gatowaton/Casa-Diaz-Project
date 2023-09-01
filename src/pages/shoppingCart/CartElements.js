import React from "react";
import { Link } from "react-router-dom";
import {useEffect, useState, useContext } from "react";
import MyContext from "../../Context/MyContext";
import "./ShoppingCart.css";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import axios from "axios";
import CartItemCounter from "./CartItemCounter";




// const ShoppingCart = () => {

// const { products, buyProducts} = useContext(MyContext);
// const [preferenceId, setPreferenceId] = useState(null);
// initMercadoPago(process.env.REACT_APP_MERCADO_FRONT);
// const [product, setProduct] = useState(null);


//    const createPreference = async (product) => {
//    try {
//       const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/create-order`, {
//          description: product.Titulo,
//          price: product.PrecioVentaBruto,
//          quantity: 1,
//          picture_url: product.Foto,
//       });
//       const { id } = response.data;
//       return id;
//    } catch (error) {
//       console.log(error);
//    }
// };

// const handleBuy = async (product) => {
//    const id = await createPreference(product);
//    if (id) {
//       setPreferenceId(id);
//    }
// };
   

//    const { cart, setCart, total } = useContext(MyContext);


//    // Boton eliminar producto carrito
//    const deleteProduct = (id) => {
//       const foundId = cart.find((element) => element._id === id);

//       const newCart = cart.filter((element) => {
//          return element !== foundId;
//       });

//       setCart(newCart);
//       localStorage.setItem("cart", JSON.stringify(newCart));
//    };


//    const iva = (total * 0.19).toFixed(0);
//    const totalSinIva = total - iva;

//    /// ACTUALIZAR ESTO

//    return (
//       <div className="container">
//          <div className="pt-2">
//             <Link to="/" style={{ color: "black", textDecoration: "none" }}>
//                Inicio
//             </Link>{" "}
//             / Carro de compras
//          </div>
//          <h2>Carro de compras</h2>
//          <div className="row pb-5">
//             <div className="col-8">
//                <div className="box-cart">
//                   <div>{cart.length} Productos en el carro de compras</div>
//                   <div className="tabla-cart">
//                      <div className="product-list">
//                         <div className="product-tittle row pt-2">
//                            <div className="product-item-tittle col-6 fs-5">Producto</div>
//                            <div className="product-price-tittle col-2 fs-5">Precio</div>
//                            <div className="product-quantity-tittle col-2 fs-5">Cantidad</div>
//                            <div className="product-subtotal col-2 fs-5">Subtotal</div>
//                         </div>
//                         <hr className=""></hr>

//                         {cart.map((product) => (
//                            <div className="product-item row pb-3" key={product._id}>
//                               <div className="product-image-description col-6">
//                                  <div className="d-flex">
//                                     <div className="product-image">
//                                        <img src={product.Foto} alt="Imagen del producto" />
//                                     </div>
//                                     <div className="product-description ps-3">
//                                        <span>SKU {product.CodigoProducto}</span>
//                                        <p>{product.Titulo}</p>
//                                     </div>
//                                  </div>
//                               </div>

//                               <div className="product-price col-2">
//                                  <p>${product.PrecioVentaBruto}</p>
//                               </div>
//                               <CartItemCounter product={product} quantity={product.quantity ? product.quantity : 1} />

//                               {/* <div className="product-quantity col-2">
//                       <input type="number" />
//                     </div> */}

//                               <div className="product-subtotal col-2">
//                                  <p>${product.PrecioVentaBruto * product.quantity}</p>
//                               </div>

//                               <div className="cart-delete-button" onClick={() => deleteProduct(product._id)}>
//                                  <p>❌</p>
//                               </div>
//                            </div>
//                         ))}
//                      </div>
//                   </div>
//                   <div className="d-flex justify-content-end gap-3 ">
//                      <button className="btn-cart-delete px-2">Borrar todos los productos</button>
//                      <button className="btn-cart-act px-2">Actualizar carrito</button>
//                   </div>
//                </div>
//             </div>
//             <div className="col-4 text-center">
//                <div className="box-cart-result p-3">
//                   <h5 className="p-2">RESUMEN DE COMPRA</h5>
//                   <button className="btn-cotizar">Cotizar</button>
//                   <div className="mb-3 py-3">
//                      <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
//                   </div>
//                   <div className="text-start">
//                      <div className="">Estimado Retiro / Despacho</div>
//                      <hr></hr>

//                      <div className="d-flex justify-content-between">
//                         <div className="">Impuestos</div>
//                         <div className="">${iva}</div>
//                      </div>
//                      <hr className=""></hr>
//                      <div className="d-flex justify-content-between">
//                         <div className="">Total sin IVA</div>
//                         <div className="">${totalSinIva}</div>
//                      </div>
//                      <hr></hr>
//                      <div className="d-flex justify-content-between pb-3">
//                         <div className="">Total con IVA</div>
//                         <div className="">${total}</div>
//                      </div>
//                   </div>
//                   <button onClick={() => handleBuy(product)} className="btn-pay ">Continuar al pago</button>
//                   {preferenceId && <Wallet initialization={{ preferenceId }} />}
//                </div>
//             </div>
//          </div>
//       </div>
//    );
// };

// export default ShoppingCart;


const ShoppingCart = () => {
   const {
     cart,
     setCart,
     total,
     buyProducts,
   } = useContext(MyContext);
 
   const [preferenceId, setPreferenceId] = useState(null);
 
   useEffect(() => {
     initMercadoPago(process.env.REACT_APP_MERCADO_FRONT);
   }, []);
 
   const createPreference = async () => {
      try {
        const productTitles = cart.map((product) => product.Titulo);
        const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/create-order`, {
          products: cart,
          total: Number(total),
          quantity: 1,
          productTitles: productTitles,
        });
        const { id } = response.data;
        return id;
      } catch (error) {
        console.log(error);
      }
    };
    
 
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
                 {/* Lista de productos en el carrito */}
                 {cart.map((product) => (
                   <div className="product-item" key={product._id}>
                     {/* Detalles del producto en el carrito */}
                     <div>{product.Titulo}</div>
                     <div>${product.PrecioVentaBruto}</div>
                     {/* Botón para eliminar producto */}
                     <button onClick={() => deleteProduct(product._id)}>Eliminar</button>
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
             {/* Botón de pago */}
             <button onClick={handleBuy}>Continuar al pago</button>
             {preferenceId && <Wallet initialization={{ preferenceId }} />}
           </div>
         </div>
       </div>
     </div>
   );
 };
 
 export default ShoppingCart;