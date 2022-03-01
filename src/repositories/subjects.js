import axios from 'axios';
const postSubjectsBulk = async (array) => {
  try {
    const response = await axios.post(
      process.env.REACT_APP_API_URL + `/subjects-bulk`,
      array
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
const postProgramsBulk = async (array) => {
  try {
    const response = await axios.post(
      process.env.REACT_APP_API_URL + `/programs-bulk`,
      array
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
const getSubjects = async () => {
  return (await axios.get(process.env.REACT_APP_API_URL + `/subjects`)).data;
};
export default { postSubjectsBulk, postProgramsBulk, getSubjects };
