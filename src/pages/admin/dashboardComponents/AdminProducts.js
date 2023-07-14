import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCreator from './ProductCreator';
import "../Dashboard.css"

function AdminProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    axios.get('http://localhost:4000/api/product/')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error(error);
      });
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
            <img src={product.image} alt="" />
            <div>
                <h2>{product.title}</h2>
                <p>Precio: ${product.price}</p>
                <p>Marca: {product.brand}</p>
                <strong>Stock: {product.stock}</strong>
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
