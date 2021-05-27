import axios from 'axios';

export const login = (credentials) => {
    return axios.post('http://localhost:3333/api/login',credentials);
}
export const register = (formData) => {
    return axios.post('http://localhost:3333/api/register',formData);
}
export const logout = () => {
    return axios.post('http://localhost:3333/api/logout');
}