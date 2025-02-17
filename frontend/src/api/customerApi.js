// src/api/customerApi.js
import axiosClient from './axiosClient';

const customerApi = {
  getAll(params) {
    return axiosClient.get('/customers', { params });
  },

  getById(id) {
    return axiosClient.get(`/customers/${id}`);
  },

  getByIdUser(id) {
    return axiosClient.get(`/user/get_customer`);
  },

  create(data) {
    return axiosClient.post('/customers', data);
  },

  update(id, data) {
    return axiosClient.put(`/customers/${id}`, data);
  },

  delete(id) {
    return axiosClient.delete(`/customers/${id}`);
  },
};

export default customerApi;

