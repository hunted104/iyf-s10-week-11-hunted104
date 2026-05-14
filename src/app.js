const express = require('express');
const authRoutes = require('./routes/auth');
const postsRoutes = require('./routes/posts');

const app = express();

app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.use('/api/auth', authRoutes);
app.use('/api/posts', postsRoutes);

module.exports = app;
