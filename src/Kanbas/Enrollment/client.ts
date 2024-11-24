import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const ENROLLMENTS_API = `${REMOTE_SERVER}/api/enrollments`;
export const fetchAllEnrollments = async () => {
  const { data } = await axios.get(ENROLLMENTS_API);
  return data;
};
export const addEnrollment = async (enrollment: any) => {
  const { data } = await axios.post(`${ENROLLMENTS_API}/enrollments/${enrollment.course}/${enrollment.user}`);
  return data;
};
export const deleteEnrollment = async (enrollment: any) => {
  const { data } = await axios.delete(`${ENROLLMENTS_API}/${enrollment}`);
  return data;
};