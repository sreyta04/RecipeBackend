const {dbConn} = require('./dbConnection');
exports.getCategories = ()=>{
    return new Promise((resolve, reject) => {
        dbConn.query('select * from categories', function(err, result) {
            if(err) {
                console.log(`Error executing the query - ${err}`);
            }else {
                resolve(result);
            }
        })
    })
    
}

exports.getCategoryById = (id) => {
    var isDeleted = 0;
    const sql = 'SELECT * FROM categories WHERE id= ? AND isDeleted = ?';
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