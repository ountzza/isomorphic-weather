var React = require('react');
var route = require('../route');
var Router = require('react-router');
var MainWeather = require('../components/main.react');
var express = require('express');
var router = express.Router();
var app = require('../app');
var getWeatherAction = require('../actions/getWeatherAction');
var FluxibleComponent = require('fluxible/addons/FluxibleComponent');

/* GET home page. */
router.get('/:city', function(req, res, next) {
    var context = app.createContext();

    var payload = {
        city:req.params.city
    };

    context.executeAction(getWeatherAction, payload, function () {

        // Router.run(app.getComponent(), req.originalUrl ,function(Handler){
        //     var appHTML = React.renderToString(
        //       <FluxibleComponent context={context.getComponentContext()}>
        //         <Handler />
        //       </FluxibleComponent>
        //     );
        //     // let state = app.dehydrate(context);
        //     res.render('index', { title: 'Express', appHTML:appHTML });
        // });
    });


});

module.exports = router;
