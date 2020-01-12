const request = require("request");

const forecast = (latitude, longitude, callback) => {
    const url =
        "https://api.darksky.net/forecast/ba8af10617528ea86ff807e5288ffd61/" +
        encodeURIComponent(longitude) +
        "," +
        encodeURIComponent(latitude) +
        "?units=si&lang=hi";
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback(
                "Unable to connect to server,check your Connectivity!!!",
                undefined
            );
        } else if (response.body.error) {
            callback("Location Not found!!!");
        } else {
            callback(undefined, {
                // location: response.body.timezone,
                temperature: response.body.currently.temperature,
                rain: response.body.currently.precipProbability,
                summary: response.body.currently.summary,
                temperatureMax: response.body.daily.data[0].temperatureMax,
                temperatureMin: response.body.daily.data[0].temperatureMin
            });
        }
    });
};
module.exports = forecast;