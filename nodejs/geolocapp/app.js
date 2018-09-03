const request = require('request');
const yargs = require('yargs');

const argv = yargs
.options({
    ip: {
        demand: true,
        alias: 'dirip',
        describe: 'direccion ip a buscar',
        string: true
    }
})
.help()
.alias('help', 'h')
.argv;

var dirip = argv.ip;

request({
    method: 'GET',
    rejectUnauthorized: false,
    auth : {
        user: '135484',
        pass: 'kHEmyqiPg422',
        sendImmediately: false
    },
    url: `https://geoip.maxmind.com/geoip/v2.1/country/${dirip}`,
    json: true
}, (error, response, body) => {
    if (error) {
        console.log('No se pudo consultar la direccion ip');
    } else if (response.statusCode !== 200) {
        console.log(`error: ${body.code} errordesc: ${body.error}`);
    } else if (response.statusCode === 200) {
        console.log(body.country.iso_code);
    }
});
