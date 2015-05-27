var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var NotFound = Router.NotFoundRoute;
var main = require('./components/main.react');
var weather = require('./components/weather.react');

var route = (
    <Route name='main' path='/' handler={main}>
        <Route name='weather' path=':city' handler={weather} />
    </Route>
);


module.exports = route;
