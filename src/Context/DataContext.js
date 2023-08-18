import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const dataContext = createContext();

const DataProvider = ({children}) => {
    const [data,setData] = useState([]);
    const [cart,setCart] = useState([]);

    useEffect(() => {
        axios("http://localhost:4000/api/product/").then((res)= setData(res.data))
    },[])

    return(
        <dataContext.Provider value={{data}} >  {children}

        </dataContext.Provider>
    )

}

export default DataProvider