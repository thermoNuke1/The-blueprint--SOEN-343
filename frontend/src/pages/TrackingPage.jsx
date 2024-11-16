import React, { useState } from 'react';
import ShipmentStatusForm from '../components/Tracking/shipmentStatusForm';
import ShipmentProgressBar from '../components/Tracking/shipmentProgressBar';

const TrackingPage = () => {
  const [shipmentId, setShipmentId] = useState(null);
  const [validShipmentId, setValidShipmentId] = useState(false);

  const handleShipmentIdSubmit = async (id) => {
    setShipmentId(id);
    try {
      const response = await fetch(`/api/shipment/${id}`);
      if (response.ok) {
        setValidShipmentId(true);
      } else {
        setValidShipmentId(false);
      }
    } catch {
      setValidShipmentId(false);
    }
  };

  return (
    <div className="tracking-page">
    {/* Shipment Status Form */}
    <ShipmentStatusForm onShipmentIdSubmit={handleShipmentIdSubmit} />

    {/* Progress Bar or Error Message */}
    <div className="progress-section">
      {validShipmentId ? (
        <ShipmentProgressBar shipmentId={shipmentId} />
      ) : (
        shipmentId && <p className="error-message">Invalid Shipment ID</p>
      )}
    </div>
  </div>
  );
};

export default TrackingPage;
