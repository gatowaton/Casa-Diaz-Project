import React, { useState } from 'react';
import axios from 'axios';

function ProductCreator({ onProductCreated }) {
  const [product, setProduct] = useState({
    title: '',
    description: '',
    price: 0,
    image: '',
    brand: '',
    stock: 0
  });

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/api/product/', product);
      console.log('Product created successfully!');
      onProductCreated(response.data);
      setProduct({
        title: '',
        description: '',
        price: 0,
        image: '',
        brand: '',
        stock: 0
      });
    } catch (error) {
      console.error(error);
      // Handle the error if necessary
    }
  };

  return (
    <div>
      <h1>Create Product</h1>
      <form className='product-creator-form' onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label><br/>
          <input
            type="text"
            id="title"
            name="title"
            value={product.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label><br/>
          <textarea
            id="description"
            name="description"
            value={product.description}
            onChange={handleChange}
          ></textarea>
        </div>
        <div>
          <label htmlFor="price">Price:</label><br/>
          <input
            type="number"
            id="price"
            name="price"
            value={product.price}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="image">Image URL:</label><br/>
          <input
            type="text"
            id="image"
            name="image"
            value={product.image}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="brand">Brand:</label><br/>
          <input
            type="text"
            id="brand"
            name="brand"
            value={product.brand}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="stock">Stock:</label><br/>
          <input
            type="number"
            id="stock"
            name="stock"
            value={product.stock}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default ProductCreator;