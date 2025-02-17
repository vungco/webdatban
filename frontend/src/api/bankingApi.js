// src/api/customerApi.js
import axiosClient from './axiosClient';

const bankingApi = {
  check(params) {
    return axiosClient.get('/check_banking', { params });
  },
};

export default bankingApi;

