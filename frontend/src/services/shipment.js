import axios from 'axios';

const baseUrl = '/api/shipment';

let token = null;

const setToken = (newToken) => {
    token = `Bearer ${newToken}`;
};

const getShipment = async (shipmentId) => {
    const response = await axios.get(`${baseUrl}/${shipmentId}`, {
        headers: { Authorization: token }
    });
    return response.data;
};

const create = async (newShipment) => {
    const response = await axios.post(baseUrl, newShipment, {
        headers: { Authorization: token }
    });
    return response.data;
};

export default { create, getShipment, setToken };
