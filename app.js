const express = require('express');
const app = express();
const path = require('path');



app.listen(3000, function(){
  console.log("Listening on port 3000!")
});

app.get('/', function(req, res){
  console.log(req.ip + " requesting " + req.originalUrl)

  res.sendFile(path.join(__dirname, '/index.html'));
}); 

app.get('/img.png', function(req, res){
  console.log(req.ip + " requesting " + req.originalUrl)

  res.sendFile(path.join(__dirname, '/img.png'));
}); 