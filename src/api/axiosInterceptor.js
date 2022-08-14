import axios from 'axios'

// Add a request interceptor
export const interceptor=()=>{
    axios.interceptors.request.use(
      config => {
        const token = localStorage.getItem("token")
        if (token) {
          config.headers['token'] = token
        }
        // config.headers['Content-Type'] = 'application/json';
        return config
      },
      error => {
        Promise.reject(error)
      }
    )
}