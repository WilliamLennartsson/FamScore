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
   console.log(request.query.familyName);
   console.log(request.query.password);
  db.collection('families').find({'familyName' : request.query.familyName, 'password' : request.query.password }).toArray(function(error, result){
    if(result.length > 0 ){
      response.send(result);
      console.log(result);
    } else {
      console.log('No family found');
    }
    console.log('Did we make it dad?');
  });
});

 app.post('/families', function(request, response) {
   console.log('Testkör');
    db.collection('families').insertOne({
      familyName: request.body.familyName,
      password: request.body.password,
      familyMembers: request.body.familyMembers
    }, function(error, result){
        if(error) {
          response.status(500).send(error);
          return;
        }
        response.send(result);
    });
 });
