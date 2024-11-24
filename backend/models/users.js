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

userSchema.virtual('discount').get(function () {
        if (this.points >= 400) {
            return 20;
        } else if (this.points >= 300) {
            return 15;
        } else if (this.points >= 200) {
            return 10;
        } else if (this.points >= 100) {
            return 5;
        }
        return 0;
});


userSchema.virtual('Level').get(function () {
        if (this.points >= 400) {
            return 4;
        } else if (this.points >= 300) {
            return 3;
        } else if (this.points >= 200) {
            return 2;
        } else if (this.points >= 100) {
            return 1;
        }
        return 0;
});


userSchema.toJSONTransform

const User = mongoose.model('User', userSchema);

module.exports = User;
