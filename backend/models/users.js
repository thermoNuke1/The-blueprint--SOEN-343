const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {   
        type: String,    
        required: true,    
        unique: true 
        // this ensures uniqueness of username  
        },
    firstname: String,
    lastname: String,
    passwordHash: String,
    type: String,
    parcels: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Parcel'
      }
    ],
   
  })
  
  userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
      //passwordHash not be revealed
      delete returnedObject.passwordHash
    }
  })
  
  const User = mongoose.model('User', userSchema)
  
  module.exports = User