
import React from 'react';
import Router from 'react-router';
import FluxibleComponent from 'fluxible/addons/FluxibleComponent';
import app from './app';

var dehydratedState = window.App;

app.rehydrate(dehydratedState, function (err, context) {
    if (err) {
        throw err;
    }
    window.context = context;

    Router.run(app.getComponent(),  Router.HistoryLocation ,function(Handler){
        var appHTML = React.render(
          <FluxibleComponent context={context.getComponentContext()}>
            <Handler />
          </FluxibleComponent>
        ,document.getElementById('app'));
        // let state = app.dehydrate(context);

    });
});
