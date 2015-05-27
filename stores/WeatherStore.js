import BaseStore from 'fluxible/addons/BaseStore';

class WeatherStore extends BaseStore {
    constructor (dispatcher) {
        super(dispatcher);
        this.cityToWeather = {};
    }

    handleReceiveWeather (payload) {
        var city = payload.city;
        var data = payload.data;
        this.cityToWeather[city]=data;
        this.emitChange();
    }

    getWeatherByCity(city){
        return this.cityToWeather[city];
    }

    // For sending state to the client
    dehydrate () {
        return {
            cityToWeather: this.cityToWeather
        }
    }

    // For rehydrating server state
    rehydrate (state) {
        this.cityToWeather = state.cityToWeather
    }
}

WeatherStore.storeName = 'WeatherStore';
WeatherStore.handlers = {
    'RECEIVE_WEATHER': 'handleReceiveWeather'
};

export default WeatherStore;
