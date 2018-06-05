const request = require('request');

var geocodeAddress = (address, callback) => {

    request({
                url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}`,
                json: true
            }, (error, response, body) => {
                    if (error) {
                        callback('No se pudo conectar a los servidores de Google');
                    } else if (body.status !== "OK") {
                        callback('No se encontraron direcciones validas');
                    } else {
                        callback(undefined, {
                            address: body.results[0].formatted_address,
                            latitude: body.results[0].geometry.location.lat,
                            longitude: body.results[0].geometry.location.lng
                        });                        
                    }
            });
            
}

module.exports.geocodeAddress = geocodeAddress;
