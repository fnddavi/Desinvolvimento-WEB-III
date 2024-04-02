// services/api.ts

import axios, { AxiosInstance } from 'axios';

const api: AxiosInstance = axios.create({
  baseURL: "https://servicodados.ibge.gov.br/api/docs/localidades",
  headers: {
    'Content-Type': 'application/json',
  }
});

export default api;