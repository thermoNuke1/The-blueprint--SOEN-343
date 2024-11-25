const shipmentRouter = require('express').Router();
const Shipment = require('../models/shipment');
const User = require('../models/users');
const Parcel = require('../models/parcel');
const Logger = require('../utils/logger');
const { updateShipmentStatus } = require('../utils/shipmentUpdater');
const {verifyToken} = require('../controllers/tokenVerification');
const shipmentObserver = require('../observers/shipmentObserver');


shipmentRouter.post('/', async (req, res) => {
  const { location,origin,destination, timestamp, paid, parcels, user } = req.body;

  try {
    
    if (!user) {
      return res.status(400).json({ error: 'User ID is required.' });
    }

    const existingUser = await User.findById(user);

    if (!existingUser) {
      return res.status(404).json({ error: 'User not found.' });
    }

    const parcelDocuments = await Parcel.insertMany(parcels);
    const parcelIds = parcelDocuments.map((parcel) => parcel._id);

    // Create shipment
    const shipment = new Shipment({
      shipment_status: 'Order Placed',
      user,
      origin,
      destination,
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
    const shipments = await Shipment.find({}).populate('user', 'username firstname lastname');
    res.json(shipments);
  } catch (error) {
    console.error('Error fetching shipments:', error);
    res.status(500).json({ error: 'Failed to fetch shipments' });
  }
});


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
