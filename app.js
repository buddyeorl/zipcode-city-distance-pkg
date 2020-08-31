// importing calculate distance functions
const calculateDistance = require('./helper/calculateDistance').calculateDistance;
//const getAllCityDistances = require('./helper/getAllCityDistances').getAllCityDistances;
const getAllCityDistances = require('./helper/getAllCityDistances').getAllCityDistancesShort;
const getInfo = require('./helper/getInfo').getInfo;
const getRadius = require('./helper/getRadius').getRadius;

//test
//const getCityRadius = require('./helper/getRadius').getCityRadius;

//console.log(zipCodeData.zipCodeDistance('98006', '33014'));
//console.log(zipCodeData.cityDistance('miami lakes', 'miami'));
//console.log(zipCodeData.cityDistance('miami', 'bellevue', 'M', 'FL', 'WA'));
//console.log(zipCodeData.getInfo('zipcode', '98006'));
//console.log(zipCodeData.getRadius('98006', 50, 'M'));

//console.log(getRadius('98006', 5, 'M')); //passed
//console.log(getCityRadius('miami', 5, 'M')); //didnt pass
//console.log(calculateDistance('', '98006', 'M')); // passed
//console.log(getAllCityDistances('miami lakes', 'los angeles', 'M', 'FL', 'TX')); // didn't pass
//console.log(getInfo('city', 'miami')); //passed
//console.log(getInfo('zipcode', '98006').data.places); //passed

//3 parameters: (zipcode1, zipcode2, optional:units), valid units: 'M','K','N' 
exports.zipCodeDistance = calculateDistance;

//5 parameters, (city1, city2, optional:units, optional:stateForCity1, optional:stateForCity2)
exports.cityDistance = getAllCityDistances;

//2 parameters, (type, query), type 'zipcode' or 'city', query zipcode or city name
exports.getInfo = getInfo;

//3 parameters, (zipcode, radius, unit), radius is the limit(inclusive) you want to scan on in the unit you set, valid units: 'M','K','N' 
exports.getRadius = getRadius;