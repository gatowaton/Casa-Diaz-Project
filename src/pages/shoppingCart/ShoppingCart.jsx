import React from "react";
import { Link } from "react-router-dom";
import "./ShoppingCart.css";
import imgCarrito from "../../img/productcarrito.png";
import { useContext } from "react";
import MyContext from "../../Context/MyContext";

const ShoppingCart = () => {
   const { cart } = useContext(MyContext);

   return (
      <div className="container">
         <div className="pt-2">
            <Link to="/">Inicio</Link> / Carro de compras
         </div>
         <h2>Carro de compras</h2>
         <div className="row pb-5">
            <div className="col-8">
               <div className="box-cart">
                  <div>2 Productos en el carro de compras</div>
                  <div className="tabla-cart">
                     <div class="product-list">
                        <div className="product-tittle row pt-2">
                           <div className="product-item-tittle col-6 fs-5">Producto</div>
                           <div class="product-price-tittle col-2 fs-5">Precio</div>
                           <div class="product-quantity-tittle col-2 fs-5">Cantidad</div>
                           <div class="product-subtotal col-2 fs-5">Subtotal</div>
                        </div>
                        <hr className=""></hr>
                        <div class="product-item row pb-3">
                           <div class="product-image-description col-6">
                              <div className="d-flex">
                                 <div className="product-image">
                                    <img src={imgCarrito} alt="Imagen del producto" />
                                 </div>
                                 <div class="product-description ps-3">
                                    <span>SKU 0000000000</span>
                                    <p>Forem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                 </div>
                              </div>
                           </div>

                           <div class="product-price col-2">
                              <p>$4.490</p>
                           </div>
                           <div class="product-quantity col-2">
                              <input type="number" />
                           </div>
                           <div class="product-subtotal col-2">
                              <p>$4.490</p>
                           </div>
                        </div>
                        <div class="product-item row pb-3">
                           <div class="product-image-description col-6">
                              <div className="d-flex">
                                 <div className="product-image">
                                    <img src={imgCarrito} alt="Imagen del producto" />
                                 </div>
                                 <div class="product-description ps-3">
                                    <span>SKU 0000000000</span>
                                    <p>Forem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                 </div>
                              </div>
                           </div>

                           <div class="product-price col-2">
                              <p>$10.000</p>
                           </div>
                           <div class="product-quantity col-2">
                              <input type="text" />
                           </div>
                           <div class="product-subtotal col-2">
                              <p>$10.000</p>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="d-flex justify-content-end gap-3 ">
                     <button className="btn-cart-delete px-2">Borrar todos los productos</button>
                     <button className="btn-cart-act px-2">Actualizar carrito</button>
                  </div>
               </div>
            </div>
            <div className="col-4 text-center">
               <div className="box-cart-result p-3">
                  <h5 className="p-2">RESUMEN DE COMPRA</h5>
                  <button className="btn-cotizar">Cotizar</button>
                  <div class="mb-3 py-3">
                     <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                  </div>
                  <div className="text-start">
                     <div className="">Estimado Retiro / Despacho</div>
                     <hr></hr>
                     <div className="d-flex justify-content-between">
                        <div className="">Subtotal</div>
                        <div className="">$0000</div>
                     </div>
                     <hr></hr>
                     <div className="d-flex justify-content-between">
                        <div className="">Impuestos</div>
                        <div className="">$0000</div>
                     </div>
                     <hr className=""></hr>
                     <div className="d-flex justify-content-between">
                        <div className="">Total sin IVA</div>
                        <div className="">$0000</div>
                     </div>
                     <hr></hr>
                     <div className="d-flex justify-content-between pb-3">
                        <div className="">Total con IVA</div>
                        <div className="">$0000</div>
                     </div>
                  </div>
                  <button className="btn-pay ">Continuar al pago</button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ShoppingCart;
