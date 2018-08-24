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
   console.log('QUERY: ', request.query);
   console.log('QUERY NAME: ', request.query.name);
  db.collection('families').find({'familyName' : request.query.familyName, 'password' : request.query.password, 'familyMembers' : { $elemMatch: { 'name' : request.query.name} } }).toArray(function(error, result){
    if(result.length > 0 ){
      response.send(result);
      console.log(result);
    } else {
      console.log('No family found');
    }
  });
});

 app.post('/families', function(request, response) {
    db.collection('families').insertOne(
      request.body
      , function(error, result){
        if(error) {
          response.status(500).send(error);
          return;
        }
        console.log('Posted: ', request.body);
        response.send(result);
    });
 });



 // Funkar ej
 app.put('/families1', function(request, response){
  console.log('QUERY: ', request.query);
  console.log('QUERY NAME: ', request.query.name);
 db.collection('families').find({'familyName' : request.query.familyName, 'password' : request.query.password, 'familyMembers' : { $elemMatch: { 'name' : request.query.name} } }).toArray(function(error, result){
   if(result.length > 0 ){
    db.collection('families').update({familyName: request.query.familyName}, {$set: {points: this.query.points}})    

     response.send(result);

   } else {
     console.log('No family found');
   }
 });
});

app.put('families', function(request, response){
  db.collection('families').update({familyName: request.query.familyName}, {$set: {points: this.query.points}})    

})
