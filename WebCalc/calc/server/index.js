const express = require("express")
const app = express();
const open = require('open');
var cors = require('cors')

var bodyParser = require("body-parser")
let fibvar = 0;
let catvar = 0;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.listen(8000, () => {
  console.log("Example app listening on port 8000!")
});

app.post("/fib", function (req, res) {
  fibvar = req.body;
  console.log(req.body)
  res.send("POST request to the homepage")

})

app.get('/fibresult', cors(), (req, res) => {
  res.send(fibvar)
});

app.post("/cat", function (req, res) {
  catvar = req.body;
  console.log(req.body)
  res.send("POST request to the homepage")

})

app.get('/catresult', cors(), (req, res) => {
  res.send(catvar)
});