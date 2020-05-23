var path = require('path');
var express = require('express');

var app = express();

var publicdir = path.join(__dirname, '../public/html/');

app.use(express.static(publicdir));

app.listen(3000);

// app.get('/help', function (req, res) {
//     res.send('<h1>Hello Express</h1>');
// });

// app.get('/about', function (req, res) {
//     res.send([{
//         firstname: 'Vaibhav'
//     },
//     {
//         lastname: 'Vashishtha'
//     }]);
// });

// app.listen(3000, function () {
//     console.log('server has started on 3000');
// })