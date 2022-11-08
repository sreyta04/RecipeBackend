const {dbConn} = require('./dbConnection');
exports.getRecipes = ()=>{
    return new Promise((resolve, reject) => {
        dbConn.query('select * from recipes WHERE isDeleted = 0', function(err, result) {
            if(err) {
                console.log(`Error executing the query - ${err}`);
            }else {
                resolve(result);
            }
        })
    })
    
}

exports.createRecipe = (payload) => {
    return new Promise((resolve, reject) => {
        if(typeof(payload) == 'object'){
            if(!(payload.hasOwnProperty('title'))){
                reject('Title is required.')
            }else if(!(payload.hasOwnProperty('description'))){
                reject('description is required.')
            }else if(!(payload.hasOwnProperty('photoUrl'))){
                reject('photoUrl is required.')
            }else if(!(payload.hasOwnProperty('isDeleted'))){
                reject('isDeleted is required.')
            }else if(!(payload.hasOwnProperty('categoryId'))){
                reject('categoryId is required.')
            }else {
                let title = payload.title == '' ? null : payload.title;
                let description = payload.description == '' ? null : payload.description;
                let photoUrl = payload.photoUrl == '' ? null : payload.photoUrl;
                let isDeleted = typeof(payload.isDeleted) == 'number' ? payload.isDeleted : 0;
                let categoryId = typeof(payload.categoryId) == 'number' ? payload.categoryId : 0;
                const sql = `INSERT INTO Recipes (title, description, photo_url, isDeleted, categoryId) VALUES ('${title}', '${description}', '${photoUrl}', ${isDeleted}, ${categoryId})`;
                dbConn.query(sql, function(error, result) {
                    if(error) {
                        reject(error);
                    }else {
                        resolve(result);
                    }
                })
            }
        }else {
            reject("Payload must be type JSON object.")
        }
    })
}