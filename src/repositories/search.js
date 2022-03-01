import axios from 'axios';
const getExperts = async (text, filters) => {
  let filtersText = '';
  for (let i = 0; i < Object.keys(filters).length; i++) {
    filtersText =
      filtersText +
      `fq=${Object.keys(filters)[i]}:"${Object.values(filters)[i]}"&`;
  }
  return (
    await axios.get(
      process.env.REACT_APP_API_SEARCH_URL +
        `?${filtersText}fq=django_ct:adaggio_tables.experts&fq=text:*${text}*&q.op=OR&q=*:*&rows=20&wt=json`
    )
  ).data;
};
const getOrganizations = async (text) => {
  return (
    await axios.get(
      process.env.REACT_APP_API_SEARCH_URL +
        `?fq=django_ct%3Aadaggio_tables.organizations&fq=text%3A*${text}*&q.op=OR&q=*%3A*&rows=20&wt=json`
    )
  ).data;
};
const getProducts = async (text) => {
  return (
    await axios.get(
      process.env.REACT_APP_API_SEARCH_URL +
        `?fq=django_ct%3Aadaggio_tables.products&fq=text%3A*${text}*&q.op=OR&q=*%3A*&rows=20&wt=json`
    )
  ).data;
};
export default {
  getExperts,
  getOrganizations,
  getProducts,
};
