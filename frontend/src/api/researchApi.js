import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/research-tasks';

export const submitResearchTask = (task) => {
  return axios.post(API_BASE_URL, task);
};

export const getResearchTasks = () => {
  return axios.get(API_BASE_URL);
};

export const approveResearchTask = (id) => {
  return axios.put(`${API_BASE_URL}/${id}/approve`);
};

export const rejectResearchTask = (id) => {
  return axios.put(`${API_BASE_URL}/${id}/reject`);
};