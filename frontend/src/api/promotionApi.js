// src/api/customerApi.js
import axiosClient from './axiosClient';

const promotionApi = {
  getAllOfAdmin(params) {
    return axiosClient.get('/promotions', { params });
  },

  getAll(params) {
    return axiosClient.get('/promotions/valid', { params });
  },

  getById(id) {
    return axiosClient.get(`/promotions/${id}`);
  },

  getByIdUser(id) {
    return axiosClient.get(`/user/get_customer`);
  },

  create(data) {
    return axiosClient.post('/promotions', data);
  },

  update(id, data) {
    return axiosClient.put(`/promotions/${id}`, data);
  },

  delete(id) {
    return axiosClient.delete(`/promotions/${id}`);
  },
};

export default promotionApi;

