// src/api/axiosClient.js
import axios from 'axios';

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,  // Sử dụng biến môi trường cho dễ quản lý
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor để xử lý request và response
axiosClient.interceptors.request.use(config => {
  // Thêm token nếu cần
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axiosClient.interceptors.response.use(
  response => response.data,  // Lấy trực tiếp data từ response
  error => {
    // Xử lý lỗi
    return Promise.reject(error);
  }
);

export default axiosClient;
