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
  update(id, data) {
    return axiosClient.put(`/orders/${id}`, data);
  },
  delete(id) {
    return axiosClient.delete(`/orders/${id}`);
  },
};

export default orderApi;

