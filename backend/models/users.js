const mongoose = require('mongoose');
const toJSONTransform = require('./adaptor')

const userSchema = new mongoose.Schema({
    username: {   
        type: String,    
        required: true,    
        unique: true 
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
    points: { 
        type: Number, 
        default: 0 // Points start at 0 for new users
    }, 
});

const User = mongoose.model('User', userSchema);

module.exports = User;
