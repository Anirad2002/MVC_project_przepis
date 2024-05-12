
// routes/recipeRoutes.js
const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController');

router.get('/', recipeController.getAllRecipes);

router.get('/addRecipe', recipeController.getAddRecipeForm);

router.post('/addRecipe', recipeController.createRecipe); 

router.get('/userRecipes', recipeController.getUserRecipes);

router.get('/userRecipes/:id/editRecipe', recipeController.getEditRecipeForm);

router.post('/userRecipes/:id/editRecipe', recipeController.updateRecipe);

router.get('/userRecipes/:id/delete', recipeController.deleteRecipe);

module.exports = router;
