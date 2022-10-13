import axios from 'axios'
const api = axios.create({ 
  baseURL: 'https://api.connectnow.dev/api/' 
})
var token = null
api.interceptors.request.use(request => {
  const user =  JSON.parse(localStorage.getItem('user'))
  token = user?.token || null
  if (token) {
    request.headers['Authorization'] = `Bearer ${token}`
  }
  return request
})
export default api