var request = require('request')
var baseURL = "http://api.openweathermap.org/data/2.5/weather"
var city = "gurgaon,in"
var APPID = "bbf58c52d561c6628c794dbf039b1280"
var httpCodeNotFound = 404
var httpCodeSuccess = 200

var weather_data = (address, callback) => {
    var url = baseURL + "?q=" + address + "&APPID=" + APPID
    request(url, (err, body) => {
        if (err) {
            console.log('not able to connect')
            callback('not able to conenct to server', undefined)
        }
        var body = body.body
        var response = JSON.parse(body)
        if (response.cod === httpCodeNotFound) {
            console.log('city not found')
            callback('provide proper city name', undefined)
        } else if (response.cod === httpCodeSuccess) {
            var detailedResponse = "Weather in " + response.name + " is " + response.weather[0].main
            console.log(detailedResponse)
            callback(undefined, detailedResponse)
        }
        //console.log(body.body)
    })
}

module.exports = {
    weather_data: "weather_data"
}