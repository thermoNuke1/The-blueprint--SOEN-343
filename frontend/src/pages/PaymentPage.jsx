import CheckoutForm from '../components/checkoutForm';
import { Elements} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useLocation } from 'react-router-dom';
import { Taxcalc } from '../../utilities/taxCalc';



const stripePromise = loadStripe("pk_test_51QIZoARrCeYLfUcjF4kwH421Z5YCAybTbMhfwQKW2jCH0yRAOzy3Bqdu2BM021tNJLdyfX3txaqNGSLnxXZBS0Xq00lXkPvRFa");

function PaymentPage () {
    const location = useLocation();
  const { total, totalAfterTax } = location.state || {};
    return (
        <>
            <Elements stripe={stripePromise}>
             <h2>Payment Page</h2>
              <p>Total Price: ${total}</p>
              <p>Total Price with tax: ${Taxcalc(total)}</p>

                <CheckoutForm total={total} clientSecret={"pk_test_51QIZoARrCeYLfUcjF4kwH421Z5YCAybTbMhfwQKW2jCH0yRAOzy3Bqdu2BM021tNJLdyfX3txaqNGSLnxXZBS0Xq00lXkPvRFa"}></CheckoutForm>
            </Elements>
        </>
    );
}

export default PaymentPage;