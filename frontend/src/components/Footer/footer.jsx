import './footer.css';

function Footer() {
    return (
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-1 border-top bg-light">
    <p className="col-md-4 mb-0 text-body-secondary">© 2024 Deltra, Inc</p>

    <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
      <svg className="bi me-2" width="80" height="80">
        <image href="../../assets/deltra-logo.png" width="6em" height="6em" />
      </svg>
    </a>

    <ul className="nav col-md-4 justify-content-end">
      <li className="nav-item"><a href="/" className="nav-link px-2 text-body-secondary">Home</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">About</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Services</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Contact</a></li>
    </ul>
  </footer>
    );
}

export default Footer;

