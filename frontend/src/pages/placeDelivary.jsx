
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import parcelService from '../services/parcel';
import PropTypes from 'prop-types';
import calculatePrice from '../function/priceMaker';
import shipmentService from '../services/shipment';
import calculateTotalWithTax from '../function/taxCal';
import userService from '../services/user';




let total = 0;
let totalAfterTax = 0;

const CreateParcel = ({ setErrorMessage }) => {
  const navigate = useNavigate();
  const [width, setWidth] = useState('');
  const [length, setLength] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [serialNumber, setSerialNumber] = useState('');
  const [message, setMessage] = useState('');
  const [parcels, setParcels] = useState([]);
  const [unit, setUnit] = useState('metric');
  const [originAddress, setOriginAddress] = useState(''); // Origin Address
  const [destinationAddress, setDestinationAddress] = useState(''); // Destination Address
  const [id, setId] = useState('');
  const [userInfo, setUserInfo] = useState(null);
 
  
  const user = JSON.parse(window.localStorage.getItem('loggedappUser'));

  const getUserInfo = async () => {
    try {
        const fetchedUserInfo = await userService.getUserByUsername(user.username);
        console.log('User Info: ', fetchedUserInfo)
        console.log(fetchedUserInfo._id);
        setUserInfo(fetchedUserInfo);
        
    } catch {
        setErrorMessage('Unable to load, Please log in.');
        setTimeout(() => {
            setErrorMessage(null);
        }, 5000);
    }
};

useEffect(() => {
  console.log('Component mounted. Checking user info...');
    if (user === null) {
        navigate('/');
    } else {
        getUserInfo();
    }
}, []);

useEffect(() => {
 
  console.log('User Info updated:', userInfo);
}, [userInfo]); 

if (user === null) {
    return null;
}
  

  
  const handleAddParcel = () => {
    if (isNaN(width) || isNaN(length) || isNaN(height) || isNaN(weight)) {
      setErrorMessage('Please enter valid numbers for dimensions and weight.');
      return;
    }

    let widthCm = parseFloat(width);
    let lengthCm = parseFloat(length);
    let heightCm = parseFloat(height);
    let weightKg = parseFloat(weight);

    if (unit === 'imperial') {
      widthCm *= 2.54; // inches to cm
      lengthCm *= 2.54;
      heightCm *= 2.54;
      weightKg *= 0.453592; // pounds to kg
    }

    const volume = widthCm * lengthCm * heightCm;
    if (volume < 10) {
      setErrorMessage('The minimum parcel volume is 10 cm³.');
      return;
    }

    const newParcel = {
      width_dimension: widthCm,
      length_dimension: lengthCm,
      height_dimension: heightCm,
      weight: weightKg,
      serialNumber: serialNumber,
    };

    try {
      const price = calculatePrice(newParcel);
      setParcels([...parcels, { ...newParcel, price }]);
      setWidth('');
      setLength('');
      setHeight('');
      setWeight('');
      setSerialNumber('');
      setMessage(`Parcel with serial number ${serialNumber} added!`);
      total = Number(total) + Number(price);
      totalAfterTax = calculateTotalWithTax(total);
      console.log(total);
    } catch (error) {
      setErrorMessage(error.message);
      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
    }
  };

  const handleOrderSubmit = async () => {
    console.log(userInfo);
    if (!originAddress || !destinationAddress) {
      setErrorMessage('Please provide both origin and destination addresses.');
      return;
    }
    if (!userInfo) {
      setErrorMessage('Not logged in');
      return;
    }

    try {
      const newShipment = {
        shipment_status: 'Order Placed',
        user:userInfo._id,
        location: destinationAddress, 
        origin: originAddress,
        destination: destinationAddress,
        timestamp: new Date(),
        paid: true,
        parcels: parcels.map(parcel => ({
          width_dimension: parcel.width_dimension,
          length_dimension: parcel.length_dimension,
          height_dimension: parcel.height_dimension,
          weight: parcel.weight,
          serialNumber: parcel.serialNumber,
        })),
        
      };

      await shipmentService.create(newShipment, userInfo._id);

      setMessage('Order created successfully with all parcels!');
      setParcels([]);
      setOriginAddress('');
      setDestinationAddress('');
      setUserInfo(null);
      navigate('/payment', {
        state: {
          total,
          totalAfterTax,
        },
      });
    } catch (exception) {
      console.error('Error during order submission:', exception);
      setErrorMessage('Failed to create order, please try again.');
      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
    }
  };

  const handleCancelOrder = () => {
    setParcels([]);
    setMessage('Order canceled.');
  };

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage(null);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    <div>
      <h2>Create New Parcel</h2>
      {message && <p style={{ color: 'green' }}>{message}</p>}
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <label>Origin Address</label>
          <input
            type="text"
            value={originAddress}
            onChange={({ target }) => setOriginAddress(target.value)}
            required
          />
        </div>
        <div>
          <label>Destination Address</label>
          <input
            type="text"
            value={destinationAddress}
            onChange={({ target }) => setDestinationAddress(target.value)}
            required
          />
        </div>
        <div>
          <label>Units</label>
          <select value={unit} onChange={({ target }) => setUnit(target.value)}>
            <option value="metric">Metric (cm, kg)</option>
            <option value="imperial">Imperial (in, lbs)</option>
          </select>
        </div>
        <div>
          <label>Width ({unit === 'metric' ? 'cm' : 'in'})</label>
          <input
            type="number"
            value={width}
            onChange={({ target }) => setWidth(target.value)}
            required
          />
        </div>
        <div>
          <label>Length ({unit === 'metric' ? 'cm' : 'in'})</label>
          <input
            type="number"
            value={length}
            onChange={({ target }) => setLength(target.value)}
            required
          />
        </div>
        <div>
          <label>Height ({unit === 'metric' ? 'cm' : 'in'})</label>
          <input
            type="number"
            value={height}
            onChange={({ target }) => setHeight(target.value)}
            required
          />
        </div>
        <div>
          <label>Weight ({unit === 'metric' ? 'kg' : 'lbs'})</label>
          <input
            type="number"
            value={weight}
            onChange={({ target }) => setWeight(target.value)}
            required
          />
        </div>
        <div>
          <label>Serial Number</label>
          <input
            type="number"
            value={serialNumber}
            onChange={({ target }) => setSerialNumber(target.value)}
            required
          />
        </div>
        <button type="button" onClick={handleAddParcel}>
          Add Parcel
        </button>
      </form>
      <h3>Added Parcels</h3>
      <ul>
        {parcels.map((parcel, index) => (
          <li key={index}>
            {parcel.serialNumber} - {parcel.width_dimension}x{parcel.length_dimension}x{parcel.height_dimension} cm - {parcel.weight} kg - $
            {parcel.price}
          </li>
        ))}
      </ul>
      <h4>Total Order Price: ${total}</h4>
      <h3>Total After Taxes: ${totalAfterTax}</h3>
      <button onClick={handleOrderSubmit} disabled={parcels.length === 0}>
        Order All Parcels
      </button>
      <button onClick={handleCancelOrder} disabled={parcels.length === 0}>
        Cancel Order
      </button>
    </div>
  );
};

CreateParcel.propTypes = {
  setErrorMessage: PropTypes.func.isRequired,
};

export default CreateParcel;
