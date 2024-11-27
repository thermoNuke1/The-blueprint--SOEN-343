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

const createDriver = async (userData) => {
    try {
        const response = await axios.post(`${baseUrl}/driver`, userData);
        return response.data;
    } catch (error) {
        console.error('Error creating user:', error.message);
        throw error;
    }
};

const getAllUsers = async () => {
    if (!token) {
        console.error('Token is missing');
        return;
    }
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

const applyDiscount = async (username) => {
    if (!token) {
        console.error('Token is missing');
        return;
    }
    try {
        const config = {
            headers: { Authorization: token }  
        };
        const response = await axios.get(`${baseUrl}/${username}/applyDiscount`, config);
        if (response.status === 200) {
            return response.data;
        } else {
            throw new Error(`Failed to apply discount: ${response.statusText}`);
        }
    } catch (error) {
        console.error('Error applying discount:', error.response ? error.response.data : error.message);
        throw error;  
    }
};

const Subscribe = async (username) => {
    if (!token) {
        console.error('Token is missing');
        return;
    }
    try {
        const config = {
            headers: { Authorization: token }  
        };
        const response = await axios.post(
            `${baseUrl}/${username}/Sub`,
            { username }, 
            config 
        );
        return response.data;
    } catch (error) {
        console.error('Error Subscribing:', error);
        throw error;
    }
};

const addPoints = async (username, pointsToAdd) => {
    if (!token) {
        console.error('Token is missing');
        return;
    }
    try {
        const config = {
            headers: { Authorization: token },
        };
        const response = await axios.post(
            `${baseUrl}/addPoints`,
            { username, pointsToAdd },
            config
        );
        return response.data;
    } catch (error) {
        console.error('Error adding points:', error.message);
        throw error;
    }
};

export default { createUser, createDriver, getAllUsers, updateUser, setToken, applyDiscount, getUserByUsername, Subscribe, addPoints };
