// src/api/customerApi.js
import axiosClient from './axiosClient';

const table_bookingApi = {
  getAll(params) {
    return axiosClient.get('/table_bookings', { params });
  },

  getById(id) {
    return axiosClient.get(`/table_bookings/${id}`);
  },

  create(data) {
    return axiosClient.post('/table_bookings', data);
  },

  update(id, data) {
    return axiosClient.put(`/table_bookings/${id}`, data);
  },

  delete(id) {
    return axiosClient.delete(`/table_bookings/${id}`);
  },
};

export default table_bookingApi;

