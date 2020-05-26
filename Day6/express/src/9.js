//To Understand Partials
var path = require('path');
var express = require('express');
var hbs = require('hbs');

var app = express();
var publicdir = path.join(__dirname, '../public/');
var templatesdir = path.join(__dirname, '../templates/views/');
var partialsdir = path.join(__dirname, '../partials/');

//NEXT STEP - CREATE HREF INDEX

//add express view engine
app.set('view engine','hbs');
//add templates directory
app.set('views', templatesdir);
//add partials directory
hbs.registerPartials(partialsdir);

app.use(express.static(publicdir));

app.get('', (req,res) => {
    res.render('index', {
        title: 'Test Page',
        name: 'VV'
    });
})

app.get('/about', (req,res) => {
    res.render('about', {
        title: 'About Page',
        imgsrc: '/img/google.png',
        name: 'Vaibhav'
    });
})

app.get('/help', (req,res) => {
    res.render('help', {
        title: 'Help Page',
        name: 'Vaibhav V'
    });
})

app.listen(3000, () => {
    console.log('server has started');
});