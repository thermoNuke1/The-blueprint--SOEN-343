import { useLocation, useNavigate } from 'react-router-dom';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import {createPaymentIntent} from '../services/payment';
import './paymentPage.css';

function PaymentPage() {
  const stripe = useStripe();
  const elements = useElements();
  const location = useLocation();
  const { totalAfterTax, trackingId, timestamp } = location.state || {};
  const navigate = useNavigate();

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

      const clientSecret = await createPaymentIntent(totalAfterTax, paymentMethod.id);
      console.log('Payment Intent created, client secret:', clientSecret);

      const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret);
      if (confirmError) {
        console.error('Error confirming payment:', confirmError.message);
        return;
      }

      console.log('Payment successful:', paymentIntent);
      navigate('/payment-success', {
        state: {
            clientSecret,
            totalAfterTax,
            trackingId,
            timestamp,
        },
      });
    } catch (error) {
      console.error('Error processing payment:', error.message);
    }
  };

  return (
    <div className="payment-container">
    <h1 className="payment-header">Payment Page</h1>
      <form className="payment-form" onSubmit={handleSubmit}>
        <CardElement className="stripe-element" />
        <button type="submit" className="payment-button">
          Pay ${totalAfterTax === 0 ? 0 : totalAfterTax}
        </button>
      </form>
    
  </div>
  );
}

export default PaymentPage;
