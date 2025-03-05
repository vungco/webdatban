// src/api/customerApi.js
import axiosClient from './axiosClient';

const feedbackApi = {
  getAllOfAdmin(params) {
    return axiosClient.get('/feedbacks', { params });
  },

  getAll(params) {
    return axiosClient.get('/feedbacks/valid', { params });
  },

  getById(id) {
    return axiosClient.get(`/feedbacks/${id}`);
  },

  getByIdUser(id) {
    return axiosClient.get(`/user/get_customer`);
  },

  create(data) {
    return axiosClient.post('/feedbacks', data);
  },

  update(id, data) {
    return axiosClient.put(`/feedbacks/${id}`, data);
  },

  delete(id) {
    return axiosClient.delete(`/feedbacks/${id}`);
  },
};

export default feedbackApi;

