require('dotenv').config()

const PORT = process.env.PORT
const STRIPE_KEY = process.env.STRIPE_KEY
const MONGODB_URL = process.env.NODE_ENV === 'test'
 ? process.env.TEST_MONGODB_URL
 : process.env.MONGODB_URL
module.exports = {
    MONGODB_URL,
    PORT
}
// this file is for configurations and possibly switching between a test env and a prod env