import WeatherStore from './stores/WeatherStore';
import Fluxible from 'fluxible';

let App = new Fluxible({
    component: require('./route.js')
})

App.registerStore(WeatherStore);

export default App;
