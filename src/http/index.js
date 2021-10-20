import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_PREFIX
})

const AUTH_TOKEN = localStorage.getItem('token')

if (AUTH_TOKEN) {
  axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${AUTH_TOKEN}`
}

axiosInstance.interceptors.request.use((config) => {
  return config
}, (error) => {
  return Promise.reject(error)
})

export default axiosInstance;