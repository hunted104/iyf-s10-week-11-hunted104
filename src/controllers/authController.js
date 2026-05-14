const User = require('../models/User');
const { signToken } = require('../utils/jwt');

const register = async (req, res) => {
  const { username, email, password } = req.body;

  const exists = await User.findOne({
    $or: [{ email }, { username }]
  });

  if (exists) {
    return res.status(400).json({ error: 'User already exists' });
  }

  const user = await User.create({ username, email, password });

  const token = signToken(user._id);

  res.status(201).json({
    message: 'User registered successfully',
    token,
    user: {
      id: user._id,
      username: user.username,
      email: user.email,
      role: user.role
    }
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email }).select('+password');

  if (!user || !(await user.matchPassword(password))) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  const token = signToken(user._id);

  res.json({
    message: 'Login successful',
    token,
    user: {
      id: user._id,
      username: user.username,
      email: user.email,
      role: user.role
    }
  });
};

const getMe = async (req, res) => {
  const user = await User.findById(req.user.id);

  res.json(user);
};

module.exports = { register, login, getMe };
