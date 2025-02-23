// src/api/customerApi.js
import axiosClient from './axiosClient';

const tableApi = {
  getAll(params) {
    return axiosClient.get('/menu_categorys', { params });
  },

  getById(id) {
    return axiosClient.get(`/menu_categorys/${id}`);
  },

  create(data) {
    return axiosClient.post('/menu_categorys', data);
  },

  update(id, data) {
    return axiosClient.put(`/menu_categorys/${id}`, data);
  },

  delete(id) {
    return axiosClient.delete(`/menu_categorys/${id}`);
  },
};

export default tableApi;

