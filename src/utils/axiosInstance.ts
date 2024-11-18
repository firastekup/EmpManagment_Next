// src/utils/axiosInstance.ts
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:4000', // Assurez-vous que l'URL de votre backend est correcte
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
