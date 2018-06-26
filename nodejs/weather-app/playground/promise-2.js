const request = require('request');

var geocodeAddress = (address) => {
    return new Promise((resolve, reject) => {

        request({
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}`,
            json: true
        }, (error, response, body) => {
                if (error) {
                    reject('No se pudo conectar a los servidores de Google');
                } else if (body.status !== "OK") {
                    reject('No se encontraron direcciones validas');
                } else {
                    resolve({
                        address: body.results[0].formatted_address,
                        latitude: body.results[0].geometry.location.lat,
                        longitude: body.results[0].geometry.location.lng
                    });                        
                }
        });

    });
};

geocodeAddress('77533').then((location) => {
    console.log(JSON.stringify(location, undefined, 2));
}).catch((errorMessage) => {
    console.log('error: ', errorMessage);
});