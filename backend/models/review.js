const mongoose = require('mongoose');
const toJSONTransform = require('./adaptor');

const reviewSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    ratingScore: Number,
    feedback: String,
})

reviewSchema.toJSONTransform

 const Review = mongoose.model('Review', reviewSchema)

 module.exports = Review