import axios from 'axios';
const baseUrl = '/api/parcel';

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

const getAll = async () => {
    try {
        const response = await axios.get(baseUrl, {
            headers: { Authorization: token }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error.message);
        throw error;
    }
};

const create = async newObject => {
    try {
        const config = {
            headers: { Authorization: token }
        };
        const response = await axios.post(baseUrl, newObject, config);
        return response.data;
    } catch (error) {
        console.error('Error creating object:', error.message);
        throw error;
    }
};

export default { getAll, create, setToken };
