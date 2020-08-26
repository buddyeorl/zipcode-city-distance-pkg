// importing calculate distance functions
const calculateDistance = require('./helper/calculateDistance').calculateDistance;
const getAllCityDistances = require('./helper/getAllCityDistances').getAllCityDistances;
const getInfo = require('./helper/getInfo').getInfo;
const getRadius = require('./helper/getRadius').getRadius;

//console.log(zipCodeData.zipCodeDistance('98006', '33014'));
//console.log(zipCodeData.cityDistance('miami lakes', 'miami'));
//console.log(zipCodeData.cityDistance('miami', 'bellevue', 'M', 'FL', 'WA'));
//console.log(zipCodeData.getInfo('zipcode', '98006'));
//console.log(zipCodeData.getRadius('98006', 50, 'M'));

//3 parameters: (zipcode1, zipcode2, optional:units), valid units: 'M','K','N' 
exports.zipCodeDistance = calculateDistance;

//5 parameters, (city1, city2, optional:units, optional:stateForCity1, optional:stateForCity2)
exports.cityDistance = getAllCityDistances;

//2 parameters, (type, query), type 'zipcode' or 'city', query zipcode or city name
exports.getInfo = getInfo;

//3 parameters, (zipcode, radius, unit), radius is the limit(inclusive) you want to scan on in the unit you set, valid units: 'M','K','N' 
exports.getRadius = getRadius;