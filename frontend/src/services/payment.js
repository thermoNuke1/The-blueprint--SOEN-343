import axios from 'axios';

const API_URL = '/api/payment';

export const createPaymentIntent = async (amount, paymentMethodId) => {
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

