const mongoose = require('mongoose')

const shipmentSchema = new mongoose.Schema({
    origin:String,
    destination:String,
    currentLocatio:String,
    ShippingLabel:[
        {

        }
    ],
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

