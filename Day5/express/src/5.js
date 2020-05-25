var path = require('path');
var express = require('express');

var app = express();
var publicdir = path.join(__dirname, '../public/');

app.use(express.static(publicdir));

app.listen(3000, () => {
    console.log('server has started');
});