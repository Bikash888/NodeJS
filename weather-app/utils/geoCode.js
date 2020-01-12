const request = require("request");

const geoCode = (address, callback) => {
    const url =
        "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
        encodeURIComponent(address) +
        ".json?access_token=pk.eyJ1IjoiYmlrYXNoMDkiLCJhIjoiY2s1YW1tdDYxMDQybzNqbzRtaDlqNDg2cyJ9.5WD4aHRo6lsMszyGNo8iUg";

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback("Unable to Fetch data Check your connectivity");
        } else if (response.body.features.length == 0) {
            callback("Location Not found. Try another!!!");
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[0],
                longitude: response.body.features[0].center[1],
                placeName: response.body.features[0].place_name
            });
        }
    });
};
module.exports = geoCode;