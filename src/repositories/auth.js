import axios from 'axios';
const { HttpProvider } = require('../providers');

const login = async (email, password) => {
  const response = await axios.post(process.env.REACT_APP_API_URL + '/login', {
    email,
    password,
  });
  return response.data;
};
const loginWhitToken = async (token) => {
  HttpProvider.setHeaderToken(token);
  return (await axios.post(process.env.REACT_APP_API_URL + '/auth', token))
    .data;
};
const logout = async () => {
  return (await axios.patch(process.env.REACT_APP_API_URL + '/auth')).data;
};

export default {
  login,
  loginWhitToken,
  logout,
};
