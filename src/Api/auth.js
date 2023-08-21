import axios from "axios"

const API = "https://casa-back.onrender.com/api"

export const registerRequest = user => axios.post(`${API}/register`, user)

//recibe un user => PETICION POST a API con el user
export const loginRequest = user => axios.post(`${API}/login`, user)