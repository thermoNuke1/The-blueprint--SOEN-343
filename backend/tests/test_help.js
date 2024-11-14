const User = require('../models/users')
const Parcel = require('../models/parcel')
const Shipment = require('../models/shipment')

const usersInDb = async () => {
  const users = await User.find({})
  return users.map(u => u.toJSON())
}
const parcelsInDb = async () => {
  const parcels = await Parcel.find({})
  return parcels.map(p => p.toJSON())
}
const shipmentsInDb = async() => {
  const shipments = await Shipment.find({})
  return shipments.map(s => s.toJSON())
}
module.exports = {
  usersInDb,
  parcelsInDb,
  shipmentsInDb,
}