import { useState } from "react";
import userService from "/src/services/user.js";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const SignUp = ({ setErrorMessage, setUser }) => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [firstname, setFirstname] = useState("");
	const [lastname, setLastname] = useState("");
	const navigate = useNavigate();

	const handleSignUp = async (event) => {
		event.preventDefault();

		try {
			const user = await userService.createUser({
				username,
				password,
				firstname,
				lastname,
			});
			setUser(null)
			navigate('/')
		} catch (exception) {
			setErrorMessage("Something went wrong");
			setUser(null);
			setTimeout(() => {
				setErrorMessage(null);
			}, 5000);
		}
	};

	return (
		<div className="container mt-5">
    <form
        className="form-group w-50 container border p-4 shadow"
        onSubmit={handleSignUp}
    >
        <h1 className="text-center fw-bold mb-4">Sign Up</h1>

        <div className="mb-3">
            <label htmlFor="username" className="form-label">
                Username
            </label>
            <input
                type="email"
                className="form-control"
                value={username}
                name="username"
                placeholder="Enter your email"
                onChange={({ target }) => setUsername(target.value)}
            />
        </div>

        <div className="mb-3">
            <label htmlFor="password" className="form-label">
                Password
            </label>
            <input
                type="password"
                className="form-control"
                value={password}
                name="password"
                placeholder="Enter your password"
                onChange={({ target }) => setPassword(target.value)}
            />
        </div>

        <div className="mb-3">
            <label htmlFor="firstname" className="form-label">
                First Name
            </label>
            <input
                type="text"
                className="form-control"
                value={firstname}
                name="firstname"
                placeholder="Enter your first name"
                onChange={({ target }) => setFirstname(target.value)}
            />
        </div>

        <div className="mb-3">
            <label htmlFor="lastname" className="form-label">
                Last Name
            </label>
            <input
                type="text"
                className="form-control"
                value={lastname}
                name="lastname"
                placeholder="Enter your last name"
                onChange={({ target }) => setLastname(target.value)}
            />
        </div>

        <div className="text-center pt-3">
            <button type="submit" className="btn btn-primary">
                Sign Up
            </button>
        </div>
    </form>
</div>

	);
};

SignUp.propTypes = {
	setErrorMessage: PropTypes.func.isRequired,
	setUser: PropTypes.func.isRequired,
};

export default SignUp;
