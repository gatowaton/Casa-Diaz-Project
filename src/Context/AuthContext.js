import {createContext, useContext, useState} from "react"
import { registerRequest, loginRequest } from "../Api/auth";
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

    //se pasa la respuesta el user
    const signup = async (user) => {
        try {
            const res = await registerRequest(user);
            console.log(res.data);
            setUser(res.data)
            setIsAuthenticated(true)
        } catch (error) {
            
            setErrors(error.response.data)
        }
    }

    const signin = async (user) =>{
        try {
            const res = await loginRequest(user)
            console.log(res.data);
        } catch (error) {
            console.log(error.response.data)
        }
    }
    return (
        <AuthContext.Provider value={{
            signup,
            signin,
            user,
            isAuthenticated,
            errors,
        }}>
            {children}
        </AuthContext.Provider>
    )
}