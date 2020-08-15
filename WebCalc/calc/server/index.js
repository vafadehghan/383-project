const express = require("express")
const app = express();
const open = require('open');
var cors = require('cors')

var bodyParser = require("body-parser")
let variableToPass = 0;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.get('/', (req, res) => {
  res.send("HelloWorld")
});


app.get('/result', cors(), (req, res) => {
  res.send(variableToPass)
});


app.listen(8000, () => {
  console.log("Example app listening on port 8000!")
});


app.post("/", function (req, res) {
  variableToPass = req.body;
  console.log(req.body)
  res.send("POST request to the homepage")

})