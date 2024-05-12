const Recipe = require('../models/Recipe');
const Comment = require('../models/Comment');
const User = require('../models/User');

const recipeController = {
  getAllRecipes: async (req, res) => {
    try {
      const recipes = await Recipe.find().populate('createdBy', 'name');

      for (let recipe of recipes) {
        const comments = await Comment.find({ recipe: recipe._id }).populate('user', 'name');
        recipe.comments = comments;
      }

      res.render('recipes/allRecipes', { recipes, isAuthenticated: req.session.isAuthenticated });
    } catch (err) {
      console.error(err);
      res.status(500).send('Błąd serwera');
    }
  },

  getAddRecipeForm: (req, res) => {
    res.render('recipes/addRecipe', { isAuthenticated: req.session.isAuthenticated });
  },

  createRecipe: async (req, res) => {
    try {
      const { title, ingredients, instructions } = req.body;
      const userId = req.session.user._id;
  
      const newRecipe = new Recipe({ title, ingredients, instructions, createdBy: userId });
      await newRecipe.save();
      res.redirect('/');
    } catch (err) {
      console.error(err);
      res.status(500).send('Błąd serwera');
    }
  },

getUserRecipes: async (req, res) => {
  try {
    const userId = req.session.user._id;
    const recipes = await Recipe.find({ createdBy: userId }).populate('createdBy', 'username');

    for (let recipe of recipes) {
      const comments = await Comment.find({ recipe: recipe._id }).populate('user', 'name');
      recipe.comments = comments;
    }

    res.render('recipes/userRecipes', { recipes, isAuthenticated: req.session.isAuthenticated });
  } catch (err) {
    console.error(err);
    res.status(500).send('Błąd serwera');
  }
},

  getEditRecipeForm: async (req, res) => {
    try {
      const recipe = await Recipe.findById(req.params.id).populate('createdBy', 'username');
      if (!recipe) {
        return res.status(404).send('Рецепт не знайдено');
      }
      res.render('recipes/editRecipe', { recipe, isAuthenticated: req.session.isAuthenticated });
    } catch (err) {
      console.error(err);
      res.status(500).send('Błąd serwera');
    }
  },

  updateRecipe: async (req, res) => {
    try {
      const { title, ingredients, instructions } = req.body;
      await Recipe.findByIdAndUpdate(req.params.id, { title, ingredients, instructions });
      res.redirect(`/userRecipes`);
    } catch (err) {
      console.error(err);
      res.status(500).send('Błąd serwera');
    }
  },

  deleteRecipe: async (req, res) => {
    try {
      const userId = req.session.user._id;
      await Recipe.findOneAndDelete({ _id: req.params.id, createdBy: userId });
      res.redirect('/userRecipes');
    } catch (err) {
      console.error(err);
      res.status(500).send('Błąd serwera');
    }
  }
};

module.exports = recipeController;
