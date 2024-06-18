import axios from 'axios';

// API URL
//const API_URL = 'http://backend:5000/api';
const API_URL = 'http://localhost:5000/api';
//const API_URL = 'http://127.0.0.1:5000/api';

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

//
// Register API endpoint
//
export const register = async (username, password, confirmPassword) => {
    try {
        const response = await api.post('/processregister', {username, password, confirmPassword});
        console.log(response);
        return response.data;
    } catch (error) {
        if (error.response) {
            // Server responded with a status other than 2xx
            console.error("Server responded with an error:", error.response.status, error.response.data);
        } else if (error.request) {
            // Request was made but no response received
            console.error("No response received:", error.request);
        } else {
            // Something happened in setting up the request
            console.error("Error in setting up request:", error.message);
        }
        throw error;
    }
};



//
// Login API endpoint
//
export const login = async (username, password) => {
    try {
        const response = await api.post('/processlogin', { username, password });
        return response.data;
    } catch (error) {
        console.error("Error processing login: ", error);
        return null;
    }
}



//
// Get User API endpoint
//
export const fetchUser = async() => {
    try {
        const response = await api.get('/getuser');
        console.log("RESPONSE:", response);
        return response.data.username;
    } catch (error) {
        console.error("Error fetching username: ", error);
        return null;
    }
}