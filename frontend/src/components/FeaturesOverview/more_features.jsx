import React from "react";
import { useNavigate } from 'react-router-dom';
//import '../../styles/whole_page.css';
import './more_features.css';
import '../../styles/whole_page.css';

const AwesomeComponentsSection = () => {
  const navigate = useNavigate();

  const handlePackage = () => {
    navigate('/placeDelivary');
  };

  return (
    <div id="services">
      <div className="container px-4 py-5" id="hanging-icons">
        <h1 className="pb-2 border-bottom">Services</h1>
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
          <div className="col d-flex align-items-start">
            <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
            <img src="/assets/calculator.png" alt="Cost Calculator" width="40" height="40" />
            </div>
            <div>
              <h3 className="fs-2 text-body-emphasis">Cost Calculator</h3>
              <p>Use our cost calculator to get an accurate estimate for your shipment and receive a personalized quote.</p>
              <a href="/quotationproposal" className="btn btn-primary">Get a Quote</a>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
            <img src="/assets/bus-location.png" alt="Send a Shipment" width="40" height="40" />
            </div>
            <div>
              <h3 className="fs-2 text-body-emphasis">Send a Shipment</h3>
              <p>Easily send packages by entering the necessary details, and we'll take care of the rest.</p>
              <a onClick={handlePackage} className="btn btn-primary">Send Packages</a>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
            <img src="/assets/delivery.png" alt="Tracking" width="40" height="40" />
            </div>
            <div>
              <h3 className="fs-2 text-body-emphasis">Tracking</h3>
              <p>Track the status of your shipment at any time, ensuring you stay updated on its journey..</p>
              <a href="/tracking" className="btn btn-primary">Track Your Package</a>
            </div>
          </div>
        </div>

        {/* New Row */}
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
          <div className="col d-flex align-items-start">
            <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
            <img src="/assets/communication.png" alt="Tracking" width="40" height="40" />
            </div>
            <div>
              <h3 className="fs-2 text-body-emphasis">Notification System</h3>
              <p>Receive real-time updates on the status of your shipment, including delivery notifications and scheduled pickups, to stay informed every step of the way..</p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
            <img src="/assets/support.png" alt="Tracking" width="40" height="40" />
            </div>
            <div>
              <h3 className="fs-2 text-body-emphasis">Chatbot Customer Service</h3>
              <p>Our integrated chatbot provides seamless customer service to assist with all your shipping needs..</p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
            <img src="/assets/pay.png" alt="Tracking" width="40" height="40" />
            </div>
            <div>
              <h3 className="fs-2 text-body-emphasis">Secure Payment </h3>
              <p>PSafeguard your shipments with our flexible and secure payment options, including insurance plans for peace of mind.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AwesomeComponentsSection;
