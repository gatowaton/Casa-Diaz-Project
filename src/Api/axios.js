import axios from "axios"

const instance = axios.create({
    baseURL: "https://casa-back.onrender.com/api/" ||"http://localhost:4000/api",
    withCredentials: true
})

export default instance