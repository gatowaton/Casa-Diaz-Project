import React from "react";
import "./PaginaPago.css";
import interruptorImage from "../../img/interruptor.png";

function PaginaPago() {
  return (
    <div>
      <div className="container container-pagina-pago">
        <h1>Página de pago:</h1>

        <div className=" row row-pagina-pago">



          <div className="col-4 col-izq-pagina-pago">
           
            <form className="form-contact">
            <h4>Datos de Compra y Envío</h4>
              <div className="mb-3">
                <label
                  htmlFor="nombre"
                  className="form-label form-contact-label-nombre"
                >
                  Nombre
                </label>
                <input
                  type="text"
              
                  className="form-control form-contact-control-nombre"
                  id="nombre"
                  placeholder="Sebastian"
                />
              </div>

              <div className="mb-3">
                <label
                  htmlFor="apellido"
                  className="form-label form-contact-label-apellido"
                >
                  Apellido
                </label>
                <input
                  type="text"
               
                  className="form-control form-contact-control-apellido"
                  id="apellido"
                  placeholder="Perez"
                />
              </div>

              <div className="mb-3 contact-number">
                <label
                  htmlFor="numero-usuario"
                  className="col-sm-12 col-form-label"
                >
                  Número de contacto
                </label>
                <input
                  type="tel"
                  
                  className="form-control"
                  id="numero-usuario2"
                  placeholder="569 12341234 (ambos campos)"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="rut-usuario" className="form-label">
                  Rut
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="rut-usuario"
                  placeholder="12.345.678-9"
                />
              </div>

              <div>Datos para el despacho:</div>

              <div className="mb-3">
                <label
                  htmlFor="ciudad-despacho"
                  className="form-label form-ciudad-despacho-label"
                >
                  Ciudad
                </label>
                <select
                  className="form-select form-ciudad-despacho-select"
                  aria-label="Default select example"
                  id="ciudad-despacho"
                  

                  defaultValue=""
                >
                  <option disabled value="">
                    Por favor seleccione ciudad
                  </option>
                  <option>Antofagasta</option>
                  <option>Arica</option>
                  <option>Calama</option>
                  <option>Chillán</option>
                  <option>Chiloé</option>
                  <option>Concepción</option>
                  <option>Copiapó</option>
                  <option>Coquimbo</option>
                  <option>Coronel</option>
                  <option>Coyhaique</option>
                  <option>Curicó</option>
                  <option>Hualpen</option>
                  <option>Iquique</option>
                  <option>La Serena</option>
                  <option>Los Ángeles</option>
                  <option>Osorno</option>
                  <option>Puerto Montt</option>
                  <option>Puerto Natales</option>
                  <option>Punta Arenas</option>
                  <option>Rancagua</option>
                  <option>Santiago</option>
                  <option>Talca</option>
                  <option>Talcahuano</option>
                  <option>Temuco</option>
                  <option>Valdivia</option>
                  <option>Vallenar</option>
                  <option>Valparaíso</option>
                </select>
              </div>

              <div className="mb-3">
                <label
                  htmlFor="comuna-despacho"
                  className="form-label form-comuna-despacho-label"
                >
                  Comuna
                </label>
                <select
                  className="form-select form-comuna-despacho-select"
                  aria-label="Default select example"
                  id="comuna-despacho"
                
                  defaultValue=""
                >
                  <option disabled value="">
                    Por favor seleccione comuna
                  </option>
                  <option>Cerrillos</option>
                  <option>Cerro Navia</option>
                  <option>Colina</option>
                  <option>Conchalí</option>
                  <option>El Bosque</option>
                  <option>Estación Central</option>
                  <option>Huechuraba</option>
                  <option>Independencia</option>
                  <option>La Cisterna</option>
                  <option>La Florida</option>
                  <option>La Granja</option>
                  <option>La Pintana</option>
                  <option>La Reina</option>
                  <option>Las Condes</option>
                  <option>Lo Barnechea</option>
                  <option>Lo Espejo</option>
                  <option>Lo Prado</option>
                  <option>Macul</option>
                  <option>Maipú</option>
                  <option>Padre Hurtado</option>
                  <option>Pedro Aguirre Cerda</option>
                  <option>Peñalolén</option>
                  <option>Providencia</option>
                  <option>Pudahuel</option>
                  <option>Puente Alto</option>
                  <option>Quilicura</option>
                  <option>Quinta Normal</option>
                  <option>Recoleta</option>
                  <option>San Bernardo</option>
                  <option>San Joaquín</option>
                  <option>San Miguel</option>
                  <option>San Ramón</option>
                  <option>Santiago Centro</option>
                  <option>Vitacura</option>
                  <option>Ñuñoa</option>
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="direccion-usuario" className="form-label">
                  Dirección (calle, N° de casa)
                </label>
                <input
                  type="text"
          
                  className="form-control"
                  id="direccion-usuario"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="direccion2-usuario" className="form-label">
                  Oficina, casa o departamento
                </label>
                <input
                  type="text"
              
                  className="form-control"
                  id="direccion2-usuario"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="factura-despacho" className="form-label ">
                  ¿Desea factura?
                </label>
                <select
                  className="form-select factura-despacho-select"
                  aria-label="Default select example"
                  id="factura-despacho"
                
                  defaultValue=""
                >
                  <option disabled value="">
                    Por favor, seleccione
                  </option>
                  <option>Sí, deseo factura</option>
                  <option>No, no deseo factura</option>
                </select>
              </div>
            </form>
          </div>






          <div className="col-4 col-mid-pagina-pago">
            
            <form className="form-contact">
            <h4>Método de envío y retiro</h4>
               <div>Retiro en tienda</div>

               <div className="mb-3 form-check">
                        <input
                           type="radio"
                           className="form-check-input"
                           id="metodo-envio-retiro"
                           name="metodo-envio"
                           value="natural"
                        />
                        <label className="form-check-label" htmlFor="metodo-envio-retiro">
                           Tienda Principal - Renca -"DIRECCION"
                           <p className="texto-pequeño">Condiciones: Posterior a 24hrs de haber recibido comprobante de compra (en caso de requerir retirar de forma inmediata contáctenos NUM TEL para coordinar) Horario de atención: Luneas a Viernes de tal a tal</p>
                        </label>




                        

                        <div>Despacho a domicilio</div>



                        <input
                           type="radio"
                           className="form-check-input"
                           id="metodo-envio-despacho"
                           name="metodo-envio"
                           value="empresa"
                        />
                        <label className="form-check-label" htmlFor="metodo-envio-despacho">
                           Despacho a tu comuna: $PRECIO
                           <p className="texto-pequeño">Condiciones: Para los pedidos que van a Santiago Radio Urbano, la entrega se realizará acorde a el método de envío elegido, leer especificaciones al momento de especificar servicio de mensajeria.</p>
                        </label>
               </div>



               <div>Método de pago</div>

               <div class="form-check">
                     <input class="form-check-input" type="checkbox" value="" id="misma-direccion-factura"/>
                     <label class="form-check-label" htmlFor="misma-direccion-factura">
                        <p className="">Mi dirección de envío y facturación son las mismas</p>
                     </label>
                     </div>





               <div className="mb-3 form-check">

               <div className="separador-negro"></div>
                        <input
                           type="radio"
                           className="form-check-input"
                           id="metodo-pago-webpay"
                           name="metodo-pago"
                           value="natural"
                        />
                        <label className="form-check-label" htmlFor="metodo-pago-webpay">
                           WebPay
                           
                        </label>



                        <div className="separador-negro"></div>

                        

                        <input
                           type="radio"
                           className="form-check-input"
                           id="metodo-pago-santander"
                           name="metodo-pago"
                           value="empresa"
                        />
                        <label className="form-check-label" htmlFor="metodo-pago-santander">
                           Santander account
                           
                        </label>

                        <div className="separador-negro"></div>
                        

                        



                        <input
                           type="radio"
                           className="form-check-input"
                           id="metodo-pago-trasnferencia"
                           name="metodo-pago"
                           value="empresa"
                        />
                        <label className="form-check-label" htmlFor="metodo-pago-trasnferencia">
                           Pago con transferencia
                           
                        </label>

                       
                  
               </div>

             



            </form>
          </div>






          <div className="col-4 col-der-pagina-pago">
            <form className="form-contact form-enviar-pago">
               <div className="texto-col-derecha"><h4>Resumen de tu compra</h4></div>
               <p className="texto-col-derecha">1 producto en el carrito de compra</p>
               <div className="row">
                    <div className="contenedor-imagen-mas-texto">
                    <div><img src={interruptorImage} alt="Interruptor" className="img-producto"/></div>
                    <div> <p className="texto-col-derecha">Interruptor 20X20 5A - pimpimpim <br /> Precio: $xxxxx</p> </div>
                    
                  </div>

                  <div className="contenedor-imagen-mas-texto">
                    <div><img src={interruptorImage} alt="Interruptor" className="img-producto"/></div>
                    <div> <p className="texto-col-derecha">Interruptor 20X20 5A - pimpimpim <br /> Precio: $xxxxx</p> </div>
                    
                  </div>
                  

                  
                   </div>
                   <div className="contenedor-valores">
                    <div className="texto-precio separador texto-col-derecha">Subtotal:</div>
                    <div className="texto-precio separador texto-col-derecha">Impuestos:</div>
                    <div className="texto-precio separador texto-col-derecha">Total con impuestos:</div>
                    <div className="texto-precio separador texto-col-derecha">Total sin impuestos:</div>
                    <div className="texto-precio separador texto-col-derecha">Gastos de envío:</div>
                    <div className="texto-precio separador texto-col-derecha">Total a pagar:</div>
                    
                  

                   </div>

                  <div class="form-check">
                     <input class="form-check-input" type="checkbox" value="" id="acepta-terminos"/>
                     <label class="form-check-label" htmlFor="acepta-terminos">
                        <p className="texto-pequeño texto-col-derecha">He leído y acepto los términos y condiciones</p>
                     </label>
                     </div>
                  <button type="submit" className="btn btn-primary btn-pagina-pago" value="">
                        Enviar
                     </button>
                  
            
              









               
            </form>

            
          </div>




          
        </div>
      </div>
    </div>
  );
}

export default PaginaPago;
