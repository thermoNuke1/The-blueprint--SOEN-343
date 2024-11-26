import { useLocation } from 'react-router-dom';
import './confirmation.css';

const Confirmation = () => {
  const location = useLocation();
  const { totalAfterTax, trackingId, timestamp } = location.state || {};

  return (
    <div className="confirmation-page">
      
      <div className="inner-confirmation-page">
        <h1 className="title">Payment Successful</h1>
        <h1 className="title2">Thank you</h1>
        <div className="info">
          <div className="info-item">
            <span className="info-label">Invoice id: </span>
            <span className="info-value">324871789234</span>
          </div>
          <div className="info-item">
            <span className="info-label">Total After Tax: </span>
            <span className="info-value">${totalAfterTax}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Tracking ID: </span>
            <span className="info-value">{trackingId}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Timestamp: </span>
            <span className="info-value">{new Date(timestamp).toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Confirmation;
