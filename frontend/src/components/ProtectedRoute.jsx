import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ user, children }) => {
    console.log(user);

  // If no user is logged in, redirect to the login page
  if (!user) {
    return <Navigate to="/login"/>;
  }
  // Otherwise, render the children (protected page)
  return children;
};

export default ProtectedRoute;
