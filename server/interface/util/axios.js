import axios from 'axios';

const instance = axios.create({
  baseURL: `http://${process.env.HOST || 'localhost'}:${process.env.PORT || 3000}`,
  timeout: 10000,
  headers: {
  }
})

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (res) {
  let data = res.data
  return data
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject('http通信响应错误拦截器信息：' + error);
});



export default instance
