
import React from 'react';
import Router from 'react-router';
import FluxibleComponent from 'fluxible/addons/FluxibleComponent';
import app from './app';

var context = app.createContext();

Router.run(app.getComponent(),  Router.HistoryLocation ,function(Handler){
    var appHTML = React.render(
      <FluxibleComponent context={context.getComponentContext()}>
        <Handler />
      </FluxibleComponent>
    ,document.getElementById('app'));
    // let state = app.dehydrate(context);

});
