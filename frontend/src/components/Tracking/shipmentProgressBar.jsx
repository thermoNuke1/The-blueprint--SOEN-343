import React, { useEffect, useState } from 'react';
import ColoredProgressBar from './ColoredProgressBar';
import UIObserver from '../../../observers/uiObserver';

const ShipmentProgressBar = ({ shipmentId }) => {
  const [shipmentStatus, setShipmentStatus] = useState('');
  const [progress, setProgress] = useState(0);

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
    };

    // Instantiate the UIObserver
    const uiObserver = new UIObserver(handleUpdate, shipmentId);

    // Initial fetch and set up polling
    uiObserver.update(); // Fetch status on mount
    const intervalId = setInterval(() => uiObserver.update(), 5000);

    return () => clearInterval(intervalId); 
  }, [shipmentId]);

  return (
    <div className="progress-container">
      <h2>Shipment Status: {shipmentStatus}</h2>
      <ColoredProgressBar progress={progress} />
    </div>
  );
};

export default ShipmentProgressBar;
