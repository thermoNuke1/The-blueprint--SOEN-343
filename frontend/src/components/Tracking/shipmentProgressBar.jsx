import React, { useEffect, useState } from 'react';
import ColoredProgressBar from './coloredProgressBar';

const ShipmentProgressBar = ({ shipmentId }) => {
  const [shipmentStatus, setShipmentStatus] = useState('');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const fetchShipmentStatus = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/shipment/${shipmentId}`);
        const data = await response.json();
        
        if (data.shipment_status) {
          setShipmentStatus(data.shipment_status);
          let newProgress = 0;
          switch (data.shipment_status) {
            case 'Order Placed':
              newProgress = 10;
              break;
            case 'Processing':
              newProgress = 20;
              break;
            case 'Ready for Pickup':
              newProgress = 30;
              break;
            case 'Out for Delivery':
              newProgress = 50;
              break;
            case 'In Transit':
              newProgress = 70;
              break;
            case 'Delivered':
              newProgress = 100;
              break;
            default:
              newProgress = 0;
          }
          setProgress(newProgress);
          // Stop polling if the shipment is delivered
          if (data.shipment_status === 'Delivered') {
            clearInterval(intervalId);
          }
        } else {
          console.error('Shipment status not found');
        }
      } catch (error) {
        console.error('Error fetching shipment status:', error);
      }
    };
  
    if (shipmentId) {
      fetchShipmentStatus();
      const intervalId = setInterval(fetchShipmentStatus, 5000);
      return () => clearInterval(intervalId);  // Cleanup on component unmount
    }
  }, [shipmentId]);
  
  

  return (
    <div className="progress-container">
      <h2>Shipment Status: {shipmentStatus}</h2>
      <ColoredProgressBar progress={progress} />
    </div>
  );
};

export default ShipmentProgressBar;
