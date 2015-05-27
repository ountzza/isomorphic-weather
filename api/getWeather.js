var request = require('superagent');
var baseURL = 'http://api.openweathermap.org/data/2.5/weather?q=';

function getWeather(city, callback) {
    var cityURL = baseURL + city;
    request
        .get(cityURL)
        .end(function(err, res){
            // Do something
            callback(err,res);
        });
}
module.exports= getWeather;
