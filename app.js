var express = require('express');
const bodyParser = require('body-parser');
var app = express();
const routes = require('./routes/index');
const port = 3001
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

const server = app.listen(port, () => {
  console.log(`Recipe App Running on http://localhost:${port}`)
});
// close the database connection
process.on("SIGINT", () => {
  dbConn.end(() => {
    console.log("disconnected");
    process.exit(0);
  })
})
module.exports = {
  app
}
