//To Understand Partials
var path = require('path');
var express = require('express');
var hbs = require('hbs');
var request1 = require('./request.js');

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

app.get('/weather_data', (req,res) => {
    console.log(res);
    var city = req.query.city
    var weatherdata = request1.weather_data(req.query.city, (err, data) => {
        return data
    })
    res.render('weather', {
        title: 'Weather Page',
        name: req.query.name,
        city: req.query.city,
        weatherdata: weatherdata
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

app.get('*', (req,res) => {
    res.render('404', {
        title: '404 Page',
        name: '404 VV'
    });
})

app.listen(3000, () => {
    console.log('server has started');
});