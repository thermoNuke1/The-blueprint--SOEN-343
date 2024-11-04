const logger = require('./logger')
const requestLogger = (request, response, next) => {
    logger.info('method:', request.method)
    logger.info('Path:', request.path)
    logger.info('Body:', request.body)
    logger.info('---')
    next()
}

const unknownEndpoint = (request, response) => {
    response.status(404).send({error: 'unknown endpoint'})
}

const errorHandler = (error, request, response, next) => {
    logger.error(error)
    logger.info(error.message)

    // if(error.name === 'CastError'){
    //     response.status(400).send({ error: 'malformatted ID' })
    // } else if(error.name === 'ValidationError'){
    //     return response.status(400).json({ error: error.message })
    // }
    if (error.name === 'MongoServerError' && error.message.includes('E11000 duplicate key error')) {
        return response.status(400).json({ error: 'expected `username` to be unique' })  
    } else if (error.name ===  'JsonWebTokenError') {
        return response.status(401).json({ error: 'token invalid' }) 
    } else if (error.name === 'TokenExpiredError') {
        return response.status(401).json({     
            error: 'token expired'    
        })  
    }
    next(error)
}

module.exports = { requestLogger, unknownEndpoint, errorHandler }