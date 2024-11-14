import { useState } from "react";
import userService from "/src/services/user.js";
import PropTypes from "prop-types";

const SignUp = ({ setErrorMessage }) => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [firstname, setFirstname] = useState("");
	const [lastname, setLastname] = useState("");

	const handleSignUp = async (event) => {
		event.preventDefault();

		try {
			const user = await userService.createUser({
				username,
				password,
				firstname,
				lastname,
			});
		} catch (exception) {
			setErrorMessage("Something went wrong");
			setUser(null);
			setTimeout(() => {
				setErrorMessage(null);
			}, 5000);
		}
	};

	return (
		<div>
			<form onSubmit={handleSignUp}>
				<div>
					<label htmlFor="username">Username</label>
					<input
						type="email"
						value={username}
						name="username"
						onChange={({ target }) => setUsername(target.value)}
					/>
				</div>
				<div>
					<label htmlFor="password">Password</label>
					<input
						type="password"
						value={password}
						name="password"
						onChange={({ target }) => setPassword(target.value)}
					/>
				</div>

				<div>
					<label htmlFor="firstname">First Name</label>
					<input
						type="text"
						value={firstname}
						name="firstname"
						onChange={({ target }) => setFirstname(target.value)}
					/>
				</div>

				<div>
					<label htmlFor="lastname">Last Name</label>
					<input
						type="text"
						value={lastname}
						name="lastname"
						onChange={({ target }) => setLastname(target.value)}
					/>
				</div>
				<button type="submit">Sign Up</button>
			</form>
		</div>
	);
};

SignUp.propTypes = {
	setErrorMessage: PropTypes.func.isRequired,
};

export default SignUp;
