
// importing zipCode data file
//let zipCodes = require('./allZipCodesFilesWithCityNames').allZipCodesFilesWithCityNames;
let zipCodes = require('./allZipCodesFilesWithCityNamesShort').allZipCodesFilesWithCityNamesShort;

//distance between two points given it's latitude and longitude
module.exports.calculateDistance = (pointA, pointB, unit = 'M') => {
    //to store zipcode data
    let a;
    let b;

    //check if zipcode exist in zipcode object
    if (zipCodes[pointA] && zipCodes[pointB]) {
        a = zipCodes[pointA].location;
        b = zipCodes[pointB].location;
    } else if (pointA.lat && pointB.lat) {
        a = pointA;
        b = pointB;
    } else {
        return { error: !zipCodes[pointA] ? `${pointA} not found in our zipcode database` : !zipCodes[pointB] ? `${pointB} not found in our zipcode database` : 'unknown error, please try again' }
    }

    //latitude and longitude for zipcodes
    let lat1 = a.lat;
    let lon1 = a.lon;
    let lat2 = b.lat;
    let lon2 = b.lon

    if ((lat1 == lat2) && (lon1 == lon2)) {
        return 0;
    }
    else {
        let radlat1 = Math.PI * lat1 / 180;
        let radlat2 = Math.PI * lat2 / 180;
        let theta = lon1 - lon2;
        let radtheta = Math.PI * theta / 180;
        let dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        if (dist > 1) {
            dist = 1;
        }
        dist = Math.acos(dist);
        dist = dist * 180 / Math.PI;
        dist = dist * 60 * 1.1515;
        if (unit == "K") { dist = dist * 1.609344 }
        if (unit == "N") { dist = dist * 0.8684 }
        return dist;
    }
}