import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ProductCard.css";
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
import {Link} from "react-router-dom"

function ProductCard() {
  const [products, setProducts] = useState([]);
  const [preferenceId, setPreferenceId] = useState(null);
  initMercadoPago('TEST-8403fea5-6eca-494d-b3ff-69b7b93aac22');

  // mercado pago
  const createPreference = async (product) => {
    try {
      const response = await axios.post("http://localhost:4000/api/create-order", {
        description: product.Titulo,
        price: product.PrecioVentaBruto,
        quantity: 1,
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
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/product/");
      setProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="product-card-container">
      {products.map((product) => (
        <div key={product._id} className="product-card">
          <div>
            <img src={product.Foto} alt="" />
            <div className="product-card-content">
              <span className="sku_marca">SKU {product.CodigoProducto}</span>
              <h2 className="product-card-title">
                {product.Titulo}
              </h2>
              <span className="sku_marca">Marca</span>
              <br />
              <span className="product-card-price">
                ${product.PrecioVentaBruto}<span className="iva_color">IVA INCLUIDO</span>
              </span>
            </div>
            <button className="product-card-button">Agregar al Carrito</button>
            <Link to={`/productDetails/${product._id}`}>
              <button>Detalles</button>
            </Link>
            <button onClick={()=> handleBuy(product)} className="product-card-button">Comprar</button>
            {preferenceId && <Wallet initialization={{ preferenceId }} />}
          </div>
        </div>  
      ))}
      
    </div>
  )}

export default ProductCard;
