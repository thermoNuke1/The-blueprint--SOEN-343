import React, { useEffect, useState } from 'react';
import ColoredProgressBar from './coloredProgressBar';
import UIObserver from '../../../observers/uiObserver';
import './shipmentProgressBar.css';

const ShipmentProgressBar = ({ shipmentId }) => {
  const [shipmentStatus, setShipmentStatus] = useState('');
  const [progress, setProgress] = useState(0);
  const [statusHistory, setStatusHistory] = useState([]);

  // Map shipment statuses to progress values
  const calculateProgress = (status) => {
    const statusProgressMap = {
      'Order Placed': 10,
      'Processing': 20,
      'Ready for Pickup': 30,
      'Out for Delivery': 50,
      'In Transit': 70,
      'Delivered': 100,
    };
    return statusProgressMap[status] || 0;
  };

  useEffect(() => {
    const handleUpdate = (data) => {
      setShipmentStatus(data.shipment_status);
      setProgress(calculateProgress(data.shipment_status));
      setStatusHistory(data.statusHistory || []); // Update the timeline
    };


    const uiObserver = new UIObserver(handleUpdate, shipmentId);

   
    uiObserver.update(); 
    const intervalId = setInterval(() => uiObserver.update(), 5000);

    return () => clearInterval(intervalId); 
  }, [shipmentId]);

  return (
    <div className="progress-container">
      <h2>Shipment Status: {shipmentStatus}</h2>
      <ColoredProgressBar progress={progress} />

      {/* Timeline */}
      <div className="progress-timeline">
        {statusHistory.map((entry, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-status">
              <strong>{entry.status}</strong>
            </div>
            <div className="timeline-timestamp">
              {new Date(entry.updatedAt).toLocaleString()}
            </div>
          </div>
        ))}
      </div>
    </div>

  );
};

export default ShipmentProgressBar;
