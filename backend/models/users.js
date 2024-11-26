const mongoose = require('mongoose')
const toJSONTransform = require('./adaptor')


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
  
  userSchema.toJSONTransform
  
  const User = mongoose.model('User', userSchema)
  
  module.exports = User