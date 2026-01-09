import axios from "axios";

// 根域名配置
// 超时时间
const request = axios.create({
  baseURL: 'http://geek.itheima.net/v1_0',
  timeout: 5000
})

// 请求拦截器/响应拦截器
// 添加请求拦截器
request.interceptors.request.use((config) => {
  return config
}, (error) => {
  return Promise.reject(error)
})
// 添加响应拦截器
request.interceptors.response.use((response) => {
  return response.data
},
(error) => {
  return Promise.reject(error)
})

export {request}
