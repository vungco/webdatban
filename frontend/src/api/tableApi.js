// src/api/customerApi.js
import axiosClient from './axiosClient';

const tableApi = {
  getAll(params) {
    return axiosClient.get('/tables', { params });
  },

  getById(id) {
    return axiosClient.get(`/tables/${id}`);
  },
  setStatus(id) {
    return axiosClient.get(`table/${id}/setStatus`);
  },

  resetStatus() {
    return axiosClient.get(`table/resetStatus`);
  },

  getByIdUser(id) {
    return axiosClient.get(`/user/get_customer`);
  },

  create(data) {
    return axiosClient.post('/tables', data);
  },

  update(id, data) {
    return axiosClient.put(`/tables/${id}`, data);
  },

  delete(id) {
    return axiosClient.delete(`/tables/${id}`);
  },
};

export default tableApi;

