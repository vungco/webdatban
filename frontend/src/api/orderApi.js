// src/api/customerApi.js
import axiosClient from './axiosClient';

const orderApi = {
  getAll(params) {
    return axiosClient.get('/orders', { params });
  },
  create(data) {
    return axiosClient.post('/orders', data);
  },
};

export default orderApi;

