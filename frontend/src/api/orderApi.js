// src/api/customerApi.js
import axiosClient from './axiosClient';

const orderApi = {
  getAll(params) {
    return axiosClient.get('/orders', { params });
  },
  create(data) {
    return axiosClient.post('/orders', data);
  },
  getAllOfBooking(id) {
    return axiosClient.get(`/booking/${id}/orders`);
  },
};

export default orderApi;

