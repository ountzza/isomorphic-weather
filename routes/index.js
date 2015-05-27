var React = require('react');
var route = require('../route');
var Router = require('react-router');
var MainWeather = require('../components/main.react');
var express = require('express');
var router = express.Router();
var app = require('../app');
var getWeatherAction = require('../actions/getWeatherAction');
import provideContext from 'fluxible/addons/provideContext';

/* GET home page. */
router.get('/:city', function(req, res, next) {
    let context = app.createContext();

    var payload = {
        city:req.params.city
    };

    context.executeAction(getWeatherAction, payload, function () {

        Router.run(app.getComponent(), req.originalUrl ,function(Handler){

            Handler =  provideContext(Handler);
            var appHTML = React.renderToString(
                <Handler context={context.getComponentContext()}/>
            );
            // let state = app.dehydrate(context);
            res.render('index', { title: 'Express', appHTML:appHTML });
        });




        // ... send markup and state to the client ...
    });


});

module.exports = router;
