const mongoose = require('mongoose')
const parcelSchema = new mongoose.Schema({
  width_dimension: Number,
  length_dimension: Number,
  height_dimension: Number,
  weight: Number,
  serialNumber: Number,
   
  })
  
  parcelSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    
    }
  })
  
  const Parcel = mongoose.model('Parcel', parcelSchema)
  
  module.exports = Parcel