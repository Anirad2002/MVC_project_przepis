const Recipe = require('../models/Recipe');
const Comment = require('../models/Comment');

const commentController = {
  showAddCommentForm: async (req, res) => {
    try {
      const recipeId = req.params.recipeId;
      const recipe = await Recipe.findById(recipeId);
      if (!recipe) {
        return res.status(404).send('Nie znaleziono przepisu');
      }
      res.render('recipes/addComment', { recipe });
    } catch (err) {
      console.error(err);
      res.status(500).send('Błąd serwera');
    }
  },

  addComment: async (req, res) => {
    try {
      const recipeId = req.params.recipeId;
      const { content, rating } = req.body;
      const userId = req.session.user._id;
      const recipe = await Recipe.findById(recipeId);
      if (!recipe) {
        return res.status(404).send('Nie znaleziono przepisu');
      }

      const comment = new Comment({
        recipe: recipeId,
        user: userId,
        content,
        rating
      });
      await comment.save();

      res.redirect('/');
    } catch (err) {
      console.error(err);
      res.status(500).send('Błąd serwera');
    }
  }
};

module.exports = commentController;
