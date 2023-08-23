import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';


import "./ProductView.css";


  

function ProductView() {
  const { id} = useParams();
  const [product, setProduct] = useState(null);
  const [preferenceId, setPreferenceId] = useState(null);
  initMercadoPago('TEST-8403fea5-6eca-494d-b3ff-69b7b93aac22');

  const createPreference = async (product) => {
    try {
      const response = await axios.post("http://localhost:4000/api/create-order", {
        description: product.Titulo,
        price: product.PrecioVentaBruto,
        quantity: 1,
        picture_url:  product.Foto,
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
  }

  useEffect(() => {
    // Fetch the product details using the productId
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/product/${id}`);
        setProduct(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProductDetails();
  }, [id]);

  



  return (
  <div>  
    <div className="productView-block">
      <div className="productView-info">
        {product ? (
         <div>
           <div>
              <img src={product.Foto} alt={product.Titulo} />
           </div>
           <h2>{product.Categoria}</h2>
            <h1>{product.Titulo}</h1>
           <p>{product.PrecioVentaBruto}</p>
           <p>{product.CodigoProducto}</p>
           <button onClick={()=> handleBuy(product)} className="product-card-button">Comprar</button>
              {preferenceId && <Wallet initialization={{ preferenceId }} />}
          </div>
        ) : (
          <div>Loading...</div>
       )}
      </div>
    </div>
   
  </div>  

  );
}

export default ProductView;

