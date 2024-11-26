import { useState } from "react";
import loginService from "/src/services/login.js";
import userService from "/src/services/user.js";
import parcelService from "/src/services/parcel.js";
import shipmentService from "/src/services/shipment.js";
import paymentService from "/src/services/payment.js";

import PropTypes from "prop-types";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Login = ({ setErrorMessage, setUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const user = await loginService.login({
        username,
        password,
      });
      window.localStorage.setItem("loggedappUser", JSON.stringify(user));
      parcelService.setToken(user.token);
      userService.setToken(user.token);
      shipmentService.setToken(user.token);
      paymentService.setToken(user.token);

  


      setUser(user);
      setUsername("");
      setPassword("");
      const redirectPath = location.state?.from?.pathname || "/";
      navigate(redirectPath, { replace: true });
    } catch (exception) {
      setErrorMessage("Wrong credentials");
      setUser(null);
      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
    }
  };

  return (
    <div>
      <form
        className="form-group w-25 container align-items-center mt-5 border p-3 shadow"
        onSubmit={handleLogin}
      >
        <h1 className="text-center fw-bold">Login</h1>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            value={username}
            name="username"
            placeholder="Enter username"
            onChange={({ target }) => setUsername(target.value)}
          />
        </div>
        <div className="pb-3 pt-3">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={password}
            name="password"
            placeholder="Enter password"
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <div className="pt-4"><button type="submit">Login</button></div>
        <div className="text-center mt-3">
          <p>
            Don't have an account?{" "}
            <Link to="/signup" className="text-primary">
              Sign up here
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

Login.propTypes = {
  setErrorMessage: PropTypes.func.isRequired,
  setUser: PropTypes.func.isRequired,
};

export default Login;
