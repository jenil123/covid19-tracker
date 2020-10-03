const getGeo = () => {
  return new Promise((resolve, reject) => {
    fetch("http://www.geoplugin.net/json.gp")
      .then((response) => response.json())
      .then((data) => {
        let geo = {
          areaCode: data.geoplugin_areaCode,
          city: data.geoplugin_city,
          continentCode: data.geoplugin_continentCode,
          continentName: data.geoplugin_continentName,
          countryCode: data.geoplugin_countryCode,
          countryName: data.geoplugin_countryName,
          credit: data.geoplugin_credit,
          currencyCode: data.geoplugin_currencyCode,
          currencyConverter: data.geoplugin_currencyConverter,
          currencySymbol: data.geoplugin_currencySymbol,
          currencySymbol_UTF8: data.geoplugin_currencySymbol_UTF8,
          delay: data.geoplugin_delay,
          dmaCode: data.geoplugin_dmaCode,
          euVATrate: data.euVATrate,
          inEU: data.geoplugin_inEU,
          locationAccuracyRadius: data.geoplugin_locationAccuracyRadius,
          latitude: data.geoplugin_latitude,
          longitude: data.geoplugin_longitude,
          region: data.geoplugin_region,
          regionCode: data.geoplugin_regionCode,
          regionName: data.geoplugin_regionName,
          request: data.geoplugin_request,
          status: data.geoplugin_status,
          timezone: data.geoplugin_timezone,
        };
        resolve(geo);
      })
      .catch((err) => reject(err));
  });
};
const getGeoByIp = (ip) => {
  return new Promise((resolve, reject) => {
    fetch(`http://www.geoplugin.net/json.gp?ip=${ip}`)
      .then((response) => response.json())
      .then((data) => {
        let geo = {
          areaCode: data.geoplugin_areaCode,
          city: data.geoplugin_city,
          continentCode: data.geoplugin_continentCode,
          continentName: data.geoplugin_continentName,
          countryCode: data.geoplugin_countryCode,
          countryName: data.geoplugin_countryName,
          credit: data.geoplugin_credit,
          currencyCode: data.geoplugin_currencyCode,
          currencyConverter: data.geoplugin_currencyConverter,
          currencySymbol: data.geoplugin_currencySymbol,
          currencySymbol_UTF8: data.geoplugin_currencySymbol_UTF8,
          delay: data.geoplugin_delay,
          dmaCode: data.geoplugin_dmaCode,
          euVATrate: data.euVATrate,
          inEU: data.geoplugin_inEU,
          locationAccuracyRadius: data.geoplugin_locationAccuracyRadius,
          latitude: data.geoplugin_latitude,
          longitude: data.geoplugin_longitude,
          region: data.geoplugin_region,
          regionCode: data.geoplugin_regionCode,
          regionName: data.geoplugin_regionName,
          request: data.geoplugin_request,
          status: data.geoplugin_status,
          timezone: data.geoplugin_timezone,
        };
        resolve(geo);
      })
      .catch((err) => reject(err));
  });
};
module.exports = { getGeo, getGeoByIp };
