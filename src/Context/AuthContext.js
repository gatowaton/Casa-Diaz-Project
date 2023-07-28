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


    //se pasa la respuesta el user
    const signup = async (user) => {
        const res = await registerRequest(user);
        console.log(res.data);
        setUser(res.data)
    }
    return (
        <AuthContext.Provider value={{
            signup,
            user
        }}>
            {children}
        </AuthContext.Provider>
    )
}