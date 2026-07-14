import axios from "axios"
const api = axios.create({
    baseURL : import.meta.env.VITE_API_URL,
    withCredentials : true,
    withXSRFToken : true,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});



//interceptor request token
api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token")

    if(token){
        config.headers.Authorization = 'Bearer ${token'
    }

    return config
})

//interceptor response
api.interceptors.response.use(
    (res)=>res,
    (err) => {
        if(err.response?.status === 401){
            localStorage.removeItem("token")
        }
        return Promise.reject(err)
    }
)

export default api
