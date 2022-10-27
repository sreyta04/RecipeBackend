const {dbConn} = require('./dbConnection');
exports.getIngredients = ()=>{
    return new Promise((resolve, reject) => {
        dbConn.query('select * from ingredients', function(err, result) {
            if(err) {
                console.log(`Error executing the query - ${err}`);
            }else {
                resolve(result);
            }
        })
    })
    
}

exports.getRecipeIngredients = (id) => {
    var isDeleted = 0;
    console.log(id);
    const sql = 'SELECT ingredients.name AS ingredientName,RecipeIngredient.amount,measure.name AS measureTitle' +
                ' FROM ingredients'+
                ' INNER JOIN RecipeIngredient' +
                ' ON RecipeIngredient.ingredient_id = ingredients.ingredientId ' +
                ' INNER JOIN measure '+
                ' ON measure.id = RecipeIngredient.measure_id '+
                ' INNER JOIN recipes' +
                ' ON recipes.recipeId = RecipeIngredient.recipe_id ' +
                ' WHERE recipes.recipeId = ? AND recipes.isDeleted = ?';
    return new Promise((resolve, reject) => {
        dbConn.query(sql,[id,isDeleted], function(error, result) {
            if(error) {
                throw new error;
            }
            else{
                resolve(result);
            }
        })
    })
}

exports.deleteRecipe = (id) => {
    var isDeleted = 1;
    const sql = 'UPDATE recipes SET isDeleted = ? WHERE recipeId=?';
    return new Promise((resolve, reject) => {
        dbConn.query(sql, [isDeleted, id], function(error, result) {
            if(error) {
                throw new error;
            }else{
                resolve(result);
            }
        })
    })
}

exports.getRecipeById = (id) => {
    var isDeleted = 0;
    const sql = 'SELECT * FROM recipes WHERE recipeId= ? AND isDeleted = ?';
    return new Promise((resolve, reject) => {
        dbConn.query(sql, [id, isDeleted], function(error, result) {
            console.log(result);
            if(error) {
                throw new error;
            }else {
                resolve(result);
            }
        })
    })
}