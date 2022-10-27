var express = require('express');
var router = express.Router();

const getAllIngredients = require('../controllers/ingredientController');

//get in
router.get('/get-ingredients', getAllIngredients.getIngredients )
router.get('/get-recipe-ingredients', getAllIngredients.getRecipeIngredients)
router.put('/delete-recipe', getAllIngredients.deleteRecipe)
router.get('/recipe-detial', getAllIngredients.getRecipeById)

exports.router = router