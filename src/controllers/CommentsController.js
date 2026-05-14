const Comment = require('../models/Comment');
const Post = require('../models/Post');

const createComment = async (req, res) => {
  const post = await Post.findById(req.params.postId);

  if (!post) return res.status(404).json({ error: 'Post not found' });

  const comment = await Comment.create({
    content: req.body.content,
    author: req.user._id,
    post: post._id
  });

  res.status(201).json(comment);
};

const getComments = async (req, res) => {
  const comments = await Comment.find({ post: req.params.postId })
    .populate('author', 'username')
    .sort({ createdAt: -1 });

  res.json(comments);
};

const deleteComment = async (req, res) => {
  const comment = await Comment.findById(req.params.commentId);

  if (!comment) return res.status(404).json({ error: 'Not found' });

  if (comment.author.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
    return res.status(403).json({ error: 'Not allowed' });
  }

  await comment.deleteOne();

  res.json({ message: 'Deleted' });
};

module.exports = { createComment, getComments, deleteComment };
