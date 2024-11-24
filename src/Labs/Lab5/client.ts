import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export const fetchWelcomeMessage = async () => {
  const response = await axios.get(`${REMOTE_SERVER}/lab5/welcome`);
  return response.data;
};
const ASSIGNMENT_API = `${REMOTE_SERVER}/lab5/assignment`;
export const fetchAssignment = async () => {
  const response = await axios.get(`${ASSIGNMENT_API}`);
  return response.data;
};
export const updateTitle = async (title: string) => {
  const response = await axios.get(`${ASSIGNMENT_API}/title/${title}`);
  return response.data;
};
const TODOS_API = `${REMOTE_SERVER}/lab5/todos`;
export const fetchTodos = async () => {
  const response = await axios.get(TODOS_API);
  return response.data;
};
export const removeTodo = async (todo: any) => {
  const response = await axios.get(`${TODOS_API}/${todo.id}/delete`);
  return response.data;
};
export const deleteTodo = async (todo: any) => {
  const response = await axios.delete(`${TODOS_API}/${todo.id}`);
  return response.data;
};
export const createTodo = async () => {
  const response = await axios.get(`${TODOS_API}/create`);
  return response.data;
};
export const postTodo = async (todo: any) => {
  const response = await axios.post(`${TODOS_API}`, todo);
  return response.data;
};
export const getModule = async () => {
  const response = await axios.get(`${REMOTE_SERVER}/lab5/assignment`);
  return response.data;
};
export const getModuleName = async () => {
  const response = await axios.get(`${REMOTE_SERVER}/lab5/assignment/title`);
  return response.data;
};
export const updateName = async (name: string) => {
  const response = await axios.get(`${REMOTE_SERVER}/lab5/assignment/title/${name}`);
  return response.data;
}
export const updateScore = async (score: number) => {
  const response = await axios.get(`${REMOTE_SERVER}/lab5/assignment/score/${score}`);
  return response.data;
}
export const updateCompleted = async (completed: boolean) => {
  const response = await axios.get(`${REMOTE_SERVER}/lab5/assignment/completed/${completed}`);
  return response.data;
}
export const updateDescription = async (description: string) => {
  const response = await axios.get(`${REMOTE_SERVER}/lab5/assignment/description/${description}`);
  return response.data;
}