const { json } = require('express');
const Categories = require('../services/categoryService');

exports.getCategories = async(req, res, next) => {
    try {
        const data = await Categories.getAllCategories()
        res.json(data)
        next()
    }
    catch(e) {
        console.log(e.message);
        res.sendStatus(500) && next(e)
    }
}

exports.getCategoryById = async(req, res, next) => {
    var id = req.query.id
    try {
        const data = await Categories.categoryDetail(id)
        res.json(data)
    }catch(error) {
        res.status(500) && next(error)
    }
}