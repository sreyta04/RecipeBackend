//database connection string
var mysql = require('mysql');

var dbConn = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    database: 'test',
    port:'3306',
    password: 'password',
   
});
// Connecting to database
dbConn.connect(function(err) {
    if(err){
      console.log("Error in the connection")
      console.log(err)
    }
    else{
      console.log(`Database Connected`)
      dbConn.query(`select * from user`, 
      function (err, result) {
        if(err)
          console.log(`Error executing the query - ${err}`)
        else
          console.log("Result: ",result) 
      })
    }
})