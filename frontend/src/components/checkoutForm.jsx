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

// export default CheckoutForm;
import { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Taxcalc } from '../../utilities/taxCalc';
import { toast } from 'react-toastify'; // Import toast

const CheckoutForm = ({total}) => {
  const [amount, setAmount] = useState(total*100); // Amount in cents (e.g., $5 = 500 cents)
  const [price, setPrice] = useState(total); // Price input for tax calculation
  const [taxResult, setTaxResult] = useState({ tax: "0.00", totalWithTax: "0.00" });

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    // Skip actual payment processing and directly show success
    toast.success("Payment Successful!");
  };

  const handlePriceChange = (event) => {
    setPrice(Number(event.target.value));
  };

  const calculateTax = () => {
    const result = Taxcalc(price);
    setTaxResult(result);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Complete your payment</h3>
      <CardElement />
      
      {/* Input for price */}
      <input
        type="text"
        value={price}
        onChange={handlePriceChange}
        placeholder="Enter price"
      />

      {/* Button to calculate tax */}
      <button type="button" onClick={calculateTax}>
        Calculate Tax
      </button>

      {/* Display tax calculation result */}
      <p id="test">
        <b>Total in dollar:</b> {taxResult.totalWithTax} (Tax: {taxResult.tax})
      </p>

      {/* Submit button for payment */}
      <button type="submit" disabled={!stripe}>
        Pay ${taxResult.totalWithTax}
      </button>
    </form>
  );
};

export default CheckoutForm;
