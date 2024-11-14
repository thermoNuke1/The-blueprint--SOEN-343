//each shipment contains 1 or more parcels
//subject observer's are watching
const shipmentRouter = require('express').Router()
const { response } = require('express')
const Shipment = require('../models/shipment')
const Logger = require('../utils/logger')

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
    Logger.info('Fetching shipment with custom shipment_id:', req.params.shipment_id); 
    const {shipment_id} = req.params
    const shipment = await Shipment.findOne({shipment_id});  // Use shipment_id for query
    if (!shipment) {
      return res.status(404).json({
        error: "Shipment not found"
      });
    }
    res.json(shipment)
  })
  
  

  //need to create update
  //observer pattern
  
  module.exports = shipmentRouter