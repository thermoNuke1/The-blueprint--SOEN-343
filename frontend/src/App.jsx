import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Login from "./components/login.jsx";
import Notification from "./components/notifications.jsx";
import loginService from './services/login.js';

const App = () => {
	const [errorMessage, setErrorMessage] = useState(null);
	const [user, setUser] = useState(null);
	return (
		<div>
			{/* <Navbar/> */}
			<Notification message={errorMessage} />
			<Login setErrorMessage={setErrorMessage} user={user} setUser={setUser} />

			
		</div>
	);
};

export default App;
