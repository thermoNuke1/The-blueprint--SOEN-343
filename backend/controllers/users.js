const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()
const User = require('../models/users')
const { verifyToken } = require('./tokenVerification')

usersRouter.post('/', async (request, response) => {
  const { username, name, password } = request.body

  const saltRounds = 10
  const passwordHash = await bcrypt.hash(password, saltRounds)
  const type = "Customer"

  const user = new User({
    username,
    name,
    passwordHash,
    type,
  })

  const savedUser = await user.save()

  response.status(201).json(savedUser)
})

usersRouter.get('/', async (request, response) => {
  const users = await User.find({})
  response.json(users)
})

usersRouter.get('/:username',verifyToken ,async (request, response) => {
  const { username } = request.params

  const user = await User.findOne({ username })
  if (!user) {
    return response.status(404).json({ error: 'User not found' })
  }

  response.json(user)
})

usersRouter.put('/',verifyToken ,async (request, response) => {
  const { username, name, password } = request.body

  const user = await User.findOne({ username })
  if (!user) {
    return response.status(404).json({ error: 'User not found' })
  }

  if (name) user.name = name

  if (password) {
    const saltRounds = 10
    user.passwordHash = await bcrypt.hash(password, saltRounds)
  }

  const updatedUser = await user.save()

  response.json(updatedUser)
})

module.exports = usersRouter