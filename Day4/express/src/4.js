var express = require('express');

var app = express();

app.get('/help', function (req, res) {
    res.send('<h1>Hello Express</h1>');
});

app.get('/about', function (req, res) {
    res.send([{
        firstname: 'Vaibhav'
    },
    {
        lastname: 'Vashishtha'
    }]);
});

app.listen(3000, function () {
    console.log('server has started on 3000');
})