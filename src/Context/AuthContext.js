import {createContext, useContext, useState} from "react"
import { registerRequest } from "../Api/auth";

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


    //se pasa la respuesta el user
    const signup = async (user) => {
        try {
            const res = await registerRequest(user);
            console.log(res.data);
            setUser(res.data)
            setIsAuthenticated(true)
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <AuthContext.Provider value={{
            signup,
            user,
            isAuthenticated,
        }}>
            {children}
        </AuthContext.Provider>
    )
}