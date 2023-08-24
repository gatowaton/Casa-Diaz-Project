import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const MyContext = createContext({});

export const ConstextoProvider = (props) => {
   const [searchQuery, setSearchQuery] = useState("");
   const [productosMostrados, setProductosMostrados] = useState([]);
   const [products, setProducts] = useState([]);
   const lstCategoria = ["Iluminación", "Canalización", "Electricidad", "Ferretería y Gasfitería"];

   //Agregando contexto de carrito
   const [cart,setCart] = useState([]);

   // Funcion añadir al carrito

   const buyProducts = (product) => {
      const productRepeat = cart.find((item) => item._id === product._id);

      if (productRepeat){
         setCart(cart.map((item)=> item._id === product._id ? {...product,quanty: productRepeat.quanty + 1} 
         : item));
      } else {
         setCart([...cart, product]);
      }
   };






   useEffect(() => {
      fetchProducts();
   }, []);

   const fetchProducts = async () => {
      try {
         const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/product/`);
         setProducts(response.data);
         setProductosMostrados(response.data);
      } catch (error) {
         console.log(error);
      }
   };

   return (
      <MyContext.Provider
         value={{
            products,
            setProducts,
            searchQuery,
            setSearchQuery,
            productosMostrados,
            setProductosMostrados,
            lstCategoria,
            cart,
            setCart,
            buyProducts
         }}>
         {props.children}
      </MyContext.Provider>
   );
};

export default MyContext;
