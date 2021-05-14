//Normal Constants: Express.js, Body Parser NPM
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended: true}))

//Server Connection
app.listen(3000, function(){
  console.log("Server is running on port 3000.")
});

// Calculator normal addition function
app.post("/", function(req, res){
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result = num1 + num2;

  res.send("The result of the Calculation is " +result)
});
// Calculator index Connect
app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html")
});

// BMI Calculator function
app.post("/bmicalculator", function(req, res){
  var weight = req.body.weight;
  var height = req.body.height;
  var cHeight = height/100;
  var result = weight/(cHeight*cHeight);

  res.send("Your BMI is " + result )
});
// BMI Connect
app.get("/bmicalculator", function(req, res){
  res.sendFile(__dirname + "/bmiCalculator.html")
})
