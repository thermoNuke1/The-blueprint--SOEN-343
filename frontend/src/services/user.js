import axios from 'axios';

const baseUrl = '/api/users';
let token = null;

const initializeToken = () => {
    try {
        const storedUser = JSON.parse(localStorage.getItem('loggedappUser'));
        if (storedUser && storedUser.token) {
            token = `Bearer ${storedUser.token}`;
        } 
    } catch (error) {
        console.error('Error initializing token:', error.message);
        token = null;
    }
};

initializeToken();

const setToken = newToken => {
    token = `Bearer ${newToken}`;
    console.log(token);
};

const createUser = async (userData) => {
    try {
        const response = await axios.post(baseUrl, userData);
        return response.data;
    } catch (error) {
        console.error('Error creating user:', error.message);
        throw error;
    }
};

const getAllUsers = async () => {
    try {
        const response = await axios.get(baseUrl, {
            headers: { Authorization: token }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching users:', error.message);
        throw error;
    }
};

const getUserByUsername = async (username) => {
    try {
        const config = {
            headers: { Authorization: token }
        };
        const response = await axios.get(`${baseUrl}/${username}`, config);
        return response.data;
    } catch (error) {
        console.error(`Error fetching user ${username}:`, error.message);
        throw error;
    }
};

const updateUser = async (userData) => {
    try {
        const config = {
            headers: { Authorization: token }
        };
        const response = await axios.put(baseUrl, userData, config);
        return response.data;
    } catch (error) {
        console.error('Error updating user:', error.message);
        throw error;
    }
};

export default { createUser, getAllUsers, updateUser, setToken, getUserByUsername };
