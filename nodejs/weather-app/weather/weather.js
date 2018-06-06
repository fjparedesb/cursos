const request = require('request');

var getWeader = () => {
    request({
        url: 'https://api.darksky.net/forecast/a98de966987ae29ef7e6608fc8c10be5/39.9396284,-75.18663959999999',
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode === 200){
            console.log(body.currently.temperature);
        } else  {
            console.log('No se pudo conectar al pronostico de clima');
        }
        
    });
};


module.exports.getWeader = getWeader;