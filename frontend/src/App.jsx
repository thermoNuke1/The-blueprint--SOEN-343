import { useState, useEffect, useRef } from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Tracking from "./pages/TrackingPage.jsx";
import Footer from "./components/Footer/footer.jsx";
import CustomNavBar from "./components/Navbar/navbar.jsx";
import Notification from "./components/notifications.jsx";
import Login from "./components/login.jsx";
import AccountPage from "./pages/accountPage.jsx";
import SignUp from "./components/signup.jsx";
import CreateParcel from "./pages/placeDelivary.jsx";
import shipmentService from "./services/shipment";
import QuotationProposalPage from "./pages/QuotationProposalPage.jsx";
import PaymentPage from "./pages/PaymentPage.jsx";
import ReviewPage from "./pages/ReviewPage.jsx";
import DriverSignUp from "./pages/driverSignup.jsx";
import Confirmation from "./pages/confimation.jsx";import ChatbotComponent from "./components/chatbot/ChatbotComponent.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import './App.css';
import Wheel from "./components/WHeel.jsx";


// Initialize Stripe
const stripePromise = loadStripe(
  "pk_test_51QIZoARrCeYLfUcjF4kwH421Z5YCAybTbMhfwQKW2jCH0yRAOzy3Bqdu2BM021tNJLdyfX3txaqNGSLnxXZBS0Xq00lXkPvRFa"
);

const App = () => {
  const [showLogin, setShowLogin] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    setShowLogin(true);
    const loggedUserJSON = window.localStorage.getItem("loggedappUser");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
      shipmentService.setToken(user.token);
    }
  }, [user, showLogin]);

	return (
		<>
    <Elements stripe={stripePromise}>
      <CustomNavBar
        setShowLogin={setShowLogin}
        showLogin={showLogin}
        user={user}
        setUser={setUser}
      />
      <Notification message={errorMessage} />
	  <body className="main-body">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/review" element={
			<ProtectedRoute user={user}>
				<ReviewPage />
			</ProtectedRoute>
			} />
        <Route path="/tracking" element={
			<ProtectedRoute user={user}>
				<Tracking />
			</ProtectedRoute>
			} />
        <Route
          path="/signup"
          element={
            <SignUp
              setErrorMessage={setErrorMessage}
              setUser={setUser}
            />
          }
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
        <Route path="/account" element={<AccountPage />} />
        <Route
          path="/placeDelivary"
          element={
			<ProtectedRoute user={user}>
				<CreateParcel setErrorMessage={setErrorMessage} />
			</ProtectedRoute>
		}
        />
        <Route
          path="/quotationproposal"
          element={
            <QuotationProposalPage setErrorMessage={setErrorMessage} />
          }
        />
        <Route
          path="/payment"
          element={<PaymentPage setErrorMessage={setErrorMessage} />}
        />
		<Route
          path="/payment-success"
          element={<Confirmation setErrorMessage={setErrorMessage} />}
        />
        <Route
          path="/driverSignup"
          element={
            <DriverSignUp
              setErrorMessage={setErrorMessage}
              setUser={setUser}
            />
          }
        />
      </Routes>
	  <ChatbotComponent></ChatbotComponent>
	  </body>
	  <Footer />
    </Elements>
  );
};

export default App;
