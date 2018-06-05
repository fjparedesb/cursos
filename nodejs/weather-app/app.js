const request = require('request');
const yargs = require('yargs');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(argv.a)}`,
    json: true
}, (error, response, body) => {
        if (error) {
            console.log('No se pudo conectar a los servidores de Google');
        } else if (body.status !== "OK") {
            console.log('No se encontraron direcciones validas');
        } else {
            console.log(`Adress: ${body.results[0].formatted_address}`);
            console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
            console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
        }
});
