import axios from "./axios"

export const registerRequest = async (user) => axios.post(`/register`, user)

//recibe un user => PETICION POST a API con el user
export const loginRequest = async (user) => axios.post(`/login`, user)

export const verifyTokenReq = async () => axios.get("/verify")