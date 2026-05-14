const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: { type: String, required: true, minlength: 3 },
  content: { type: String, required: true, minlength: 10 },

  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },

  likes: { type: Number, default: 0 },

  tags: [String],

  published: { type: Boolean, default: true }
}, { timestamps: true });

module.exports = mongoose.model('Post', postSchema);
