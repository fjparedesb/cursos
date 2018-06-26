const request = require('request');

var getWeader = (lat, long, callback) => {
    request({
        url: `https://api.darksky.net/forecast/a98de966987ae29ef7e6608fc8c10be5/${lat},${long}`,
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode === 200){
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        } else  {
            callback('No se pudo conectar al pronostico de clima');
        }
        
    });
};


module.exports.getWeader = getWeader;