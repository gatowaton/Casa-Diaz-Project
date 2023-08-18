import React, { useContext, useEffect, useReducer, useState } from 'react'
import { shoppingInitialState, shoppingReducer } from '../../reducers/shoppingReducer';
import {TYPES} from "../../actions/shoppingActions";
import ProductItem from './ProductItem';
import { fetchProductsFromApi } from '../../reducers/shoppingReducer';
import MyContext from '../../Context/MyContext';





const CarroDePruebas = () => {
    const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
    const { productos, cart } = state;
    const {productosMostrados} = useContext(MyContext)



    const addToCart = () => {};
    const delFromCart = () => {};
    const clearCart = () => {};

    return (
        
        
        <div>
            <h2>Carro de pruebas</h2>
            <h3>Extrayendo productos</h3>
            <article className='box'>
            {productosMostrados ? (
            productosMostrados.slice(0,6).map((product) => (
            <ProductItem key={product._id} data={product} addToCart={addToCart}/>

    ))
  ) : (
    <p>Loading products...</p>
  )}
           
            </article>
            <h3>Carrito con cosas dentro</h3>
            <article className='box'>
            </article>
        </div>
    );
};

export default CarroDePruebas;