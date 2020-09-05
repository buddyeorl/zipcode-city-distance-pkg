# US Zip Codes / Cities - Distance / Info / Radius

Simple package for all US Zip Codes and Cities, get the distance between Zip Codes or Cities, get relevant information such as coordinates, cities within Zip Codes, Zip Codes covered by cities, states etc, get all the Zip Codes within certain radius and more.

### Install

```
npm i zipcode-city-distance
```

### Usage

```javascript
const zipCodeData = require('zipcode-city-distance');
```

### Zip Code Distance

```javascript
//zipCodeDistance(zipcode1, zipcode2, unit(optional))
//valid units: 'M' for miles, 'K' for kilometers, 'N' for nautical miles
let zipCodeDistance = zipCodeData.zipCodeDistance('98006', '33014','M');
```

```javascript
//result
2710.6371929140273
```

### City Distance

without state parameters:

```javascript
//cityDistance(city1, city2, unit(optional), state1(optional), state2(optional)) 
//units: 'M' for miles, 'K' for kilometers, 'N' for nautical miles
//state1:state for city1 abbreviation e.g. 'FL','fl' etc. 
//state2:state for city2 abbreviation e.g. 'FL','fl' etc. 
let cityDistance = zipCodeData.cityDistance('miami lakes', 'los angeles', 'M'); //distance between Miami Lakes  and Los Angeles 
```

```javascript
//result array with 2 objects because there are two cities named "los angeles" one in Texas and one in California.
[ { place1: { city: 'Miami Lakes', state: 'FL', zipcode: [ '33014', '33016', '33018' ] },
    place2: { city: 'Los Angeles', state: 'TX', zipcode: [ '78580' ] },
    distance: 1082.6193359144372 },
  { place1: { city: 'Miami Lakes', state: 'FL', zipcode: [ '33014', '33016', '33018' ] },
    place2: { city: 'Los Angeles', state: 'CA', zipcode: [ '90001','90002', ... more zipcodes here ... ,'91607','91608'] }, //total 133 zipcodes for Los Angeles, CA
    distance: 2333.4166337302295 } ]
```

with state parameters:

```javascript
//cityDistance(city1, city2, unit(optional), state1(optional), state2(optional)) 
//city1: name of the first city
//city2: name of the second city
//units: 'M' for miles, 'K' for kilometers, 'N' for nautical miles
//state1:state for city1 abbreviation e.g. 'FL','fl' etc. 
//state2:state for city2 abbreviation e.g. 'FL','fl' etc. 
let cityDistance = zipCodeData.cityDistance('miami lakes', 'los angeles', 'M', 'FL', 'TX'); //distance between Miami Lakes, FL and Los Angeles, TX
```

```javascript
//result array with 1 object as we specified city name and state.
[ { place1: { city: 'Miami Lakes', state: 'FL', zipcode: [ '33014', '33016', '33018' ] },
    place2: { city: 'Los Angeles', state: 'TX', zipcode: [ '78580' ] },
    distance: 1082.6193359144372 } ]
```

### Zip Code Info

```javascript
//getInfo(type, query)
//type: "zipcode" to get zip code information or "city" to get city information
//query: zipcode or city name
let zipInfo = zipCodeData.getInfo('zipcode', '98006');
```

```javascript
//result with zipcode information including cities within the zipcode
{
    "message": "completed your request",
    "data": {
        "state":"WA",
        "location": {
            "lat": 47.557627,
            "lon": -122.151005,
        },
        "places": {
            "Bellevue": {
                "location": {
                    "lat": 47.597837,
                    "lon": -122.15648
                }
            },
            "Newcastle": {
                "location": {
                    "lat": 47.531664,
                    "lon": -122.165566
                }
            }
        }
    }
}
```

### City Info

```javascript
//getInfo(type, query)
//type: "zipcode" to get zip code information or "city" to get city information
//query: zipcode or city name
let zipInfo = zipCodeData.getInfo('city', 'lakemont'); // this will also handle cities with same name in different state, like Miami which exists in FL, MO,OK,TX etc
```

```javascript
//result, property data is an array of cities that match query.
{ message: 'completed your request',
  data:
   [ {  lat: 40.465434, 
        lon: -78.391752, 
        state: 'PA', 
        zipCode: ["16602","16648"] 
    } ] 
}
```


### Zip Code Radius

Get all zipcodes within a radius of this zipcode in ascending order.

```javascript
//getRadius(zipcode,radius, unit)
//zipcode: str - zipcode
//radius: int - radius you want to find zipcodes around in Miles, Kilometer or Nautical Mile
//units: char - 'M' for miles, 'K' for kilometers, 'N'  for nautical miles
//let zipRadius = zipCodeData.getRadius('98006', 5, 'M');
```

```javascript
//result
[ { zipcode: '98056', distance: 3.613853931442833 },
  { zipcode: '98040', distance: 3.765403793043263 },
  { zipcode: '98007', distance: 3.89502983948142 },
  { zipcode: '98005', distance: 4.018115501775772 },
  { zipcode: '98008', distance: 4.099796739847524 },
  { zipcode: '98059', distance: 4.449603369443228 },
  { zipcode: '98004', distance: 4.899415818312604 } ]
```

### TODO:
* add radius functionality for cities.
* add international functionality
* add a bug tracker
* add data links.

Like it here:

[https://github.com/buddyeorl/zipcode-city-distance-pkg](https://github.com/buddyeorl/zipcode-city-distance-pkg)


