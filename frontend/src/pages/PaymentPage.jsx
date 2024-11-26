import { useLocation } from 'react-router-dom';
import { CardElement, Elements, useStripe, useElements } from '@stripe/react-stripe-js';
import {createPaymentIntent} from '../services/payment';

function PaymentPage() {
  const stripe = useStripe();
  const elements = useElements();
  const location = useLocation();
  const { total, totalAfterTax } = location.state || {};

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      console.error("Stripe has not loaded yet.");
      return;
    }

    try {
      const cardElement = elements.getElement(CardElement);
      const { paymentMethod, error } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
      });

      if (error) {
        console.error('Error creating payment method:', error.message);
        return;
      }

      // Always create a new PaymentIntent to avoid confirming a completed one
      const clientSecret = await createPaymentIntent(totalAfterTax, paymentMethod.id);
      console.log('Payment Intent created, client secret:', clientSecret);

      // Confirm the new PaymentIntent
      const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret);
      if (confirmError) {
        console.error('Error confirming payment:', confirmError.message);
        return;
      }

      console.log('Payment successful:', paymentIntent);
    } catch (error) {
      console.error('Error processing payment:', error.message);
    }
  };

  return (
    <div>
      <h1>Payment Page</h1>
      <form onSubmit={handleSubmit}>
          <CardElement />
        <button type="submit">
          Pay ${totalAfterTax === 0 ? 0 : totalAfterTax}
        </button>
      </form>
    </div>
  );
}

export default PaymentPage;
