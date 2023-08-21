//import MyContext from "../Context/MyContext";
import { TYPES } from "../actions/shoppingActions";
//import { useContext } from "react";



/* function seisProductos () {
    const {products} = useContext(MyContext);
    let i = 0;
    let lista = [];
    while (i <= 6){

    }
}
 */



export const shoppingInitialState = {

    productos: [],
    cart:[]
};

export async function fetchProductsFromApi() {
    try {
      const response = await fetch('https://casa-back.onrender.com/api/product/');
      const data = await response.json();

      //console.log("DATA desde la API: ", data);

      const primerosSeis = data.slice(0,6);

      //console.log(primerosSeis);

    

      return primerosSeis; // Obtén solo los primeros 6 productos
    } catch (error) {
      console.error('Error fetching products:', error);
      return [];
    }
  }


  
  export async function shoppingReducer(state, action) {
    switch (action.type) {
        case TYPES.FETCH_PRODUCTS:
            return {
                ...state,
                productos: action.payload,
            };
        case TYPES.ADD_TO_CART: {

        }
        case TYPES.REMOVE_ONE_FROM_CART: {

        }
        case TYPES.REMOVE_ALL_FROM_CART: {

        }
        case TYPES.CLEAR_CART: {

        }
        default:
            return state;
    }
  }