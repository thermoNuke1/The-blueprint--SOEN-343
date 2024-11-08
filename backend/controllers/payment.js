const paymentRouter = require('express').Router()
const stripe = require('stripe')(process.env.STRIPE_KEY);

paymentRouter.post('/', async (request, response) => {
    const { amount, paymentMethodId } = request.body;

    try {
      if (!amount || !paymentMethodId) {
        return response.status(400).json({
            error: 'missing payment information'
          })
      }
    const paymentIntent = await stripe.paymentIntents.create({
        amount: amount,  
        currency: 'cad', 
        payment_method: paymentMethodId,  
        confirm: true,  
        automatic_payment_methods: {
          enabled: true,
          allow_redirects: 'never',
        },
      });
  
      response.send({
        clientSecret: paymentIntent.client_secret,
      });
    } catch (error) {
        response.status(400).send({
            error: {
              message: error.message,
            },
          });
    }    

})

module.exports = paymentRouter