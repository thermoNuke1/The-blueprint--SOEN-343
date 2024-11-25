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

const create = async (newShipment, userId) => {
    const shipmentData = {
        ...newShipment,
        user: userId, 
    };
    const response = await axios.post(baseUrl, shipmentData, {
        headers: { Authorization: token }
    });
    return response.data;
};

export default { create, getShipment, setToken };
