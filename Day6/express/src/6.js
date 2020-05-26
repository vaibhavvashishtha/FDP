var path = require('path');
var express = require('express');

var app = express();
var publicdir = path.join(__dirname, '../public/');
//var publicviewsdir = path.join(__dirname, '../public/views/');

app.set('view engine','hbs');
//app.set('views', publicviewsdir);

app.use(express.static(publicdir));

app.get('', (req,res) => {
    res.render('index', {
        title: 'Test Page'
    });
})

app.listen(3000, () => {
    console.log('server has started');
});