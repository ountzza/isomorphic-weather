var React = require('react');
var FluxibleMixin = require('fluxible/addons/FluxibleMixin');
var WeatherStore = require('../stores/WeatherStore');
var Router = require('react-router');
var getWeatherAction = require('../actions/getWeatherAction');


var weather = React.createClass({

    mixins: [ Router.State ],
    contextTypes: {
      getStore: React.PropTypes.func.isRequired,
      executeAction: React.PropTypes.func.isRequired
    },
    getInitialState: function() {
      return this.getStateFromStore();
    },
    onChange: function () {
      this.setState(this.getStateFromStore());
    },
    getStateFromStore: function(){
      var WeaterStore = this.context.getStore(WeatherStore);
      var state = WeaterStore.getWeatherByCity(this.getParams().city) || {};
      return state;
    },
    componentDidMount: function() {
      this.context.getStore(WeatherStore).addChangeListener(this.onChange);
      this.requestData();
    },

    componentWillUnmount: function() {
      this.context.getStore(WeatherStore).removeChangeListener(this.onChange);
    },

    componentWillReceiveProps: function(nextProps) {
      var city = this.getParams().city;
      var weather = this.context.getStore(WeatherStore).getWeatherByCity(city);
      if( weather ){
        return this.setState(weather);
      }

      this.requestData();
    },
    requestData: function(){
      this.context.executeAction(getWeatherAction, { city:this.getParams().city});
    },

    render: function() {
      if (!this.state.weather){
        return <div>Loading</div>
      }
      var temp = parseInt(this.state.main.temp) - 273.5;
      return (
          <div>
              <h1>{this.state.name}</h1>
              <p>{temp}</p>
          </div>
      );
    }

});



module.exports = weather;
