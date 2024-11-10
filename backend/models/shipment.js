const mongoose = require('mongoose')
const shipmentSchema = new mongoose.Schema({
  shipment_id: Number,
  shipment_status: String,
  location: String,
  timestamp: Date,
  })
  
  shipmentSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    
    }
  })
  
  const Shipment = mongoose.model('Shipment', shipmentSchema)
  
  module.exports = Shipment