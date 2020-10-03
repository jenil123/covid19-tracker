# GEOPLUGIN


## Features

- Get geolocation of visitor's browser
- Get geolocation by IP
- Supports the [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) API
- Automatic transforms for JSON data
- Free geolocation data provided by [http://www.geoplugin.net/](http://www.geoplugin.net/)

## Browser Support

![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/src/opera/opera_48x48.png) | ![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png) | ![IE](https://raw.github.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) |
--- | --- | --- | --- | --- | --- |
Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | 11 ✔ |


## Installing

Using npm:

```bash
$ npm install geoplugin
```

Using yarn:

```bash
$ yarn add geoplugin
```

## Example

### usage


```js
import {getGeo, getGeoByIp} from 'geoplugin';
```

Getting geolocation of user's browser.

```js
import {getGeo} from 'geoplugin';

// Get geolocation of a user's browser.
getGeo()
  .then(response => console.log(response)); // handle success
  .catch(error => console.log(error)); // handle error
  .then(() => {  }); // always executed

```

Getting geolocation by an ip address.

```js
import {getGeoByIp} from 'geoplugin';

// Get  geolocation by an ip address.
getGeoByIp('xx.xx.xx.xx')
  .then(response => console.log(response)); // handle success
  .catch(error => console.log(error)); // handle error
  .then(() => {  }); // always executed

```

## Promises

geoplugin depends on a native ES6 Promise implementation to be [supported](http://caniuse.com/promises).
If your environment doesn't support ES6 Promises, you can [polyfill](https://github.com/jakearchibald/es6-promise).


## Credits

geoplugin is a simple wrapper for REST API provided by [geoplugin.com](https://geoplugin.com). geoPlugin provides a free geolocation API in multiple different programming languages in a single API call. There is no software installation required, no API key and whether your programming language of choice be Javascript, PHP, XML, JSON, ASP, or CSV, geoPlugin has a way to simply and efficiently geo-localize your visitors.

[IP Geolocation](http://www.geoplugin.com/geolocation/) by [geoPlugin](http://www.geoplugin.com/)

This product includes GeoLite data created by MaxMind, available from [http://www.maxmind.com](http://www.maxmind.com)


## License

[MIT](LICENSE)