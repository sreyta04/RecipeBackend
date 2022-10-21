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