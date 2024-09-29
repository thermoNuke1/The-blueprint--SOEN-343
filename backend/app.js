const config = require('./utils/config')
const express = require('express')
const app = express()
const cors =  require('cors')
const middleware = require('./utils/middleware')
const logger = require('./utils/logger')
const mongoose = require('mongoose')



mongoose.set('strictQuery', false)

logger.info('connecting to', config.MONGODB_URL)

mongoose.connect(config.MONGODB_URL).then(result =>{
    logger.info('connected to MongoDB')
}).catch(error => {
    logger.error('error connecting to MongoDB', error.message)
})


app.use(cors())
app.use(express.static('dist'))
app.use(express.json())
app.use(middleware.requestLogger)
// app.use('/api/x', xRouter)
app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app
