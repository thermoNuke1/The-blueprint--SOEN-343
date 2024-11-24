const mongoose = require('mongoose');

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
    level: { 
        type: Number, 
        default: 1 // Default to level 1
    }, 
    discount: { 
        type: Number, 
        default: 0 // Default discount is 0%
    }
});

// Pre-save middleware to update level and discount dynamically
userSchema.pre('save', function (next) {
    const user = this;

    if (user.points >= 400) {
        user.level = 4;
        user.discount = 20;
    } else if (user.points >= 300) {
        user.level = 3;
        user.discount = 15;
    } else if (user.points >= 200) {
        user.level = 2;
        user.discount = 10;
    } else if (user.points >= 100) {
        user.level = 1;
        user.discount = 5;
    } else {
        user.level = 1;
        user.discount = 0;
    }

    next(); // Proceed to save
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
