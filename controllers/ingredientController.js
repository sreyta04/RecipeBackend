const { json } = require('express');
// const getAllIngredients = require('../models/ingredientModel');
const ingredients = require('../services/ingredientService');

exports.getIngredients = async(req, res, next) => {
    try {
        const data = await ingredients.getAllIngredients()
        res.json(data)
        next()
    }
    catch(e) {
        console.log(e.message);
        res.sendStatus(500) && next(e)
    }
}

exports.getRecipeIngredients = async(req, res, next) => {
    var id = req.query.id;
    try {
        const data = await ingredients.getRecipeIngredients(id)
        var string = JSON.stringify(data);
        var json = JSON.parse(string);
        res.send(json);
        next()
    }catch(error) {
        console.log(error.message);
        res.status(500) && next(e)
    }
}

exports.deleteRecipe = async(req, res, next) => {
    var id = req.query.id;
    var data = await ingredients.recipeDetail(id);
    console.log(data);
    if(data) {
        try {
            await ingredients.deleteRecipe(id)
            res.send({
                code: 200,
                message: 'success',
            })
        }catch(error) {
            console.log(error.message);
            res.status(500) && next(error)
        }
    }else {
        res.send("Cannot find that recipe id: " + id);
    }
    
}

exports.getRecipeById = async(req, res, next) => {
    var id = req.query.id;
    try {
        const data = await ingredients.recipeDetail(id);
        res.json(data);
    }catch(error) {
        res.status(500) && next(error)
    }
}