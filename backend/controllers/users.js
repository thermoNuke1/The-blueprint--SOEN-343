const bcrypt = require('bcrypt');
const usersRouter = require('express').Router();
const User = require('../models/users');
const { verifyToken } = require('./tokenVerification');

// Create a new user
usersRouter.post('/', async (request, response) => {
  const { username, firstname, lastname, password } = request.body;

  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(password, saltRounds);
  const type = "Customer";

  const user = new User({
    username,
    firstname,
    lastname,
    passwordHash,
    type,
  });

  const savedUser = await user.save();

  response.status(201).json(savedUser);
});


usersRouter.get('/', async (request, response) => {
  const users = await User.find({});
  response.json(users);
});


usersRouter.get('/:username', verifyToken, async (request, response) => {
  const { username } = request.params;

  const user = await User.findOne({ username });
  if (!user) {
    return response.status(404).json({ error: 'User not found' });
  }

  response.json(user);
});


usersRouter.put('/', verifyToken, async (request, response) => {
  const { username, name, password } = request.body;

  const user = await User.findOne({ username });
  if (!user) {
    return response.status(404).json({ error: 'User not found' });
  }

  if (name) user.name = name;

  if (password) {
    const saltRounds = 10;
    user.passwordHash = await bcrypt.hash(password, saltRounds);
  }

  const updatedUser = await user.save();

  response.json(updatedUser);
});


usersRouter.post('/addPoints', verifyToken, async (request, response) => {
  const { username, pointsToAdd } = request.body;

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return response.status(404).json({ error: 'User not found' });
    }

    user.points = (user.points || 0) + pointsToAdd;

    let level = 1;
    let discount = 0;

    if (user.points >= 400) {
      level = 4;
      discount = 20;
    } else if (user.points >= 300) {
      level = 3;
      discount = 15;
    } else if (user.points >= 200) {
      level = 2;
      discount = 10;
    } else if (user.points >= 100) {
      level = 1;
      discount = 5;
    }

    user.level = level;
    user.discount = discount;
    await user.save();

    response.status(200).json({
      success: true,
      points: user.points,
      level: user.level,
      discount: user.discount,
      message: 'Points added successfully!',
    });
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: 'Failed to add points' });
  }
});


usersRouter.get('/:username/points',verifyToken, async (request, response) => {
  const { username } = request.params;

  try {
      const user = await User.findOne({ username });
      if (!user) {
          return response.status(404).json({ error: 'User not found' });
      }

      response.status(200).json({
          username: user.username,
          points: user.points || 0,
          level: user.level || 1,
          discount: user.discount || 0,
      });
  } catch (error) {
      console.error(error);
      response.status(500).json({ error: 'Failed to fetch user points' });
  }
});


module.exports = usersRouter;
