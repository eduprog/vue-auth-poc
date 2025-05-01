import axios from 'axios';
import { useAuthStore } from '../store/authStore';

const API_URL = 'https://vpsh-01.esistem.com.br';

export async function getPeople() {
  const auth  = useAuthStore();
  const response = await axios.get(`${API_URL}/api/v1/pessoa/buscar-todos-simplificado`, {
    headers: {
      Authorization: `Bearer ${auth.accessToken}`,
    },
  });
  return response.data;
}
