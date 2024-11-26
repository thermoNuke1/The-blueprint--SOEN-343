const Shipment = require('../models/shipment');

const statusSequence = [
  { status: 'Order Placed', delay: 0 },
  { status: 'Processing', delay: 5000 },
  { status: 'Ready for Pickup', delay: 10000 },
  { status: 'Out for Delivery', delay: 15000 },
  { status: 'In Transit', delay: 20000 },
  { status: 'Delivered', delay: 25000 }
];

async function updateShipmentStatus(shipmentId, index = 0) {
  if (index >= statusSequence.length) return;

  const { status, delay } = statusSequence[index];

  setTimeout(async () => {
    try {
      const shipment = await Shipment.findById(shipmentId);
      if (!shipment) {
        console.error('Shipment not found');
        return;
      }

      shipment.shipment_status = status;
      await shipment.save();

      updateShipmentStatus(shipmentId, index + 1); 
    } catch (error) {
      console.error('Error updating shipment status:', error);
    }
  }, delay);
}

module.exports = { updateShipmentStatus };
