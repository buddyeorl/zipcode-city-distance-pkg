# zipcode-city-distance
Simple, zipcode/city distance calculator and all information you need about cities and zipcodes, including coordinates, states etc.

# npm install zipcode-city-distance

# require zicode-city-distance module

# how to calculate distance between zipcodes

```javascript
let zipCodeDistance = zipCodeData.zipCodeDistance('98006', '33014');
console.log(zipCodeDistance);
```

# how to calculate distance between cities

without state parameters:

```javascript
let cityDistance = zzipCodeData.cityDistance('miami lakes', 'miami');
console.log(cityDistance);
```

with unit and state parameters

```javascript
let cityDistance = zipCodeData.cityDistance('miami', 'bellevue', 'M', 'FL', 'WA');
console.log(cityDistance);
```

# how to get zipcode info including cities within that zipcode

```javascript
let zipInfo = zipCodeData.getInfo('zipcode', '98006')
console.log(zipInfo);
```

# how to get the city info, including zipcodes where city is located (some cities cover more than one zipcode) and if there are cities with the same name in different states.

```javascript
let cityInfo = zipCodeData.getInfo('city', 'lakemont')
console.log(cityInfo);
```

# todo:
* get the distance between two cities as per their lat and lon and not by their zipcode
* add radius functionality for zipcodes or cities to show zipcodes or cities within certain radius.
* add international functionality
* add a bug tracker
* add data links.