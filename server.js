var express = require('express');
var app = express();
var compression=require('compression');
//var http=require('http');
app.use(compression());
var routes=require('./routes/routes')(app);
console.log(routes);
app.listen(8082);
