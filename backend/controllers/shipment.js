//each shipment contains 1 or more parcels
//subject observer's are watching
const shipmentRouter = require('express').Router()
const Shipment = require('../models/shipment')

shipmentRouter.post('/', async (request, response) => {
    const { shipment_id, shipment_status, location, timestamp,} = request.body
  
    const shipment = new Shipment({
      shipment_id,
      shipment_status,
      location,
      timestamp,
    })
  
    const savedShipment = await shipment.save()
  
    response.status(201).json(savedShipment)
  })
  
  shipmentRouter.get('/', async (request, response) => {
    const shipments = await Shipment.find({})
    response.json(shipments)
  })

  shipmentRouter.get('/:shipment_id', async (req, res) => {
    console.log('Fetching shipment with custom shipment_id:', req.params.shipment_id);  // Debug log
    try {
      const shipment = await Shipment.findOne({ shipment_id: Number(req.params.shipment_id) });  // Use shipment_id for query
      if (shipment) {
        res.json(shipment);
      } else {
        res.status(404).send({ error: 'Shipment not found' });
      }
    } catch (error) {
      console.error('Error fetching shipment:', error);
      res.status(500).send({ error: 'Server error' });
    }
  })
  
  

  //need to create update
  //observer pattern
  
  module.exports = shipmentRouter