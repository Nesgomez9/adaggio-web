import axios from 'axios';

const getProductTypes = async () => {
  return (await axios.get(process.env.REACT_APP_API_URL + `/product_types`))
    .data;
};
const getProductContributors = async (id) => {
  return (
    await axios.get(
      process.env.REACT_APP_API_URL + `/products/${id}/contributors`
    )
  ).data;
};
export default {
  getProductTypes,
  getProductContributors,
};
