const geoCode = require("./utils/geoCode");
const forecast = require("./utils/forecast");

const address = process.argv[2];
//console.log(address);
if (!address) {
    return console.log("Please provide the address");
}

geoCode(address, (error, data) => {
    if (error) {
        return console.log(error);
    }
    forecast(data.latitude, data.longitude, (error, forecastData) => {
        if (error) {
            return console.log(error);
        }
        console.log(data.placeName);
        console.log("Data: ", forecastData);
    });
});