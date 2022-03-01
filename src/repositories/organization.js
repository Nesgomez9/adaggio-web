import axios from 'axios';
const getOrganizationById = async (id) => {
  return (
    await axios.get(process.env.REACT_APP_API_URL + `/organizations/${id}`)
  ).data;
};
const getSocialNetworksByOrganizations = async (id) => {
  return (
    await axios.get(
      process.env.REACT_APP_API_URL +
        `/organizations/${id}/social_network_organizations`
    )
  ).data;
};
const getSubjectsByOrganization = async (id, type) => {
  return (
    await axios.get(
      process.env.REACT_APP_API_URL + `/organizations/${id}/subjects/${type}`
    )
  ).data;
};
const getGivenAwardsByOrganization = async (id) => {
  return (
    await axios.get(
      process.env.REACT_APP_API_URL + `/organizations/${id}/given-awards`
    )
  ).data;
};
const getReceivedAwardsByOrganization = async (id) => {
  return (
    await axios.get(
      process.env.REACT_APP_API_URL + `/organizations/${id}/awards`
    )
  ).data;
};
const getEducationInOrganization = async (id) => {
  return (
    await axios.get(
      process.env.REACT_APP_API_URL + `/organizations/${id}/education`
    )
  ).data;
};
const getProductsInOrganization = async (id, type) => {
  return (
    await axios.get(
      process.env.REACT_APP_API_URL + `/organizations/${id}/products/${type}`
    )
  ).data;
};
const getFirstOrganizationsByLikes = async () => {
  return (
    await axios.get(process.env.REACT_APP_API_URL + `/organizations-first`)
  ).data;
};
const getSimilaryOrganizationsByType = async (type) => {
  return (
    await axios.get(
      process.env.REACT_APP_API_URL + `/similary-organizations/${type}`
    )
  ).data;
};
const getOrganizationTypes = async () => {
  return (
    await axios.get(process.env.REACT_APP_API_URL + `/organization_types`)
  ).data;
};
const getOrganizations = async () => {
  return (await axios.get(process.env.REACT_APP_API_URL + `/organizations`))
    .data;
};
const postOrganizationsBulk = async (array) => {
  const response = await axios.post(
    process.env.REACT_APP_API_URL + `/organizations-bulk`,
    array
  );
  return response.data;
};
export default {
  getFirstOrganizationsByLikes,
  getOrganizationById,
  getSocialNetworksByOrganizations,
  getSubjectsByOrganization,
  getGivenAwardsByOrganization,
  getReceivedAwardsByOrganization,
  getSimilaryOrganizationsByType,
  getEducationInOrganization,
  getProductsInOrganization,
  getOrganizationTypes,
  postOrganizationsBulk,
  getOrganizations,
};
