var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World 3!');
});

var server = app.listen(process.env.PORT, function() {
    console.log('Express is listening to http://localhost:'+process.env.PORT);
});