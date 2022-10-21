const getAllIngredients = require('../models/ingredientModel');

exports.getIngredients = async(req, res, next) => {
    // res.send('any message');
    try {
        const data = await getAllIngredients.getIngredients()
        res.json(data)
        next()
    }
    catch(e) {
        console.log(e.message);
        res.sendStatus(500) && next(e)
    }
}