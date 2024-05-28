import axios from 'axios';

// API URL
const API_URL = 'http://backend:5000/api'

const api = axios.create({
    baseURL: API_URL,
});

// Register API endpoint
export const register = async (username, password, confirmPassword) => {
    try {
        const response = await api.post('/register', {username, password, confirmPassword});
        return response.data;
    } catch (error) {
        console.error("Error registering", error);
        throw error;
    }
};
