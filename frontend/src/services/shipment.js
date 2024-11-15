// services/shipment.js

import axios from 'axios';

const baseUrl = '/api/shipment';
let token = null;

const setToken = (newToken) => {
  token = `Bearer ${newToken}`;
};

const create = async (newShipment) => {
  const config = {
    headers: { Authorization: token },
  };
  const response = await axios.post(baseUrl, newShipment, config);
  return response.data;
};

export default { create, setToken };

