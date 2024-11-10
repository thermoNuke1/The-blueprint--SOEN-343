import { useState } from "react";
import Homepage from "./pages/Homepage/Homepage.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import CheckoutForm from "./components/checkoutForm.jsx";
import { Elements} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51QIZoARrCeYLfUcjF4kwH421Z5YCAybTbMhfwQKW2jCH0yRAOzy3Bqdu2BM021tNJLdyfX3txaqNGSLnxXZBS0Xq00lXkPvRFa');

const App = () => {
	// const [errorMessage, setErrorMessage] = useState(null);
	// const [user, setUser] = useState(null);
	return (
		<div>
			<Homepage></Homepage>
			
			{/* <Navbar/> */}
			{/* <Notification message={errorMessage} /> */}
			{/* <Login setErrorMessage={setErrorMessage} user={user} setUser={setUser} /> */}
			{/* <Elements stripe={stripePromise}>
				<CheckoutForm />
			</Elements> */}

			
		</div>
	);
};

export default App;
