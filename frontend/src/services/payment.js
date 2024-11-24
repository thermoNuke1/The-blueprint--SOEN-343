import axios from 'axios';

const API_URL = '/api/payment';


const baseUrl = '/api/payment';
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


const setToken = (newToken) => {
    token = `Bearer ${newToken}`;
};


initializeToken();

const createPaymentIntent = async (amount, paymentMethodId) => {
  try {
    const response = await axios.post(`${API_URL}`, {
      amount,
      paymentMethodId,
    });
    return response.data.clientSecret;
  } catch (error) {
    console.error('Error creating payment intent:', error);
    throw error;
  }
};
export default {
  createPaymentIntent,
  setToken,
};