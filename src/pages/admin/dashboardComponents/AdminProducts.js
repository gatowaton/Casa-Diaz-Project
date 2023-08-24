import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCreator from './ProductCreator';
import "../Dashboard.css"

function AdminProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/product/`);
      setProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleProductCreated = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  return (
    <div>
      <ProductCreator onProductCreated={handleProductCreated} />
      <h1>Products</h1>
      <div className='product-card-admin-container'>
        {products.map(product => (
          <div className='product-card-admin' key={product.id}>
            <img src={product.Foto} alt="" />
            <div>
              <h2>{product.Titulo}</h2>
              <p>Precio: ${product.PrecioVentaBruto}</p>
              <p>Marca: {product.Marca}</p>
              <strong>Stock: {product.Stock}</strong>
            </div>
            <div className='product-data-2'>
              <p>{product.date}</p> 
              <strong>id: {product._id}</strong>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminProducts;