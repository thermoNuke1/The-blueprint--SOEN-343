import axios from 'axios';

const API_URL = 'http://localhost:5000'; // URL of the backend

export const createPaymentIntent = async (amount, paymentMethodId) => {
  try {
    const response = await axios.post(`${API_URL}/create-payment-intent`, {
      amount,
      paymentMethodId,
    });
    return response.data.clientSecret;
  } catch (error) {
    console.error('Error creating payment intent:', error);
    throw error;
  }
};
