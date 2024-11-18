import './featuresoverview.css';
import { useNavigate } from 'react-router-dom';

const FeaturesOverview = () => {
  const navigate = useNavigate()
  const handlePackage = () =>{
    navigate('/placeDelivary')
    
  }
    return(
     <div className="container">
  <div className="row g-4 py-5 row-cols-1 row-cols-lg-3 justify-content-center mx-auto">
      <div className="feature col text-center">
      <div className="feature-icon d-inline-flex align-items-center justify-content-center bg-gradient fs-2 mb-3">
        <svg className="bi" width="1em" height="1em">
            <image href="../../assets/calculator.png" width="1em" height="1em" />
        </svg>
      </div>
      <h3 className="fs-2 text-body-emphasis">Cost Calculator</h3>
      <p>Find out about our affordable rates!</p>
      <a href="/quotationproposal" className="icon-link">
        Go to Cost Calculator
        <svg className="bi"><use xlinkHref="#chevron-right"></use></svg>
      </a>
    </div>
      <div className="feature col text-center">
      <div className="feature-icon d-inline-flex align-items-center justify-content-center bg-gradient fs-2 mb-3">
        <svg className="bi" width="2em" height="1em">
          <image href="../../assets/fast-delivery.png" width="40" height="40" />
        </svg>
      </div>
      <h3 className="fs-2 text-body-emphasis">Send Shipment</h3>
      <p>Sending packages is easy!</p>
      <a onClick={handlePackage} className="icon-link">
        Sending a package
        <svg className="bi"><use xlinkHref="#chevron-right"></use></svg>
      </a>
    </div>
      <div className="feature col text-center">
      <div className="feature-icon d-inline-flex align-items-center justify-content-center bg-gradient fs-2 mb-3">
        <svg className="bi" width="1em" height="1em">
          <image href="../../public/assets/bus-location.png" width="1em" height="1em" />
        </svg>
      </div>
      <h3 className="fs-2 text-body-emphasis">Tracking</h3>
      <p>Tracking your package is easy!</p>
      <a href="/tracking" className="icon-link">
        Track your package!
        <svg className="bi"><use xlinkHref="#chevron-right"></use></svg>
      </a>
    </div>
  </div>
</div>
    );
}

export default FeaturesOverview;