// import React, { useState } from 'react';
// import axios from 'axios';
// import './shipmentStatusForm.css'

// const ShipmentStatusForm = () => {
  
//   const [shipmentId, setShipmentId] = useState('');
//   const [shipmentStatus, setShipmentStatus] = useState(null);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);


//   const handleSubmit = async (e) => {
//     e.preventDefault(); 

//     if (!shipmentId) {
//       setError('Shipment ID is required');
//       return;
//     }

//     setLoading(true); 
//     setError(null); 

//     try {
//       const response = await axios.get(`/api/shipment/${shipmentId}`);
//       setShipmentStatus(response.data); 
//       onShipmentIdSubmit(shipmentId);
//     } catch (err) {
//       console.error('Error fetching shipment:', err);
//       setError('Shipment not found or an error occurred.');
//     } finally {
//       setLoading(false); // Stop loading
//     }
//   };

//   return (
//     <div className="shipment-status-form">
//       <h2>Track Your Shipment</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="shipmentId">Shipment ID</label>
//           <input
//             type="text"
//             id="shipmentId"
//             value={shipmentId}
//             onChange={(e) => setShipmentId(e.target.value)}
//             placeholder="Enter shipment ID"
//             required
//           />
//         </div>
//         <button type="submit" className="btn btn-primary" disabled={loading}>
//           {loading ? 'Loading...' : 'Track Shipment'}
//         </button>
//       </form>

//       {error && <p className="error-message">{error}</p>}

//       {shipmentStatus && (
//         <div className="shipment-info">
//           <h3>Shipment Status:</h3>
//           <p><strong>Status:</strong> {shipmentStatus.shipment_status}</p>
//           <p><strong>Location:</strong> {shipmentStatus.location}</p>
//           <p><strong>Timestamp:</strong> {new Date(shipmentStatus.timestamp).toLocaleString()}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ShipmentStatusForm;

import React, { useState } from 'react';
import axios from 'axios';
import './shipmentStatusForm.css';
import ShipmentProgressBar from './shipmentProgressBar';

const ShipmentStatusForm = () => {
  
  const [shipmentId, setShipmentId] = useState('');
  const [shipmentStatus, setShipmentStatus] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [displayProgressBar, setDisplayProgressBar] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    if (!shipmentId) {
      setError('Shipment ID is required');
      return;
    }

    setLoading(true); 
    setError(null); 

    try {
      const response = await axios.get(`/api/shipment/${shipmentId}`);
      setShipmentStatus(response.data); 
      setDisplayProgressBar(true); 
    } catch (err) {
      console.error('Error fetching shipment:', err);
      setError('Shipment not found or an error occurred.');
      setDisplayProgressBar(false); 
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div className="shipment-status-form">
      <h2>Track Your Shipment</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="shipmentId">Shipment ID</label>
          <input
            type="text"
            id="shipmentId"
            value={shipmentId}
            onChange={(e) => setShipmentId(e.target.value)}
            placeholder="Enter shipment ID"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? 'Loading...' : 'Track Shipment'}
        </button>
      </form>

      {error && <p className="error-message">{error}</p>}

      {shipmentStatus && (
        <div className="shipment-info">
          <h3>Shipment Status:</h3>
          <p><strong>Status:</strong> {shipmentStatus.shipment_status}</p>
          <p><strong>Location:</strong> {shipmentStatus.location}</p>
          <p><strong>Timestamp:</strong> {new Date(shipmentStatus.timestamp).toLocaleString()}</p>
        </div>
      )}

    
      {displayProgressBar && <ShipmentProgressBar shipmentId={shipmentId} />}
    </div>
  );
};

export default ShipmentStatusForm;
