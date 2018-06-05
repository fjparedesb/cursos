const request = require('request');
// const yargs = require('yargs');
// const geocode = require('./geocode/geocode');

// const argv = yargs
//     .options({
//         a: {
//             demand: true,
//             alias: 'address',
//             describe: 'Address to fetch weather',
//             string: true
//         }
//     })
//     .help()
//     .alias('help', 'h')
//     .argv;

// geocode.geocodeAddress(argv.a, (errorMessage, results) => {
//     if (errorMessage) {
//         console.log(errorMessage);
//     } else {
//         console.log(JSON.stringify(results, undefined, 2));
//     }
// });

//a98de966987ae29ef7e6608fc8c10be5


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
