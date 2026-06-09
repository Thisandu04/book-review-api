const Review = require('../models/Review');

exports.getReviews    = async (req, res) => { res.json(await Review.find({ book: req.params.bookId }).populate('user', 'name')); };
exports.createReview  = async (req, res) => { res.status(201).json(await Review.create({ ...req.body, book: req.params.bookId, user: req.user.id })); };
exports.updateReview  = async (req, res) => { res.json(await Review.findByIdAndUpdate(req.params.id, req.body, { new: true })); };
exports.deleteReview  = async (req, res) => { await Review.findByIdAndDelete(req.params.id); res.json({ message: 'Deleted' }); };