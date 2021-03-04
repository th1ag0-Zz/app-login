import axios from 'axios';

// Murilo Ip: 192.168.0.4
// Meu Ip: 192.168.1.64

const api = axios.create({
  baseURL: 'http://192.168.0.4:80/'
})

export default api;