const yargs = require('yargs');
const axios = require('axios');

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

var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(argv.address)}`;

axios.get(geocodeUrl).then((response) => {
    if (response.data.status === 'ZERO_RESULTS') {
        throw new Error('Unable to find that address');
    }

    var lat = response.data.results[0].geometry.location.lat;
    var long = response.data.results[0].geometry.location.lng;

    var weatherUrl = `https://api.darksky.net/forecast/a98de966987ae29ef7e6608fc8c10be5/${lat},${long}`;
    console.log(response.data.results[0].formatted_address);
    return axios.get(weatherUrl);
}).then((response) => {
    var temperature = response.data.currently.temperature;
    var apparentTemperature = response.data.currently.apparentTemperature;
    console.log(`Actualmente es ${temperature} pero ser siente como ${apparentTemperature}.`);
}).catch((e) => {
    if (e.code === 'ENOTFOUND'){
        console.log('Unable to connect to API servers.');
    } else {
        console.log(e.message);
    }
});
