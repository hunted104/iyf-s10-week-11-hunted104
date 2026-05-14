const Post = require('../models/Post');
const Comment = require('../models/Comment');

// CREATE
const createPost = async (req, res) => {
  const post = await Post.create({
    ...req.body,
    author: req.user._id
  });

  res.status(201).json(post);
};

// GET ALL
const getAllPosts = async (req, res) => {
  const posts = await Post.find()
    .populate('author', 'username email')
    .sort({ createdAt: -1 });

  res.json(posts);
};

// GET ONE
const getPostById = async (req, res) => {
  const post = await Post.findById(req.params.id)
    .populate('author', 'username email');

  if (!post) return res.status(404).json({ error: 'Not found' });

  res.json(post);
};

// UPDATE
const updatePost = async (req, res) => {
  const post = await Post.findById(req.params.id);

  if (!post) return res.status(404).json({ error: 'Not found' });

  if (post.author.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
    return res.status(403).json({ error: 'Not allowed' });
  }

  Object.assign(post, req.body);
  await post.save();

  res.json(post);
};

// DELETE
const deletePost = async (req, res) => {
  const post = await Post.findById(req.params.id);

  if (!post) return res.status(404).json({ error: 'Not found' });

  if (post.author.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
    return res.status(403).json({ error: 'Not allowed' });
  }

  await Comment.deleteMany({ post: post._id });
  await post.deleteOne();

  res.json({ message: 'Deleted' });
};

// LIKE
const likePost = async (req, res) => {
  const post = await Post.findByIdAndUpdate(
    req.params.id,
    { $inc: { likes: 1 } },
    { new: true }
  );

  res.json(post);
};

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost,
  likePost
};
