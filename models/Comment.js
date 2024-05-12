const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  recipe: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Recipe', 
    required: true 
  },
  user: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  rating: { 
    type: Number, 
    min: 1, 
    max: 5 
  },
  content: { 
    type: String, 
    required: true 
  }
}, { timestamps: true });

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;