import React, { useState } from 'react';
import axios from 'axios';

function ProductCreator({ onProductCreated }) {
  const [product, setProduct] = useState({
    Titulo: '',
    Categoria: '',
    PrecioVentaBruto: 0,
    Foto: '',
    Marca: '',
    Stock: 0
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
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/product/`, product);
      console.log('Product created successfully!');
      onProductCreated(response.data);
      setProduct({
        Titulo: '',
        Categoria: '',
        PrecioVentaBruto: 0,
        Foto: '',
        Marca: '',
        Stock: 0
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
          <label htmlFor="Titulo">Title:</label><br/>
          <input
            type="text"
            id="Titulo"
            name="Titulo"
            value={product.Titulo}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="Categoria">Categoria:</label><br/>
          <textarea
            id="Categoria"
            name="Categoria"
            value={product.Categoria}
            onChange={handleChange}
          ></textarea>
        </div>
        <div>
          <label htmlFor="PrecioVentaBruto">PrecioVentaBruto:</label><br/>
          <input
            type="number"
            id="PrecioVentaBruto"
            name="PrecioVentaBruto"
            value={product.PrecioVentaBruto}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="Foto">Image URL:</label><br/>
          <input
            type="text"
            id="Foto"
            name="Foto"
            value={product.Foto}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="Marca">Marca:</label><br/>
          <input
            type="text"
            id="Marca"
            name="Marca"
            value={product.Marca}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="Stock">Stock:</label><br/>
          <input
            type="number"
            id="Stock"
            name="Stock"
            value={product.Stock}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default ProductCreator;