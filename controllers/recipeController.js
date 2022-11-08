const recipes= require('../services/recipeService');

exports.getAllRecipes = async(req, res, next) => {
    try {
        const data = await recipes.getAllRecipes()
        res.json(data)
        next()
    } catch(err) {
        err = err.hasOwnProperty('stack') ? err.stack : err
        res.status(500).send({message: err})
    }
}

exports.createRecipe = async(req, res) => {
    try {
        var payload = req.body;
        const data = await recipes.createRecipe(payload);
        console.log(data)
        res.status(201).send({message: "Created a new recipe is successfully."});
    }catch(err){
        err = err.hasOwnProperty('stack') ? err.stack : err
        res.status(400).send({message: err})
    }
}