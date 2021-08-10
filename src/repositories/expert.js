import axios from 'axios';

const getExpertById = async (id) => {
  return (await axios.get(process.env.REACT_APP_API_URL + `/experts/${id}`))
    .data;
};
const getExpertSocialNetworksById = async (id) => {
  return (
    await axios.get(
      process.env.REACT_APP_API_URL + `/experts/${id}/social_network_experts`
    )
  ).data;
};
const getExpertAwardsById = async (id) => {
  return (
    await axios.get(process.env.REACT_APP_API_URL + `/experts/${id}/awards`)
  ).data;
};
const getExpertEducationsById = async (id) => {
  return (
    await axios.get(
      process.env.REACT_APP_API_URL + `/experts/${id}/expert_educations`
    )
  ).data;
};
const getExpertSubjectsById = async (id, subjectType) => {
  return (
    await axios.get(
      process.env.REACT_APP_API_URL + `/experts/${id}/subjects/${subjectType}`
    )
  ).data;
};
const getExpertExperienceById = async (id, experienceType) => {
  return (
    await axios.get(
      process.env.REACT_APP_API_URL +
        `/experts/${id}/experience/${experienceType}`
    )
  ).data;
};
const getExpertProductsById = async (id, productType) => {
  return (
    await axios.get(
      process.env.REACT_APP_API_URL + `/experts/${id}/products/${productType}`
    )
  ).data;
};
const getFirstExpertsByLikes = async () => {
  return (
    await axios.get(process.env.REACT_APP_API_URL + `/experts/first-five`)
  ).data;
};
const postExpertsBulk = async (array) => {
  const response = await axios.post(
    process.env.REACT_APP_API_URL + `/experts_bulk`,
    array
  );
  return response.data;
};

export default {
  getFirstExpertsByLikes,
  getExpertById,
  getExpertSocialNetworksById,
  getExpertAwardsById,
  getExpertSubjectsById,
  getExpertEducationsById,
  getExpertExperienceById,
  getExpertProductsById,
  postExpertsBulk,
};
