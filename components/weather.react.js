var React = require('react');
var FluxibleMixin = require('fluxible/addons/FluxibleMixin');
var WeatherStore = require('../stores/WeatherStore');
var Router = require('react-router');


var weather = React.createClass({

    mixins: [FluxibleMixin, Router.State ],
    statics: {
        storeListeners: [WeatherStore]
    },
    onChange: function () {
        console.log("Hello");
    //    this.setState(this.getStore(WeatherStore).getWeatherByCity());
    },

    render: function() {
        // console.log(this.getStore(WeatherStore).getWeatherByCity('paris'));
        var weather = this.getStore(WeatherStore).getWeatherByCity(this.getParams().city);
        var temp = parseInt(weather.main.temp) - 273.5;
        return (
            <div>
                <h1>{weather.name}</h1>
                <p>{temp}</p>
            </div>
        );
    }

});



module.exports = weather;
