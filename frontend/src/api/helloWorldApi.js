import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api';

export const getHelloWorld = () => {
    return axios.get(`${API_BASE_URL}/hello`);
};