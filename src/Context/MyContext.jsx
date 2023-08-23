import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const MyContext = createContext({});

export const ConstextoProvider = (props) => {
   const [searchQuery, setSearchQuery] = useState("");
   const [productosMostrados, setProductosMostrados] = useState([]);
   const [products, setProducts] = useState([]);
   const lstCategoria = ["Iluminación", "Canalización", "Electricidad", "Ferretería y Gasfitería"];

   //Agregando contexto de carrito

   const [cart, setCart] = useState(() => {
      const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
      console.log("carrito salvado", savedCart)
      return savedCart;
    });
   

   // Funcion añadir al carrito

   const buyProducts = (product) => {
      const productRepeat = cart.find((item) => item._id === product._id);
    
      if (productRepeat) {
        setCart(
          cart.map((item) =>
            item._id === product._id
              ? {
                  ...item,
                  quantity: (item.quantity || 0) + 1,
                }
              : item
          )
        );
      } else {
        setCart([...cart, { ...product, quantity: 1 }]);
        localStorage.setItem("cart", JSON.stringify([...cart, { ...product, quantity: 1 }]));
      console.log("carrito agregado",cart)

      }
      console.log("carrito agregado",cart)
    };
    






   useEffect(() => {
      fetchProducts();
      const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
  setCart(savedCart);
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
