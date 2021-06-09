  
'use strict'

const normal = require('./normal-router');
const quantum = require('./quantum-router');

const express = require('express');

let app = express();



app.set('view engine', 'ejs');

app.get('/', function(request, response){
    response.render('index');
});

app.get('/normal', function(request, response){
    response.render('normal',{time: normal.calculateTime()});
});

app.get('/quantium', function(request, response){
    response.render('quantum', {time: quantum.calculateTime()});
});
app.get('/compare', function(request, response){
    response.render('compare', {quantum: quantum, normal: normal});
});



app.listen(3000,"127.0.0.1",function(){
    console.log("Open http://127.0.0.1:3000/ \n Click Ctrl+C for stop server");
});