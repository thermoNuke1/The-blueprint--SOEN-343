// stripe.js
import { loadStripe } from '@stripe/stripe-js';

const config = require('../../../backend/utils/config');

const stripe_api_key = config.STRIPE_KEY;
console.log('Stripe API Key:', stripe_api_key); // Make sure the key is logged correctly

const stripePromise = loadStripe(stripe_api_key);

export { stripePromise };
