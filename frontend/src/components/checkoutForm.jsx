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
import { useNavigate } from 'react-router-dom';
import { Taxcalc } from '../../utilities/taxCalc'; // Import Taxcalc

const PaymentForm = ({ total }) => {
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [orderSummary, setOrderSummary] = useState({});
    const [pointsEarned, setPointsEarned] = useState(0); // New state for points
    const navigate = useNavigate();

    const generateTrackingID = () => {
        return Math.random().toString(36).substring(2, 10).toUpperCase();
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (cardNumber && expiryDate) {
            const orderDate = new Date().toLocaleDateString();
            const trackingID = generateTrackingID();
            
            // Calculate total with tax using the Taxcalc function
            const totalWithTax = Taxcalc(total);

            // Calculate points earned based on total (e.g., 1 point per dollar spent)
            const points = Math.floor(total);

            setOrderSummary({
                total,
                totalWithTax,
                orderDate,
                trackingID,
            });

            setPointsEarned(points); // Update points state
            setIsModalOpen(true);
        }
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        navigate('/');
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

            {isModalOpen && (
                <div
                    style={{
                        position: 'fixed',
                        top: '0',
                        left: '0',
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <div
                        style={{
                            backgroundColor: 'white',
                            padding: '20px',
                            borderRadius: '8px',
                            textAlign: 'center',
                            maxWidth: '400px',
                            width: '90%',
                        }}
                    >
                        <h3>Order Summary</h3>
                        <p><strong>Total Price:</strong> ${orderSummary.total}</p>
                        <p id="test"><strong>Total Price with Tax:</strong> ${orderSummary.totalWithTax}</p>
                        <p><strong>Order Date:</strong> {orderSummary.orderDate}</p>
                        <p><strong>Tracking ID:</strong> {orderSummary.trackingID}</p>
                        <p><strong>Points Earned:</strong> {pointsEarned}</p> {/* New points display */}
                        <button
                            onClick={handleCloseModal}
                            style={{
                                marginTop: '20px',
                                padding: '10px',
                                backgroundColor: '#007bff',
                                color: 'white',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer',
                            }}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PaymentForm;

