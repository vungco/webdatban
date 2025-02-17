// src/api/customerApi.js
import axiosClient from './axiosClient';

const order_detailApi = {
  getAll(params) {
    return axiosClient.get('/order_details', { params });
  },
  create(data) {
    return axiosClient.post('/order_details', data);
  },
};

export default order_detailApi;

