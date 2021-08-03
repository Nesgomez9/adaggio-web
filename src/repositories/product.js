import axios from 'axios';

const getProductTypes = async () => {
  return (await axios.get(process.env.REACT_APP_API_URL + `/product_types`))
    .data;
};

export default {
  getProductTypes,
};
