var express = require('express');
const bodyParser = require('body-parser');
var app = express();
const routes = require('./routes/index');
const port = 3000
const {dbConn} = require('./models/dbConnection')

//database connection
dbConn.connect(function(err) {
  if(err) throw err;
  console.log("connected");
});

// configure middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));


app.use('/api',routes.router)
app.get('/', function(req, res,next) {
  res.send("Welcome");
});

app.listen(port, () => {
  console.log(`Recipe App Running on http://localhost:${port}`)
});
// close the database connection
dbConn.on('close', function(err) {
  console.log('request closed');
})
module.exports = {
  app
}
