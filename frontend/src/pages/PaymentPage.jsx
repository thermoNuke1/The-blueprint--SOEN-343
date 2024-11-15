import CheckoutForm from '../components/checkoutForm';
import { Elements} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useLocation } from 'react-router-dom';


const stripePromise = loadStripe("sk_test_51QIZoARrCeYLfUcjMixiRRp6E02FVCIuWQ5Fz29zAHJzivPOQsWKHDHfORYnLDubw6BV30KXDaeUeD3dCDHHOYst00V0Xrjqp7");

function PaymentPage () {
    const location = useLocation();
  const { total, totalAfterTax } = location.state || {};
    return (
        <>
            <Elements stripe={stripePromise}>
             <h2>Payment Page</h2>
              <p>Total Price: ${total}</p>
                <CheckoutForm total={total}></CheckoutForm>
            </Elements>
        </>
    );
}

export default PaymentPage;