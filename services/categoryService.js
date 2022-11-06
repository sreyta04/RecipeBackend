const Categories = require('../models/categoryModel');
// Get all categories
exports.getAllCategories = async() => {
    try {
        const res = await Categories.getCategories();  
        return res;
    }
    catch (e)
    {
        throw new Error(e.message);
    }
}

// Update Category


// Category Detail
exports.categoryDetail = async(id) => {
    try{
        const data = await Categories.getCategoryById(id);
        console.log(data);
        return data;
    }catch(error) {
        throw new Error(e.message);
    }
}
// exports.getAllCategories = getAllCategories
