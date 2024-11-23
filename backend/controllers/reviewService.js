const express = require('express');
const mongoose = require('mongoose');
const Review = require('../models/review');
const logger = require('../utils/logger'); 

const router = express.Router('/', async (req, res) => {
    try {
        const { username, ratingScore } = req.body;

        if (!username || !ratingScore) {
            return res.status(400).json({ message: 'All fields are required.' });
        }

        const newReview = new Review({
            username, 
            ratingScore,
            feedback,
        });

        await newReview.save();

        res.status(201).json({ message: 'Review submitted successfuly!', review: newReview})
        
    } catch (error) {
        logger.error('Error creating review: ', error);
        res.status(500).json({message: 'Server error. Please try again later.'});
    }
});

module.exports = router;

