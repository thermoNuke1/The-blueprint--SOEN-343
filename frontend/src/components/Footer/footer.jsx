import './footer.css';

function Footer() {

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
    <footer class="footer">
    <div class="container">
      <span class="footer-text">© 2024 Deltra, Inc</span>
      {/* <a href="/" class="footer-logo">
        <img src="../../assets/deltra-logo.png" alt="Deltra Logo" width="60" height="60" />
      </a> */}
      <ul class="footer-nav">
        <li><a href="/" class="footer-link" onClick={handleHomeClick}>Home</a></li>
        <li><a href="#" class="footer-link" onClick={() => handleSectionNavigation('about-us')}>About</a></li>
        <li><a href="#" class="footer-link" onClick={() => handleSectionNavigation('services')}>Services</a></li>
        <li><a href="#" class="footer-link" onClick={() => handleSectionNavigation('contact-form')}>Contact</a></li>
        <li><a href="/review" class="footer-link">Feedback</a></li>
      </ul>
    </div>
  </footer>
    );
}

export default Footer;

