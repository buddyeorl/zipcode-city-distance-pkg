// importing zipCode data file
//let zipCodes = require('./allZipCodesFilesWithCityNames').allZipCodesFilesWithCityNames;
let zipCodes = require('./allZipCodesFilesWithCityNamesShort').allZipCodesFilesWithCityNamesShort;

// importing zipCode data file
//let cities = require('./allCityData').allCityData;
let cities = require('./shortCityData').shortCityData;

module.exports.getInfo = (type, query) => {

    if (type === 'city') {
        //city to lower case
        city = query.toLowerCase();
        //capitalize each word of city name
        city = city.replace(/\b\w/g, l => l.toUpperCase());
        console.log(city)
    }
    if ((type === 'city' || type === 'zipcode') && (zipCodes[query] || cities[city])) {
        console.log(type)
        return {
            message: 'completed your request',
            data: (type === 'zipcode') ? zipCodes[query] : cities[city],
        };
    } else {
        return { error: 'not valid query or zip code not found' };
    }

}