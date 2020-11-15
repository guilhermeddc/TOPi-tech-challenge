import axios from 'axios';

const Api = axios.create({
  baseURL: 'https://api.github.com/search',
});

export default Api;
