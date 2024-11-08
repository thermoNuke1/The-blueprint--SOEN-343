//each shipment contains 1 or more parcels
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
  
  module.exports = shipmentRouter