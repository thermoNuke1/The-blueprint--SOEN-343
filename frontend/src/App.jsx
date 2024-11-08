import { useState } from "react";
import Homepage from "./pages/Homepage";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const App = () => {
	const [errorMessage, setErrorMessage] = useState(null);
	const [user, setUser] = useState(null);
	return (
		<div>
			<Homepage></Homepage>
		</div>
	);
};

export default App;
