var express = require('express');
var router = express.Router();

const getAllIngredients = require('../controllers/ingredientController');

//get in
router.get('/get-ingredients', getAllIngredients.getIngredients )

exports.router = router