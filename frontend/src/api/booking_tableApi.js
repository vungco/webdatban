// src/api/customerApi.js
import axiosClient from './axiosClient';

const table_bookingApi = {
  getAll(params) {
    return axiosClient.get('/booking_tables', { params });
  },

  getById(id) {
    return axiosClient.get(`/booking_tables/${id}`);
  },

  create(data) {
    return axiosClient.post('/booking_tables', data);
  },

  update(id, data) {
    return axiosClient.put(`/booking_tables/${id}`, data);
  },

  delete(id) {
    return axiosClient.delete(`/booking_tables/${id}`);
  },
};

export default table_bookingApi;

