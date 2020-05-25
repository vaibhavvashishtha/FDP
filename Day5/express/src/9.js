//To Understand Partials
var path = require('path');
var express = require('express');
var hbs = require('hbs');

var app = express();
var publicdir = path.join(__dirname, '../public/');
var templatesdir = path.join(__dirname, '../templates/');
var partialsdir = path.join(__dirname, '../partials/');

app.set('view engine','hbs');
app.set('views', templatesdir);
hbs.registerPartials(partialsdir);

app.use(express.static(publicdir));

app.get('', (req,res) => {
    res.render('views/index', {
        title: 'Test Page',
        name: 'VV'
    });
})

app.get('/about', (req,res) => {
    res.render('views/about', {
        title: 'About Page',
        imgsrc: '/img/google.png'
    });
})

app.get('/help', (req,res) => {
    res.render('views/help', {
        title: 'Help Page'
    });
})

app.listen(3000, () => {
    console.log('server has started');
});