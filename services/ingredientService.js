const ingredients = require('../models/ingredientModel');
exports.getAllIngredients = async() => {
    try {
        const res = await ingredients.getIngredients();  
        return res;
    }
    catch (e)
    {
        throw new Error(e.message);
    }
}

exports.recipeDetail = async(id) => {
    try{
        const data = await ingredients.getRecipeById(id);
        console.log(data);
        return data;
    }catch(error) {
        throw new Error(e.message);
    }
}

exports.getRecipeIngredients = async(id) => {
    try {
        const result = await ingredients.getRecipeIngredients(id);
        return result;
    }catch(e) {
        throw new Error(e.message);
    }
}

exports.deleteRecipe = async(id) => {
    try {
        const result = await ingredients.deleteRecipe(id);
        return result;
    }catch(e) {
        throw new Error(e.message);
    }
}
// exports.getAllIngredients = getAllIngredients
