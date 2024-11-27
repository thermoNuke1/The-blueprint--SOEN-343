import { useState, useEffect, useRef } from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
//import "remixicon/fonts/remixicon.css";
// import CheckoutForm from "./components/checkoutForm.jsx";
// import { Elements} from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';
// import ShipmentProgressBar from "./components/Tracking/shipmentProgressBar.jsx";
import Tracking from "./pages/TrackingPage.jsx";
import Footer from "./components/Footer/footer.jsx";
import CustomNavBar from "./components/Navbar/navbar.jsx";
import Notification from "./components/notifications.jsx";
import Login from "./components/login.jsx";
// import parcelService from "./services/parcel.js";
import AccountPage from "./pages/accountPage.jsx";
import SignUp from "./components/signup.jsx";
import CreateParcel from "./pages/placeDelivary.jsx";
import shipmentService from './services/shipment';
import QuotationProposalPage from "./pages/QuotationProposalPage.jsx";
import PaymentPage from "./pages/PaymentPage.jsx";
import ReviewPage from "./pages/ReviewPage.jsx";
import ChatbotComponent from "./components/chatbot/ChatbotComponent.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";


// const stripePromise = loadStripe('pk_test_51QIZoARrCeYLfUcjF4kwH421Z5YCAybTbMhfwQKW2jCH0yRAOzy3Bqdu2BM021tNJLdyfX3txaqNGSLnxXZBS0Xq00lXkPvRFa');

const App = () => {
	const [showLogin, setShowLogin] = useState(true);
	const [errorMessage, setErrorMessage] = useState(null);
	const [user, setUser] = useState(null);

	const servicesRef = useRef(null);
  	const aboutUsRef = useRef(null);
 	const meetTeamRef = useRef(null);

	const scrollToSection = (section) => {
	const sectionMap = {
		services: servicesRef,
		  'about-us': aboutUsRef,
		  'meet-team': meetTeamRef,
		};
	
		const ref = sectionMap[section];
		if (ref && ref.current) {
		  ref.current.scrollIntoView({ behavior: "smooth" });
		}
	};

	useEffect(() => {
		setShowLogin(true)
		const loggedUserJSON = window.localStorage.getItem("loggedappUser");
		if (loggedUserJSON) {
			const user = JSON.parse(loggedUserJSON);
			setUser(user);
			shipmentService.setToken(user.token);
		}
	}, [user, showLogin]);
	

	return (
		<>
			<CustomNavBar
				setShowLogin={setShowLogin}
				showLogin={showLogin}
				user={user}
				setUser={setUser}
				scrollToSection={scrollToSection}
			/>
			<Notification message={errorMessage} />
			<Routes>
				
				<Route
					path="/"
					element={<Homepage scrollToSection={scrollToSection} />}
				/>
				<Route
					path="/review"
					element={
					<ProtectedRoute user={user}>
						<ReviewPage />
					</ProtectedRoute>
				}
				/>
				<Route
					path="/tracking"
					element={
					<ProtectedRoute user={user}>
						<Tracking />
					</ProtectedRoute>
				}
				/>

				<Route
					path="/signup"
					element={<SignUp setErrorMessage={setErrorMessage} setUser={setUser}/>}
				/>

				<Route
					path="/login"
					element={
						<Login
							setErrorMessage={setErrorMessage}
							user={user}
							setUser={setUser}
						/>
					}
				/>
				<Route
					path="/account"
					element={<AccountPage  />}
				/>
			  <Route path="/placeDelivary" element = {
				<ProtectedRoute user={user}>
					<CreateParcel setErrorMessage={setErrorMessage} />
				</ProtectedRoute>
				}/>
			  <Route path="/quotationproposal" element = {<QuotationProposalPage setErrorMessage={setErrorMessage} />}></Route>
			  <Route path="/payment" element = {<PaymentPage setErrorMessage={setErrorMessage} />}></Route>

			  <Route
					path="/chatbot-test"
					element={<ChatbotComponent  />}
				/>

			</Routes>
			<Footer />
			<ChatbotComponent />

			{/* <Tracking></Tracking>
			<Elements stripe={stripePromise}>
				<CheckoutForm />
			</Elements> */}
		</>
	);
};

export default App;