const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

router.get('/:recipeId/addComment', commentController.showAddCommentForm);

router.post('/:recipeId/addComment', commentController.addComment);

module.exports = router;
