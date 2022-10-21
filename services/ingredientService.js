const getIngredients = require('../models/ingredientModel');
exports.getAllIngredients =() => {
    try {
        const res = getIngredients.getIngredients();  
        console.log(res)
    }
    catch (e)
    {
        throw new Error(e.message);
    }
}
// exports.getAllIngredients = getAllIngredients
