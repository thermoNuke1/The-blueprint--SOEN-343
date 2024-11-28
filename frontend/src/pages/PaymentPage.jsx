import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { createPaymentIntent } from '../services/payment';
import userService from '../services/user';
import { Taxcalc } from '../../utilities/taxCalc';
import './paymentPage.css';

function PaymentPage() {
  const stripe = useStripe();
  const elements = useElements();
  const location = useLocation();
  const navigate = useNavigate();

  const user = JSON.parse(window.localStorage.getItem('loggedappUser')) || {};
  const username = user.username || '';

  const totalAfterTax = Number(location.state?.totalAfterTax) || 0; // Initial total

  const [discount, setDiscount] = useState(0);
  const [totalAfterDiscount, setTotalAfterDiscount] = useState(totalAfterTax); // Discounted total
  const [totalWithTax, setTotalWithTax] = useState(totalAfterTax); // Final total after tax
  const [pointsEarned, setPointsEarned] = useState(0);

  useEffect(() => {
    console.log('Username:', username);
    console.log('totalAfterTax:', totalAfterTax, typeof totalAfterTax);
    console.log('Location state:', location.state);

    if (username) {
      fetchDiscount();
    }
  }, [username]);

  const fetchDiscount = async () => {
    try {
      const response = await userService.applyDiscount(username);
      console.log('Discount response:', response);

      if (response.success) {
        const discountPercentage = response.discount;
        const discountedPrice = totalAfterTax - totalAfterTax * (discountPercentage / 100);
        setDiscount(discountPercentage);
        setTotalAfterDiscount(Number(discountedPrice.toFixed(2))); // Ensure it’s a number

        // Add a fixed 15% tax to the discounted price
        const tax = discountedPrice * 0.15; // 15% tax
        setTotalWithTax(Number((discountedPrice + tax).toFixed(2)));
      }
    } catch (error) {
      console.error('Error fetching discount:', error);
    }
  };

  const handleAddPoints = async (points) => {
    try {
      const response = await userService.addPoints(username, points);
      console.log('Points added response:', response);
    } catch (error) {
      console.error('Error adding points:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      console.error('Stripe has not loaded yet.');
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

      const clientSecret = await createPaymentIntent(
        totalWithTax, // Pass total with tax to Stripe
        paymentMethod.id
      );
      console.log('Payment Intent created, client secret:', clientSecret);

      const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret);
      if (confirmError) {
        console.error('Error confirming payment:', confirmError.message);
        return;
      }

      console.log('Payment successful:', paymentIntent);

      const points = Math.floor(totalAfterDiscount); // Earn points on discounted price only
      setPointsEarned(points);
      await handleAddPoints(points);

      navigate('/payment-success', {
        state: { clientSecret, totalAfterTax, trackingId: location.state?.trackingId, timestamp: location.state?.timestamp },
      });
    } catch (error) {
      console.error('Error processing payment:', error.message);
    }
  };

  if (!stripe || !elements) {
    return <p>Loading payment elements...</p>;
  }

  return (
    <div className="payment-container">
      <h1 className="payment-header">Payment Page</h1>
      <form className="payment-form" onSubmit={handleSubmit}>
        <CardElement className="stripe-element" />
        <p>
          <strong>Total:</strong> ${totalAfterTax.toFixed(2)}
        </p>
        {discount > 0 && (
          <p>
            <strong>Discount Applied:</strong> {discount}%
          </p>
        )}
        <p>
          <strong>Total after Discount:</strong> ${totalAfterDiscount.toFixed(2)}
        </p>
        <p>
          <strong>Total after Tax:</strong> ${totalWithTax.toFixed(2)}
        </p>
        <button type="submit" className="payment-button">
          Submit Payment
        </button>
      </form>
    </div>
  );
}

export default PaymentPage;
