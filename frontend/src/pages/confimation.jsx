import { useLocation } from 'react-router-dom';

const Confirmation = () => {
  const location = useLocation();
  const { clientSecret } = location.state || {};

  return (
    <div>
      <h1>Payment Successful</h1>
      <p>Client Secret: {clientSecret}</p>
    </div>
  );
};

export default Confirmation;
