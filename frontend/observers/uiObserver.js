import axios from 'axios';

class UIObserver {
    constructor(updateCallback, shipmentId) {
        this.updateCallback = updateCallback;
        this.shipmentId = shipmentId;
    }

    async update() {
        try {
            const response = await axios.get(`/api/shipment/${this.shipmentId}`);
            this.updateCallback(response.data);
        } catch (error) {
            console.error('Failed to update shipment status:', error);
        }
    }
}

export default UIObserver;


