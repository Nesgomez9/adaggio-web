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
const getProductUrls = async (id) => {
  return (
    await axios.get(
      process.env.REACT_APP_API_URL + `/products/${id}/external_urls`
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
const postProductsBulk = async (array) => {
  const response = await axios.post(
    process.env.REACT_APP_API_URL + `/products_bulk`,
    array
  );
  return response.data;
};
const postProductContributorsBulk = async (array) => {
  const response = await axios.post(
    process.env.REACT_APP_API_URL + `/products-contributors-bulk`,
    array
  );
  return response.data;
};
const postProductUrlsBulk = async (array) => {
  const response = await axios.post(
    process.env.REACT_APP_API_URL + `/products-urls-bulk`,
    array
  );
  return response.data;
};
const postProductSubjectsBulk = async (array) => {
  const response = await axios.post(
    process.env.REACT_APP_API_URL + `/products-subjects-bulk`,
    array
  );
  return response.data;
};
export default {
  getProductTypes,
  getProductContributors,
  getProductSubjects,
  postProductsBulk,
  postProductContributorsBulk,
  postProductUrlsBulk,
  getProductUrls,
  postProductSubjectsBulk,
};
