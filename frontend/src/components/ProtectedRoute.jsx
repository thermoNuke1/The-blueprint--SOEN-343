import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ user, children }) => {
	const location = useLocation();
	const loggedUserJSON = window.localStorage.getItem("loggedappUser");

	// If no user is logged in, redirect to the login page
	if (!loggedUserJSON) {
		return (
			<Navigate
				to="/login"
				state={{ from: location }}
				replace
			/>
		);
	}
	// Otherwise, render the children (protected page)
	return children;
};

export default ProtectedRoute;
