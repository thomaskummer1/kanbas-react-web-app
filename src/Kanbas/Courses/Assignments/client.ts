import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const ASSIGNMENTS_API = `${REMOTE_SERVER}/api/assignments`;
export const deleteAssignment = async (id: string) => {
    const response = await axios.delete(`${ASSIGNMENTS_API}/${id}`);
    return response.data;
}
export const updateAssignment = async (assignment: any) => {
    const response = await axios.put(`${ASSIGNMENTS_API}/${assignment._id}`, assignment);
    return response.data;
}