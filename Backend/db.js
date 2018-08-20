var MongoClient = require('mongodb').MongoClient;
var bodyParser = require('body-parser');
var express = require('express');
var db;

var app = express();

app.use(bodyParser.json());

MongoClient.connect('mongodb://localhost:27017', function(error, client) {
  if (error) {
    console.error('Failed to connect to the database!');
    console.log(error);
  } else {
    console.log('Successfully connected to the database!');
    db = client.db('families');


  }
});


 app.get('/', function (request, response) {
  response.send('hellow');
 });

 app.listen(3000, function(){
  console.log('express springer');
 });

 app.get('/families', function(request, response){
  response.send('sucess');
 })

 app.post('/families', function(request, response) {
    response.send(request.body);
    console.log(request.body);
 });
