import PropTypes from 'prop-types';
import { useNavigate, useLocation } from 'react-router-dom';
import '../FeaturesOverview/more_features.css';


const CustomNavBar = ({ setShowLogin, showLogin, user, setUser, scrollToSection }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = () => {
    setShowLogin(false);
    navigate("/login");
  };

  const handleAccount = () => {
    setShowLogin(false);
    navigate("/account");
  };

  const handleSignup = () => {
    setShowLogin(false);
    navigate("/signup");
  };

  const handleLogout = () => {
    setShowLogin(true);
    navigate("/");
    window.localStorage.clear();
    setUser(null);
  };

  const isLoginPage = location.pathname === '/login';

  const handleSectionNavigation = (sectionId) => {
    if (location.pathname !== '/') {

      navigate('/');
    }

   
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300); 
  };
  const handleHomeClick = (e) => {
    e.preventDefault();
    navigate("/");  
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="/">
          <img src="../../assets/deltra-logo.png" alt="Logo" width="75" height="75" className="d-inline-block align-top me-2" />
        </a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-3">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/" onClick={handleHomeClick}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => handleSectionNavigation('about-us')}>About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => handleSectionNavigation('services')}>Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => handleSectionNavigation('contact')}>Contact</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => handleSectionNavigation('meet-team')}>Meet the Team</a>
            </li>
          </ul>

          <div className="ms-auto d-flex gap-2">
            {!isLoginPage && showLogin && user === null ? (
              <>
                <button className="btn btn btn-primary btn-login-signup" onClick={handleLogin}>Login</button>
                <button className="btn btn btn-primary btn-login-signup" onClick={handleSignup}>Sign Up</button>
              </>
            ) : null}

            {user ? (
              <>
                <button className="btn btn-primary btn-login-signup" onClick={handleAccount}>My Account</button>
                <button className="btn btn-primary btn-login-signup" onClick={handleLogout}>Log out</button>
              </>
            ) : null}
          </div>

        </div>
      </div>
    </nav>
  );
};

CustomNavBar.propTypes = {
  setShowLogin: PropTypes.func.isRequired,
  showLogin: PropTypes.bool.isRequired,
  user: PropTypes.string.isRequired,
  setUser: PropTypes.func.isRequired,
  scrollToSection: PropTypes.func.isRequired,
};

export default CustomNavBar;
