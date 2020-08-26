# Zip Code - City - Distance
Simple Zip Code - City distance calculator and all information you need about cities and zipcodes, including coordinates, states etc.

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
//cityDistance(zipcode1, zipcode2, unit(optional), state1(optional), state2(optional)) 
//units: 'M' for miles, 'K' for kilometers, 'N' for nautical miles
//state1:state for city1 abbreviation e.g. 'FL','fl' etc. 
//state2:state for city2 abbreviation e.g. 'FL','fl' etc. 
let cityDistance = zipCodeData.cityDistance('blue ball', 'hazardville', 'M');
```

```javascript
//result
[ { place1: { city: 'Blue Ball', state: 'PA', zipcode: '17519' },
    place2: { city: 'Hazardville', state: 'CT', zipcode: '06082' },
    distance: 191.89020635690355 },
  { place1: { city: 'Blue Ball', state: 'PA', zipcode: '17557' },
    place2: { city: 'Hazardville', state: 'CT', zipcode: '06082' },
    distance: 195.19234777104015 } 
]
```

with state parameters:

```javascript
//cityDistance(city1, city2, unit(optional), state1(optional), state2(optional)) 
//city1: name of the first city
//city2: name of the second city
//units: 'M' for miles, 'K' for kilometers, 'N' for nautical miles
//state1:state for city1 abbreviation e.g. 'FL','fl' etc. 
//state2:state for city2 abbreviation e.g. 'FL','fl' etc. 
let cityDistance = zipCodeData.cityDistance('blue ball', 'hazardville', 'M', 'PA', 'CT');
```

```javascript
//result
[ { place1: { city: 'Blue Ball', state: 'PA', zipcode: '17519' },
    place2: { city: 'Hazardville', state: 'CT', zipcode: '06082' },
    distance: 191.89020635690355 },
  { place1: { city: 'Blue Ball', state: 'PA', zipcode: '17557' },
    place2: { city: 'Hazardville', state: 'CT', zipcode: '06082' },
    distance: 195.19234777104015 } 
]
```

### Zip Code Info

```javascript
//getInfo(type, query)
//type: "zipcode" to get zip code information or "city" to get city information
//query: zipcode or city name
let zipInfo = zipCodeData.getInfo('zipcode', '98006');
```

```javascript
//result
{
    "message": "completed your request",
    "data": {
        "state": {
            "code": "53",
            "short": "WA"
        },
        "location": {
            "lat": 47.557627,
            "lon": -122.151005,
            "aLand": 27737341,
            "aWater": 1886298,
            "aLandSQMI": 10.709,
            "aWaterSQMI": 0.728
        },
        "places": {
            "Bellevue": {
                "placeCode": "5305210",
                "placeCode2": "02409821",
                "location": {
                    "lat": 47.597837,
                    "lon": -122.15648
                }
            },
            "Newcastle": {
                "placeCode": "5348645",
                "placeCode2": "02411243",
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
let zipInfo = zipCodeData.getInfo('city', 'lakemont');
```

```javascript
//result
{
    "message": "completed your request",
    "data": [
        {
            "lat": 40.465434,
            "lon": -78.391752,
            "state": {
                "code": "42",
                "short": "PA"
            },
            "zipCode": "16602"
        },
        {
            "lat": 40.465434,
            "lon": -78.391752,
            "state": {
                "code": "42",
                "short": "PA"
            },
            "zipCode": "16648"
        }
    ]
}
```


### Zip Code Radius

Get all zipcodes within a radius of this zipcode in ascending order.

```javascript
//getRadius(zipcode,radius, unit)
//zipcode: str - zipcode
//radius: int - radius you want to find zipcodes around in Miles, Kilometer or Nautical Mile
//units: char - 'M' for miles, 'K' for kilometers, 'N' for nautical miles
let zipRadius = zipCodeData.getRadius('98006', 5, 'M');
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
* get the distance between two cities by lat and lon and not by their zipcode.
* add radius functionality for cities.
* add international functionality
* add a bug tracker
* add data links.