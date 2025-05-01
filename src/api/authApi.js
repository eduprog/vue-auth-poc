import axios from 'axios';

const API_URL = 'https://vpsh-01.esistem.com.br';

export async function login({ email, senha, tenantId }) {

  console.log('login', { email, senha, tenantId });
  
  const response = await axios.post(`${API_URL}/api/v1/tokens/access-token`, {
    email,
    senha,
    tenantId
  });
  console.log('response', response.data);
  return response.data; // { token: '...' }
}
