const config = require('./utils/config')
const express = require('express')
const app = express()
require('express-async-errors')
const cors =  require('cors')
const usersRouter = require('./controllers/users')
const loginRouter = require('./controllers/login')
const parcelRouter = require('./controllers/parcel')
const paymentRouter = require('./controllers/payment');

const shipmentRouter = require('./controllers/shipment')
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

app.use('/api/users', usersRouter)
app.use('/api/login', loginRouter)
app.use('/api/parcel', parcelRouter)
app.use('/api/payment', paymentRouter)
app.use('/api/shipment', shipmentRouter)


app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app
