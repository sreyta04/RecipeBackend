const Recipe = require('../models/recipeModel');

// Get all recipes
exports.getAllRecipes = async() => {
    try {
        const res = await Recipe.getRecipes();  
        return res;
    }catch (err){
        err = err.hasOwnProperty('stack') ? err.stack : err;
        throw err;
    }
}

// Create a new recipe
exports.createRecipe = async(payload) => {
    try {
        const data = await Recipe.createRecipe(payload);
        return data;
    }catch(err){
        err = err.hasOwnProperty('stack') ? err.stack : err;
        throw err;
    }
}
