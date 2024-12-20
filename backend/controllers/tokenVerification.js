const jwt = require('jsonwebtoken')

const getTokenFrom = request => {
  const authorization = request.get('authorization')
  if (authorization && authorization.startsWith('Bearer ')) {
    return authorization.replace('Bearer ', '')
  }
  return null
}

const verifyToken = (request, response, next) => {
  const token = getTokenFrom(request)
  console.log('Authorization Header:', request.headers.authorization) // Log the Authorization header
  console.log('Extracted Token:', token) // Log the token extracted by getTokenFrom

  if (!token) {
    return response.status(401).json({ error: 'token missing' })
  }

  try {
    const decodedToken = jwt.verify(token, process.env.SECRET)
    if (!decodedToken.id) {
      return response.status(401).json({ error: 'token invalid' })
    }
    request.user = decodedToken
    next() 
  } catch (error) {
    return response.status(401).json({ error: 'token invalid' })
  }
}


module.exports = { verifyToken }
