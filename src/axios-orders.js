import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-burger-e307e.firebaseio.com/',
});

export default instance;
