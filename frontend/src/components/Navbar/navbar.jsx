import PropTypes from 'prop-types';
import { useNavigate, useLocation } from "react-router-dom";

const CustomNavBar = ({setShowLogin, showLogin}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    setShowLogin(false);
    navigate("/login");
  }

  const isLoginPage = location.pathname === '/login';

    return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
    <a className="navbar-brand d-flex align-items-center" href="#">
      <img src="../../assets/deltra-logo.png" alt="Logo" width="100" height="50" className="d-inline-block align-top me-2"></img>
    </a>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-3">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Tracking</a>
        </li>
      </ul>

      <div className="ms-auto">
            {!isLoginPage && showLogin ? (
              <button className="btn btn-outline-primary me-2" onClick={handleClick}>Login</button>
            ) : null}
      </div>
    </div>
  </div>
</nav>
    );
}

CustomNavBar.propTypes = {
  setShowLogin: PropTypes.func.isRequired,
  showLogin: PropTypes.bool.isRequired, 
};
export default CustomNavBar;