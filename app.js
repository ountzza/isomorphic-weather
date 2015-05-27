var WeatherStore = require('./stores/WeatherStore');
import Fluxible from 'fluxible';

import provideContext from 'fluxible/addons/provideContext';
let App = new Fluxible({
    component: require('./route.js')
})

App.registerStore(WeatherStore);

export default App;
