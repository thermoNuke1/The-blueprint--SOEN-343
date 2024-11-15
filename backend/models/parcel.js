const mongoose = require('mongoose')
const toJSONTransform = require('./adaptor')
const parcelSchema = new mongoose.Schema({
  width_dimension: Number,
  length_dimension: Number,
  height_dimension: Number,
  weight: Number,
  serialNumber: Number,
   
  })
  
  parcelSchema.toJSONTransform

  const Parcel = mongoose.model('Parcel', parcelSchema)
  
  module.exports = Parcel