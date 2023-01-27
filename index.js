const {createClient} = require('@google/maps');
require('dotenv').config()

// Google Maps API anahtarını değişkenden alın
const apiKey = process.env.API_KEY;

// Google Maps API client'ı oluşturun
const mapsClient = createClient({ key: apiKey });

// Rota bulma fonksiyonu değişti.
function findPlaces(location, radius, type , apiKey, callback) {
    mapsClient.placesNearby({
        location,
        radius,
        type: type,
    }, (err, response) => {
        if (err) {
            console.error(err);
            return;
        }
        callback(response.json.results);
    });
}

module.exports = {
    findPlaces: findPlaces
};
