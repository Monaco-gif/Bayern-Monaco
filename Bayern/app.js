var express = require('express');
var app = express(); 
const path = require('path');

app.get('/',function(req,res){
 res.sendFile(path.join(__dirname, 'attaccanti.html')); //__dirname : Ritorna la cartella del progetto
});

app.get('/centrocampisti',function(req,res){
 res.sendFile(path.join(__dirname,'centrocampisti.html')); //__dirname : Ritorna la cartella del progetto
});

app.get('/difensori',function(req,res){
 res.sendFile(path.join(__dirname,'difensori.html')); //__dirname : Ritorna la cartella del progetto
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});