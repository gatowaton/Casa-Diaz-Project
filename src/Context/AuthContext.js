import {createContext, useContext, useEffect, useState} from "react"
import { registerRequest, loginRequest, verifyTokenReq } from "../Api/auth";
import Cookies from "js-cookie"

export const AuthContext = createContext()

//exportar datos de AuthContext
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context){
        throw new Error("useAuth must be used within an AuthProvider")
    }
    return context
}

//provider. componete que engloba a otros - rutas en app
export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [errors, setErrors] = useState([])
    const [loading, setLoading] = useState(true);

    //se pasa la respuesta el user
    const signup = async (user) => {
        try {
            const res = await registerRequest(user);
            console.log(res.data);
            setUser(res.data)
            setIsAuthenticated(true)
        } catch (error) {
            console.log(error);
            setErrors(error.response.data)
        }
    }

    const signin = async (user) =>{
        try {
            const res = await loginRequest(user)
            console.log(res.data);
            //guarda datos del usuario
            setUser(res.data)
            setIsAuthenticated(true)
            
        } catch (error) {
            console.log(error);
            console.log(error.response.data)
        }
    }

    //vamos a guardar la cookie jscookie
    useEffect(() => {
        const checkLogin = async () => {
            const cookies = Cookies.get();
            if (!cookies.token) {
              setIsAuthenticated(false);
              setLoading(false);
              return;
            }
      
            try {
              const res = await verifyTokenReq(cookies.token);
              console.log(res);
              if (!res.data) return setIsAuthenticated(false);
              setIsAuthenticated(true);
              setUser(res.data);
              setLoading(false);
            } catch (error) {
              setIsAuthenticated(false);
              setLoading(false);
            }
          };
          checkLogin();
      }, []);
    
    

    return (
        <AuthContext.Provider value={{
            signup,
            signin,
            loading,
            user,
            isAuthenticated,
            errors,
        }}>
            {children}
        </AuthContext.Provider>
    )
}