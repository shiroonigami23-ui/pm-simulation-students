import axios from 'axios';
const api = axios.create({{ baseURL: '/api' }});
export const fetchTasks = () => api.get('/tasks');
export const createTask = (data) => api.post('/tasks', data);
export const updateTask = (id, data) => api.patch(`/tasks/${{id}}`, data);
export const deleteTask = (id) => api.delete(`/tasks/${{id}}`);
