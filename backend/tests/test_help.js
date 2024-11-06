const User = require('../models/users')
const Parcel = require('../models/parcel')

const usersInDb = async () => {
  const users = await User.find({})
  return users.map(u => u.toJSON())
}
const parcelsInDb = async () => {
  const parcels = await Parcel.find({})
  return parcels.map(p => p.toJSON())
}

module.exports = {
  usersInDb,
  parcelsInDb,
}