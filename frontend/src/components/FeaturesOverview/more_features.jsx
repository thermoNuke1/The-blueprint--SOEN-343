// Inside AwesomeComponentsSection.jsx
import React from "react";
import { useNavigate } from 'react-router-dom';
import '../../styles/whole_page.css';

const AwesomeComponentsSection = () => {
  const navigate = useNavigate();
  
  const handlePackage = () => {
    navigate('/placeDelivary');
  };

  return (
    <div id="services">
      <div className="container px-4 py-5" id="hanging-icons">
        <h2 className="pb-2 border-bottom">Services</h2>
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
          <div className="col d-flex align-items-start">
            <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
              <svg className="bi" width="1em" height="1em">
                <use xlink:href="#toggles2"></use>
              </svg>
            </div>
            <div>
              <h3 className="fs-2 text-body-emphasis">Cost Calculator</h3>
              <p>Paragraph of text beneath the heading...</p>
              <a href="/quotationproposal" className="btn btn-primaryy">Get a Quote</a>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
              <svg className="bi" width="1em" height="1em">
                <use xlink:href="#cpu-fill"></use>
              </svg>
            </div>
            <div>
              <h3 className="fs-2 text-body-emphasis">Send a Shipment</h3>
              <p>Paragraph of text beneath the heading...</p>
              <a onClick={handlePackage} className="btn btn-primaryy">Send Packages</a>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
              <svg className="bi" width="1em" height="1em">
                <use xlink:href="#tools"></use>
              </svg>
            </div>
            <div>
              <h3 className="fs-2 text-body-emphasis">Tracking</h3>
              <p>Paragraph of text beneath the heading...</p>
              <a href="/tracking" className="btn btn-primaryy">Track Your Package</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AwesomeComponentsSection;
