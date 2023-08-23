import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const dataContext = createContext();

const DataProvider = ({children}) => {
    const [data,setData] = useState([]);
    const [cart,setCart] = useState([]);

    useEffect(() => {
        axios("https://casa-back.onrender.com/api/product").then((res)= setData(res.data))
    },[])

    return(
        <dataContext.Provider value={{data}} >  {children}

        </dataContext.Provider>
    )

}

export default DataProvider