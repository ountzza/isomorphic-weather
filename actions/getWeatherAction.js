import getWeather from '../api/getWeather'

export default function myAction(actionContext, payload, done) {
    getWeather(payload.city,function(err,res){
        // console.log(res.body);
        var weatherPayload = {};
        weatherPayload.city = payload.city;
        weatherPayload.data = res.body;
        actionContext.dispatch('RECEIVE_WEATHER',weatherPayload);
        done();
    });
}
