import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import { Link } from "react-router-dom";
import ProductCard from "../../components/productCard/ProductCard";
import MyContext from "../../Context/MyContext";

import "./ProductView.css";

function ProductView() {
   const { products } = useContext(MyContext);
   const { id } = useParams();
   const [product, setProduct] = useState(null);
   const [preferenceId, setPreferenceId] = useState(null);
   initMercadoPago(process.env.REACT_APP_MERCADO_FRONT);

   const createPreference = async (product) => {
      try {
         const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/create-order`, {
            description: product.Titulo,
            price: product.PrecioVentaBruto,
            quantity: 1,
            picture_url: product.Foto,
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

   useEffect(() => {
      // Fetch the product details using the productId
      const fetchProductDetails = async () => {
         try {
            const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/product/${id}`);
            setProduct(response.data);
            console.log(response.data);
         } catch (error) {
            console.error(error);
         }
      };

      fetchProductDetails();
   }, [id]);

   return (
      <div className="container pb-4">
         {product ? (
            <div>
               <p className="pt-1">
                  {" "}
                  <Link to={`/`} style={{ color: "black", textDecoration: "none" }}>
                     Inicio
                  </Link>{" "}
                  / {product.Categoria} / {product.Titulo}
               </p>
               <div className="row pb-4">
                  <div className="col-5">
                     <img className="img-thumbnail img-size" src={product.Foto} alt={product.Titulo} />
                  </div>
                  <div className="col-7 pt-4">
                     <h6>SKU {product.CodigoProducto}</h6>
                     <h2 className="pt-3">{product.Titulo}</h2>
                     <div className="product-card-price-detail pt-3">
                        ${product.PrecioVentaBruto}
                        <span className="iva_color ps-1">IVA INCLUIDO</span>
                     </div>
                     <div className="d-flex align-items-center">
                        <div class="product-quantity px-2">
                           <input type="Number" min={0} />
                        </div>
                        <div className="px-1">
                           <button className="product-card-button ">Agregar al Carrito</button>
                        </div>
                        <div>
                           <button onClick={() => handleBuy(product)} className="product-card-button">
                              Comprar
                           </button>
                        </div>
                     </div>
                     {preferenceId && <Wallet initialization={{ preferenceId }} />}
                  </div>
               </div>
               <div></div>
               <h4>Quienes compraron este producto tambien compraron</h4>
               <ProductCard products={products} numToShow={4} />
            </div>
         ) : (
            <div>Loading...</div>
         )}
      </div>
   );
}

export default ProductView;
