const shipmentRouter = require('express').Router();
const Shipment = require('../models/shipment'); // Correctly import the model
const Parcel = require('../models/parcel');
const Logger = require('../utils/logger');
const { updateShipmentStatus } = require('../utils/shipmentUpdater');


shipmentRouter.post('/', async (req, res) => {
  const { location, timestamp, paid, parcels } = req.body;

  try {
    // Insert parcels into the database
    const parcelDocuments = await Parcel.insertMany(parcels);
    const parcelIds = parcelDocuments.map((parcel) => parcel._id);

    // Create shipment
    const shipment = new Shipment({
      shipment_status: 'Order Placed',
      location,
      timestamp,
      paid,
      parcels: parcelIds,
    });

    const savedShipment = await shipment.save();
    updateShipmentStatus(savedShipment._id);
    res.status(201).json(savedShipment);
  } catch (error) {
    console.error('Error saving shipment:', error);
    res.status(500).json({ error: 'Failed to create shipment' });
  }
});


shipmentRouter.get('/', async (req, res) => {
  try {
    const shipments = await Shipment.find({});
    res.json(shipments);
  } catch (error) {
    console.error('Error fetching shipments:', error);
    res.status(500).json({ error: 'Failed to fetch shipments' });
  }
});

// GET /api/shipment/:id - Fetch a shipment by ID
shipmentRouter.get('/:id', async (req, res) => {
  Logger.info('Fetching shipment with ID:', req.params.id);

  try {
    const shipment = await Shipment.findById(req.params.id).populate('parcels');
    if (!shipment) {
      return res.status(404).json({ error: 'Shipment not found' });
    }
    res.json(shipment);
  } catch (error) {
    console.error('Error fetching shipment:', error);
    res.status(500).json({ error: 'Failed to fetch shipment' });
  }
});

module.exports = shipmentRouter;
