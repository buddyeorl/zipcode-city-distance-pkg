// importing zipCode data file
let zipCodes = require('./allZipCodesFilesWithCityNames').allZipCodesFilesWithCityNames;

// importing zipCode data file
let cities = require('./allCityData').allCityData;

// importing calculate distance functions
const calculateDistance = require('./calculateDistance').calculateDistance;

//get distances between cities
module.exports.getAllCityDistances = (pointA, pointB, unit = 'M', stateA = null, stateB = null) => {
    let results = [];
    //city1 and city2 will be standarized before being used
    let city1;
    let city2;
    let state1;
    let state2;
    if (pointA && pointB) {
        //city to lower case
        city1 = pointA.toLowerCase();
        //capitalize each word of city name
        city1 = city1.replace(/\b\w/g, l => l.toUpperCase()).trim();

        //city to lower case
        city2 = pointB.toLowerCase();
        //capitalize each word of city name
        city2 = city2.replace(/\b\w/g, l => l.toUpperCase()).trim();
    }

    if (stateA && stateB) {
        state1 = stateA.toUpperCase();
        state2 = stateB.toUpperCase();
    }

    if (pointA && pointB && unit && cities[city1] && cities[city2]) {
        let cityAData = cities[city1];
        let cityBData = cities[city2];
        //if state1 and state2 was received in the queries, then only results containing this parameters will be shown

        if (state1 && state2) {
            for (cityA of cityAData) {
                if (state1 === cityA.state.short) {
                    for (cityB of cityBData) {
                        if (state2 === cityB.state.short) {
                            results.push({
                                place1: {
                                    city: city1,
                                    state: cityA.state.short,
                                    zipcode: cityA.zipCode
                                },
                                place2: {
                                    city: city2,
                                    state: cityB.state.short,
                                    zipcode: cityB.zipCode
                                },
                                distance: calculateDistance(
                                    cityA.zipCode,
                                    cityB.zipCode,
                                    unit
                                )
                            })
                        }
                    }

                }
            }
        } else {
            for (cityA of cityAData) {
                for (cityB of cityBData) {
                    results.push({
                        place1: {
                            city: city1,
                            state: cityA.state.short,
                            zipcode: cityA.zipCode
                        },
                        place2: {
                            city: city2,
                            state: cityB.state.short,
                            zipcode: cityB.zipCode
                        },
                        distance: calculateDistance(
                            cityA.zipCode,
                            cityB.zipCode,
                            unit
                        )
                    })
                }
            }
        }
    } else {
        return { error: 'not valid query or city not found' }
    }
    return results;
}