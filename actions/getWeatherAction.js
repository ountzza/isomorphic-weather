import getWeather from '../api/getWeather'

export default function getWeatherAction(actionContext, payload, done) {
    getWeather(payload.city,function(err,res){
        var weatherPayload = {};
        weatherPayload.city = payload.city;
        weatherPayload.data = res.body;
        actionContext.dispatch('RECEIVE_WEATHER',weatherPayload);
        done();
    });
}
