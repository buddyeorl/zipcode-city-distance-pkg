// importing zipCode data file
let zipCodes = require('./allZipCodesFilesWithCityNames').allZipCodesFilesWithCityNames;

// importing zipCode data file
// let cities = require('./allCityData').allCityData;

// importing calculate distance functions
const calculateDistance = require('./calculateDistance').calculateDistance;

module.exports.getRadius = (zipCode, limit, unit = 'M') => {
    let results = [];

    //check if received Zip Code is valid
    if (!zipCodes[zipCode]) {
        return { error: `Zip Code: ${zipCode} not found` }
    }

    //iterate through zipcodes to calculate distance in no smart order
    for (data in zipCodes) {
        //skip if same as received zicode
        if (data === zipCode) {
            continue;
        }
        let distance = calculateDistance(zipCode, data, unit);
        if (distance <= limit) {
            results.push({
                zipcode: data,
                distance: distance
            });
        }
    }

    //ascending sort
    if (results.length > 0) {
        results.sort((a, b) => a.distance - b.distance);
    }
    console.log((results));
    return results;
}