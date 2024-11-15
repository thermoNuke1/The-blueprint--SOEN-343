// import { useState } from 'react';
// import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
// import { createPaymentIntent } from '../services/payment';
// import { Taxcalc } from '../../utilities/taxCalc';
// import { toast } from 'react-toastify'; // Import toast


// const CheckoutForm = (total) => {
//   const [amount, setAmount] = useState(total); // Amount in cents (e.g., $5 = 500 cents)
//   const [price, setPrice] = useState(); // Price input for tax calculation
//   const [taxResult, setTaxResult] = useState({ tax: "0.00", totalWithTax: "0.00" });

//   const stripe = useStripe();
//   const elements = useElements();

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!stripe || !elements) {
//       return;
//     }

//     const { error, paymentMethod } = await stripe.createPaymentMethod({
//       type: 'card',
//       card: elements.getElement(CardElement),
//     });

//     if (error) {
//       console.log(error.message);
//     } else {
//       const clientSecret = await createPaymentIntent(amount, paymentMethod.id);
//       await confirmPayment(clientSecret);
//     }
//   };

//   const confirmPayment = async (clientSecret) => {
//     const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret);

//     if (error) {
//       console.log(error.message);
//     } else if (paymentIntent.status === 'succeeded') {
//       console.log('Payment succeeded!');
//       toast.success("Payment Successful!")
//     }
//   };

//   const handlePriceChange = (event) => {
//     setPrice(Number(event.target.value));
//   };

//   const calculateTax = () => {
//     const result = Taxcalc(price);
//     setTaxResult(result);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h3>Complete your payment</h3>
//       <CardElement />
      
//       {/* Input for price */}
//       <input
//         type="text"
//         value={price}
//         onChange={handlePriceChange}
//         placeholder="Enter price"
//       />

//       {/* Button to calculate tax */}
//       <button type="button" onClick={calculateTax}>
//         Calculate Tax
//       </button>

//       {/* Display tax calculation result */}
//       <p id="test">
//         <b>Total in dollar:</b> {taxResult.totalWithTax} (Tax: {taxResult.tax})
//       </p>

//       {/* Submit button for payment */}
//       <button type="submit" disabled={!stripe}>
//         Pay ${taxResult.totalWithTax}
//       </button>
//     </form>
//   );
// };

// // export default CheckoutForm;
// import { useState, useEffect } from 'react';
// import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
// import { Taxcalc } from '../../utilities/taxCalc';
// import { toast } from 'react-toastify';

// const CheckoutForm = ({ total, clientSecret }) => {
//   const [amount, setAmount] = useState(total * 100); // Amount in cents
//   const [price, setPrice] = useState(total);
//   const [taxResult, setTaxResult] = useState({ tax: "0.00", totalWithTax: "0.00" });

//   const stripe = useStripe();
//   const elements = useElements();

//   useEffect(() => {
//     // Calculate tax when total or price changes
//     const result = Taxcalc(total);
//     setTaxResult(result);
//   }, [total]);

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!stripe || !elements) {
//       toast.error("Stripe is not properly loaded.");
//       return;
//     }

//     if (!clientSecret) {
//       toast.error("Payment intent is not available.");
//       return;
//     }

//     try {
//       const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
//         payment_method: {
//           card: elements.getElement(CardElement),
//         },
//       });

//       if (error) {
//         toast.error(`Payment failed: ${error.message}`);
//       } else if (paymentIntent.status === "succeeded") {
//         toast.success("Payment Successful!");
//       }
//     } catch (err) {
//       toast.error(`Payment error: ${err.message}`);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h3>Complete your payment</h3>
//       <CardElement />

//       <p id="test">
//         <b>Total after tax:</b> ${taxResult.totalWithTax}
//       </p>

//       <button type="submit">
//         Pay ${taxResult.totalWithTax}
//       </button>
//     </form>
//   );
// };

// export default CheckoutForm;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

const PaymentForm = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cardNumber && expiryDate) {
      setSuccessMessage('Payment Successful!');
      setTimeout(() => {
        navigate('/'); // Correctly call navigate
      }, 5000); // 5000 milliseconds = 5 seconds
    } else {
      setSuccessMessage('Please fill in all fields.');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>Payment Form</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Card Number</label>
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            placeholder="Enter card number"
            style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Expiry Date</label>
          <input
            type="text"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            placeholder="MM/YY"
            style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>
        <button
          type="submit"
          style={{
            width: '100%',
            padding: '10px',
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Submit
        </button>
      </form>
      {successMessage && (
        <div style={{ marginTop: '20px', padding: '10px', borderRadius: '4px', backgroundColor: '#d4edda', color: '#155724' }}>
          {successMessage}
        </div>
      )}
    </div>
  );
};

export default PaymentForm;
