// importing zipCode data file
//let zipCodes = require('./allZipCodesFilesWithCityNames').allZipCodesFilesWithCityNames;
let zipCodes = require('./allZipCodesFilesWithCityNamesShort').allZipCodesFilesWithCityNamesShort;

// importing zipCode data file
// let cities = require('./allCityData').allCityData;
//let cities = require('./shortCityData').shortCityData;
//let getAllCityDistances = require('./getAllCityDistances.js').getAllCityDistancesShort;

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
    //console.log((results));
    return results;
}


// module.exports.getCityRadius = (city, limit, unit = 'M') => {
//     let results = [];
//     console.log(city);
//     console.log(getAllCityDistances(city, 'bellevue'));

//     //check if received City is valid
//     if (!cities[city]) {
//         return { error: `City: ${city} not found` }
//     }



//     //iterate through cities to calculate distance in no smart order
//     for (data in cities) {
//         //skip if same as received zicode
//         if (data === zipCode) {
//             continue;
//         }
//         let distance = calculateDistance(city, data, unit);
//         if (distance <= limit) {
//             results.push({
//                 zipcode: data,
//                 distance: distance
//             });
//         }
//     }

//     //ascending sort
//     if (results.length > 0) {
//         results.sort((a, b) => a.distance - b.distance);
//     }
//     //console.log((results));
//     return results;
// }