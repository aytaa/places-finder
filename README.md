[![Build Status](https://app.travis-ci.com/aytaa/places-finder.svg?branch=master)](https://app.travis-ci.com/aytaa/places-finder)

# Places Finder

This library returns information about location and radius given using Google Maps API.
It is a JavaScript module that can be used in node.js projects.

# Install
Use the following command to install the library:

 
```bash
npm i @unalayta/places-finder

```
 
## For Use

You can use the following example to use the library:

```javascript
const locationRouteLibrary = require('@unalayta/places-finder');

// Google Maps API anahtarını değişkenden alın
const apiKey = process.env.API_KEY;

const location = {lat: 37.4219999, lng: -122.0840575}
const radius = 200; // 5km

locationPlacesLibrary.findPlace(location, radius, 'electric_vehicle_charging' , apiKey , (results) => {
  console.log(results);
});
```
This code prints the lat , lng , radius and the type you want as a result.

## Sample output
```javascript
   {
    geometry: { location: [Object], viewport: [Object] },
    icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png',
        icon_background_color: '#7B9EB0',
        icon_mask_base_uri: 'https://maps.gstatic.com/mapfiles/place_api/icons/v2/generic_pinlet',
        name: 'Lobby',
        place_id: 'ChIJ6R5uZQK6j4ARZzY1tFaJJZA',
        reference: 'ChIJ6R5uZQK6j4ARZzY1tFaJJZA',
        scope: 'GOOGLE',
        types: [ 'subpremise', 'point_of_interest', 'establishment' ],
        vicinity: 'Mountain View'
},
```


## Prerequisites
You need a Google Maps API key to use this library. By creating a project in the Google Cloud Console and
You can get a key by enabling the Google Maps API.


## Licence

This library is licensed under the MIT License.
See the LICENSE file for detailed information.

[MIT](https://choosealicense.com/licenses/mit/)

