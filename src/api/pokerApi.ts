import axios from 'axios';

const apiBase = import.meta.env.DEV ? '' : import.meta.env.VITE_API_BASE_URL;

export const pokerApi = {
  evaluate(cards: string[]) {
    return axios.post(`${apiBase}/poker/evaluate`, { cards });
  },
  getBestHand() {
    return axios.get(`${apiBase}/poker/winner`);
  },
  clear() {
    return axios.delete(`${apiBase}/poker/winner`);
  },
};
