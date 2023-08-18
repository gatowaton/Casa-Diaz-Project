import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const MyContext = createContext({});

export const ConstextoProvider = (props) => {
   const [searchQuery, setSearchQuery] = useState("");
   const [productosMostrados, setProductosMostrados] = useState([]);
   const [products, setProducts] = useState([]);

   //Agregando contexto de carrito
   const [cart,setCart] = useState([]);






   useEffect(() => {
      fetchProducts();
   }, []);

   const fetchProducts = async () => {
      try {
         const response = await axios.get("http://localhost:4000/api/product/");
         setProducts(response.data);
         setProductosMostrados(response.data);
      } catch (error) {
         console.error(error);
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
            cart,
            setCart
         }}>
         {props.children}
      </MyContext.Provider>
   );
};

export default MyContext;
