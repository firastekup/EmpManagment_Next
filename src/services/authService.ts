// services/authService.ts
import axios from 'axios';

const API_URL = 'http://localhost:4000/auth';

export const login = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    return response.data;
  } catch (error) {
    throw error; // Propager l'erreur pour qu'elle soit gérée dans la page
  }
};

export const register = async (
  name: string,
  email: string,
  password: string,
  role: string
) => {
  try {
    const response = await axios.post(`${API_URL}/register`, { name, email, password, role });
    return response.data;
  } catch (error) {
    throw error; // Propager l'erreur pour qu'elle soit gérée dans la page
  }
};
