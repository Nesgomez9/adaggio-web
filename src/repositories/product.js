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
const getProductSubjects = async (id, type) => {
  return (
    await axios.get(
      process.env.REACT_APP_API_URL + `/products/${id}/subjects/${type}`
    )
  ).data;
};
export default {
  getProductTypes,
  getProductContributors,
  getProductSubjects,
};
