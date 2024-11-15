import React from 'react';
import CheckoutForm from '../components/checkoutForm';
import { Elements} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripe_api_key = process.env.REACT_APP_STRIPE_KEY;
const stripePromise = loadStripe(stripe_api_key);

function PaymentPage () {
    return (
        <>
            <Elements stripe={stripePromise}>
                <CheckoutForm></CheckoutForm>
            </Elements>
        </>
    );
}

export default PaymentPage;