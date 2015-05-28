var React = require('react');
var FluxibleMixin = require('fluxible/addons/FluxibleMixin');
var WeatherStore = require('../stores/WeatherStore');
var Router = require('react-router');



var weather = React.createClass({

    mixins: [ Router.State ],
    contextTypes: {
      getStore:React.PropTypes.func.isRequired,
      executeAction: React.PropTypes.func.isRequired
    },
    statics: {
        storeListeners: [WeatherStore]
    },
    onChange: function () {
        console.log("Hello");
    //    this.setState(this.getStore(WeatherStore).getWeatherByCity());
    },

    render: function() {
        var WeatoreStore = this.context.getStore(WeatherStore);
        var weather = WeatoreStore.getWeatherByCity(this.getParams().city);
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
