import { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { createPaymentIntent } from '../services/payment';

const CheckoutForm = () => {
  const [amount, setAmount] = useState(500); // Amount in cents (e.g., $5 = 500 cents)
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (error) {
      console.log(error.message);
    } else {
      const clientSecret = await createPaymentIntent(amount, paymentMethod.id);
      await confirmPayment(clientSecret);
    }
  };

  const confirmPayment = async (clientSecret) => {
    const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret);

    if (error) {
      console.log(error.message);
    } else if (paymentIntent.status === 'succeeded') {
      console.log('Payment succeeded!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Complete your payment</h3>
      <CardElement />
      <button type="submit" disabled={!stripe}>Pay ${amount / 100}</button>
    </form>
  );
};

export default CheckoutForm;
