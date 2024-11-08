const parcelRouter = require('express').Router()
const Parcel = require('../models/parcel')

parcelRouter.post('/', async (request, response) => {
  const { width_dimension, length_dimension, height_dimension, weight, serialNumber} = request.body

  const parcel = new Parcel({
    width_dimension,
    length_dimension,
    height_dimension,
    weight,
    serialNumber,
  })

  const savedParcel = await parcel.save()

  response.status(201).json(savedParcel)
})

parcelRouter.get('/', async (request, response) => {
  const parcels = await Parcel.find({})
  response.json(parcels)
})

module.exports = parcelRouter