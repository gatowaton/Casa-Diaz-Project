import React from "react";
import ProductCard from "../../components/productCard/ProductCard";
import bannerimg from "../../img/nowopen.png";
import imglanding from "../../img/iluminacion.png";
import imgsix from "../../img/tomacorriente1.png";
import imgnewline from "../../img/nuevalinea1.png";
import imgnewline2 from "../../img/nuevalinea2.png";
import novedades from "../../img/novedades1.png";

import "./Home.css";

function Home() {
   return (
      <div>
         <img src={bannerimg} className="rounded mx-auto d-block p-4" alt="..."></img>
         <div className="section_img">
            <p className="text-center fs-1 fw-bold text-light p-4">
               Todo en materiales eléctricos e iluminacion para tus proyectos
            </p>
            <div className="section_img_filter d-flex container">
               <img src={imglanding} className="rounded mx-auto d-block pb-4" alt="..."></img>
               <img src={imglanding} className="rounded mx-auto d-block pb-4" alt="..."></img>
               <img src={imglanding} className="rounded mx-auto d-block pb-4" alt="..."></img>
               <img src={imglanding} className="rounded mx-auto d-block pb-4" alt="..."></img>
            </div>
         </div>
         <div className="pt-5">
            <div className="section_products_six container">
               <div className="row">
                  <div className="col-lg-4 g-5">
                     <div className="d-flex">
                        <div className="text-start pt-3">
                           <p className="fs-5 text-light">Toma de corriente duplex 10A 250V Blanco/Plata</p>
                           <div className="ps-4">
                              <button className="btn_six">Ver Producto</button>
                           </div>
                        </div>
                        <img src={imgsix} className="rounded" alt="..."></img>
                     </div>
                  </div>
                  <div className="col-lg-4 g-5">
                     <div className="d-flex">
                        <div className="text-start pt-3">
                           <p className="fs-5 text-light">Toma de corriente duplex 10A 250V Blanco/Plata</p>
                           <div className="ps-4">
                              <button className="btn_six">Ver Producto</button>
                           </div>
                        </div>
                        <img src={imgsix} className="rounded" alt="..."></img>
                     </div>
                  </div>
                  <div className="col-lg-4 g-5">
                     <div className="d-flex">
                        <div className="text-start pt-3">
                           <p className="fs-5 text-light">Toma de corriente duplex 10A 250V Blanco/Plata</p>
                           <div className="ps-4">
                              <button className="btn_six">Ver Producto</button>
                           </div>
                        </div>
                        <img src={imgsix} className="rounded" alt="..."></img>
                     </div>
                  </div>
                  <div className="col-lg-4 g-5">
                     <div className="d-flex">
                        <div className="text-start pt-3">
                           <p className="fs-5 text-light">Toma de corriente duplex 10A 250V Blanco/Plata</p>
                           <div className="ps-4">
                              <button className="btn_six">Ver Producto</button>
                           </div>
                        </div>
                        <img src={imgsix} className="rounded" alt="..."></img>
                     </div>
                  </div>
                  <div className="col-lg-4 g-5">
                     <div className="d-flex">
                        <div className="text-start pt-3">
                           <p className="fs-5 text-light">Toma de corriente duplex 10A 250V Blanco/Plata</p>
                           <div className="ps-4">
                              <button className="btn_six">Ver Producto</button>
                           </div>
                        </div>
                        <img src={imgsix} className="rounded" alt="..."></img>
                     </div>
                  </div>
                  <div className="col-lg-4 g-5">
                     <div className="d-flex">
                        <div className="text-start pt-3">
                           <p className="fs-5 text-light">Toma de corriente duplex 10A 250V Blanco/Plata</p>
                           <div className="ps-4">
                              <button className="btn_six">Ver Producto</button>
                           </div>
                        </div>
                        <img src={imgsix} className="rounded" alt="..."></img>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div className="section_img_new_line">
            <div className="container">
               <div className="row ps-5">
                  <div className="col-4">
                     <p className="text-start fw-bold fs-1 text-warning p-4">Nueva linea de productos iluminarios</p>
                     <p className="text-start fs-6 text-light p-3">
                        Conoce nuestra nueva linea de productos de iluminacion. Encuentra plafones, Panel Led, y mucho mas.
                        Conoce nuestra nueva linea de productos de iluminacion. Encuentra plafones, Panel Led, y mucho mas.
                     </p>
                     <div className="ps-4">
                        <button className="btn_new_line">Ver Producto</button>
                     </div>
                  </div>
                  <div className="col-8">
                     <div className="row pt-4 ps-3">
                        <div className="col-4 ">
                           <img src={imgnewline} className="rounded" alt="..."></img>
                        </div>
                        <div className="col-8 ps-4">
                           <img src={imgnewline2} className="rounded" alt="..."></img>
                        </div>
                     </div>
                     <div className="row pt-4 ps-3">
                        <div className="col-6">
                           <img src={imgnewline2} className="rounded" alt="..."></img>
                        </div>
                        <div className="col-6 ps-5">
                           <img src={imgnewline} className="rounded" alt="..."></img>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div className="section_product_start ps-5">
            <div className="container">
               <p className="text-start fs-1 p-3">Productos Destacados</p>
               <div className="row ps-5">
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
               </div>
            </div>
         </div>

         <div className="section_novedades">
            <p className="text-center fs-1 fw-bold text-light p-4">Novedades del mundo electrico</p>
            <div className="section_img_filter d-flex container">
               <img src={novedades} className="rounded mx-auto d-block pb-4" alt="..."></img>
               <img src={novedades} className="rounded mx-auto d-block pb-4" alt="..."></img>
               <img src={novedades} className="rounded mx-auto d-block pb-4" alt="..."></img>
            </div>
         </div>

         <div className="section_condiciones container">
            <div className="row py-5">
               <div className="col-4 text-center ">
                  <i class="bi bi-box icons-size"></i>
                  <p className=" fs-4 fw-bold ">Cambios y Devoluciones</p>
                  <p className="fs-6 fw-bold">
                     Si tienes algún inconveniente, contáctanos en Asistencia Post Venta y Servicio Técnico.
                  </p>
               </div>
               <div className="col-4 text-center ">
                  <i class="bi bi-cash icons-size"></i>
                  <p className=" fs-4 fw-bold">Formas de pago</p>
                  <p className=" fs-6 fw-bold">Compra con tarjetas de débito o crédito vía Webpay.</p>
               </div>
               <div className="col-4 text-center">
                  <i class="bi bi-chat-left-text-fill icons-size"></i>
                  <p className=" fs-4 fw-bold ">Asistencia</p>
                  <p className=" fs-6 fw-bold ">Llámanos al +569 9999 9999 o escríbenos a casadiaz@casadiaz.cl</p>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Home;
