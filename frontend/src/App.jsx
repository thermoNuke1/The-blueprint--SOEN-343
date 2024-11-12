import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import CheckoutForm from "./components/checkoutForm.jsx";
// import { Elements} from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';
// import ShipmentProgressBar from "./components/Tracking/shipmentProgressBar.jsx";
import Tracking from "./pages/TrackingPage.jsx";
import Footer from "./components/Footer/footer.jsx";
import CustomNavBar from "./components/Navbar/navbar.jsx";
import Notification from "./components/notifications.jsx";
import Login from "./components/login.jsx";


// const stripePromise = loadStripe('pk_test_51QIZoARrCeYLfUcjF4kwH421Z5YCAybTbMhfwQKW2jCH0yRAOzy3Bqdu2BM021tNJLdyfX3txaqNGSLnxXZBS0Xq00lXkPvRFa');

const App = () => {
	const [showLogin, setShowLogin] = useState(true)
	const [errorMessage, setErrorMessage] = useState(null);
	const [user, setUser] = useState(null);

	return (
		<>
		
			
			<CustomNavBar setShowLogin={setShowLogin} showLogin={showLogin} />
			<Notification message={errorMessage} />
      		<Routes>
       		 {/* Define your routes here */}
      		  <Route path="/" element={<Homepage />} />
			  <Route path="/tracking" element={<Tracking />} />
			  <Route path="/login" element={<Login setErrorMessage={setErrorMessage} user={user} setUser={setUser} />} />
      		</Routes>
      		<Footer />
			
			
			{/* <Tracking></Tracking>
			<Elements stripe={stripePromise}>
				<CheckoutForm />
			</Elements> */}
		</>

			
		
	);
};

export default App;
