const express = require('express');
const paymentRouter = express.Router();
const stripe = require('stripe')(process.env.STRIPE_KEY);

paymentRouter.post('/', async (request, response) => {
  const { amount, paymentMethodId } = request.body;

  try {
    if (!amount || !paymentMethodId) {
      return response.status(400).json({ error: 'Missing payment information' });
    }
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), 
      currency: 'cad',
      payment_method: paymentMethodId,
      automatic_payment_methods: { enabled: true },
      confirm: false, 
    });

    response.send({ clientSecret: paymentIntent.client_secret });

  } catch (error) {
    console.error('Error creating payment intent:', error.message);
    response.status(400).send({ error: { message: error.message } });
  }
});

module.exports = paymentRouter;
