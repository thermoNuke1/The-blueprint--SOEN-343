const parcelRouter = require('express').Router()
const Parcel = require('../models/parcel')
const User = require('../models/users')
const logger = require('../utils/logger')

const { verifyToken } = require('./tokenVerification')

parcelRouter.post('/', verifyToken, async (request, response) => {
  const { width_dimension, length_dimension, height_dimension, weight, serialNumber } = request.body

  const parcel = new Parcel({
    width_dimension,
    length_dimension,
    height_dimension,
    weight,
    serialNumber,
  })

  try {
    const savedParcel = await parcel.save()

    const userId = request.user.id  

    const user = await User.findById(userId)

    if (!user) {
      return response.status(404).json({ error: 'User not found' })
    }

    user.parcels.push(savedParcel._id) 

    await user.save()

    response.status(201).json({
      message: 'Parcel created and associated with user successfully',
      parcel: savedParcel,
    })
  } catch (error) {
    logger.error(error)
    response.status(500).json({ error: 'Something went wrong while creating the parcel', details: error.message })
  }
})


parcelRouter.get('/', async (request, response) => {
  const parcels = await Parcel.find({})
  response.json(parcels)
})

module.exports = parcelRouter