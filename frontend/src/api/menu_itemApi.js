// src/api/customerApi.js
import axiosClient from './axiosClient';

const tableApi = {
  getAll(params) {
    return axiosClient.get('/menu_items', { params });
  },

  getById(id) {
    return axiosClient.get(`/menu_items/${id}`);
  },

  getByIdUser(id) {
    return axiosClient.get(`/user/get_customer`);
  },

  create(data) {
    return axiosClient.post('/menu_items', data);
  },

  update(id, data) {
    return axiosClient.put(`/menu_items/${id}`, data);
  },

  delete(id) {
    return axiosClient.delete(`/menu_items/${id}`);
  },
};

export default tableApi;

